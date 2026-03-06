import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// ── Page-aware context: maps doc paths to their topic
const PAGE_CONTEXT = {
  '/docs/frontend/overview':            'Front-end Overview — the Atlas platform customer-facing layer, markets in scope (Japan, Australia), audience roles.',
  '/docs/frontend/customer-journey':    'Customer Journey — the 6-step ordering flow, loyalty & promotions per market (Japan points-based, Australia voucher-based), market configuration matrix.',
  '/docs/frontend/order-channels':      'Order Channels — Dine-in, Delivery, Takeaway configuration per restaurant, channel capabilities, Japan and Australia channel status.',
  '/docs/frontend/market-configurations': 'Market Configurations — feature flag architecture, what can be configured per market, Japan and Australia current settings, how to request changes.',
  '/docs/admin/overview':               'Admin Portal Overview — what the Yum Commerce Admin Portal does, access levels (Franchisee Admin, Regional/BMU Admin, Read-only), portal URLs per market.',
  '/docs/admin/restaurant-profile':     'Restaurant Profile Setup — editing name, address, hours, public holiday overrides, temporary closure, GPS coordinates, field edit restrictions.',
  '/docs/admin/menu-management':        'Menu Management — activating/deactivating items, updating pricing, channel-specific menus, Japan JPY pricing with tax, Australia AUD with GST, delivery pricing.',
  '/docs/admin/users-permissions':      'Users & Permissions — role-based access model, adding/removing users, audit log, franchisee vs regional admin permissions.',
  '/docs/playbooks/onboarding':         'Onboarding a New Restaurant — 4-phase playbook: platform setup, menu setup, access setup, go-live. 12-step checklist.',
  '/docs/playbooks/troubleshooting':    'Troubleshooting & Escalation — common issues and fixes, escalation path, severity levels (P1–P4), JIRA Service Desk, emergency Slack channel.',
  '/docs/playbooks/runbook':            'Platform Runbook — daily opening/closing checklists, weekly/monthly tasks, Japan-specific operations (loyalty, aggregator pause), Australia-specific operations.',
};

const SUGGESTED_QUESTIONS = {
  '/docs/frontend/customer-journey':    ['How does loyalty work in Japan?', 'Can customers use a promo code and loyalty together?', 'What happens if a customer goes offline at checkout?'],
  '/docs/frontend/order-channels':      ['How do I disable delivery for one restaurant?', 'What aggregators are integrated in Australia?', 'Can Dine-in have different hours to Delivery?'],
  '/docs/admin/restaurant-profile':     ['How do I set public holiday hours?', 'How quickly do profile changes appear in the app?', 'Who can change GPS coordinates?'],
  '/docs/admin/menu-management':        ['How do I make an item delivery-only?', 'How quickly do price changes apply?', 'What happens if I deactivate an item in a combo?'],
  '/docs/playbooks/onboarding':         ['What is the full onboarding checklist?', 'Who sets the GPS coordinates?', 'How do I create a franchisee admin account?'],
  '/docs/playbooks/troubleshooting':    ['What is a P1 issue?', 'How do I escalate a production outage?', 'Customer can\'t complete checkout — what do I check?'],
  '/docs/playbooks/runbook':            ['What should I check at opening every day?', 'How do I pause Uber Eats orders in Japan?', 'How often should I review user access?'],
};

const DEFAULT_SUGGESTIONS = [
  'What markets does Atlas support?',
  'How do I onboard a new restaurant?',
  'What can a franchisee admin do?',
];

const SYSTEM_PROMPT = `You are the Atlas Assistant — the AI guide for the KFC Atlas Platform knowledge portal. You help KFC franchisees, restaurant managers, and regional office staff understand and operate the Atlas Platform across Japan and Australia.

Your personality:
- Friendly, clear, and direct — not corporate-speak
- You speak to people who are busy running restaurants, not reading tech docs
- You give practical, actionable answers
- You are concise — short paragraphs, not walls of text
- When steps are involved, use numbered lists

What you know:
- The KFC Atlas Platform is the digital commerce platform for KFC across Asia Pacific
- Markets currently live: Japan (Nihon KFC Holdings) and Australia (Collins Foods)
- The platform has a customer-facing front-end (ordering) and the Yum Commerce Admin Portal (operations)
- There are three user roles: Franchisee Admin, Regional/BMU Admin, Read-only
- Key features: restaurant profile management, menu management, order channels (Dine-in, Delivery, Takeaway), market configurations, loyalty (Japan: points-based, Australia: vouchers)
- Escalation path: Franchisee → Regional/BMU Admin → Atlas Platform Support (JIRA) → Yum! Brands Tech Emergency

Rules:
- If you don't know something, say so clearly and suggest they contact their regional office or raise a JIRA ticket
- Never make up feature names, portal URLs, or process steps
- Keep responses under 200 words unless a step-by-step process genuinely requires more
- Do not refer to yourself as Claude — you are the Atlas Assistant`;

export default function AtlasChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const location = useLocation();
  

  const currentPath = location.pathname.replace(/\/$/, '');
  const pageContext = PAGE_CONTEXT[currentPath] || null;
  const suggestions = SUGGESTED_QUESTIONS[currentPath] || DEFAULT_SUGGESTIONS;

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimised && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimised]);

  // Reset to greeting when page changes
  useEffect(() => {
    setMessages([]);
  }, [currentPath]);

  const getWelcomeMessage = () => {
    if (pageContext) {
      return `Hi! I'm the Atlas Assistant. I can see you're reading about **${pageContext.split('—')[0].trim()}**.\n\nWhat would you like to know?`;
    }
    return `Hi! I'm the Atlas Assistant — your guide to the KFC Atlas Platform.\n\nAsk me anything about operating the platform, configuring your restaurant, or navigating the Admin Portal.`;
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimised(false);
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: getWelcomeMessage() }]);
    }
  };

  const handleSend = async (text) => {
    const userMessage = (text || input).trim();
    if (!userMessage || isLoading) return;

    setInput('');
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Build clean API messages — skip initial assistant welcome, inject page context
      const apiMessages = [];
      for (const m of newMessages) {
        if (apiMessages.length === 0 && m.role === 'assistant') continue;
        apiMessages.push({ role: m.role, content: m.content });
      }
      if (pageContext && apiMessages.length > 0) {
        const last = apiMessages[apiMessages.length - 1];
        if (last.role === 'user') {
          last.content = '[Context: ' + pageContext + ']\n\n' + last.content;
        }
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY || ''
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.content?.[0]?.text || 'Sorry, I couldn\'t get a response. Please try again.';

      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (err) {
      console.error('Atlas Chat error:', err);
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please check your connection and try again, or raise a ticket via the JIRA Service Desk.',
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Render markdown-lite (bold + line breaks)
  const renderContent = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part.split('\n').map((line, j) => (
        <React.Fragment key={`${i}-${j}`}>
          {j > 0 && <br />}
          {line}
        </React.Fragment>
      ));
    });
  };

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          title="Ask the Atlas Assistant"
          style={{
            position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
            width: 56, height: 56, borderRadius: '50%',
            background: '#E4002B', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(228,0,43,0.45), 0 2px 8px rgba(0,0,0,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(228,0,43,0.55), 0 3px 12px rgba(0,0,0,0.25)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(228,0,43,0.45), 0 2px 8px rgba(0,0,0,0.2)';
          }}
        >
          {/* Chat bubble icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      )}

      {/* ── CHAT WINDOW ── */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
          width: 380, maxWidth: 'calc(100vw - 40px)',
          background: 'white',
          borderRadius: 14,
          boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.1)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.08)',
          height: isMinimised ? 'auto' : 520,
          maxHeight: 'calc(100vh - 56px)',
          fontFamily: "'DM Sans', system-ui, sans-serif",
          transition: 'height 0.2s ease',
        }}>

          {/* Header */}
          <div style={{
            background: '#13100C',
            padding: '14px 16px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: '#E4002B',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.2 }}>Atlas Assistant</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem' }}>Online</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                onClick={() => setIsMinimised(!isMinimised)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: '4px 6px', borderRadius: 4, fontSize: '1rem', lineHeight: 1 }}
                title={isMinimised ? 'Expand' : 'Minimise'}
              >
                {isMinimised ? '▲' : '▼'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: '4px 6px', borderRadius: 4, fontSize: '1.1rem', lineHeight: 1 }}
                title="Close"
              >
                ×
              </button>
            </div>
          </div>

          {!isMinimised && (
            <>
              {/* Messages */}
              <div style={{
                flex: 1, overflowY: 'auto', padding: '16px 14px',
                display: 'flex', flexDirection: 'column', gap: 12,
                background: '#faf8f5',
              }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  }}>
                    <div style={{
                      maxWidth: '85%',
                      padding: '10px 13px',
                      borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                      background: msg.role === 'user' ? '#E4002B' : 'white',
                      color: msg.role === 'user' ? 'white' : '#2a2018',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                      border: msg.role === 'assistant' ? '1px solid #ece6dc' : 'none',
                    }}>
                      {renderContent(msg.content)}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{
                      padding: '10px 14px', borderRadius: '14px 14px 14px 4px',
                      background: 'white', border: '1px solid #ece6dc',
                      display: 'flex', gap: 4, alignItems: 'center',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    }}>
                      {[0, 1, 2].map(i => (
                        <div key={i} style={{
                          width: 7, height: 7, borderRadius: '50%', background: '#E4002B',
                          animation: 'atlasTyping 1.2s infinite',
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.4,
                        }} />
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions (shown only at start) */}
              {messages.length <= 1 && (
                <div style={{
                  padding: '8px 14px 4px',
                  borderTop: '1px solid #ece6dc',
                  background: 'white',
                  display: 'flex', flexWrap: 'wrap', gap: 6,
                }}>
                  {suggestions.map((q, i) => (
                    <button key={i} onClick={() => handleSend(q)} style={{
                      background: 'rgba(228,0,43,0.06)', border: '1px solid rgba(228,0,43,0.18)',
                      borderRadius: 20, padding: '5px 11px', fontSize: '0.75rem',
                      color: '#c20025', cursor: 'pointer', fontFamily: 'inherit',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(228,0,43,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(228,0,43,0.06)'}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div style={{
                padding: '10px 14px 14px',
                borderTop: '1px solid #ece6dc',
                background: 'white',
                display: 'flex', gap: 8, alignItems: 'flex-end',
                flexShrink: 0,
              }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  rows={1}
                  style={{
                    flex: 1, border: '1.5px solid #ece6dc', borderRadius: 8,
                    padding: '9px 12px', fontSize: '0.875rem', fontFamily: 'inherit',
                    resize: 'none', outline: 'none', lineHeight: 1.5,
                    color: '#2a2018', background: '#faf8f5',
                    transition: 'border-color 0.15s',
                    maxHeight: 80, overflowY: 'auto',
                  }}
                  onFocus={e => e.target.style.borderColor = '#E4002B'}
                  onBlur={e => e.target.style.borderColor = '#ece6dc'}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  style={{
                    width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                    background: input.trim() && !isLoading ? '#E4002B' : '#ddd',
                    border: 'none', cursor: input.trim() && !isLoading ? 'pointer' : 'default',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.15s',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Typing animation keyframes */}
      <style>{`
        @keyframes atlasTyping {
          0%, 60%, 100% { opacity: 0.4; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}
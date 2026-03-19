import React from 'react';
import {createRoot} from 'react-dom/client';
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import TurndownService from 'turndown';
import './styles.css';

const COPY = {
  en: {
    eyebrow: 'Local-only Tiptap prototype',
    title: 'A prettier side-by-side editor comparison',
    subtitle:
      'This isolated app compares the current lightweight studio editing pattern with a styled Tiptap writing experience and a shared Markdown handoff.',
    localeLabel: 'Locale',
    templateLabel: 'Template',
    legacyTitle: 'Current studio feel',
    legacyBody:
      'Browser-command editing with raw HTML. Lightweight, but it starts to feel brittle when you want something polished.',
    modernTitle: 'Tiptap direction',
    modernBody:
      'A real editor framework with better structure, better keyboard behavior, and much more room to make the experience feel intentional.',
    markdownTitle: 'Markdown handoff',
    metadataTitle: 'Why this direction is stronger',
    metadataItems: [
      'The UI can be polished without fighting browser editing quirks.',
      'EN and JP labels can localize without changing the core editor model.',
      'Markdown can stay the output contract while Tiptap owns the writing experience.',
    ],
    noteTitle: 'Prototype scope',
    noteBody:
      'This is local only. There is no Docusaurus wiring, no persistence, and no image upload backend yet.',
    templates: {
      howto: 'How-to',
      runbook: 'Runbook',
      faq: 'FAQ',
    },
    toolbar: {
      paragraph: 'Paragraph',
      h1: 'Heading 1',
      h2: 'Heading 2',
      h3: 'Heading 3',
      style: 'Style',
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      bullets: 'Bullets',
      numbered: 'Numbered',
      quote: 'Quote',
      code: 'Code',
      link: 'Link',
      image: 'Image',
      table: 'Table',
      rule: 'Rule',
    },
    prompts: {
      link: 'Enter a link URL',
      image: 'Enter an image URL',
      code: 'Paste the code block content',
    },
  },
  ja: {
    eyebrow: 'ローカル専用 Tiptap プロトタイプ',
    title: 'より洗練されたエディタ比較',
    subtitle:
      '現在の軽量スタジオ方式と、見た目と操作性を整えた Tiptap 体験を横並びで比較し、Markdown への引き渡しも確認できます。',
    localeLabel: 'ロケール',
    templateLabel: 'テンプレート',
    legacyTitle: '現在のスタジオ感',
    legacyBody:
      'ブラウザコマンドと生 HTML に頼る軽量方式です。最小構成ではありますが、磨き込んだ体験を作るには限界があります。',
    modernTitle: 'Tiptap 方向',
    modernBody:
      '本格的なエディタ基盤として、構造の安定性、キーボード操作、見た目の作り込み余地が大きく改善されます。',
    markdownTitle: 'Markdown 出力',
    metadataTitle: 'この方向が強い理由',
    metadataItems: [
      'ブラウザ編集の癖に引っ張られず、UI をきれいに作り込めます。',
      '英語と日本語のラベルは、コアのエディタモデルを変えずに切り替えられます。',
      '最終出力を Markdown のまま維持しながら、執筆体験だけを改善できます。',
    ],
    noteTitle: 'プロトタイプ範囲',
    noteBody:
      'これはローカル専用です。Docusaurus 連携、永続化、画像アップロード基盤はまだ含めていません。',
    templates: {
      howto: '操作ガイド',
      runbook: 'ランブック',
      faq: 'FAQ',
    },
    toolbar: {
      paragraph: '段落',
      h1: '見出し 1',
      h2: '見出し 2',
      h3: '見出し 3',
      style: 'スタイル',
      bold: '太字',
      italic: '斜体',
      underline: '下線',
      bullets: '箇条書き',
      numbered: '番号付き',
      quote: '引用',
      code: 'コード',
      link: 'リンク',
      image: '画像',
      table: '表',
      rule: '区切り線',
    },
    prompts: {
      link: 'リンク URL を入力してください',
      image: '画像 URL を入力してください',
      code: 'コードブロック内容を貼り付けてください',
    },
  },
};

const TEMPLATE_HTML = {
  howto: {
    en: `
      <h1>How to update a promotion</h1>
      <p>Use this guide when you need to change an active promotion safely.</p>
      <h2>Before you begin</h2>
      <ul>
        <li>Confirm the promo ID</li>
        <li>Check the market and date window</li>
      </ul>
      <h2>Steps</h2>
      <ol>
        <li>Open the promotion detail page.</li>
        <li>Update the fields that changed.</li>
        <li>Save and validate the storefront preview.</li>
      </ol>
    `,
    ja: `
      <h1>プロモーションを更新する方法</h1>
      <p>有効中のプロモーションを安全に変更するときに使うガイドです。</p>
      <h2>事前確認</h2>
      <ul>
        <li>プロモ ID を確認する</li>
        <li>対象市場と適用期間を確認する</li>
      </ul>
      <h2>手順</h2>
      <ol>
        <li>プロモーション詳細ページを開く。</li>
        <li>変更が必要な項目を更新する。</li>
        <li>保存してストアフロントのプレビューを確認する。</li>
      </ol>
    `,
  },
  runbook: {
    en: `
      <h1>Runbook: image publish incident</h1>
      <p>Use this when article images fail after a content release.</p>
      <h2>Trigger</h2>
      <p>Images render as broken links in one or more locales.</p>
      <h2>Actions</h2>
      <ol>
        <li>Check whether the asset URL is reachable.</li>
        <li>Confirm the image was attached to the publishing request.</li>
        <li>Re-publish after the asset path is corrected.</li>
      </ol>
      <blockquote>Escalate if the same path fails across markets.</blockquote>
    `,
    ja: `
      <h1>ランブック: 画像公開インシデント</h1>
      <p>コンテンツ公開後に記事画像が表示されない場合に使用します。</p>
      <h2>トリガー</h2>
      <p>1 つ以上のロケールで画像がリンク切れとして表示される。</p>
      <h2>対応</h2>
      <ol>
        <li>画像 URL に到達できるか確認する。</li>
        <li>公開依頼に画像が添付されていたか確認する。</li>
        <li>画像パス修正後に再公開する。</li>
      </ol>
      <blockquote>同じパス障害が複数市場で発生している場合はエスカレーションする。</blockquote>
    `,
  },
  faq: {
    en: `
      <h1>FAQ</h1>
      <h2>Can we still export Markdown?</h2>
      <p>Yes. The editor can own the writing experience while export stays controlled.</p>
      <h2>Will EN and JP both work?</h2>
      <p>Yes. Toolbar labels and starter content can localize without changing the framework choice.</p>
    `,
    ja: `
      <h1>FAQ</h1>
      <h2>Markdown は引き続き出力できますか？</h2>
      <p>はい。執筆体験はエディタが担い、エクスポートは別途制御できます。</p>
      <h2>英語と日本語の両方で使えますか？</h2>
      <p>はい。ツールバー表示と初期テンプレートは、フレームワークを変えずにローカライズできます。</p>
    `,
  },
};

const turndown = new TurndownService({bulletListMarker: '-', codeBlockStyle: 'fenced'});

function htmlToMarkdown(html) {
  return turndown.turndown(html || '').trim();
}

function ChipGroup({label, options, value, onChange}) {
  return (
    <div className="chipSection">
      <span className="chipLabel">{label}</span>
      <div className="chipGroup">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`chip ${value === option.value ? 'chipActive' : ''}`}
            onClick={() => onChange(option.value)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function LegacyEditor({html, onChange, copy}) {
  const toolbarAction = (command, value = null) => {
    document.execCommand(command, false, value);
    onChange(document.getElementById('legacy-editor-surface').innerHTML);
  };

  return (
    <div className="editorCard">
      <div className="toolbar">
        <button type="button" onClick={() => toolbarAction('formatBlock', 'p')}>{copy.paragraph}</button>
        <button type="button" onClick={() => toolbarAction('formatBlock', 'h1')}>{copy.h1}</button>
        <button type="button" onClick={() => toolbarAction('formatBlock', 'h2')}>{copy.h2}</button>
        <button type="button" onClick={() => toolbarAction('bold')}>{copy.bold}</button>
        <button type="button" onClick={() => toolbarAction('italic')}>{copy.italic}</button>
        <button type="button" onClick={() => toolbarAction('insertUnorderedList')}>{copy.bullets}</button>
        <button type="button" onClick={() => toolbarAction('insertOrderedList')}>{copy.numbered}</button>
      </div>
      <div
        id="legacy-editor-surface"
        className="legacySurface"
        contentEditable
        suppressContentEditableWarning
        onInput={(event) => onChange(event.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{__html: html}}
      />
    </div>
  );
}

function ToolbarButton({label, onClick, active = false}) {
  return (
    <button type="button" className={`toolbarBtn ${active ? 'toolbarBtnActive' : ''}`} onClick={onClick} aria-label={label}>
      {label}
    </button>
  );
}

function ToolbarGroup({children}) {
  return <div className="toolbarGroup">{children}</div>;
}

function TiptapPane({content, onChange, copy}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {levels: [1, 2, 3]},
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image,
      Placeholder.configure({
        placeholder: 'Start writing...',
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    onUpdate: ({editor: nextEditor}) => {
      onChange(nextEditor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptapSurface',
      },
    },
    immediatelyRender: false,
  });

  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  if (!editor) {
    return <div className="editorCard loadingCard">Loading Tiptap…</div>;
  }

  const currentStyle = editor.isActive('heading', {level: 1})
    ? 'h1'
    : editor.isActive('heading', {level: 2})
      ? 'h2'
      : editor.isActive('heading', {level: 3})
        ? 'h3'
        : 'p';

  const applyTextStyle = (value) => {
    switch (value) {
      case 'h1':
        editor.chain().focus().toggleHeading({level: 1}).run();
        break;
      case 'h2':
        editor.chain().focus().toggleHeading({level: 2}).run();
        break;
      case 'h3':
        editor.chain().focus().toggleHeading({level: 3}).run();
        break;
      default:
        editor.chain().focus().setParagraph().run();
        break;
    }
  };

  const promptLink = () => {
    const href = window.prompt(copy.link);
    if (href) {
      editor.chain().focus().extendMarkRange('link').setLink({href}).run();
    }
  };

  const promptImage = () => {
    const src = window.prompt(copy.image);
    if (src) {
      editor.chain().focus().setImage({src, alt: 'Reference image'}).run();
    }
  };

  const promptCode = () => {
    const code = window.prompt(copy.code);
    if (code) {
      editor.chain().focus().insertContent(`<pre><code>${escapeHtml(code)}</code></pre>`).run();
    }
  };

  return (
    <div className="editorCard modernCard">
      <div className="toolbar toolbarModern">
        <ToolbarGroup>
          <label className="styleSelectWrap">
            <span className="styleSelectLabel">{copy.style}</span>
            <select
              className="styleSelect"
              value={currentStyle}
              onChange={(event) => applyTextStyle(event.target.value)}>
              <option value="p">{copy.paragraph}</option>
              <option value="h1">{copy.h1}</option>
              <option value="h2">{copy.h2}</option>
              <option value="h3">{copy.h3}</option>
            </select>
          </label>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton
            label="B"
            active={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <ToolbarButton
            label="I"
            active={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <ToolbarButton
            label="U"
            active={editor.isActive('underline')}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton
            label="•"
            active={editor.isActive('bulletList')}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />
          <ToolbarButton
            label="1."
            active={editor.isActive('orderedList')}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          />
          <ToolbarButton
            label="❝"
            active={editor.isActive('blockquote')}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton label="{}" onClick={promptCode} />
          <ToolbarButton label="↗" active={editor.isActive('link')} onClick={promptLink} />
          <ToolbarButton label="◫" onClick={promptImage} />
          <ToolbarButton
            label="⊞"
            onClick={() => editor.chain().focus().insertTable({rows: 3, cols: 2, withHeaderRow: true}).run()}
          />
          <ToolbarButton label="—" onClick={() => editor.chain().focus().setHorizontalRule().run()} />
        </ToolbarGroup>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

function App() {
  const [locale, setLocale] = React.useState('en');
  const [template, setTemplate] = React.useState('howto');
  const [legacyHtml, setLegacyHtml] = React.useState(TEMPLATE_HTML.howto.en);
  const [modernHtml, setModernHtml] = React.useState(TEMPLATE_HTML.howto.en);

  const currentCopy = COPY[locale];

  React.useEffect(() => {
    const nextHtml = TEMPLATE_HTML[template][locale];
    setLegacyHtml(nextHtml);
    setModernHtml(nextHtml);
  }, [locale, template]);

  return (
    <main className="pageShell">
      <section className="hero">
        <div className="eyebrow">{currentCopy.eyebrow}</div>
        <h1>{currentCopy.title}</h1>
        <p>{currentCopy.subtitle}</p>
      </section>

      <section className="controlBar">
        <ChipGroup
          label={currentCopy.localeLabel}
          value={locale}
          onChange={setLocale}
          options={[
            {value: 'en', label: 'English'},
            {value: 'ja', label: '日本語'},
          ]}
        />
        <ChipGroup
          label={currentCopy.templateLabel}
          value={template}
          onChange={setTemplate}
          options={[
            {value: 'howto', label: currentCopy.templates.howto},
            {value: 'runbook', label: currentCopy.templates.runbook},
            {value: 'faq', label: currentCopy.templates.faq},
          ]}
        />
      </section>

      <section className="comparisonGrid">
        <article className="panel">
          <header className="panelHead">
            <h2>{currentCopy.legacyTitle}</h2>
            <p>{currentCopy.legacyBody}</p>
          </header>
          <LegacyEditor html={legacyHtml} onChange={setLegacyHtml} copy={currentCopy.toolbar} />
          <section className="markdownPanel">
            <h3>{currentCopy.markdownTitle}</h3>
            <pre>{htmlToMarkdown(legacyHtml)}</pre>
          </section>
        </article>

        <article className="panel panelModern">
          <header className="panelHead">
            <h2>{currentCopy.modernTitle}</h2>
            <p>{currentCopy.modernBody}</p>
          </header>
          <TiptapPane
            content={modernHtml}
            onChange={setModernHtml}
            copy={{
              ...currentCopy.toolbar,
              ...currentCopy.prompts,
            }}
          />
          <section className="markdownPanel">
            <h3>{currentCopy.markdownTitle}</h3>
            <pre>{htmlToMarkdown(modernHtml)}</pre>
          </section>
        </article>
      </section>

      <section className="detailGrid">
        <article className="infoCard">
          <h3>{currentCopy.metadataTitle}</h3>
          <ul>
            {currentCopy.metadataItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="infoCard">
          <h3>{currentCopy.noteTitle}</h3>
          <p>{currentCopy.noteBody}</p>
        </article>
      </section>
    </main>
  );
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

createRoot(document.getElementById('root')).render(<App />);

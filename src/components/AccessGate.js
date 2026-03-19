import React, {useEffect, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const ACCESS_KEY = 'atlas-knowledge-center-access';
const ACCESS_PASSWORD = 'jyp4013';

const CONTENT = {
  'en-US': {
    title: 'Atlas Wiki Access',
    subtitle:
      'This wiki is currently protected. Enter the shared password to continue.',
    label: 'Password',
    placeholder: 'Enter password',
    action: 'Enter Atlas Wiki',
    error: 'That password is incorrect.',
  },
  'ja-JP': {
    title: 'Atlas Wiki へのアクセス',
    subtitle:
      'この Wiki は現在保護されています。共有パスワードを入力して続行してください。',
    label: 'パスワード',
    placeholder: 'パスワードを入力',
    action: 'Atlas Wiki に入る',
    error: 'パスワードが正しくありません。',
  },
};

export default function AccessGate({children}) {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const content = CONTENT[currentLocale] ?? CONTENT['en-US'];
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hasAccess = window.sessionStorage.getItem(ACCESS_KEY) === 'granted';
    setUnlocked(hasAccess);
    setReady(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === ACCESS_PASSWORD) {
      window.sessionStorage.setItem(ACCESS_KEY, 'granted');
      setUnlocked(true);
      setError('');
      setPassword('');
      return;
    }

    setError(content.error);
  };

  if (!ready) {
    return null;
  }

  if (unlocked) {
    return children;
  }

  return (
    <div className="access-gate">
      <div className="access-gate__panel">
        <div className="access-gate__eyebrow">KFC Atlas</div>
        <h1 className="access-gate__title">{content.title}</h1>
        <p className="access-gate__subtitle">{content.subtitle}</p>
        <form className="access-gate__form" onSubmit={handleSubmit}>
          <label className="access-gate__label" htmlFor="knowledge-center-password">
            {content.label}
          </label>
          <input
            id="knowledge-center-password"
            className="access-gate__input"
            type="password"
            value={password}
            placeholder={content.placeholder}
            onChange={(event) => {
              setPassword(event.target.value);
              if (error) {
                setError('');
              }
            }}
            autoComplete="current-password"
          />
          {error ? (
            <p className="access-gate__error" role="alert">
              {error}
            </p>
          ) : null}
          <button className="access-gate__button" type="submit">
            {content.action}
          </button>
        </form>
      </div>
    </div>
  );
}

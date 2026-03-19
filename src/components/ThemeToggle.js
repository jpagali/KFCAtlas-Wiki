import React from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';

const OPTIONS = [
  {value: 'light', label: 'Light', symbol: '☀'},
  {value: 'dark', label: 'Dark', symbol: '☾'},
];

export default function ThemeToggle({mobile, className}) {
  const {colorMode, setColorMode} = useColorMode();

  const control = (
    <div
      className={clsx('theme-toggle-control', mobile && 'theme-toggle-control--mobile')}
      role="group"
      aria-label="Theme">
      {OPTIONS.map((option) => {
        const isActive = colorMode === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={clsx('theme-toggle-option', isActive && 'theme-toggle-option--active')}
            aria-pressed={isActive}
            aria-label={option.label}
            onClick={() => setColorMode(option.value)}>
            <span className="theme-toggle-option__symbol" aria-hidden="true">
              {option.symbol}
            </span>
          </button>
        );
      })}
    </div>
  );

  if (mobile) {
    return (
      <li className="menu__list-item navbar-sidebar-theme-toggle">
        <div className="navbar-sidebar-theme-toggle__label">Theme</div>
        {control}
      </li>
    );
  }

  return <div className={clsx('navbar-theme-toggle', className)}>{control}</div>;
}

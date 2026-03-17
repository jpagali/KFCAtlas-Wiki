import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose color="currentColor" />
    </button>
  );
}

function HomeButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  const homeUrl = useBaseUrl('/');

  return (
    <Link
      to={homeUrl}
      className="navbar-sidebar__home"
      onClick={() => mobileSidebar.toggle()}>
      <span className="navbar-sidebar__home-icon" aria-hidden="true">
        ⌂
      </span>
      <span>Home</span>
    </Link>
  );
}

export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <HomeButton />
      <CloseButton />
    </div>
  );
}

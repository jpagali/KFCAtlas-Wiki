import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import NavbarSearch from '@site/src/components/NavbarSearch';
import NavbarContributeButton from '@site/src/components/NavbarContributeButton';
import ThemeToggle from '@site/src/components/ThemeToggle';

export default {
  ...ComponentTypes,
  'custom-search': NavbarSearch,
  'custom-contribute': NavbarContributeButton,
  'custom-theme-toggle': ThemeToggle,
};

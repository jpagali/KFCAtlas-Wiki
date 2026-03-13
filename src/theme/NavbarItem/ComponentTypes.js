import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import NavbarSearch from '@site/src/components/NavbarSearch';
import NavbarLocaleSwitcher from '@site/src/components/NavbarLocaleSwitcher';

export default {
  ...ComponentTypes,
  'custom-search': NavbarSearch,
  'custom-locale-switcher': NavbarLocaleSwitcher,
};

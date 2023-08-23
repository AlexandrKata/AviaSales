import logo from '../../img/logo.svg';

import classes from './header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="aviasales" className={classes.header__logo} />
    </header>
  );
};

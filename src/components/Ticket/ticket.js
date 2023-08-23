import logo from '../../img/S7 Logo.png';

import classes from './ticket.module.scss';

export const Ticket = () => {
  return (
    <article className={classes.ticket}>
      <header className={classes.ticket__header}>
        <span className={classes.ticket__price}>13 400 Р</span>
        <img src={logo} alt="S7 Logo" className={classes.ticket__img} />
      </header>
      <div className={classes.ticket__content}>
        <div className={classes.trip}>
          <div className={classes.trip__item}>
            <p className={classes.trip__header}>MOW - HKT</p>
            <p className={classes.trip__content}>10:45 - 08:00</p>
            <br></br>
            <p className={classes.trip__header}>MOW - HKT</p>
            <p className={classes.trip__content}>11:20 - 00:50</p>
          </div>
          <div className={classes.trip__item}>
            <p className={classes.trip__header}>В ПУТИ</p>
            <p className={classes.trip__content}>21ч 15м</p>
            <br></br>
            <p className={classes.trip__header}>В ПУТИ</p>
            <p className={classes.trip__content}>13ч 30м</p>
          </div>
          <div className={classes.trip__item}>
            <p className={classes.trip__header}>2 пересадки</p>
            <p className={classes.trip__content}>HKG, JNB</p>
            <br></br>
            <p className={classes.trip__header}>1 пересадка</p>
            <p className={classes.trip__content}>HKG</p>
          </div>
        </div>
      </div>
    </article>
  );
};

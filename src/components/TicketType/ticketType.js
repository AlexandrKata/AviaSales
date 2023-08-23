import classes from './ticketType.module.scss';

export const TicketType = () => {
  return (
    <div className={classes.ticketTypes}>
      <input type="radio" name="radio" className={classes.ticketTypes__radio} id="cheap" />
      <label htmlFor="cheap" className={classes.ticketTypes__label}>
        Самый дешевый
      </label>
      <input type="radio" name="radio" className={classes.ticketTypes__radio} id="fast" />
      <label htmlFor="fast" className={[classes.ticketTypes__label, classes.bordered].join(' ')}>
        Самый быстрый
      </label>
      <input type="radio" name="radio" className={classes.ticketTypes__radio} id="optimal" />
      <label htmlFor="optimal" className={classes.ticketTypes__label}>
        Оптимальный
      </label>
    </div>
  );
};

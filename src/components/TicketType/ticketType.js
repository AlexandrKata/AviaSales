import { useSelector, useDispatch } from 'react-redux';

import { setTicketType } from '../../redux/filtersSlice';

import classes from './ticketType.module.scss';

export const TicketType = () => {
  const types = useSelector((state) => state.filters.ticketsType);
  const dispatch = useDispatch();

  console.log(types);

  return (
    <div className={classes.ticketTypes}>
      <input
        type="radio"
        name="radio"
        className={classes.ticketTypes__radio}
        id="cheap"
        onChange={() => dispatch(setTicketType('cheap'))}
      />
      <label htmlFor="cheap" className={classes.ticketTypes__label}>
        Самый дешевый
      </label>
      <input
        type="radio"
        name="radio"
        className={classes.ticketTypes__radio}
        id="fast"
        onChange={() => dispatch(setTicketType('fast'))}
      />
      <label htmlFor="fast" className={[classes.ticketTypes__label, classes.bordered].join(' ')}>
        Самый быстрый
      </label>
      <input
        type="radio"
        name="radio"
        className={classes.ticketTypes__radio}
        id="optimal"
        onChange={() => dispatch(setTicketType('optimal'))}
      />
      <label htmlFor="optimal" className={classes.ticketTypes__label}>
        Оптимальный
      </label>
    </div>
  );
};

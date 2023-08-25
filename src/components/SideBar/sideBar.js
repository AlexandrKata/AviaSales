import { useSelector, useDispatch } from 'react-redux';

import { toggleFilters } from '../../redux/filtersSlice';

import classes from './sideBar.module.scss';

export const SideBar = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const allFilters =
    filters.nonStop === true &&
    filters.oneTransplant === true &&
    filters.twoTransplant === true &&
    filters.threeTransplant === true;

  return (
    <div className={classes.sidebar_container}>
      <h3 className={classes.sidebar_container__header}>Количество пересадок</h3>
      <>
        <input type="checkbox" id={1} checked={allFilters} onChange={() => dispatch(toggleFilters('all'))} />
        <label htmlFor={1} className={classes.sidebar_container__checkbox}>
          Все
        </label>
      </>
      <>
        <input type="checkbox" id={2} checked={filters.nonStop} onChange={() => dispatch(toggleFilters('nonStop'))} />
        <label htmlFor={2} className={classes.sidebar_container__checkbox}>
          Без пересадок
        </label>
      </>
      <>
        <input
          type="checkbox"
          id={3}
          checked={filters.oneTransplant}
          onChange={() => dispatch(toggleFilters('oneTransplant'))}
        />
        <label htmlFor={3} className={classes.sidebar_container__checkbox}>
          1 пересадка
        </label>
      </>
      <>
        <input
          type="checkbox"
          id={4}
          checked={filters.twoTransplant}
          onChange={() => dispatch(toggleFilters('twoTransplant'))}
        />
        <label htmlFor={4} className={classes.sidebar_container__checkbox}>
          2 пересадки
        </label>
      </>
      <>
        <input
          type="checkbox"
          id={5}
          checked={filters.threeTransplant}
          onChange={() => dispatch(toggleFilters('threeTransplant'))}
        />
        <label htmlFor={5} className={classes.sidebar_container__checkbox}>
          3 пересадки
        </label>
      </>
    </div>
  );
};

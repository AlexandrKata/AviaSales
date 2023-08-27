import { useSelector, useDispatch } from 'react-redux';

import { all, nonStop, oneTransplant, twoTransplant, threeTransplant } from '../../redux/filtersSlice';

import classes from './sideBar.module.scss';

export const SideBar = () => {
  const filters = useSelector((state) => state.root.filters);
  console.log(filters);
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
        <input type="checkbox" id={1} checked={allFilters} onChange={() => dispatch(all(filters.all))} />
        <label htmlFor={1} className={classes.sidebar_container__checkbox}>
          Все
        </label>
      </>
      <>
        <input type="checkbox" id={2} checked={filters.nonStop} onChange={() => dispatch(nonStop(filters.nonStop))} />
        <label htmlFor={2} className={classes.sidebar_container__checkbox}>
          Без пересадок
        </label>
      </>
      <>
        <input
          type="checkbox"
          id={3}
          checked={filters.oneTransplant}
          onChange={() => dispatch(oneTransplant(filters.oneTransplant))}
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
          onChange={() => dispatch(twoTransplant(filters.twoTransplant))}
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
          onChange={() => dispatch(threeTransplant(filters.threeTransplant))}
        />
        <label htmlFor={5} className={classes.sidebar_container__checkbox}>
          3 пересадки
        </label>
      </>
    </div>
  );
};

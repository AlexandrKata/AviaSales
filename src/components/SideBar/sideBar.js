import classes from './sideBar.module.scss';

export const SideBar = () => {
  return (
    <div className={classes.sidebar_container}>
      <h3 className={classes.sidebar_container__header}>Количество пересадок</h3>
      <>
        <input type="checkbox" id={1} />
        <label htmlFor={1} className={classes.sidebar_container__checkbox}>
          Все
        </label>
      </>
      <>
        <input type="checkbox" id={2} />
        <label htmlFor={2} className={classes.sidebar_container__checkbox}>
          Без пересадок
        </label>
      </>
      <>
        <input type="checkbox" id={3} />
        <label htmlFor={3} className={classes.sidebar_container__checkbox}>
          1 пересадка
        </label>
      </>
      <>
        <input type="checkbox" id={4} />
        <label htmlFor={4} className={classes.sidebar_container__checkbox}>
          2 пересадки
        </label>
      </>
      <>
        <input type="checkbox" id={5} />
        <label htmlFor={5} className={classes.sidebar_container__checkbox}>
          3 пересадки
        </label>
      </>
    </div>
  );
};

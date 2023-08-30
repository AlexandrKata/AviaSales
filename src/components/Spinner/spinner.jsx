import PropagateLoader from 'react-spinners/PropagateLoader';
import { useSelector } from 'react-redux';

import classes from './spinner.module.scss';

export const Spinner = () => {
  const loading = useSelector((state) => state.root.tickets.loading);

  return (
    <div className={classes.spinner}>
      <PropagateLoader color="#2196f3" loading={loading} />
    </div>
  );
};

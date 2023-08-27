import { useSelector } from 'react-redux';

import { Ticket } from '../Ticket/ticket';

import classes from './ticketList.module.scss';

export const TicketList = () => {
  const tickets = useSelector((state) => state.root.tickets.tickets);
  const status = useSelector((state) => state.root.tickets.status);

  const getTicketsList = () => {
    if (status === 'error') return <p>Ошибка сервера, попробуйте еще раз</p>;
    if (status === 'loading') return;
    if (!tickets.length) return <p>Рейсов, подходящих под заданные фильтры, не найдено</p>;
    return tickets.map((item, i) => <Ticket key={i} item={item} />);
  };

  return (
    <>
      <section className={classes.ticketList}>{getTicketsList()}</section>
    </>
  );
};

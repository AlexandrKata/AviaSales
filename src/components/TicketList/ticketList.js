import { Ticket } from '../Ticket/ticket';

import classes from './ticketList.module.scss';

export const TicketList = () => {
  return (
    <>
      <section className={classes.ticketList}>
        <Ticket />
        <Ticket />
        <Ticket />
      </section>
    </>
  );
};

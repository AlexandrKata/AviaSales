import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTickets } from '../../redux/ticketsSlice';
import { Header } from '../Header';
import { SideBar } from '../SideBar';
import { TicketList } from '../TicketList';
import { TicketType } from '../TicketType/ticketType';
import { Spinner } from '../Spinner';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <>
      <Header />
      <Spinner />
      <div className="container">
        <aside className="sidebar">
          <SideBar />
        </aside>
        <main className="content">
          <TicketType />
          <TicketList />
          <button type="button" className="button">
            Показать еще 5 билетов!
          </button>
        </main>
      </div>
    </>
  );
};

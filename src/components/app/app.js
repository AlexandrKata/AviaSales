import React from 'react';

import { Header } from '../Header';
import { SideBar } from '../SideBar';
import { TicketList } from '../TicketList';
import { TicketType } from '../TicketType/ticketType';

export const App = () => {
  return (
    <>
      <Header />
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

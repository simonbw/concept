import React from "react";
import { routes } from "../../common/routes";
import { renderPage } from "../utils/renderPage";

const HomePage = () => {
  return (
    <div className="p-16 flex flex-col gap-4">
      <a className="admin-link" href={routes.admin}>
        Admin
      </a>
      <a className="admin-link" href={routes.room1}>
        Room 1
      </a>
      <a className="admin-link" href={routes.room2}>
        Room 2
      </a>
      <a className="admin-link" href={routes.clock1}>
        Clock 1
      </a>
      <a className="admin-link" href={routes.clock2}>
        Clock 2
      </a>
    </div>
  );
};

renderPage(<HomePage />);

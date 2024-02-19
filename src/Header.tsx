import React, { useState } from "react";
import { clsx } from "clsx";

import "./Header.css";

const Header = () => {
  const menuItems = ["Colors", "Account", "Messages", "Favorites"];

  const [tab, setTab] = useState(menuItems[0]);

  return (
    <div className="header-buttons">
      {menuItems.map((menuItem) => {
        return (
          <button
            className={clsx({
              "header-button": true,
              "header-button-active": tab === menuItem
            })}
            onClick={() => setTab(menuItem)}
          >
            {menuItem}
          </button>
        );
      })}
    </div>
  );
};

export default Header;

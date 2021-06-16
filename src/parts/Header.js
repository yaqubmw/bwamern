import React from "react";

import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
        </nav>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item${getNavLinkClass("/")}`}>
              <button className="nav-link" type="link" href="/">
                Home
              </button>
            </li>
            <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
              <button className="nav-link" type="link" href="/browse-by">
                Browse by
              </button>
            </li>
            <li className={`nav-item${getNavLinkClass("/stories")}`}>
              <button className="nav-link" type="link" href="/stories">
                Stories
              </button>
            </li>
            <li className={`nav-item${getNavLinkClass("/agents")}`}>
              <button className="nav-link" type="link" href="/agents">
                Agents
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

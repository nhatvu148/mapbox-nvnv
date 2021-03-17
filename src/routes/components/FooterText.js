import React from "react";

const FooterText = (props) => (
  <React.Fragment>
    <h5 style={{ fontSize: 12 }}>© 2021 All Rights Reserved.</h5>
    <h5 style={{ fontSize: 12 }}>
      Created by{" "}
      <a
        href="https://github.com/nhatvu148"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar__link"
      >
        Nhat Vu
      </a>{" "}
      with 💗
    </h5>
  </React.Fragment>
);

export { FooterText };

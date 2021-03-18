import React, { FC } from "react";

const FooterText: FC = (props) => (
  <React.Fragment>
    <h5 style={{ fontSize: 12 }}>© 2021 All Rights Reserved.</h5>
    <h5 style={{ fontSize: 12 }}>
      Developed by{" "}
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

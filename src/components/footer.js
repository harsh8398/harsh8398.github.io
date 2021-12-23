import React from "react";
import PropTypes from "prop-types";

import style from "../styles/footer.module.css";

const Footer = ({ copyrights }) => (
  <footer className={style.footer}>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span>
          <a href="https://github.com/harsh8398">github</a> &middot;{" "}
          <a href="https://linkedin.com/in/harsh8398">linkedin</a> &middot;{" "}
          <a href="mailto:pharsh58@gmail.com">email</a>
        </span>
        <span>By Harsh Patel</span>
      </>
    )}
  </footer>
);

Footer.propTypes = {
  copyrights: PropTypes.string,
};

export default Footer;

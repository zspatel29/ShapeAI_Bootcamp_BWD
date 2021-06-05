import React from "react";

function Footer() {
  currYear = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright @ {currYear} </p>
    </footer>
  );
}

export default Footer;

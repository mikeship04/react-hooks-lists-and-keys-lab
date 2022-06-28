import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navItem = links.map((link) => {
    return <a key={link} href={link}>{link}</a>
  })

  return <nav>{navItem}</nav>;
}

export default NavBar;

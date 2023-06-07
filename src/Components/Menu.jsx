import React, { useState, useEffect } from "react";

const Menu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleNavLinkClick = () => {
      setIsClicked(false);
    };

    const handleScrollToTop = () => {
      if (window.innerWidth <= 2000) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    window.addEventListener("click", handleScrollToTop);

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
      window.removeEventListener("click", handleScrollToTop);
    };
  }, []);

  return (
    <div
      className={isClicked ? "hamburger-mobile show" : "hamburger-mobile"}
      onClick={handleClick}
    >
      <p>Menu</p>
    </div>
  );
};

export default Menu;

"use client";

import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed cursor-pointer bottom-6 right-6 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-black transition-colors"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  ) : null;
}

export default ScrollToTopButton;

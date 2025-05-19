import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-200">
      © {currentYear} hyeran. All rights reserved.
    </footer>
  );
};

export default Footer;

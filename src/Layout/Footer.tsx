import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-website-color-layout text-white py-8">
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sazzad Mahim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

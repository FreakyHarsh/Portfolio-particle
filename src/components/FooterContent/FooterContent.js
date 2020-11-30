import './FooterContent.css';
import React from 'react';

function FooterContent(props) {
  const Marquee = ({ children }) => {
    return <marquee className="p-3">{children}</marquee>;
  };
  return (
    <div className="footer">
      <Marquee>Build with ReactJS and ❤️ by Harsh Boricha</Marquee>
    </div>
  );
}

export default FooterContent;

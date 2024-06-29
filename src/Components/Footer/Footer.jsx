import React, { useState, useEffect } from "react";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <footer className='text-center fw-bold h1 my-5'>{currentTime}. We're currently open</footer>;
}

export default Footer;

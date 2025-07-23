import React from "react";
import Home from "../components/home";
import Wedding from "../components/wedding";
import Photos from "../components/photos";
import Guestbook from "../components/guestbook";
import Blog from "../components/blog";
import RSVP from "../components/rsvp";
import Gifts from "../components/gifts";

const DemoWedding = () => {
  return (
    <>
      <Home />
      <Wedding />
      <Photos />
      <Guestbook />
      <Blog />
      <RSVP />
      <Gifts />
    </>
  );
};

export default DemoWedding;

import groom from "./assets/groom.jpg";
import bride from "./assets/bride.jpg";
import party from "./assets/party.jpg";
import church from "./assets/church.jpg";
import weddingCouple from "./assets/wedding-couple.jpg";
import jessica from "./assets/jessica.jpg";
import john from "./assets/john.jpg";
import blog1 from "./assets/couple-close.jpg";
import blog2 from "./assets/couple-happy.jpg";
import blog3 from "./assets/couple-smile.jpg";
import logo1 from "./assets/logo-8.png";
import logo2 from "./assets/logo-9.png";
import logo3 from "./assets/logo-10.png";
import logo4 from "./assets/logo-11.png";
import logo5 from "./assets/logo-12.png";
import logo6 from "./assets/logo-13.png";

export const menus = [
  "HOME",
  "THE WEDDING",
  "PHOTOS",
  "GUESTBOOK",
  "BLOG",
  "RSVP",
  "GIFTS",
];

export const brideGroom = [
  { img: bride, name: "Jessica" },
  { img: groom, name: "John" },
];

export const weddingDetails = [
  {
    img: church,
    title: "Main Ceremony",
    date: "SATURDAY, 10TH JUNE 2025",
    time: "8:00 PM - 9:00 PM",
    place: "Porto Church",
  },
  {
    img: party,
    title: "Wedding Party",
    date: "SATURDAY, 10TH JUNE 2025",
    time: "11:00 PM - 12:00 PM",
    place: "Porto Party Place",
  },
];

export const weddingPhotos = [
  { img: weddingCouple, title: "Meeting Wedding Couple" },
  { img: jessica, title: `Jessica's Gallery` },
  { img: john, title: `John's Gallery` },
];

export const blogs = [
  { img: blog1, name: "BY JESSICA", date: 15 },
  { img: blog2, name: "BY JOHN", date: 12 },
  { img: blog3, name: "BY JESSICA", date: 15 },
];

export const gifts = [logo1, logo2, logo3, logo4, logo5, logo6];

import React from "react";
import { createRoot } from "react-dom/client";
import { Shell } from "./components/Layout";
import { currentPage } from "./lib/utils";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Tuition from "./pages/Tuition";
import CampusLife from "./pages/CampusLife";
import Tour from "./pages/Tour";
import News from "./pages/News";
import Contact from "./pages/Contact";

const PAGES = {
  home: [Home, ""],
  academics: [Academics, "Academics"],
  admissions: [Admissions, "Admissions"],
  tuition: [Tuition, "Tuition & Financial Aid"],
  "campus-life": [CampusLife, "Campus Life"],
  tour: [Tour, "Schedule a Tour"],
  news: [News, "News & Events"],
  contact: [Contact, "Contact"]
};

const [Page, title] = PAGES[currentPage()] || PAGES.home;
createRoot(document.getElementById("root")).render(
  <Shell title={title}><Page /></Shell>
);

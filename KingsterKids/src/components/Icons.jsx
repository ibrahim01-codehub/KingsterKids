import React from "react";
import {
  BookOpen, UserRound, ShieldCheck, Globe, GraduationCap, Atom, Palette, Trophy,
  Phone, Mail, MapPin, Clock, Calendar, ArrowRight, ArrowLeft, Check, Plus, Minus,
  Search, Menu, X, Play, ChevronDown, ChevronLeft, ChevronRight, Compass, Download,
  Link2, Bus, Utensils, ParkingSquare, Monitor, HeartPulse, Users, Camera, Printer,
  Home, Building2, Sparkles
} from "lucide-react";

const wrap = (Cmp) => (props) => <Cmp strokeWidth={1.5} aria-hidden="true" {...props} />;

export const I = {
  book: wrap(BookOpen), user: wrap(UserRound), shield: wrap(ShieldCheck), globe: wrap(Globe),
  graduation: wrap(GraduationCap), atom: wrap(Atom), palette: wrap(Palette), trophy: wrap(Trophy),
  phone: wrap(Phone), mail: wrap(Mail), pin: wrap(MapPin), clock: wrap(Clock), calendar: wrap(Calendar),
  arrow: wrap(ArrowRight), back: wrap(ArrowLeft), check: wrap(Check), plus: wrap(Plus), minus: wrap(Minus),
  search: wrap(Search), menu: wrap(Menu), close: wrap(X), play: wrap(Play), down: wrap(ChevronDown),
  left: wrap(ChevronLeft), right: wrap(ChevronRight), compass: wrap(Compass), download: wrap(Download),
  link: wrap(Link2), bus: wrap(Bus), food: wrap(Utensils), parking: wrap(ParkingSquare),
  monitor: wrap(Monitor), heart: wrap(HeartPulse), users: wrap(Users), camera: wrap(Camera),
  print: wrap(Printer), home: wrap(Home), building: wrap(Building2), spark: wrap(Sparkles)
};

/* Brand marks are drawn by hand so we don't depend on an icon pack for them */
export const Brand = {
  facebook: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.6H7.4v3.3h2.8V22h3.3z" />
    </svg>
  ),
  instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  x: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.2 21H2.1l7.3-8.3L2 3h6.3l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
    </svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M4.3 8.8h3.4V20H4.3V8.8zM6 3.4a2 2 0 110 4 2 2 0 010-4zM9.9 8.8h3.2v1.5c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3V20h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20H9.9V8.8z" />
    </svg>
  ),
  youtube: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  )
};

export function Quote(props) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M0 24V14.6C0 6.2 4.6 1.2 12 0l1 3.4C8.8 4.6 6.8 7 6.6 10.8H13V24H0zm18.5 0V14.6C18.5 6.2 23.1 1.2 30.5 0l1 3.4c-4.2 1.2-6.2 3.6-6.4 7.4h6.4V24H18.5z" />
    </svg>
  );
}

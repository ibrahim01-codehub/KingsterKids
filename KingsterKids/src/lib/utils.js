import React, { useEffect, useRef, useState } from "react";

export const D = window.SITE_DATA;
export const S = D.site;

/* ---------- formatting ---------- */
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_LONG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function parseDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 12, 0, 0);
}
export function fmtDate(iso) {
  const d = parseDate(iso);
  return `${MONTHS_LONG[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
export function fmtDateLong(iso) {
  const d = parseDate(iso);
  return `${DAYS_LONG[d.getDay()]}, ${MONTHS_LONG[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
export function dayOf(iso) { return String(parseDate(iso).getDate()).padStart(2, "0"); }
export function monthOf(iso) { return MONTHS[parseDate(iso).getMonth()].toUpperCase(); }
export function money(n) { return "$" + Math.round(n).toLocaleString("en-US"); }
export function initials(name) {
  return name.replace(/^(Dr|Mr|Mrs|Ms|Mme)\.?\s+/i, "").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}
export function mapsLink() {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.mapQuery);
}
export function mapsEmbed() {
  return "https://maps.google.com/maps?q=" + encodeURIComponent(S.mapQuery) + "&t=&z=15&ie=UTF8&iwloc=&output=embed";
}
export function photoPath(slot) {
  return (D.photos && D.photos[slot]) || "";
}
export function currentPage() {
  return document.body.getAttribute("data-page") || "home";
}

/* ---------- tiny event bus (modals opened from anywhere) ---------- */
export function emit(name, detail) {
  window.dispatchEvent(new CustomEvent("rv:" + name, { detail }));
}
export function useBus(name, fn) {
  const ref = useRef(fn);
  ref.current = fn;
  useEffect(() => {
    const h = (e) => ref.current(e.detail);
    window.addEventListener("rv:" + name, h);
    return () => window.removeEventListener("rv:" + name, h);
  }, [name]);
}

/* ---------- hash helpers ---------- */
export function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const h = () => setHash(window.location.hash);
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  return hash;
}

/* scroll to #section after the page has rendered (plain section ids only) */
export function useHashScroll() {
  useEffect(() => {
    const go = () => {
      const raw = decodeURIComponent(window.location.hash.slice(1));
      if (!raw || raw.startsWith("/")) return;
      const id = raw.split("/")[0];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: "start" });
    };
    const t = setTimeout(go, 60);
    window.addEventListener("hashchange", go);
    return () => { clearTimeout(t); window.removeEventListener("hashchange", go); };
  }, []);
}

/* gentle reveal for things below the fold. Never hides anything above it. */
export function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.remove("pre");
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.92) { el.classList.add("pre"); io.observe(el); }
    });
    return () => io.disconnect();
  });
}

/* ---------- forms ---------- */
export const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());
export const phoneOk = (v) => String(v).replace(/[^\d]/g, "").length >= 7;

/* Delivers a form. Returns { mode: "sent" | "mailto" | "error", href? } */
export async function sendForm(subject, data, to) {
  const target = to || S.admissionsEmail || S.email;
  const body = Object.keys(data)
    .filter((k) => data[k])
    .map((k) => k + ": " + data[k])
    .join("\n");
  if (S.formEndpoint) {
    try {
      const res = await fetch(S.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.assign({ _subject: subject }, data))
      });
      if (!res.ok) throw new Error("bad response");
      return { mode: "sent" };
    } catch (e) {
      return { mode: "error" };
    }
  }
  const href = "mailto:" + target + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  return { mode: "mailto", href };
}

/* .ics calendar file for a tour booking */
export function downloadIcs({ title, date, time, location, description }) {
  const m = /(\d{1,2}):(\d{2})\s*(am|pm)/i.exec(time) || [];
  let h = parseInt(m[1] || "11", 10) % 12;
  if ((m[3] || "am").toLowerCase() === "pm") h += 12;
  const min = parseInt(m[2] || "0", 10);
  const [y, mo, d] = date.split("-").map(Number);
  const pad = (n) => String(n).padStart(2, "0");
  const stamp = (hh, mm) => `${y}${pad(mo)}${pad(d)}T${pad(hh)}${pad(mm)}00`;
  const endMin = h * 60 + min + 90;
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//" + S.fullName + "//Tour//EN", "BEGIN:VEVENT",
    "UID:" + Date.now() + "@KingsterKids-tour",
    "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
    "DTSTART:" + stamp(h, min),
    "DTEND:" + stamp(Math.floor(endMin / 60), endMin % 60),
    "SUMMARY:" + title, "LOCATION:" + location.replace(/,/g, "\\,"),
    "DESCRIPTION:" + description.replace(/\n/g, "\\n"),
    "END:VEVENT", "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "school-tour.ics";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

export function useQuery(name) {
  return new URLSearchParams(window.location.search).get(name) || "";
}

import React, { useEffect, useMemo, useRef, useState } from "react";
import { I, Brand } from "./Icons";
import { Crest, Photo } from "./Art";
import { Modal, Field, Honeypot, Btn } from "./Common";
import { D, S, currentPage, emit, useBus, emailOk, sendForm, useHashScroll, useReveal, mapsLink } from "../lib/utils";

/* ------------------------------------------------------------ logo */
export function Brandmark({ light = false }) {
  return (
    <a className={"brand" + (light ? " brand-light" : "")} href="index.html" aria-label={S.fullName + " home"}>
      <Crest size={40} variant={light ? "light" : "dark"} />
      <span className="brand-text">
        <span className="brand-name">{S.name}</span>
        <span className="brand-sub">{S.subname}</span>
      </span>
    </a>
  );
}

/* --------------------------------------------------------- top bar */
function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-row">
        <ul className="topbar-links">
          {D.topLinks.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <div className="topbar-right">
          <a className="topbar-open" href="admissions.html#process">Admissions Open</a>
          <a href={"tel:" + S.phoneLink}><I.phone size={14} /> <span>{S.phone}</span></a>
          <a className="topbar-mail" href={"mailto:" + S.email}><I.mail size={14} /> <span>{S.email}</span></a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- header */
function Header({ onSearch }) {
  const page = currentPage();
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState(-1);
  const [stuck, setStuck] = useState(false);
  const activeId = page === "tuition" || page === "tour" ? "admissions" : page;

  useEffect(() => {
    const f = () => setStuck(window.scrollY > 6);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("no-scroll-m", menu);
  }, [menu]);

  return (
    <header className={"site-header" + (stuck ? " stuck" : "")}>
      <div className="container header-row">
        <Brandmark />
        <nav id="primary-nav" className={"nav" + (menu ? " open" : "")} aria-label="Primary">
          <ul>
            {D.nav.map((item, i) => {
              const isActive = item.page === activeId;
              const has = !!item.children;
              return (
                <li key={item.label} className={(isActive ? "active " : "") + (has ? "has-sub " : "") + (sub === i ? "sub-open" : "")}>
                  <a href={item.href} aria-current={isActive ? "page" : undefined} onClick={() => setMenu(false)}>{item.label}</a>
                  {has && (
                    <>
                      <button type="button" className="sub-toggle" aria-label={"Show " + item.label + " links"} aria-expanded={sub === i} onClick={() => setSub(sub === i ? -1 : i)}><I.down size={16} /></button>
                      <ul className="dropdown">
                        {item.children.map((c) => <li key={c.label}><a href={c.href} onClick={() => setMenu(false)}>{c.label}</a></li>)}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <a className="btn btn-gold nav-cta-m" href="tour.html">Schedule a Tour</a>
        </nav>
        <div className="header-actions">
          <button type="button" className="icon-btn" onClick={onSearch} aria-label="Search the site"><I.search size={20} /></button>
          <a className="btn btn-gold header-cta" href="tour.html">Schedule a Tour</a>
          <button type="button" className="icon-btn menu-btn" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} aria-controls="primary-nav" onClick={() => setMenu(!menu)}>
            {menu ? <I.close size={24} /> : <I.menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------- footer */
function Footer() {
  const soc = S.social;
  const icons = [["facebook", "Facebook"], ["instagram", "Instagram"], ["x", "X"], ["linkedin", "LinkedIn"], ["youtube", "YouTube"]].filter(([k]) => soc[k]);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Brandmark light />
          <p>A private school dedicated to academic excellence, character development, and inspiring students to lead and serve.</p>
          <ul className="social">
            {icons.map(([k, label]) => {
              const B = Brand[k];
              return <li key={k}><a href={soc[k]} target="_blank" rel="noopener noreferrer" aria-label={label}><B width="18" height="18" /></a></li>;
            })}
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="academics.html">Academics</a></li>
            <li><a href="admissions.html">Admissions</a></li>
            <li><a href="campus-life.html">Campus Life</a></li>
            <li><a href="news.html">News &amp; Events</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Admissions</h3>
          <ul>
            <li><a href="admissions.html#why">Why {S.shortName}?</a></li>
            <li><a href="admissions.html#process">Application Process</a></li>
            <li><a href="tuition.html">Tuition &amp; Financial Aid</a></li>
            <li><a href="tour.html">Visit Our Campus</a></li>
            <li><a href="tour.html#appointment">Schedule a Tour</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <address>
            <p>{S.addressLine1}<br />{S.addressLine2}</p>
            <p><a href={"tel:" + S.phoneLink}>{S.phone}</a></p>
            <p><a href={"mailto:" + S.email}>{S.email}</a></p>
            <p><a href={mapsLink()} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
          </address>
        </div>
        <div className="footer-photo">
          <Photo slot="campus-building" art="building" alt={S.fullName + " main building"} />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <p>&copy; {new Date().getFullYear()} {S.fullName}. All rights reserved.</p>
          <p>
            <button type="button" onClick={() => emit("legal", "privacy")}>Privacy Policy</button>
            <button type="button" onClick={() => emit("legal", "terms")}>Terms of Use</button>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------- search */
function buildIndex() {
  const out = [];
  [
    ["About the school", "index.html#about", "Page", "history founded story community"],
    ["Academics", "academics.html", "Page", "curriculum divisions lower middle upper"],
    ["Admissions", "admissions.html", "Page", "apply application deadlines process"],
    ["Tuition & Financial Aid", "tuition.html", "Page", "fees cost price scholarship aid payment"],
    ["Schedule a Tour", "tour.html", "Page", "visit appointment campus tour open house"],
    ["Campus Life", "campus-life.html", "Page", "clubs sports dining transport gallery"],
    ["News & Events", "news.html", "Page", "blog announcements calendar"],
    ["Contact", "contact.html", "Page", "phone email address map message"]
  ].forEach(([t, u, k, x]) => out.push({ t, u, k, x }));
  D.divisions.forEach((d) => out.push({ t: d.name, u: "academics.html#" + d.id, k: "Division", x: d.grades + " " + d.blurb }));
  D.courses.forEach((c) => out.push({ t: c.title, u: "academics.html#course/" + c.slug, k: "Course", x: c.teacher + " " + c.dept + " " + c.blurb }));
  D.faculty.forEach((f) => out.push({ t: f.name, u: "academics.html#faculty", k: "Faculty", x: f.role + " " + f.bio }));
  D.clubs.forEach((c) => out.push({ t: c.name, u: "campus-life.html#clubs", k: "Club / Team", x: c.cat + " " + c.note }));
  D.posts.forEach((p) => out.push({ t: p.title, u: "news.html#/post/" + p.slug, k: "News", x: p.excerpt + " " + p.tags.join(" ") }));
  D.events.forEach((e) => out.push({ t: e.title, u: e.link, k: "Event", x: e.place }));
  D.aidFaq.concat(D.tourFaq).forEach((f) => out.push({ t: f.q, u: D.aidFaq.includes(f) ? "tuition.html#aid" : "tour.html#faq", k: "FAQ", x: Array.isArray(f.a) ? f.a.join(" ") : f.a }));
  return out;
}

function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState("");
  const index = useMemo(buildIndex, []);
  const inputRef = useRef(null);
  useEffect(() => { if (open) { setQ(""); } }, [open]);
  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index
      .map((r) => {
        const t = r.t.toLowerCase(), x = (r.x || "").toLowerCase();
        let score = 0;
        for (const w of words) {
          if (t.includes(w)) score += 5; else if (x.includes(w)) score += 1; else return null;
        }
        return { ...r, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 9);
  }, [q, index]);
  const go = (e) => { e.preventDefault(); if (results[0]) window.location.href = results[0].u; };
  return (
    <Modal open={open} onClose={onClose} title="Search the site" wide>
      <form className="search-form" onSubmit={go} role="search">
        <I.search size={22} />
        <input ref={inputRef} data-autofocus type="search" placeholder="Search courses, teachers, news, admissions…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search" />
      </form>
      <div className="search-results" aria-live="polite">
        {q && !results.length && <p className="muted">Nothing found for “{q}”. Try “tuition”, “soccer” or “calculus”.</p>}
        {!q && <p className="muted">Start typing. Popular: <a href="tuition.html">tuition</a>, <a href="tour.html">tours</a>, <a href="academics.html#courses">courses</a>.</p>}
        <ul>
          {results.map((r) => (
            <li key={r.k + r.t}><a href={r.u}><span className="tag-k">{r.k}</span><span>{r.t}</span><I.arrow size={16} /></a></li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

/* ----------------------------------------------- inquiry & legal modals */
function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [v, setV] = useState({ name: "", email: "", grade: "", message: "", website: "" });
  const [err, setErr] = useState({});
  const [state, setState] = useState({ phase: "form" });
  useBus("inquiry", (d) => { setV((p) => ({ ...p, message: (d && d.message) || "" })); setErr({}); setState({ phase: "form" }); setOpen(true); });
  const on = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = "Please tell us your name.";
    if (!emailOk(v.email)) er.email = "Please enter a valid email address.";
    if (!v.grade) er.grade = "Choose a grade.";
    setErr(er);
    if (Object.keys(er).length || v.website) return;
    setState({ phase: "sending" });
    const r = await sendForm("Information request: " + v.name, { Name: v.name, Email: v.email, "Grade of interest": v.grade, Message: v.message });
    if (r.mode === "mailto") window.location.href = r.href;
    setState({ phase: r.mode, href: r.href });
  };
  const grades = ["Kindergarten", ...[1, 2, 3, 4, 5].map((g) => "Grade " + g)];
  return (
    <Modal open={open} onClose={() => setOpen(false)} title="Request information">
      {state.phase === "form" || state.phase === "sending" ? (
        <form onSubmit={submit} noValidate className="modal-form">
          <p className="eyebrow">Admissions</p>
          <h2>Request information</h2>
          <p className="muted">Tell us a little and the Admissions team will reply within two working days.</p>
          <Honeypot value={v.website} onChange={on("website")} />
          <Field label="Your name" name="iq-name" value={v.name} onChange={on("name")} error={err.name} required autoComplete="name" data-autofocus />
          <Field label="Email" name="iq-email" type="email" value={v.email} onChange={on("email")} error={err.email} required autoComplete="email" />
          <Field label="Grade your child is entering" name="iq-grade" value={v.grade} onChange={on("grade")} error={err.grade} required>
            <option value="">Select a grade</option>
            {grades.map((g) => <option key={g}>{g}</option>)}
          </Field>
          <Field label="Anything we should know?" name="iq-msg" textarea rows={3} value={v.message} onChange={on("message")} />
          <Btn type="submit" variant="gold" disabled={state.phase === "sending"}>{state.phase === "sending" ? "Sending…" : "Send request"}</Btn>
        </form>
      ) : (
        <Confirmation state={state} onClose={() => setOpen(false)} />
      )}
    </Modal>
  );
}

export function Confirmation({ state, onClose, children }) {
  if (state.phase === "error") {
    return (
      <div className="confirm">
        <h2>That didn’t go through</h2>
        <p>We couldn’t reach the server. Please try again, or email <a href={"mailto:" + S.admissionsEmail}>{S.admissionsEmail}</a> or call {S.phone}.</p>
        {onClose && <Btn variant="navy" onClick={onClose}>Close</Btn>}
      </div>
    );
  }
  return (
    <div className="confirm">
      <span className="confirm-tick"><I.check size={26} /></span>
      <h2>{state.phase === "mailto" ? "Almost done" : "Thank you"}</h2>
      {state.phase === "mailto" ? (
        <p>Your email app should have opened with your message ready to send. Press <b>Send</b> there to finish. Nothing opened? <a href={state.href}>Open it again</a>.</p>
      ) : (
        <p>Your message is with the Admissions team. We reply within two working days.</p>
      )}
      {children}
      {onClose && <Btn variant="navy" onClick={onClose}>Close</Btn>}
    </div>
  );
}

const LEGAL = {
  privacy: { title: "Privacy Policy", body: [
    "We collect only the information you give us through our forms (such as your name, email address, phone number and your child’s grade) so that we can reply to your enquiry and process an application.",
    "We do not sell your information. We share it only with staff who need it to respond to you, and with service providers that help us run the school’s systems, under confidentiality terms.",
    "This website may use essential browser storage to remember simple preferences, such as the application checklist you tick on the Admissions page. It does not use advertising cookies.",
    "To ask what we hold about you, or to have it deleted, email " + S.email + "."
  ] },
  terms: { title: "Terms of Use", body: [
    "The content on this website is provided for general information about " + S.fullName + ". We work hard to keep it accurate, but dates, fees and programs can change. Please confirm important details with the school.",
    "Text, photographs and the school name and crest belong to " + S.fullName + " or are used with permission. Please do not reproduce them without our written consent.",
    "Links to other websites are provided for convenience. We are not responsible for their content.",
    "Questions about these terms can be sent to " + S.email + "."
  ] }
};
function LegalModal() {
  const [kind, setKind] = useState(null);
  useBus("legal", (k) => setKind(k));
  const d = kind && LEGAL[kind];
  return (
    <Modal open={!!d} onClose={() => setKind(null)} title={d ? d.title : ""}>
      {d && (<div className="legal"><h2>{d.title}</h2>{d.body.map((p, i) => <p key={i}>{p}</p>)}<p className="muted">Last updated {new Date().getFullYear()}.</p></div>)}
    </Modal>
  );
}

function VideoModal() {
  const [open, setOpen] = useState(false);
  const [broken, setBroken] = useState(false);
  useBus("video", () => { setBroken(false); setOpen(true); });
  return (
    <Modal open={open} onClose={() => setOpen(false)} title="Campus video" wide>
      {S.videoEmbedUrl ? (
        <div className="video-frame"><iframe src={S.videoEmbedUrl} title="Campus video" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>
      ) : broken ? (
        <div className="confirm">
          <h2>Our campus video is coming soon</h2>
          <p>In the meantime, the best way to see {S.shortName} is in person.</p>
          <Btn href="tour.html" variant="gold">Book a campus tour</Btn>
        </div>
      ) : (
        <video className="video-frame" controls autoPlay playsInline onError={() => setBroken(true)}>
          <source src={S.videoFile} type="video/mp4" onError={() => setBroken(true)} />
        </video>
      )}
    </Modal>
  );
}

/* ---------------------------------------------------------- shell */
export function Shell({ children, title }) {
  const [search, setSearch] = useState(false);
  useHashScroll();
  useReveal();
  useEffect(() => {
    document.title = (title ? title + " | " : "") + S.fullName;
  }, [title]);
  useEffect(() => {
    const k = (e) => { if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); setSearch(true); } };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <TopBar />
      <Header onSearch={() => setSearch(true)} />
      <main id="main">{children}</main>
      <Footer />
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
      <InquiryModal />
      <LegalModal />
      <VideoModal />
    </>
  );
}

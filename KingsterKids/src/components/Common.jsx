import React, { useEffect, useRef, useState, useId } from "react";
import { I, Quote } from "./Icons";
import { Art, Photo, Crest } from "./Art";
import { D, S, fmtDate, dayOf, monthOf, initials, photoPath } from "../lib/utils";

/* ---------------------------------------------------------------- modal */
export function Modal({ open, onClose, title, children, wide = false, labelledBy }) {
  const ref = useRef(null);
  const last = useRef(null);
  useEffect(() => {
    if (!open) return;
    last.current = document.activeElement;
    document.body.classList.add("no-scroll");
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const f = ref.current.querySelectorAll('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0], lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => { const c = ref.current && ref.current.querySelector("[data-autofocus]"); (c || ref.current)?.focus(); }, 30);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
      clearTimeout(t);
      if (last.current && last.current.focus) last.current.focus();
    };
  }, [open]);
  if (!open) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={"modal" + (wide ? " modal-wide" : "")} role="dialog" aria-modal="true" aria-label={title} aria-labelledby={labelledBy} ref={ref} tabIndex={-1}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><I.close size={22} /></button>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ accordion */
export function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={"acc-item" + (isOpen ? " open" : "")} key={i}>
            <h3>
              <button className="acc-head" aria-expanded={isOpen} aria-controls={`${uid}-p${i}`} id={`${uid}-h${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span>{it.q}</span>
                {isOpen ? <I.minus size={18} /> : <I.plus size={18} />}
              </button>
            </h3>
            <div className="acc-panel" id={`${uid}-p${i}`} role="region" aria-labelledby={`${uid}-h${i}`} hidden={!isOpen}>
              {(Array.isArray(it.a) ? it.a : [it.a]).map((p, k) => <p key={k}>{p}</p>)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* --------------------------------------------------------- page banner */
export function PageBanner({ eyebrow, title, lead, art = "building", align = "left", slot }) {
  const photo = slot ? photoPath(slot) : "";
  return (
    <section className={"banner" + (align === "center" ? " banner-center" : "")}>
      <div className="banner-bg" aria-hidden="true">
        {photo ? <img src={photo} alt="" /> : <div className="banner-art"><Art name={art} /></div>}
      </div>
      <div className="banner-crest" aria-hidden="true"><Crest size={360} variant="dark" /></div>
      <div className="container banner-inner">
        {eyebrow && <p className="banner-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="banner-lead">{lead}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false, light = false }) {
  return (
    <div className={"section-head" + (center ? " center" : "") + (light ? " light" : "")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function Btn({ href, onClick, variant = "gold", children, icon = false, type, ...rest }) {
  const cls = "btn btn-" + variant;
  const inner = <>{children}{icon && <I.arrow size={16} />}</>;
  if (href) return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <button className={cls} onClick={onClick} type={type || "button"} {...rest}>{inner}</button>;
}

export function TextLink({ href, onClick, children }) {
  if (href) return <a className="text-link" href={href}>{children}<I.arrow size={15} /></a>;
  return <button type="button" className="text-link" onClick={onClick}>{children}<I.arrow size={15} /></button>;
}

/* ----------------------------------------------------------- form field */
export function Field({ label, name, type = "text", value, onChange, error, required, children, textarea, rows = 5, hint, autoComplete, ...rest }) {
  const id = "f-" + name;
  const common = { id, name, value, onChange, "aria-invalid": error ? "true" : undefined, "aria-describedby": error ? id + "-err" : hint ? id + "-hint" : undefined, autoComplete, ...rest };
  return (
    <div className={"field" + (error ? " has-error" : "")}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {textarea ? <textarea rows={rows} {...common} />
        : children ? <select {...common}>{children}</select>
        : <input type={type} {...common} />}
      {hint && !error && <span className="hint" id={id + "-hint"}>{hint}</span>}
      {error && <span className="err" id={id + "-err"} role="alert">{error}</span>}
    </div>
  );
}

/* Hidden spam trap */
export function Honeypot({ value, onChange }) {
  return (
    <div className="hp" aria-hidden="true">
      <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} /></label>
    </div>
  );
}

/* ------------------------------------------------------------ cards */
export function CourseCard({ c, onOpen }) {
  return (
    <article className="course-card">
      <div className="course-media">
        <Photo slot={"course-" + c.slug} art={c.art} alt="" />
        <span className="course-dept">{c.dept}</span>
      </div>
      <div className="course-body">
        <h3>{c.title}</h3>
        <p className="course-blurb">{c.blurb}</p>
        <dl className="course-meta">
          <div><dt>Teacher</dt><dd>{c.teacher}</dd></div>
          <div><dt>Grade</dt><dd>{c.grades}</dd></div>
        </dl>
        {onOpen
          ? <button type="button" className="text-link" onClick={() => onOpen(c)}>Read More<I.arrow size={15} /></button>
          : <a className="text-link" href={"academics.html#course/" + c.slug}>Read More<I.arrow size={15} /></a>}
      </div>
    </article>
  );
}

export function Avatar({ id, name, size = "md" }) {
  const src = id ? photoPath("faculty-" + id) : "";
  const [failed, setFailed] = useState(false);
  if (src && !failed) return <img className={"avatar avatar-" + size + " avatar-img"} src={src} alt={name} loading="lazy" onError={() => setFailed(true)} />;
  return <span className={"avatar avatar-" + size} aria-hidden="true">{initials(name)}</span>;
}

export function EventItem({ e }) {
  return (
    <li className="event">
      <div className="event-date" aria-hidden="true"><b>{dayOf(e.date)}</b><span>{monthOf(e.date)}</span></div>
      <div className="event-body">
        <h4><a href={e.link}>{e.title}</a></h4>
        <p><span><I.clock size={14} /> {e.time}</span><span><I.pin size={14} /> {e.place}</span></p>
        <span className="sr-only">{fmtDate(e.date)}</span>
      </div>
    </li>
  );
}

export function CtaBand({ title = "Admissions Open", text = "Give your child the advantage of a KingsterKids education.", label = "Schedule a Tour", href = "tour.html" }) {
  return (
    <section className="cta-band" data-reveal>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-mark" aria-hidden="true"><Crest size={64} variant="light" /></div>
          <div className="cta-copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <a className="btn btn-white" href={href}>{label}</a>
        </div>
      </div>
    </section>
  );
}

export function PostMeta({ p }) {
  return (
    <p className="post-meta">
      <time dateTime={p.date}>{fmtDate(p.date)}</time>
      <span aria-hidden="true">/</span>
      <span>By {p.author}</span>
    </p>
  );
}

export { Quote };

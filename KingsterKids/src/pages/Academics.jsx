import React, { useEffect, useMemo, useState } from "react";
import { I } from "../components/Icons";
import { Photo } from "../components/Art";
import { PageBanner, SectionHead, Btn, CourseCard, Avatar, Modal, CtaBand } from "../components/Common";
import { D, S, emit, useHash } from "../lib/utils";

const DEPTS = ["All", "STEM", "Humanities", "Languages", "Arts", "Athletics", "Lower School"];
const divArt = { lower: "classroom", middle: "lab", upper: "library" };

function Divisions() {
  const hash = useHash().replace("#", "");
  const [id, setId] = useState("lower");
  useEffect(() => { if (D.divisions.some((d) => d.id === hash)) setId(hash); }, [hash]);
  const d = D.divisions.find((x) => x.id === id);
  return (
    <section className="section" id="divisions" data-reveal>
      <div className="container">
        <SectionHead eyebrow="Divisions" title="Elementary education, one continuous journey" lead="Students grow from Kindergarten through Grade 5 on one campus, with teachers who know and support every child." />
        <div className="tabs" role="tablist" aria-label="Divisions">
          {D.divisions.map((x) => (
            <button key={x.id} role="tab" id={"tab-" + x.id} aria-selected={x.id === id} aria-controls="div-panel" className={x.id === id ? "on" : ""} onClick={() => setId(x.id)}>
              {x.name}<small>{x.grades}</small>
            </button>
          ))}
        </div>
        <div className="tab-panel" id="div-panel" role="tabpanel" aria-labelledby={"tab-" + id}>
          <div className="tab-media"><Photo slot={"division-" + d.id} art={divArt[d.id]} alt={d.name} /></div>
          <div className="tab-copy">
            <h3>{d.name}</h3>
            <p className="division-grades">{d.grades}</p>
            <p>{d.blurb}</p>
            <ul className="ticks">{d.points.map((p) => <li key={p}><I.check size={18} />{p}</li>)}</ul>
            <dl className="mini-facts">{d.facts.map(([a, b]) => <div key={b}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseModal({ c, onClose }) {
  return (
    <Modal open={!!c} onClose={onClose} title={c ? c.title : ""} wide>
      {c && (
        <div className="course-modal">
          <div className="cm-media"><Photo slot={"course-" + c.slug} art={c.art} alt="" /></div>
          <div className="cm-body">
            <p className="eyebrow">{c.dept} · Grades {c.grades}</p>
            <h2>{c.title}</h2>
            <p>{c.desc}</p>
            <dl className="cm-facts">
              <div><dt>Teacher</dt><dd>{c.teacher}</dd></div>
              <div><dt>Schedule</dt><dd>{c.schedule}</dd></div>
              <div><dt>Credit</dt><dd>{c.credit}</dd></div>
              <div><dt>Prerequisite</dt><dd>{c.prereq}</dd></div>
            </dl>
            <div className="btn-row">
              <Btn variant="gold" onClick={() => { onClose(); emit("inquiry", { message: "I'd like to know more about " + c.title + "." }); }}>Request information</Btn>
              <Btn variant="ghost" onClick={onClose}>Close</Btn>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

function Catalog() {
  const hash = useHash();
  const [dept, setDept] = useState("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const h = decodeURIComponent(hash.replace("#", ""));
    if (h.startsWith("courses/")) { const d = h.split("/")[1]; if (DEPTS.includes(d)) setDept(d); }
    if (h.startsWith("course/")) { const c = D.courses.find((x) => x.slug === h.split("/")[1]); if (c) setOpen(c); }
  }, [hash]);

  const list = useMemo(() => {
    const w = q.toLowerCase().trim();
    return D.courses.filter((c) => (dept === "All" || c.dept === dept) && (!w || (c.title + c.teacher + c.blurb + c.dept).toLowerCase().includes(w)));
  }, [dept, q]);

  return (
    <section className="section alt" id="courses" data-reveal>
      <div className="container">
        <SectionHead eyebrow="Course Catalog" title="Courses" lead="A sample of what we teach. Course offerings are reviewed each spring, and the full Upper School handbook is available on request." />
        <div className="filters">
          <div className="chips" role="group" aria-label="Filter by department">
            {DEPTS.map((d) => <button key={d} type="button" className={"chip" + (dept === d ? " on" : "")} aria-pressed={dept === d} onClick={() => setDept(d)}>{d}</button>)}
          </div>
          <label className="inline-search"><span className="sr-only">Search courses</span><I.search size={18} /><input type="search" placeholder="Search courses or teachers" value={q} onChange={(e) => setQ(e.target.value)} /></label>
        </div>
        <p className="result-count" aria-live="polite">{list.length} {list.length === 1 ? "course" : "courses"}</p>
        {list.length ? (
          <div className="course-grid">{list.map((c) => <CourseCard key={c.slug} c={c} onOpen={setOpen} />)}</div>
        ) : (
          <p className="empty">No courses match that search. <button className="text-link" onClick={() => { setQ(""); setDept("All"); }}>Clear filters</button></p>
        )}
      </div>
      <CourseModal c={open} onClose={() => { setOpen(null); if (window.location.hash.startsWith("#course/")) window.location.hash = "courses"; }} />
    </section>
  );
}

function Faculty() {
  const [all, setAll] = useState(false);
  const [bio, setBio] = useState(null);
  const list = all ? D.faculty : D.faculty.slice(0, 6);
  return (
    <section className="section" id="faculty" data-reveal>
      <div className="container">
        <SectionHead eyebrow="Faculty" title="Meet our teachers" lead="Over eighty percent of our teachers hold an advanced degree, and the average length of service is eleven years." />
        <ul className="faculty-grid">
          {list.map((f) => (
            <li className="faculty-card" key={f.id}>
              <Avatar id={f.id} name={f.name} size="lg" />
              <div>
                <h3>{f.name}</h3>
                <p className="role">{f.role}</p>
                <p className="since">At {S.shortName} since {f.since}</p>
                <button type="button" className="text-link" onClick={() => setBio(f)}>Read bio<I.arrow size={15} /></button>
              </div>
            </li>
          ))}
        </ul>
        {!all && <div className="center-btn"><Btn variant="navy" onClick={() => setAll(true)}>Show all teachers</Btn></div>}
      </div>
      <Modal open={!!bio} onClose={() => setBio(null)} title={bio ? bio.name : ""}>
        {bio && (
          <div className="bio">
            <Avatar id={bio.id} name={bio.name} size="xl" />
            <h2>{bio.name}</h2>
            <p className="role">{bio.role}</p>
            <p>{bio.bio}</p>
            <Btn variant="ghost" onClick={() => setBio(null)}>Close</Btn>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default function Academics() {
  return (
    <>
      <PageBanner eyebrow="Academics" title="Courses & Programs" lead="A curriculum built to challenge every student and an advisor who notices when it doesn’t." art="library" slot="banner-academics" />
      <Divisions />
      <Catalog />
      <Faculty />
      <CtaBand title="See a class in session" text="The best way to understand how we teach is to watch it happen." label="Schedule a Tour" />
    </>
  );
}

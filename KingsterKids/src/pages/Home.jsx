import React, { useEffect, useRef, useState } from "react";
import { I, Quote } from "../components/Icons";
import { Photo, Art } from "../components/Art";
import { SectionHead, Btn, TextLink, CourseCard, Avatar, EventItem, CtaBand, PostMeta } from "../components/Common";
import { D, S, emit, fmtDate } from "../lib/utils";

/* ---------------------------------------------------------- counters */
function Stat({ value, suffix, label }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) { setN(value); return; }
    let raf, started = false;
    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting && !started) {
        started = true;
        const t0 = performance.now(), dur = 1400;
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return (
    <div className="stat" ref={ref}>
      <b aria-label={value + suffix}>{n}{suffix}</b>
      <span>{label}</span>
    </div>
  );
}

/* ------------------------------------------------------ testimonials */
function Testimonials() {
  const list = D.testimonials;
  const [per, setPer] = useState(3);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const f = () => setPer(window.innerWidth < 700 ? 1 : window.innerWidth < 1000 ? 2 : 3);
    f(); window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  const pages = Math.ceil(list.length / per);
  useEffect(() => { if (page >= pages) setPage(0); }, [pages]);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 7000);
    return () => clearInterval(t);
  }, [paused, pages]);
  const shown = list.slice(page * per, page * per + per);
  return (
    <section className="section testimonials" aria-roledescription="carousel" aria-label="Family testimonials"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="container">
        <SectionHead center eyebrow="Testimonials" title="What Our Families Say" />
        <div className="quote-grid" style={{ "--per": per }} aria-live="off">
          {shown.map((t) => (
            <figure className="quote-card" key={t.who}>
              <Quote className="quote-mark" width="26" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>— {t.who}</figcaption>
            </figure>
          ))}
        </div>
        <div className="dots" role="tablist" aria-label="Choose testimonials">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} role="tab" aria-selected={i === page} aria-label={"Testimonials " + (i + 1) + " of " + pages} className={i === page ? "on" : ""} onClick={() => setPage(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- page */
const features = [
  { icon: I.book, t: "Academic Excellence", d: "Rigorous curriculum designed to challenge and inspire every student." },
  { icon: I.user, t: "Personalized Attention", d: "Small class sizes ensure individualized learning and strong student support." },
  { icon: I.shield, t: "Character & Leadership", d: "Building integrity, confidence, and compassion in future leaders." },
  { icon: I.globe, t: "Global Perspectives", d: "Preparing students to thrive in a diverse and connected world." }
];
const programs = [
  { icon: I.graduation, t: "Foundational Learning", d: "Core curriculum in literacy and numeracy built to spark curiosity from day one.", href: "academics.html#lower" },
  { icon: I.atom, t: "STEM Programs", d: "Hands-on learning in science, technology, engineering, and mathematics.", href: "academics.html#courses/STEM" },
  { icon: I.palette, t: "Arts & Humanities", d: "Encouraging creativity, critical thinking, and cultural appreciation.", href: "academics.html#courses/Arts" },
  { icon: I.trophy, t: "Athletics", d: "Building teamwork, discipline, and school spirit through age-appropriate sports.", href: "academics.html#courses/Athletics" }
];
const divArt = { lower: "classroom", middle: "lab", upper: "library" };

export default function Home() {
  const news = D.posts.slice(0, 4);
  const [lead, ...rest] = news;
  const events = D.events.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-photo" aria-hidden="true"><Photo slot="hero-home" art="building" loading="eager" /></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Inspiring Minds.<br />Shaping Futures.</h1>
            <p>A private education that empowers students to excel academically, lead confidently, and make a meaningful impact.</p>
            <div className="hero-actions">
              <Btn href="#about" variant="gold">Discover Our School</Btn>
              <button type="button" className="watch" onClick={() => emit("video")}><span className="watch-icon"><I.play size={14} fill="currentColor" /></span>Watch Video</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="pillars-wrap">
        <div className="container">
          <ul className="pillars">
            {features.map((f) => (
              <li key={f.t}><f.icon size={30} /><h3>{f.t}</h3><p>{f.d}</p></li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about" data-reveal>
        <div className="container about-grid">
          <div className="about-title">
            <p className="eyebrow">About Our School</p>
            <h2>A school that knows every student by name.</h2>
            <dl className="facts">
              <div><dt>Founded</dt><dd>{S.founded}</dd></div>
              <div><dt>Students</dt><dd>About 640</dd></div>
              <div><dt>Grades</dt><dd>K–5</dd></div>
            </dl>
          </div>
          <div className="about-copy">
            <p>Since {S.founded}, {S.shortName} has taught students from Kindergarten through Grade 5. We are a school of about 300 students: small enough that the Head of School knows every child by name.</p>
            <p>We don’t believe a school has to choose between rigor and kindness. Our teachers set high expectations, mark work carefully, and make time for students who need it. Our graduates move on to middle school confident, curious, and ready to lead.</p>
            <TextLink href="admissions.html#why">Why families choose {S.shortName}</TextLink>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="section divisions" data-reveal>
        <div className="container">
          <ul className="division-grid">
            {D.divisions.map((d) => (
              <li className="division" key={d.id}>
                <div className="division-media"><Photo slot={"division-" + d.id} art={divArt[d.id]} alt="" /></div>
                <h3>{d.name}</h3>
                <p className="division-grades">{d.grades}</p>
                <p>{d.blurb}</p>
                <TextLink href={"academics.html#" + d.id}>Learn More</TextLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ACADEMICS */}
      <section className="section academics" data-reveal>
        <div className="container academics-grid">
          <div className="academics-intro">
            <p className="eyebrow">Academics</p>
            <h2>Exceptional Programs.<br />Outstanding Outcomes.</h2>
            <p>Our comprehensive curriculum combines core academics with innovative programs that prepare young learners for the next stage of their education.</p>
            <Btn href="academics.html" variant="navy">Explore Academics</Btn>
          </div>
          <ul className="program-grid">
            {programs.map((p) => (
              <li key={p.t}>
                <a href={p.href} className="program">
                  <p.icon size={26} />
                  <div><h3>{p.t}</h3><p>{p.d}</p></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-wrap">
        <div className="container">
          <div className="stats">
            {D.stats.map((s) => <Stat key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container services-grid">
          <article><I.building size={40} /><div><h3>Visit Campus</h3><p>Parents can arrange an appointment for a school tour on any weekday.</p><a className="link-gold" href="tour.html">Book a tour<I.arrow size={15} /></a></div></article>
          <article><I.food size={40} /><div><h3>School Meals</h3><p>Fresh lunches are cooked on site every school day, with options for every diet.</p><a className="link-gold" href="campus-life.html#dining">Read more<I.arrow size={15} /></a></div></article>
          <article><I.bus size={40} /><div><h3>Transportation</h3><p>Seven bus routes bring students from across the city and the northern suburbs.</p><a className="link-gold" href="campus-life.html#transport">Read more<I.arrow size={15} /></a></div></article>
        </div>
      </section>

      {/* NEWS + EVENTS */}
      <section className="news-events">
        <div className="news-side">
          <div className="news-inner">
            <header className="ne-head"><h2>News &amp; Updates</h2><a href="news.html">Read all news<I.arrow size={15} /></a></header>
            <div className="news-layout">
              <article className="news-lead">
                <a className="news-lead-media" href={"news.html#/post/" + lead.slug} tabIndex={-1} aria-hidden="true"><Photo slot={"post-" + lead.slug} art={lead.art} alt="" /></a>
                <p className="news-tags">{fmtDate(lead.date)} <span>/</span> {lead.tags.join(", ")}</p>
                <h3><a href={"news.html#/post/" + lead.slug}>{lead.title}</a></h3>
              </article>
              <ul className="news-list">
                {rest.map((p) => (
                  <li key={p.slug}>
                    <a className="news-thumb" href={"news.html#/post/" + p.slug} tabIndex={-1} aria-hidden="true"><Photo slot={"post-" + p.slug} art={p.art} alt="" /></a>
                    <div>
                      <p className="news-tags">{fmtDate(p.date)} <span>/</span> {p.tags.join(", ")}</p>
                      <h3><a href={"news.html#/post/" + p.slug}>{p.title}</a></h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <aside className="events-side" aria-labelledby="ev-h">
          <div className="events-inner">
            <h2 id="ev-h">Upcoming Events</h2>
            <ul className="events">{events.map((e) => <EventItem key={e.id} e={e} />)}</ul>
            <TextLink href="news.html#/events">View All Events</TextLink>
          </div>
        </aside>
      </section>

      {/* CLASSES */}
      <section className="section classes" data-reveal>
        <div className="container">
          <SectionHead center eyebrow="Course Catalog" title="Our Classes" />
          <div className="course-grid">
            {["ap-biology", "modern-languages", "concert-band"].map((s) => D.courses.find((c) => c.slug === s)).map((c) => <CourseCard key={c.slug} c={c} />)}
          </div>
          <div className="center-btn"><Btn href="academics.html#courses" variant="navy" icon>View All Courses</Btn></div>
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section className="section campus" data-reveal>
        <div className="container campus-grid">
          <div className="photo-grid">
            <Photo slot="campus-students" art="classroom" alt="Students on the front lawn" />
            <Photo slot="campus-stage" art="stage" alt="Students performing on stage" />
            <Photo slot="campus-soccer" art="field" alt="Varsity soccer match" />
            <Photo slot="campus-band" art="music" alt="Student playing saxophone in band" />
          </div>
          <div className="campus-copy">
            <p className="eyebrow">Campus Life</p>
            <h2>More Than a School.<br />A Community.</h2>
            <p>From athletics and arts to leadership and service, our students discover passions, build friendships, and create memories that last a lifetime.</p>
            <Btn href="campus-life.html" variant="gold">Discover Campus Life</Btn>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="section teachers" data-reveal>
        <div className="container">
          <SectionHead center eyebrow="Faculty" title="Our Teachers" />
          <ul className="teacher-grid">
            {["helena-marsh", "priya-raman", "thomas-whitaker"].map((id) => D.faculty.find((f) => f.id === id)).map((f) => (
              <li className="teacher" key={f.id}>
                <Avatar id={f.id} name={f.name} size="lg" />
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </li>
            ))}
          </ul>
          <div className="center-btn"><Btn href="academics.html#faculty" variant="navy" icon>View All Teachers</Btn></div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}

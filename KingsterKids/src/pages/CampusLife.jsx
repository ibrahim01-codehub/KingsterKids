import React, { useEffect, useMemo, useState } from "react";
import { I, Quote } from "../components/Icons";
import { Photo } from "../components/Art";
import { PageBanner, SectionHead, Btn, Modal, TextLink, CtaBand } from "../components/Common";
import { D, S, useHash } from "../lib/utils";

const CATS = ["All", "Athletics", "Arts", "Academic", "Service"];
const GALLERY = [
  { slot: "gallery-1", art: "building", cap: "Morning on the main lawn" },
  { slot: "gallery-2", art: "stage", cap: "Dress rehearsal for the autumn play" },
  { slot: "gallery-3", art: "field", cap: "Home match on Memorial Field" },
  { slot: "gallery-4", art: "lab", cap: "Dissection lab in the new science wing" },
  { slot: "gallery-5", art: "music", cap: "Jazz Ensemble before the Winter Concert" },
  { slot: "gallery-6", art: "studio", cap: "Printmaking in the art studio" },
  { slot: "gallery-7", art: "library", cap: "Quiet hour in the library" },
  { slot: "gallery-8", art: "globe", cap: "Exchange students from Lyon" }
];

function Clubs() {
  const hash = useHash();
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  useEffect(() => {
    const h = decodeURIComponent(hash.replace("#", ""));
    if (h.startsWith("clubs/") && CATS.includes(h.split("/")[1])) setCat(h.split("/")[1]);
  }, [hash]);
  const list = useMemo(() => {
    const w = q.toLowerCase().trim();
    return D.clubs.filter((c) => (cat === "All" || c.cat === cat) && (!w || (c.name + c.note + c.when).toLowerCase().includes(w)));
  }, [cat, q]);
  return (
    <section className="section alt" id="clubs" data-reveal>
      <div className="container">
        <SectionHead eyebrow="Clubs & Athletics" title="Something for every student" lead="More than sixty clubs, teams and ensembles run each year. These are some of the most popular. Students can also start their own with a faculty sponsor." />
        <div className="filters">
          <div className="chips" role="group" aria-label="Filter by category">
            {CATS.map((c) => <button key={c} type="button" className={"chip" + (cat === c ? " on" : "")} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
          </div>
          <label className="inline-search"><span className="sr-only">Search clubs</span><I.search size={18} /><input type="search" placeholder="Search clubs and teams" value={q} onChange={(e) => setQ(e.target.value)} /></label>
        </div>
        <p className="result-count" aria-live="polite">{list.length} {list.length === 1 ? "activity" : "activities"}</p>
        <ul className="club-grid">
          {list.map((c) => (
            <li className="club" key={c.name}>
              <span className={"club-cat cat-" + c.cat.toLowerCase()}>{c.cat}</span>
              <h3>{c.name}</h3>
              <p>{c.note}</p>
              <p className="club-meta"><span>{c.when}</span><span>{c.level}</span></p>
            </li>
          ))}
        </ul>
        {!list.length && <p className="empty">Nothing matches that search. <button className="text-link" onClick={() => { setQ(""); setCat("All"); }}>Clear filters</button></p>}
      </div>
    </section>
  );
}

function Gallery() {
  const [i, setI] = useState(-1);
  useEffect(() => {
    if (i < 0) return;
    const k = (e) => {
      if (e.key === "ArrowRight") setI((x) => (x + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + GALLERY.length) % GALLERY.length);
    };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [i]);
  const g = GALLERY[i];
  return (
    <section className="section" id="gallery" data-reveal>
      <div className="container">
        <SectionHead eyebrow="Photo Gallery" title="A year at KingsterKids" lead="Select a picture to enlarge it. Use the arrow keys to move between them." />
        <ul className="gallery">
          {GALLERY.map((x, n) => (
            <li key={x.slot} className={"g" + (n + 1)}>
              <button type="button" onClick={() => setI(n)} aria-label={"Enlarge: " + x.cap}>
                <Photo slot={x.slot} art={x.art} alt="" />
                <span className="g-cap">{x.cap}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Modal open={i >= 0} onClose={() => setI(-1)} title="Photo viewer" wide>
        {g && (
          <figure className="lightbox">
            <div className="lb-media"><Photo slot={g.slot} art={g.art} alt={g.cap} loading="eager" /></div>
            <figcaption>{g.cap}<span>{i + 1} / {GALLERY.length}</span></figcaption>
            <button className="lb-nav prev" onClick={() => setI((i - 1 + GALLERY.length) % GALLERY.length)} aria-label="Previous photo"><I.left size={26} /></button>
            <button className="lb-nav next" onClick={() => setI((i + 1) % GALLERY.length)} aria-label="Next photo"><I.right size={26} /></button>
          </figure>
        )}
      </Modal>
    </section>
  );
}

export default function CampusLife() {
  return (
    <>
      <PageBanner eyebrow="Campus Life" title="Campus Life" lead="Life at KingsterKids doesn’t stop at the last bell. Teams, ensembles, clubs and a very good lunch make the school day feel like part of a community." art="field" slot="banner-campus-life" />

      <section className="section split-life" data-reveal>
        <div className="container life-grid">
          <div className="life-left">
            <h2 className="h-sm">Events and Traditions</h2>
            <p className="lead-red">Every term has something that students look forward to.</p>
            <p>Convocation opens the year on the front lawn, with our Grade 5 students leading the youngest students in. In November, the whole school stops for Founders’ Day and the long table lunch. The winter concert fills the Performing Arts Center for two nights, and the spring Field Day is the one afternoon teachers are required to lose at something.</p>
            <p>Grade 5 students finish with a special Moving Up ceremony, celebrated with the whole school community.</p>
            <hr className="rule" />
            <div className="navy-box">
              <I.users size={34} />
              <h3>Student Activities</h3>
              <p>Student government plans dances, spirit weeks and service days, with an elected council from every division. Anyone can propose a club; it needs a faculty sponsor and five interested students.</p>
              <TextLink href="#clubs">Browse clubs &amp; teams</TextLink>
            </div>
          </div>
          <div className="life-right">
            <div className="life-photo"><Photo slot="campus-bus" art="classroom" alt="Students boarding a school bus" /></div>
            <div className="info-block" id="transport">
              <h3><I.bus size={26} />Transportation</h3>
              <p className="strong">Seven bus routes serve the city and the northern suburbs.</p>
              <p>Morning and afternoon buses stop within a short walk of most homes. Routes and stops are published each August, and families can change their stop with a week’s notice. The bus fee is shown on the <a href="tuition.html">tuition page</a>.</p>
            </div>
            <div className="info-block" id="parking">
              <h3><I.parking size={26} />Parking</h3>
              <p>Visitor parking is free beside Main Hall. Student and staff parking is on the west side of campus, with <b>gated access during school hours</b> and lighting at night.</p>
            </div>
            <div className="info-block" id="dining">
              <h3><I.food size={26} />Dining</h3>
              <p>Lunch is cooked on site every day and served in the dining hall. There is always a vegetarian main, and the kitchen manages allergies carefully. Lower School students eat with their classes; older students choose their own tables.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" data-reveal>
        <div className="container exp-grid">
          <h2>The School Experience</h2>
          <p>{S.fullName} was founded in {S.founded} by a group of parents and has been teaching on the same river bank ever since. We are proud of our results, but we are prouder of the way students speak to each other, and to the adults who teach them.</p>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <ul className="card-3">
            {[
              { slot: "campus-technology", art: "classroom", t: "Technology", d: "Every classroom has shared devices. Computer science is introduced from Kindergarten, and our network is filtered and monitored.", icon: I.monitor },
              { slot: "campus-safety", art: "building", t: "Safety & Security", d: "Staffed entrances, visitor sign-in, trained first-aid staff and drills practised each term. Parents are told before any change in procedure.", icon: I.shield },
              { slot: "campus-health", art: "lab", t: "Health & Wellness", d: "Full-time nurse, two counsellors and a wellness program for all grades. Our quiet room is open to any student, any time.", icon: I.heart }
            ].map((c) => (
              <li className="info-card" key={c.t}>
                <div className="info-card-media"><Photo slot={c.slot} art={c.art} alt="" /></div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                <TextLink href="contact.html">Ask us about it</TextLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Clubs />

      <section className="quote-split" data-reveal>
        <div className="qs-media"><Photo slot="campus-quote" art="studio" alt="Alumna portrait" /></div>
        <div className="qs-copy">
          <Quote className="qs-mark" width="44" />
          <blockquote>I arrived shy and left having directed a play. Nobody here tells you who to be, but everybody notices when you try something.</blockquote>
          <p className="qs-by"><b>Maya Chen</b> / Class of 2025</p>
        </div>
      </section>

      <Gallery />
      <CtaBand title="Come and see it for yourself" text="Campus tours run every weekday at 11 am and 3 pm." />
    </>
  );
}

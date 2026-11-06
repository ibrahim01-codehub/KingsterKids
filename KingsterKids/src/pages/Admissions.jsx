import React, { useEffect, useState } from "react";
import { I } from "../components/Icons";
import { Photo } from "../components/Art";
import { PageBanner, Btn, CtaBand } from "../components/Common";
import { D, S, emit } from "../lib/utils";

const KEY = "rv-checklist";

function Checklist() {
  const items = D.checklist;
  const [done, setDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  });
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) { /* storage unavailable */ } }, [done]);
  const toggle = (i) => setDone(done.includes(i) ? done.filter((x) => x !== i) : [...done, i]);
  const pct = Math.round((done.length / items.length) * 100);
  return (
    <div className="checklist">
      <ul>
        {items.map((t, i) => (
          <li key={i}>
            <label className={done.includes(i) ? "done" : ""}>
              <input type="checkbox" checked={done.includes(i)} onChange={() => toggle(i)} />
              <span className="box" aria-hidden="true"><I.check size={14} /></span>
              <span>{t}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={pct} aria-label="Checklist progress">
        <span style={{ width: pct + "%" }} />
      </div>
      <p className="progress-note">{done.length} of {items.length} ready{done.length > 0 && <> · <button className="text-link plain" onClick={() => setDone([])}>Reset</button></>}</p>
    </div>
  );
}

export default function Admissions() {
  return (
    <>
      <PageBanner eyebrow="Admission" title={"Apply to " + S.shortName} lead="Applications are open for Kindergarten through Grade 5 for the coming school year." art="building" slot="banner-admissions" />

      <section className="section" id="why" data-reveal>
        <div className="container">
          <h2 className="h-sm">Detail About How to Apply</h2>
          <div className="two-col text-cols">
            <p>If you are considering {S.fullName}, we would like to get to know your family. We do not use a formula to select students. Every application, academic and personal, is read in full by at least two members of the Admissions Committee, and we look for students who will contribute to our community as well as benefit from it.</p>
            <p>Most families begin by visiting campus. Prospective students spend part of a normal school day with a current student host, sit in on a class and have lunch in the dining hall. That tells us as much about the fit as any form, and it tells you far more than a brochure can.</p>
          </div>
        </div>
      </section>

      <section className="pillars-band" data-reveal>
        <div className="container">
          <ul className="pillars-4">
            {D.admissionsPillars.map((p) => <li key={p.title}><h3>{p.title}</h3><p>{p.text}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="photo-band" aria-hidden="true">
        <Photo slot="admissions-band" art="building" artView="0 70 800 250" />
      </section>

      <section className="section" id="process" data-reveal>
        <div className="container">
          <h2 className="h-sm">The Application Process</h2>
          <ol className="steps">
            {D.admissionsSteps.map((s, i) => (
              <li key={s.title}>
                <span className="step-n" aria-hidden="true">{i + 1}</span>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </li>
            ))}
          </ol>
          <hr className="rule" />

          <div className="two-col apply-cols">
            <div>
              <h2 className="h-sm">Things to Know First</h2>
              <p>One application covers every division. You will choose the grade your child is entering and any program you would like us to consider, such as the music or athletics pathways.</p>
              <p className="need">You will need:</p>
              <Checklist />
              <div className="btn-row">
                <Btn href="tour.html" variant="gold">Request a campus tour</Btn>
                <Btn variant="navy" onClick={() => emit("inquiry")}>Request information</Btn>
              </div>
            </div>
            <div>
              <h2 className="h-sm">When to Apply?</h2>
              <div className="table-wrap">
                <table className="data-table">
                  <thead><tr><th scope="col"><span className="sr-only">Round</span></th><th scope="col">Application Deadline</th><th scope="col">Decision</th></tr></thead>
                  <tbody>
                    {D.deadlines.map((r) => <tr key={r.round}><th scope="row">{r.round}</th><td>{r.deadline}</td><td>{r.decision}</td></tr>)}
                  </tbody>
                </table>
              </div>
              <h2 className="h-sm mt">Where to submit necessary documents?</h2>
              <p>Documents not submitted through the online portal can be mailed to:</p>
              <address className="mail-addr">
                Office of Admissions<br />{S.fullName}<br />{S.addressLine1}<br />{S.addressLine2} {S.country}
              </address>
              <p>Or emailed to <a href={"mailto:" + S.admissionsEmail}>{S.admissionsEmail}</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

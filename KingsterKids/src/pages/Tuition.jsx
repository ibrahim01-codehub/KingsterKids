import React, { useState } from "react";
import { I } from "../components/Icons";
import { PageBanner, SectionHead, Btn, Accordion, CtaBand } from "../components/Common";
import { D, S, money } from "../lib/utils";

const PLANS = {
  annual: { label: "Pay annually", note: "3% saving, due July 1", calc: (a) => a * 0.97, unit: "/ year", count: 1 },
  two: { label: "Two installments", note: "July and January", calc: (a) => a / 2, unit: "/ installment", count: 2 },
  ten: { label: "Ten monthly payments", note: "July to April, small admin charge", calc: (a) => (a * 1.02) / 10, unit: "/ month", count: 10 }
};

function PlanCards({ plan, selected, setSelected }) {
  const p = PLANS[plan];
  return (
    <div className="plan-grid">
      {D.tuition.map((t) => {
        const Icon = I[t.icon] || I.book;
        const on = selected === t.id;
        return (
          <article key={t.id} className={"plan" + (on ? " selected" : "")}>
            <header>
              <Icon size={34} />
              <h3>{t.name}</h3>
              <p>{t.grades}</p>
            </header>
            <div className="plan-price">
              <span className="cur">$</span>
              <span className="amt">{Math.round(p.calc(t.annual)).toLocaleString("en-US")}</span>
              <span className="per">{p.unit}</span>
            </div>
            <ul>
              {t.includes.map((x) => <li key={x}><I.check size={16} />{x}</li>)}
            </ul>
            <div className="plan-actions">
              <button type="button" className={"btn " + (on ? "btn-gold" : "btn-navy-o")} aria-pressed={on} onClick={() => setSelected(t.id)}>
                {on ? "Selected for estimate" : "Use in estimate"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Estimator({ selected, setSelected, plan }) {
  const [kids, setKids] = useState(1);
  const [aid, setAid] = useState(0);
  const t = D.tuition.find((x) => x.id === selected);
  let gross = 0, discount = 0;
  for (let i = 0; i < kids; i++) {
    const rate = i === 0 ? 0 : i === 1 ? 0.05 : 0.1;
    gross += t.annual;
    discount += t.annual * rate;
  }
  const afterSib = gross - discount;
  const aidAmt = afterSib * (aid / 100);
  const total = afterSib - aidAmt;
  const p = PLANS[plan];
  const per = plan === "annual" ? total * 0.97 : p.calc(total);
  return (
    <div className="estimator">
      <div className="est-form">
        <fieldset>
          <legend>Division</legend>
          <div className="seg">
            {D.tuition.map((x) => (
              <label key={x.id} className={selected === x.id ? "on" : ""}>
                <input type="radio" name="est-div" checked={selected === x.id} onChange={() => setSelected(x.id)} />{x.name}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="est-row">
          <span id="kids-l" className="lbl">Children enrolling</span>
          <div className="stepper" role="group" aria-labelledby="kids-l">
            <button type="button" onClick={() => setKids(Math.max(1, kids - 1))} aria-label="Fewer children"><I.minus size={16} /></button>
            <output aria-live="polite">{kids}</output>
            <button type="button" onClick={() => setKids(Math.min(5, kids + 1))} aria-label="More children"><I.plus size={16} /></button>
          </div>
        </div>
        <div className="est-row col">
          <label htmlFor="aid" className="lbl">Financial aid awarded: <b>{aid}%</b></label>
          <input id="aid" type="range" min="0" max="60" step="5" value={aid} onChange={(e) => setAid(+e.target.value)} />
          <span className="hint">Drag to see how an award would change the figure. Aid is need-based and decided separately.</span>
        </div>
      </div>
      <div className="est-result" aria-live="polite">
        <p className="eyebrow">Estimated tuition</p>
        <p className="est-total">{money(total)}<small> / year</small></p>
        <dl>
          <div><dt>{kids} × {t.name}</dt><dd>{money(gross)}</dd></div>
          {discount > 0 && <div><dt>Sibling discount</dt><dd>− {money(discount)}</dd></div>}
          {aid > 0 && <div><dt>Financial aid ({aid}%)</dt><dd>− {money(aidAmt)}</dd></div>}
        </dl>
        <p className="est-per">{p.label}: <b>{money(plan === "annual" ? per : p.calc(total))}</b> {p.unit}{p.count > 1 && <> × {p.count}</>}</p>
        <p className="hint light">Estimate only. Fees below are not included. Sibling discount: 5% on the second child, 10% on the third and beyond.</p>
        <Btn href="admissions.html#process" variant="gold">Start an application</Btn>
      </div>
    </div>
  );
}

export default function Tuition() {
  const [plan, setPlan] = useState("annual");
  const [selected, setSelected] = useState("upper");
  return (
    <>
      <PageBanner eyebrow="Admissions" title="Tuition & Financial Aid" lead="A clear picture of what a KingsterKids education costs, and how many families make it possible." art="library" align="center" slot="banner-tuition" />

      <section className="section" data-reveal>
        <div className="container">
          <SectionHead eyebrow={"Tuition " + new Date().getFullYear() + "–" + String((new Date().getFullYear() + 1) % 100).padStart(2, "0")} title="Tuition by division" lead="Tuition covers teaching, books for core classes, most field trips and all in-school activities. Choose how you would like to pay and the figures below update." />
          <div className="plan-toggle" role="radiogroup" aria-label="Payment plan">
            {Object.entries(PLANS).map(([k, v]) => (
              <button key={k} role="radio" aria-checked={plan === k} className={plan === k ? "on" : ""} onClick={() => setPlan(k)}>
                <b>{v.label}</b><small>{v.note}</small>
              </button>
            ))}
          </div>
          <PlanCards plan={plan} selected={selected} setSelected={setSelected} />
        </div>
      </section>

      <section className="section est-section" id="estimate" data-reveal>
        <div className="container">
          <SectionHead eyebrow="Estimator" title="What would it cost for your family?" light />
          <Estimator selected={selected} setSelected={setSelected} plan={plan} />
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container">
          <SectionHead eyebrow="Beyond tuition" title="Other fees" lead="Everything else you may be asked to pay, with nothing hidden in the small print." />
          <div className="table-wrap">
            <table className="data-table fees">
              <thead><tr><th scope="col">Item</th><th scope="col">Amount</th><th scope="col" className="hide-s">Notes</th></tr></thead>
              <tbody>
                {D.fees.map((f) => <tr key={f.item}><th scope="row">{f.item}</th><td>{f.amount}</td><td className="hide-s">{f.note}</td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section alt" id="aid" data-reveal>
        <div className="container two-col aid-cols">
          <div>
            <SectionHead eyebrow="Financial aid" title="No family should be ruled out by cost." />
            <p>KingsterKids awards need-based aid to qualifying families each year. Roughly one family in three receives some assistance, and awards are renewed annually.</p>
            <p>Our Business Office is glad to talk through your situation before you apply, in confidence and without obligation.</p>
            <div className="btn-row">
              <Btn href={"mailto:" + S.admissionsEmail + "?subject=Financial%20aid%20question"} variant="navy">Email the Business Office</Btn>
              <Btn href={"tel:" + S.phoneLink} variant="ghost"><I.phone size={16} /> {S.phone}</Btn>
            </div>
          </div>
          <Accordion items={D.aidFaq.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>
      <CtaBand title="Ready to take the next step?" text="Visit campus, meet our teachers and ask us anything about costs." />
    </>
  );
}

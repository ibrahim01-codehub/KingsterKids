import React, { useState } from "react";
import { I } from "../components/Icons";
import { Photo } from "../components/Art";
import { PageBanner, Accordion, Field, Honeypot, Btn } from "../components/Common";
import { Confirmation } from "../components/Layout";
import { D, S, emailOk, phoneOk, sendForm, downloadIcs, fmtDateLong, parseDate } from "../lib/utils";

const pad = (n) => String(n).padStart(2, "0");
function isoOffset(days) {
  const d = new Date(); d.setDate(d.getDate() + days);
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}
const GRADES = ["Kindergarten", ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => "Grade " + g)];

function BookingForm() {
  const empty = { name: "", date: "", time: "", phone: "", email: "", grade: "", visitors: "2", request: "", website: "" };
  const [v, setV] = useState(empty);
  const [err, setErr] = useState({});
  const [state, setState] = useState({ phase: "form" });
  const on = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const min = isoOffset(1);

  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = "Please enter your full name.";
    if (!v.date) e.date = "Choose a date.";
    else if (v.date < min) e.date = "Please choose a date from tomorrow onwards.";
    else if ([0, 6].includes(parseDate(v.date).getDay())) e.date = "Tours run Monday to Friday. Please pick a weekday.";
    if (!v.time) e.time = "Choose a time.";
    if (!phoneOk(v.phone)) e.phone = "Enter a phone number we can reach you on.";
    if (!emailOk(v.email)) e.email = "Enter a valid email address.";
    if (!v.grade) e.grade = "Tell us which grade your child is entering.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    if (Object.keys(e).length) {
      const first = document.querySelector(".appt-form .has-error input, .appt-form .has-error select");
      if (first) first.focus();
      return;
    }
    if (v.website) return;
    setState({ phase: "sending" });
    const r = await sendForm("Campus tour request: " + v.name + ", " + fmtDateLong(v.date) + " " + v.time, {
      Name: v.name, Date: fmtDateLong(v.date), Time: v.time, Phone: v.phone, Email: v.email,
      "Grade entering": v.grade, "Number of visitors": v.visitors, "Special request": v.request
    });
    if (r.mode === "mailto") window.location.href = r.href;
    setState({ phase: r.mode, href: r.href });
  };

  if (state.phase === "mailto" || state.phase === "sent" || state.phase === "error") {
    return (
      <Confirmation state={state}>
        {state.phase !== "error" && (
          <div className="booking-summary">
            <p><I.calendar size={16} /> {fmtDateLong(v.date)} at {v.time}</p>
            <p><I.pin size={16} /> Admissions Center, {S.addressLine1}</p>
            <p><I.user size={16} /> {v.name} · {v.visitors} {v.visitors === "1" ? "visitor" : "visitors"}</p>
            <button className="text-link" onClick={() => downloadIcs({ title: "Campus tour at " + S.fullName, date: v.date, time: v.time, location: S.addressLine1 + ", " + S.addressLine2, description: "Please arrive ten minutes early and check in at the Admissions Center. Phone: " + S.phone })}>
              <I.download size={15} /> Add to my calendar (.ics)
            </button>
          </div>
        )}
        <Btn variant="ghost" onClick={() => { setV(empty); setState({ phase: "form" }); }}>Book another visit</Btn>
      </Confirmation>
    );
  }

  return (
    <form className="appt-form" onSubmit={submit} noValidate>
      <Honeypot value={v.website} onChange={on("website")} />
      <Field label="Full name" name="t-name" value={v.name} onChange={on("name")} error={err.name} required autoComplete="name" />
      <div className="field-row">
        <Field label="Date" name="t-date" type="date" min={min} value={v.date} onChange={on("date")} error={err.date} required />
        <Field label="Time" name="t-time" value={v.time} onChange={on("time")} error={err.time} required>
          <option value="">Select time</option>
          {D.tourTimes.map((t) => <option key={t}>{t}</option>)}
        </Field>
      </div>
      <div className="field-row">
        <Field label="Phone" name="t-phone" type="tel" value={v.phone} onChange={on("phone")} error={err.phone} required autoComplete="tel" />
        <Field label="Email" name="t-email" type="email" value={v.email} onChange={on("email")} error={err.email} required autoComplete="email" />
      </div>
      <div className="field-row">
        <Field label="Grade entering" name="t-grade" value={v.grade} onChange={on("grade")} error={err.grade} required>
          <option value="">Select grade</option>
          {GRADES.map((g) => <option key={g}>{g}</option>)}
        </Field>
        <Field label="Number of visitors" name="t-visitors" value={v.visitors} onChange={on("visitors")}>
          {[1, 2, 3, 4, 5, 6].map((n) => <option key={n}>{n}</option>)}
        </Field>
      </div>
      <Field label="Special request" name="t-request" textarea rows={4} value={v.request} onChange={on("request")} hint="Accessibility needs, a class you would like to see, a teacher you would like to meet." />
      <Btn type="submit" variant="gold" disabled={state.phase === "sending"}>{state.phase === "sending" ? "Sending…" : "Submit Now"}</Btn>
    </form>
  );
}

export default function Tour() {
  return (
    <>
      <PageBanner eyebrow="Make an Appointment For" title="School Tour" art="building" slot="banner-tour" />

      <section className="tour-split">
        <div className="ts-copy">
          <div className="ts-inner">
            <h2>School Tour</h2>
            <p>Campus tours are designed for prospective families. You will see where our students learn, eat and play, meet a member of the Admissions team and hear from a current student about what a normal day is like.</p>
            <p>Students in Grade 5 and above sit in on a class. Younger children visit the Lower School library for a story and a snack.</p>
          </div>
        </div>
        <div className="ts-media"><Photo slot="tour-split" art="classroom" alt="Teacher and students in a classroom" /></div>
      </section>

      <section className="section" id="faq" data-reveal>
        <div className="container two-col faq-cols">
          <div>
            <h2 className="h-sm">Frequently Asked Questions</h2>
            <Accordion items={D.tourFaq} />
          </div>
          <div className="visitor-info">
            <h3>Prospective Families</h3>
            <p>Tours are suitable for any family considering Kindergarten through Grade 5. If you are interested in a particular division, tell us and we will spend extra time there.</p>
            <h3>Complete Your Visit</h3>
            <p>To learn more about the application process, we recommend you also speak to the director of the division your child would join. We are happy to arrange a short conversation on the same day.</p>
            <h3>International Families</h3>
            <p>If you cannot travel to campus, we offer a live video tour with an Admissions officer and a current student. Mention it in the special request box and we will arrange a time that suits your time zone.</p>
          </div>
        </div>
      </section>

      <section className="section appt" id="appointment" data-reveal>
        <div className="container two-col">
          <div>
            <h2 className="h-sm">School Tour Time</h2>
            <p>We are open Monday to Friday at {D.tourTimes.join(" and ")}, except on school holidays.</p>
            <address className="center-addr">
              <b>The Admissions Center</b><br />
              {S.addressLine1}<br />{S.addressLine2}
              <p className="contact-lines"><b>Phone:</b> <a href={"tel:" + S.phoneLink}>{S.phone}</a></p>
              <p className="contact-lines"><b>Email:</b> <a href={"mailto:" + S.admissionsEmail}>{S.admissionsEmail}</a></p>
            </address>
          </div>
          <div>
            <h2 className="h-sm">Make an appointment</h2>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}

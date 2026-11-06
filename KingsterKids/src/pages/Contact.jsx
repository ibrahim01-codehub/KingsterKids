import React, { useState } from "react";
import { I } from "../components/Icons";
import { PageBanner, Field, Honeypot, Btn } from "../components/Common";
import { Confirmation } from "../components/Layout";
import { S, emailOk, sendForm, mapsLink, mapsEmbed, useQuery } from "../lib/utils";

function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", subject: useQuery("subject"), message: "", website: "" });
  const [err, setErr] = useState({});
  const [state, setState] = useState({ phase: "form" });
  const on = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = async (ev) => {
    ev.preventDefault();
    const e = {};
    if (!v.name.trim()) e.name = "Please enter your full name.";
    if (!emailOk(v.email)) e.email = "Please enter a valid email address.";
    if (!v.subject.trim()) e.subject = "Please add a subject.";
    if (v.message.trim().length < 10) e.message = "Please write a short message (at least 10 characters).";
    setErr(e);
    if (Object.keys(e).length) {
      const first = document.querySelector(".contact-form .has-error input, .contact-form .has-error textarea");
      if (first) first.focus();
      return;
    }
    if (v.website) return;
    setState({ phase: "sending" });
    const r = await sendForm("Website enquiry: " + v.subject, { Name: v.name, Email: v.email, Subject: v.subject, Message: v.message }, S.email);
    if (r.mode === "mailto") window.location.href = r.href;
    setState({ phase: r.mode, href: r.href });
  };

  if (["mailto", "sent", "error"].includes(state.phase)) {
    return (
      <Confirmation state={state}>
        <Btn variant="ghost" onClick={() => { setV({ name: "", email: "", subject: "", message: "", website: "" }); setState({ phase: "form" }); }}>Send another message</Btn>
      </Confirmation>
    );
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <Honeypot value={v.website} onChange={on("website")} />
      <Field label="Full Name" name="c-name" value={v.name} onChange={on("name")} error={err.name} required autoComplete="name" />
      <Field label="Email" name="c-email" type="email" value={v.email} onChange={on("email")} error={err.email} required autoComplete="email" />
      <Field label="Subject" name="c-subject" value={v.subject} onChange={on("subject")} error={err.subject} required />
      <Field label="Message" name="c-message" textarea rows={6} value={v.message} onChange={on("message")} error={err.message} required />
      <Btn type="submit" variant="gold" disabled={state.phase === "sending"} className="block">{state.phase === "sending" ? "Sending…" : "Submit Now"}</Btn>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <PageBanner eyebrow="Get in touch" title="Contact Us" lead="Questions about admissions, a visit, or anything else? We usually reply within one working day." art="building" align="center" slot="banner-contact" />

      <section className="contact-info">
        <div className="container contact-cols">
          <div><I.phone size={30} /><h2>Phone</h2><p>{S.officeHours}. Our receptionist will put you through to the right person.</p><a href={"tel:" + S.phoneLink}>{S.phone}</a></div>
          <div><I.mail size={30} /><h2>Email</h2><p>For general questions write to us here. For admissions questions use the Admissions address.</p><a href={"mailto:" + S.email}>{S.email}</a><br /><a href={"mailto:" + S.admissionsEmail}>{S.admissionsEmail}</a></div>
          <div><I.pin size={30} /><h2>Location</h2><p>{S.addressLine1}<br />{S.addressLine2}</p><a href={mapsLink()} target="_blank" rel="noopener noreferrer">View On Google Map</a></div>
        </div>
      </section>

      <section className="section contact-form-section">
        <div className="container narrow">
          <div className="section-head center">
            <h2 className="caps">Leave us your info</h2>
            <p className="lead caps">and we will get back to you.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="map" aria-label="Map">
        <iframe title={"Map showing " + S.fullName} src={mapsEmbed()} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  );
}

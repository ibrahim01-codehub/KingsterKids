import React, { useEffect, useMemo, useState } from "react";
import { I } from "../components/Icons";
import { Photo } from "../components/Art";
import { PageBanner, Btn, EventItem, PostMeta, TextLink } from "../components/Common";
import { D, S, useHash, fmtDate, monthOf } from "../lib/utils";

const PER_PAGE = 4;
const sorted = [...D.posts].sort((a, b) => (b.sticky ? 1 : 0) - (a.sticky ? 1 : 0) || (a.date < b.date ? 1 : -1));
const recent = [...D.posts].sort((a, b) => (a.date < b.date ? 1 : -1));
const allTags = Array.from(new Set(D.posts.flatMap((p) => p.tags))).sort();

function parseRoute(hash) {
  const parts = decodeURIComponent(hash.replace(/^#\/?/, "")).split("/").filter(Boolean);
  const [a, b] = parts;
  if (a === "post") return { view: "post", slug: b };
  if (a === "tag") return { view: "list", tag: b, page: 1 };
  if (a === "page") return { view: "list", page: Math.max(1, parseInt(b, 10) || 1) };
  if (a === "events") return { view: "events" };
  return { view: "list", page: 1 };
}
const hrefFor = (r) => "#/" + r;

/* ---------------------------------------------------------- sidebar */
function Sidebar({ query, setQuery, activeTag }) {
  return (
    <aside className="sidebar">
      <section className="widget">
        <h2 className="widget-title">Search</h2>
        <label className="inline-search wide"><span className="sr-only">Search news</span><I.search size={18} />
          <input type="search" placeholder="Search news" value={query} onChange={(e) => { setQuery(e.target.value); if (window.location.hash && window.location.hash !== "#/") window.location.hash = "#/"; }} />
        </label>
      </section>
      <section className="widget">
        <h2 className="widget-title">From the Head of School</h2>
        <p>Our news page is where families hear first. Check back each week for results, announcements and photographs, and write to us if there is something you would like to see here.</p>
      </section>
      <section className="widget">
        <h2 className="widget-title">Recent News</h2>
        <ul className="recent">
          {recent.slice(0, 4).map((p) => (
            <li key={p.slug}>
              <a className="recent-thumb" href={hrefFor("post/" + p.slug)} tabIndex={-1} aria-hidden="true"><Photo slot={"post-" + p.slug} art={p.art} alt="" /></a>
              <div><a href={hrefFor("post/" + p.slug)}>{p.title}</a><span>{fmtDate(p.date)}</span></div>
            </li>
          ))}
        </ul>
      </section>
      <section className="widget">
        <h2 className="widget-title">Tag Cloud</h2>
        <ul className="tags">
          {allTags.map((t) => <li key={t}><a className={activeTag === t ? "on" : ""} href={hrefFor("tag/" + t)}>{t}</a></li>)}
        </ul>
      </section>
      <section className="widget">
        <h2 className="widget-title">Upcoming Events</h2>
        <ul className="events compact">{D.events.slice(0, 3).map((e) => <EventItem key={e.id} e={e} />)}</ul>
        <TextLink href={hrefFor("events")}>All events</TextLink>
      </section>
    </aside>
  );
}

/* ------------------------------------------------------------ list */
function Pagination({ page, pages, base }) {
  if (pages < 2) return null;
  const link = (n) => (base ? base : "#/page/") + (base ? "" : n);
  return (
    <nav className="pagination" aria-label="Pagination">
      {Array.from({ length: pages }).map((_, i) => (
        <a key={i} href={hrefFor("page/" + (i + 1))} aria-current={page === i + 1 ? "page" : undefined} className={page === i + 1 ? "on" : ""}>{i + 1}</a>
      ))}
      {page < pages && <a href={hrefFor("page/" + (page + 1))} aria-label="Next page"><I.right size={16} /></a>}
    </nav>
  );
}

function PostCard({ p, first }) {
  const href = hrefFor("post/" + p.slug);
  return (
    <article className="post-card">
      <a className="post-media" href={href} tabIndex={-1} aria-hidden="true">
        <Photo slot={"post-" + p.slug} art={p.art} alt="" />
        {p.sticky && <span className="sticky-flag"><I.spark size={14} /> Sticky post</span>}
      </a>
      <div className="post-body">
        <h2><a href={href}>{p.title}</a></h2>
        <PostMeta p={p} />
        <p className="post-tags">{p.tags.map((t) => <a key={t} href={hrefFor("tag/" + t)}>{t}</a>)}</p>
        <p>{p.excerpt}</p>
        <Btn href={href} variant="gold">Read More</Btn>
      </div>
    </article>
  );
}

function List({ route, query, onClear }) {
  const filtered = useMemo(() => {
    const w = query.toLowerCase().trim();
    return sorted.filter((p) => (!route.tag || p.tags.includes(route.tag)) && (!w || (p.title + p.excerpt + p.tags.join(" ")).toLowerCase().includes(w)));
  }, [route.tag, query]);
  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const page = Math.min(route.page || 1, pages);
  const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return (
    <div>
      {(route.tag || query) && (
        <p className="filter-note">
          {route.tag && <>Showing posts tagged <b>{route.tag}</b>. </>}
          {query && <>Matching “<b>{query}</b>”. </>}
          <a href="#/" onClick={onClear}>Show all news</a>
        </p>
      )}
      {shown.length ? shown.map((p) => <PostCard key={p.slug} p={p} />) : <p className="empty">No stories found. <a className="text-link" href="#/">Show all news</a></p>}
      {!route.tag && !query && <Pagination page={page} pages={pages} />}
    </div>
  );
}

/* ------------------------------------------------------------ post */
function Post({ slug }) {
  const idx = recent.findIndex((p) => p.slug === slug);
  const p = recent[idx];
  const [copied, setCopied] = useState(false);
  useEffect(() => { window.scrollTo({ top: 0 }); if (p) document.title = p.title + " | " + S.fullName; }, [slug]);
  if (!p) return <p className="empty">That story couldn’t be found. <a className="text-link" href="#/">Back to news</a></p>;
  const prev = recent[idx + 1], next = recent[idx - 1];
  const copy = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch (e) { window.prompt("Copy this link:", window.location.href); }
  };
  return (
    <article className="post-full">
      <a className="back-link" href="#/"><I.back size={16} /> All news</a>
      <div className="post-hero"><Photo slot={"post-" + p.slug} art={p.art} alt="" loading="eager" /></div>
      <h1>{p.title}</h1>
      <PostMeta p={p} />
      <p className="post-tags">{p.tags.map((t) => <a key={t} href={hrefFor("tag/" + t)}>{t}</a>)}</p>
      <div className="prose">
        <p className="deck">{p.excerpt}</p>
        {p.body.map((t, i) => <p key={i}>{t}</p>)}
      </div>
      <div className="share">
        <span>Share this story</span>
        <button type="button" onClick={copy}><I.link size={16} /> {copied ? "Link copied" : "Copy link"}</button>
        <a href={"mailto:?subject=" + encodeURIComponent(p.title) + "&body=" + encodeURIComponent(window.location.href)}><I.mail size={16} /> Email</a>
        <button type="button" onClick={() => window.print()}><I.print size={16} /> Print</button>
      </div>
      <nav className="prevnext" aria-label="More stories">
        {prev ? <a href={hrefFor("post/" + prev.slug)}><small><I.back size={14} /> Older</small>{prev.title}</a> : <span />}
        {next ? <a className="r" href={hrefFor("post/" + next.slug)}><small>Newer <I.arrow size={14} /></small>{next.title}</a> : <span />}
      </nav>
    </article>
  );
}

/* ---------------------------------------------------------- events */
function Events() {
  return (
    <div className="events-page">
      <h1 className="h-sm">Upcoming Events</h1>
      <p className="muted">Dates are subject to change. All events are on campus unless noted.</p>
      <ul className="events big">
        {D.events.map((e) => (
          <li className="event" key={e.id}>
            <div className="event-date" aria-hidden="true"><b>{String(new Date(e.date + "T12:00:00").getDate()).padStart(2, "0")}</b><span>{monthOf(e.date)}</span></div>
            <div className="event-body">
              <h2><a href={e.link}>{e.title}</a></h2>
              <p><span><I.calendar size={14} /> {fmtDate(e.date)}</span><span><I.clock size={14} /> {e.time}</span><span><I.pin size={14} /> {e.place}</span></p>
            </div>
          </li>
        ))}
      </ul>
      <a className="back-link" href="#/"><I.back size={16} /> Back to news</a>
    </div>
  );
}

export default function News() {
  const hash = useHash();
  const route = parseRoute(hash);
  const [query, setQuery] = useState("");
  useEffect(() => { if (route.view === "post") window.scrollTo({ top: 0 }); }, [route.view, route.slug]);
  const title = route.view === "post" ? "News" : route.view === "events" ? "Events" : "News & Events";
  return (
    <>
      <PageBanner eyebrow="Latest from campus" title={title === "News" ? "News" : "News & Events"} lead="Results, announcements and dates for the KingsterKids community." art="stage" slot="banner-news" />
      <section className="section news-page">
        <div className="container news-grid">
          <div className="news-main">
            {route.view === "post" ? <Post slug={route.slug} /> : route.view === "events" ? <Events /> : <List route={route} query={query} onClear={() => setQuery("")} />}
          </div>
          <Sidebar query={query} setQuery={setQuery} activeTag={route.tag} />
        </div>
      </section>
    </>
  );
}

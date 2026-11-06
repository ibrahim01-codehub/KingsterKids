RIVERSIDE PREPARATORY SCHOOL  -  WEBSITE
=========================================

HOW TO RUN
  Double-click  index.html.  That's it. No server, no install, works offline
  (the map on the Contact page needs internet).

THE 8 PAGES
  index.html         Home
  academics.html     Divisions, course catalog (filter + search), faculty
  admissions.html    How to apply, 6-step process, deadlines, checklist
  tuition.html       Tuition by division, payment plans, cost estimator, fees, aid FAQ
  campus-life.html   Events, transport/parking/dining, clubs directory, gallery
  tour.html          Tour FAQ + booking form (with calendar file download)
  news.html          Blog: posts, tags, search, pagination, events list
  contact.html       Contact details, form, map


WHAT TO CHANGE  (in order of how often you'll do it)
-----------------------------------------------------
1) assets/js/site-data.js      <-- open it in any text editor
     - School name, e-mail, phone, address, social links     (top of file)
     - PHOTOS: every image path, with a comment saying where it appears
       and the recommended size                              (section 0)
     - Courses, teachers, clubs, news posts, events, tuition prices,
       deadlines, FAQs, testimonials, stats                  (rest of file)
   Save, refresh the browser. No build step.

2) Images
     Put your files in  assets/img/  using the names listed in the "photos"
     section of site-data.js (or change the path there to any file name).
     A missing image is replaced by a built-in illustration, so the site
     never looks broken while you add photos.
     A few starter photos (home hero, campus tiles, footer building) are
     already in assets/img/ - they were cut from the reference image and are
     LOW RESOLUTION. Replace them with your own.

3) Colours and fonts
     assets/css/style.css  -  the :root { ... } block at the very top.

4) Forms (Contact, Tour, "Request information")
     A website with no server cannot send e-mail by itself.
       - Default: pressing Submit opens the visitor's e-mail app with the
         message already written, addressed to your e-mail in site-data.js.
       - Better: create a free form endpoint (Formspree.io, Getform, Basin),
         paste its URL into  formEndpoint  in site-data.js. Messages are then
         delivered silently to your inbox with a proper thank-you message.

5) "Watch Video" button (home page)
     Put a file at  assets/video/campus-tour.mp4   OR paste a YouTube embed
     link into  videoEmbedUrl  in site-data.js.  Until then the button shows
     a friendly "coming soon" message with a link to book a tour.

6) Page wording (headlines, paragraphs)
     These live in  src/pages/*.jsx  (React). Two ways to change them:
       a) Easy: open  assets/js/app.js  (it is readable, not minified),
          press Ctrl+F, find the sentence, edit it, save, refresh.
          (Do this OR option b, not both - option b overwrites app.js.)
       b) Proper: edit the file in src/pages, then rebuild:
              npm install        (once)
              npm run build


PUBLISHING
  Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages,
  cPanel/FTP). Keep the folder structure as it is.


FOLDER MAP
  *.html                the 8 pages (tiny shells; content is rendered by React)
  assets/js/site-data.js   YOUR CONTENT (edit this)
  assets/js/app.js         compiled site code (readable)
  assets/js/vendor.js      React (minified, don't touch)
  assets/css/style.css     all styling
  assets/fonts/            Source Serif 4 + Inter (bundled, works offline)
  assets/img/              your photos
  assets/video/            your video
  src/                     React source code (needed only to rebuild)
  build.mjs, package.json  build tooling (needs Node.js 18+)

NICE EXTRAS
  - Press "/" anywhere to open site search.
  - Admissions checklist remembers ticks in the visitor's browser.
  - Tour page: after booking, visitors can download a .ics calendar file.
  - Tuition page: payment-plan switch and a family cost estimator.

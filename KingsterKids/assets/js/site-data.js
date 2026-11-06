/* ==========================================================================
   SITE DATA  -  edit this file, save, refresh the browser. No build needed.
   --------------------------------------------------------------------------
   Everything that changes from school to school lives here: name, contact
   details, courses, teachers, news, events, prices, FAQs and so on.
   Layout and page wording live in src/ (see README.txt).
   ========================================================================== */

window.SITE_DATA = {

  /* ---------------------------------------------------------------------
     0. PHOTOS  -  ADD YOUR IMAGES HERE
     ---------------------------------------------------------------------
     Put your image files in the  assets/img/  folder, using the file names
     below (or change the path on the right to any file name you like).
     If a file is missing, the site shows a built-in illustration instead,
     so nothing ever looks broken while you are adding photos.

     Tip: .jpg or .webp, under ~400 KB each. Sizes are recommendations.
     --------------------------------------------------------------------- */
  photos: {
    /* --- HOME PAGE --- */
    "hero-home": "assets/img/hero-home.jpg",                 // Big hero photo, right side. 1600 x 1000 px (student in class)
    "division-lower": "assets/img/division-lower.jpg",       // Lower School card. 800 x 600 px
    "division-middle": "assets/img/division-middle.jpg",     // Middle School card. 800 x 600 px
    "division-upper": "assets/img/division-upper.jpg",       // Upper School card. 800 x 600 px
    "campus-students": "assets/img/campus-students.jpg",     // Campus-life grid, tile 1 (students). 800 x 600 px
    "campus-stage": "assets/img/campus-stage.jpg",           // Campus-life grid, tile 2 (drama / stage). 800 x 600 px
    "campus-soccer": "assets/img/campus-soccer.jpg",         // Campus-life grid, tile 3 (sports). 800 x 600 px
    "campus-band": "assets/img/campus-band.jpg",             // Campus-life grid, tile 4 (music). 800 x 600 px
    "campus-building": "assets/img/campus-building.jpg",     // Footer picture of your main building. 600 x 480 px

    /* --- PAGE BANNERS (optional) ---
       Leave "" to keep the navy illustrated banner.
       If you add a photo it is shown behind a navy overlay. 1920 x 700 px */
    "banner-academics": "",       // e.g. "assets/img/banner-academics.jpg"
    "banner-admissions": "",
    "banner-tuition": "",
    "banner-campus-life": "",
    "banner-tour": "",
    "banner-news": "",
    "banner-contact": "",

    /* --- ADMISSIONS PAGE --- */
    "admissions-band": "assets/img/admissions-band.jpg",     // Wide band under "Why KingsterKids". 1920 x 600 px

    /* --- SCHOOL TOUR PAGE --- */
    "tour-split": "assets/img/tour-split.jpg",               // Right half of the navy split section. 1000 x 700 px

    /* --- CAMPUS LIFE PAGE --- */
    "campus-bus": "assets/img/campus-bus.jpg",               // Photo above "Transportation". 900 x 560 px
    "campus-technology": "assets/img/campus-technology.jpg", // Card: Technology. 800 x 560 px
    "campus-safety": "assets/img/campus-safety.jpg",         // Card: Safety & Security. 800 x 560 px
    "campus-health": "assets/img/campus-health.jpg",         // Card: Health & Wellness. 800 x 560 px
    "campus-quote": "assets/img/campus-quote.jpg",           // Portrait beside the quote (alumna / student). 900 x 900 px
    "gallery-1": "assets/img/gallery-1.jpg",                 // Photo gallery (8 pictures, any shape). 1000 x 750 px each
    "gallery-2": "assets/img/gallery-2.jpg",
    "gallery-3": "assets/img/gallery-3.jpg",
    "gallery-4": "assets/img/gallery-4.jpg",
    "gallery-5": "assets/img/gallery-5.jpg",
    "gallery-6": "assets/img/gallery-6.jpg",
    "gallery-7": "assets/img/gallery-7.jpg",
    "gallery-8": "assets/img/gallery-8.jpg",

    /* --- COURSE CARDS (one per course, 800 x 560 px) --- */
    "course-ap-calculus-bc": "assets/img/course-ap-calculus-bc.jpg",
    "course-ap-biology": "assets/img/course-ap-biology.jpg",
    "course-physics-engineering": "assets/img/course-physics-engineering.jpg",
    "course-computer-science": "assets/img/course-computer-science.jpg",
    "course-literature-composition": "assets/img/course-literature-composition.jpg",
    "course-modern-world-history": "assets/img/course-modern-world-history.jpg",
    "course-modern-languages": "assets/img/course-modern-languages.jpg",
    "course-concert-band": "assets/img/course-concert-band.jpg",
    "course-studio-art": "assets/img/course-studio-art.jpg",
    "course-drama-stagecraft": "assets/img/course-drama-stagecraft.jpg",
    "course-athletics-conditioning": "assets/img/course-athletics-conditioning.jpg",
    "course-lower-school-foundations": "assets/img/course-lower-school-foundations.jpg",

      /* --- TEACHER PORTRAITS (square, 600 x 600 px). Missing = initials circle --- */
    "faculty-daniel-okafor": "assets/img/faculty-daniel-okafor.jpg",
    "faculty-priya-raman": "assets/img/b2.jpg",          // <--- CHANGED TO B2
    "faculty-helena-marsh": "assets/img/b1.jpg",         // <--- CHANGED TO B1
    "faculty-ahmed-haddad": "assets/img/faculty-ahmed-haddad.jpg",
    "faculty-sophie-laurent": "assets/img/faculty-sophie-laurent.jpg",
    "faculty-thomas-whitaker": "assets/img/b3.jpg",      // <--- CHANGED TO B3
    "faculty-grace-lindqvist": "assets/img/faculty-grace-lindqvist.jpg",
    "faculty-marcus-delgado": "assets/img/faculty-marcus-delgado.jpg",
    "faculty-rachel-kim": "assets/img/faculty-rachel-kim.jpg",

    /* --- NEWS POSTS (one per article, 1200 x 700 px) --- */
    "post-fall-open-house-2026": "assets/img/post-fall-open-house-2026.jpg",
    "post-debate-regional-title": "assets/img/post-debate-regional-title.jpg",
    "post-robotics-state-qualifier": "assets/img/post-robotics-state-qualifier.jpg",
    "post-varsity-soccer-semifinal": "assets/img/post-varsity-soccer-semifinal.jpg",
    "post-winter-concert-rehearsals": "assets/img/post-winter-concert-rehearsals.jpg",
    "post-new-science-wing": "assets/img/post-new-science-wing.jpg",
    "post-new-faculty-2026": "assets/img/post-new-faculty-2026.jpg",
    "post-financial-aid-open": "assets/img/post-financial-aid-open.jpg",
    "post-alumni-spotlight-osei": "assets/img/post-alumni-spotlight-osei.jpg",
    "post-summer-reading-wrap": "assets/img/post-summer-reading-wrap.jpg"
  },

  /* ---------------------------------------------------------------------
     1. BASICS  (change these first)
     --------------------------------------------------------------------- */
  site: {
    name: "KingsterKids",                    // big word in the logo
    subname: "Elementary School",            // small line under it
    fullName: "KingsterKids Elementary School",
    shortName: "KingsterKids",               // used inside sentences
    founded: 1958,

    email: "info@KingsterKids.edu",          // general enquiries + footer + top bar
    admissionsEmail: "admissions@KingsterKids.edu",    // forms are sent here
    phone: "+1 (555) 123-4567",              // as displayed
    phoneLink: "+15551234567",               // digits only, for tap-to-call

    addressLine1: "1234 Elm Street",
    addressLine2: "Downtown, ST 12345",
    country: "USA",

    officeHours: "Monday to Friday, 8:00 am to 4:30 pm",

    /* Social links. Leave "" to hide an icon. */
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      x: "https://x.com/",
      linkedin: "https://www.linkedin.com/",
      youtube: "https://www.youtube.com/"
    },

    /* CONTACT FORMS
       Static sites cannot send e-mail on their own. Two options:
       A) Leave formEndpoint empty: the form opens the visitor's e-mail app
          with the message already written (works everywhere, nothing to set up).
       B) Paste a Formspree / Getform / Basin URL here (e.g.
          "https://formspree.io/f/abcdwxyz") and forms are delivered silently
          to your inbox with a proper "thank you" message. */
    formEndpoint: "",

    /* "Watch Video" button on the home page.
       Either put a file at assets/video/campus-tour.mp4  ...
       ... or paste a YouTube embed link below, e.g.
       "https://www.youtube.com/embed/XXXXXXXXXXX" */
    videoFile: "assets/video/campus-tour.mp4",
    videoEmbedUrl: "",

    /* Used for the "View on Google Maps" link and the embedded map */
    mapQuery: "1234 Elm Street, Downtown, ST 12345"
  },

  /* ---------------------------------------------------------------------
     2. NAVIGATION  (page ids match the <body data-page="..."> of each file)
     --------------------------------------------------------------------- */
  nav: [
    { label: "About", href: "index.html#about", page: "about" },
    { label: "Academics", href: "academics.html", page: "academics", children: [
      { label: "Elementary School", href: "academics.html#divisions" },
      { label: "Course Catalog", href: "academics.html#courses" },
      { label: "Faculty", href: "academics.html#faculty" }
    ]},
    { label: "Admissions", href: "admissions.html", page: "admissions", children: [
      { label: "Why KingsterKids?", href: "admissions.html#why" },
      { label: "Application Process", href: "admissions.html#process" },
      { label: "Visit Our Campus", href: "tour.html" }
    ]},
    { label: "Campus Life", href: "campus-life.html", page: "campus-life", children: [
      { label: "Clubs & Athletics", href: "campus-life.html#clubs" },
      { label: "Dining", href: "campus-life.html#dining" },
      { label: "Transportation", href: "campus-life.html#transport" },
      { label: "Photo Gallery", href: "campus-life.html#gallery" }
    ]},
    { label: "News & Events", href: "news.html", page: "news" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],

  /* Small links in the dark bar at the very top */
  topLinks: [
    { label: "Parents", href: "index.html" },
    { label: "Students", href: "campus-life.html" },
    { label: "Alumni", href: "news.html#/tag/Alumni" }
  ],

  /* ---------------------------------------------------------------------
     3. HOME PAGE NUMBERS
     --------------------------------------------------------------------- */
  stats: [
    { value: 98, suffix: "%", label: "Student Satisfaction Rate" },
    { value: 12, suffix: ":1", label: "Student-Teacher Ratio" },
    { value: 15, suffix: "+", label: "Extracurricular Activities" },
    { value: 300, suffix: "+", label: "Happy Students" }
  ],

  /* ---------------------------------------------------------------------
     4. TESTIMONIALS
     --------------------------------------------------------------------- */
  testimonials: [
    { quote: "KingsterKids has challenged my daughter to grow academically and personally. The teachers truly care about each student.", who: "The Johnson Family" },
    { quote: "The sense of community is incredible. Our son has found confidence and opportunities he never imagined.", who: "The Martinez Family" },
    { quote: "An exceptional school that prepares students not just for college, but for life.", who: "The Anderson Family" },
    { quote: "We toured four schools. Here, the students introduced themselves, shook our hands and talked about their classes without being prompted. That decided it.", who: "The Patel Family" },
    { quote: "Class sizes are small enough that every teacher knows how our kids learn. Homework feedback arrives in days, not weeks.", who: "The Nguyen Family" },
    { quote: "Our twins arrived in Kindergarten nervous. By Grade 3 they were running a little club and mentoring younger students.", who: "The Brooks Family" }
  ],

  /* ---------------------------------------------------------------------
     5. FACULTY
     --------------------------------------------------------------------- */
  faculty: [
    { id: "daniel-okafor", name: "Daniel Okafor", role: "Chair, Mathematics & Computer Science", since: 2011, bio: "Mr. Okafor taught at two public high schools before joining KingsterKids. He coaches the Math Team and has sent students to the state finals nine years running." },
    { id: "priya-raman", name: "Dr. Priya Raman", role: "Chair, Sciences", since: 2013, bio: "Dr. Raman holds a Ph.D. in molecular biology and still publishes with former lab colleagues. She leads the Science Olympiad squad and the new science wing planning group." },
    { id: "helena-marsh", name: "Helena Marsh", role: "English & Theatre", since: 2008, bio: "Ms. Marsh teaches Literature & Composition and directs two productions a year. Former students describe her margin comments as the most useful reading they did in high school." },
    { id: "ahmed-haddad", name: "Ahmed Haddad", role: "History & Global Studies", since: 2015, bio: "Mr. Haddad grew up in Amman and Montreal and teaches world history through primary sources. He advises the Model UN delegation." },
    { id: "sophie-laurent", name: "Sophie Laurent", role: "Chair, Modern Languages", since: 2010, bio: "Mme. Laurent teaches French and Spanish and organises the biennial exchange trip to Lyon. All of her upper-level classes are conducted entirely in the target language." },
    { id: "thomas-whitaker", name: "Thomas Whitaker", role: "Director of Music", since: 2009, bio: "Mr. Whitaker leads the Concert Band, Jazz Ensemble and Chamber Choir. A working trumpet player, he performs with a regional symphony on weekends." },
    { id: "grace-lindqvist", name: "Grace Lindqvist", role: "Visual Arts", since: 2016, bio: "Ms. Lindqvist is a practising printmaker. She runs the Studio Art portfolio course and curates the spring student exhibition at the Performing Arts Center." },
    { id: "marcus-delgado", name: "Marcus Delgado", role: "Director of Athletics", since: 2012, bio: "Coach Delgado played collegiate soccer and has coached at KingsterKids for fourteen seasons. He believes every student athlete should leave knowing how to lose well." },
    { id: "rachel-kim", name: "Rachel Kim", role: "Lower School Lead Teacher", since: 2014, bio: "Mrs. Kim holds a master's degree in early literacy and trains new Lower School teachers. She teaches third grade and still reads aloud every afternoon." }
  ],

  /* ---------------------------------------------------------------------
     6. COURSES  (dept: STEM | Humanities | Languages | Arts | Athletics)
        art: building | library | lab | music | field | studio | stage | classroom | globe
     --------------------------------------------------------------------- */
  courses: [
    { slug: "ap-calculus-bc", title: "Advanced Math Explorers", dept: "STEM", teacher: "Daniel Okafor", grades: "4–5", art: "classroom",
      schedule: "5 periods a week", credit: "1.0", prereq: "Grade 3 Math",
      blurb: "Number patterns, puzzles and hands-on problem solving for young mathematicians.",
      desc: "A challenging but playful course for Grade 4 and 5 students who love numbers. We explore fractions, geometry and logic through games, building projects and weekly math mysteries." },
    { slug: "ap-biology", title: "Life Science & Nature Lab", dept: "STEM", teacher: "Dr. Priya Raman", grades: "3–5", art: "lab",
      schedule: "4 periods + 1 outdoor lab", credit: "1.0", prereq: "None",
      blurb: "Plants, animals and the environment, with a nature walk every week.",
      desc: "Students discover how living things grow and interact. We grow beans in the classroom, observe insects in the school garden, and learn to keep a simple science journal." },
    { slug: "physics-engineering", title: "Physics & Engineering Design", dept: "STEM", teacher: "Dr. Priya Raman", grades: "4–5", art: "lab",
      schedule: "4 periods + 1 workshop", credit: "1.0", prereq: "None",
      blurb: "Simple machines and building projects every term.",
      desc: "Young engineers learn how things work by making them. Projects include building a sturdy bridge from craft sticks, designing a balloon-powered car, and testing which materials float best." },
    { slug: "computer-science", title: "Computer Science: Coding & Play", dept: "STEM", teacher: "Daniel Okafor", grades: "3–5", art: "classroom",
      schedule: "3 periods a week", credit: "0.5", prereq: "None",
      blurb: "Block-based coding, simple robots and digital safety.",
      desc: "No prior coding required. Students use Scratch and simple robots to learn sequencing, loops and problem solving. We also talk about how to be safe and kind online." },
    { slug: "literature-composition", title: "Literature & Storytelling", dept: "Humanities", teacher: "Helena Marsh", grades: "2–5", art: "library",
      schedule: "5 periods a week", credit: "1.0", prereq: "None",
      blurb: "Read-alouds, picture books and learning to write your own stories.",
      desc: "Students read a wide variety of stories and learn to talk about characters and feelings. We write and illustrate our own short books, which are shared at a spring author's tea." },
    { slug: "modern-world-history", title: "World History: Our World & Its People", dept: "Humanities", teacher: "Ahmed Haddad", grades: "3–5", art: "globe",
      schedule: "4 periods a week", credit: "1.0", prereq: "None",
      blurb: "Maps, cultures and celebrations from around the world.",
      desc: "A gentle introduction to world cultures and geography. We look at maps, listen to stories from different countries, and learn about festivals, food and daily life in other parts of the world." },
    { slug: "modern-languages", title: "French & Spanish Adventures", dept: "Languages", teacher: "Sophie Laurent", grades: "K–5", art: "globe",
      schedule: "3 periods a week", credit: "1.0", prereq: "None",
      blurb: "Songs, games and simple conversation in French and Spanish.",
      desc: "Young learners are introduced to French and Spanish through songs, puppets, games and picture books. The focus is on listening, speaking and having fun with new sounds. No prior language experience needed." },
    { slug: "concert-band", title: "Concert Band & Music Makers", dept: "Arts", teacher: "Thomas Whitaker", grades: "3–5", art: "music",
      schedule: "2 periods + 1 evening rehearsal", credit: "0.5", prereq: "One year of instrument study (Grade 4–5 only)",
      blurb: "Beginner band, recorders and three performances a year.",
      desc: "Grade 3 students start on recorders and percussion; Grade 4 and 5 students may join the beginner Concert Band. We perform at the Winter Concert, the Spring Festival and a regional competition." },
    { slug: "studio-art", title: "Studio Art & Creativity", dept: "Arts", teacher: "Grace Lindqvist", grades: "K–5", art: "studio",
      schedule: "3 double periods a week", credit: "1.0", prereq: "None",
      blurb: "Drawing, painting, printmaking and a spring art show.",
      desc: "Students work in a dedicated art studio with plenty of materials and freedom to explore. We paint, draw, sculpt and print, and every child exhibits a favourite piece at the April art show." },
    { slug: "drama-stagecraft", title: "Drama & Creative Play", dept: "Arts", teacher: "Helena Marsh", grades: "2–5", art: "stage",
      schedule: "2 periods a week + production hours", credit: "0.5", prereq: "None",
      blurb: "Acting, costumes and putting on a show for the school.",
      desc: "Half the class is on stage and half is behind it, and they swap each term. We play theatre games, learn to speak clearly, and mount one full production a year in the Performing Arts Center." },
    { slug: "athletics-conditioning", title: "Athletics & Active Play", dept: "Athletics", teacher: "Marcus Delgado", grades: "K–5", art: "field",
      schedule: "Daily recess + 2 PE periods", credit: "0.25 per season", prereq: "Physical on file",
      blurb: "Running, jumping, team games and seasonal sports.",
      desc: "Every child takes part in daily active play and two PE periods a week. We play team games, learn basic sports skills and enjoy seasonal events like the school fun run. No student is ever left out." },
    { slug: "lower-school-foundations", title: "Foundations of Reading & Math", dept: "Lower School", teacher: "Rachel Kim", grades: "K–5", art: "classroom",
      schedule: "Daily, 90 minutes", credit: "n/a", prereq: "None",
      blurb: "Phonics, number sense and a read-aloud every afternoon.",
      desc: "Small groups, hands-on materials and a lot of talk. Reading levels are assessed three times a year so that no child is left to coast or struggle unnoticed." }
  ],
  /* ---------------------------------------------------------------------
     7. DIVISIONS  (tabs on the Academics page)
     --------------------------------------------------------------------- */
  divisions: [
    { id: "lower", name: "Elementary School", grades: "Kindergarten to Grade 2", blurb: "Counting, reading, building and asking why. Small classes and a daily read-aloud lay the groundwork for everything that follows.",
      points: ["Two teachers in every Kindergarten and Grade 1 classroom", "Spanish from Kindergarten, music and art twice a week", "Outdoor classroom and garden beds tended by Grade 2", "Reading and math groups reassessed three times a year"],
      facts: [["16", "students per class"], ["8:15–3:00", "school day"], ["Optional", "extended care until 6 pm"]] },
      
    { id: "middle", name: "Middle Elementary", grades: "Grade 3 to Grade 4", blurb: "Building independence and deeper thinking. Students start taking on bigger projects, reading longer books, and exploring science in the lab.",
      points: ["Introduction to the science lab and computer room", "Daily independent reading time", "Beginning band and choir options", "Weekly library visits and research projects"],
      facts: [["18", "students per class"], ["8:15–3:15", "school day"], ["Included", "hot lunch program"]] },
      
    { id: "upper", name: "Upper Elementary", grades: "Grade 5", blurb: "The capstone year before middle school. Grade 5 focuses on leadership, public speaking, and bringing together everything they've learned.",
      points: ["Leadership roles and peer mentoring", "Major spring capstone project", "Advanced math and literature groups", "Overnight outdoor education trip"],
      facts: [["18", "students per class"], ["8:15–3:30", "school day"], ["Included", "1:1 device program"]] }
  ],
  /* ---------------------------------------------------------------------
     8. CLUBS & TEAMS  (cat: Athletics | Arts | Academic | Service)
     --------------------------------------------------------------------- */
  clubs: [
    { name: "Junior Soccer", cat: "Athletics", when: "Fall", level: "Grades 1–5", note: "Regional league. Home games on the lower field." },
    { name: "Cross Country", cat: "Athletics", when: "Fall", level: "Grades 2–5", note: "Practice on the nature trail. All abilities welcome." },
    { name: "Basketball", cat: "Athletics", when: "Winter", level: "Grades 3–5", note: "Co-ed teams learning the basics and having fun." },
    { name: "Swimming", cat: "Athletics", when: "Winter", level: "Grades 2–5", note: "Practice at the city aquatic center, once weekly." },
    { name: "Tennis", cat: "Athletics", when: "Spring", level: "Grades 3–5", note: "Four courts on campus; learning to rally in the spring." },
    { name: "Track & Field", cat: "Athletics", when: "Spring", level: "Grades 1–5", note: "Fun runs and relay races in April and May." },
    { name: "Beginner Band", cat: "Arts", when: "All year", level: "Grades 4–5", note: "Recorders, percussion and learning to read music." },
    { name: "Chamber Choir", cat: "Arts", when: "All year", level: "Grades 3–5", note: "Singing together, from simple rounds to school concerts." },
    { name: "Drama Club", cat: "Arts", when: "Fall & Spring", level: "Grades 2–5", note: "Autumn play and spring musical. Costume makers always needed." },
    { name: "Art Club", cat: "Arts", when: "Lunch & after school", level: "Grades 1–5", note: "Open studio plus a student art show each April." },
    { name: "Speech & Debate", cat: "Academic", when: "Fall to Spring", level: "Grades 4–5", note: "Learning to speak clearly and share ideas with confidence." },
    { name: "Robotics & Coding", cat: "Academic", when: "Winter", level: "Grades 3–5", note: "Building simple robots and playing with Scratch." },
    { name: "Model United Nations", cat: "Academic", when: "Fall to Spring", level: "Grades 4–5", note: "Learning about world cultures and solving problems together." },
    { name: "Math Club", cat: "Academic", when: "Fall & Winter", level: "Grades 2–5", note: "Puzzles, games and math mysteries every week." },
    { name: "Science Explorers", cat: "Academic", when: "Winter & Spring", level: "Grades 1–5", note: "Hands-on experiments with plants, slime and rockets." },
    { name: "Community Service League", cat: "Service", when: "All year", level: "Grades 2–5", note: "Food bank shifts, garden clean-ups, and making cards for seniors." },
    { name: "Reading Buddies", cat: "Service", when: "Lunch", level: "Grades 4–5", note: "Older students read picture books to the Kindergarten classes." },
    { name: "Environmental Club", cat: "Service", when: "After school", level: "Grades 2–5", note: "Campus garden, recycling helpers, and looking after the school pets." }
  ],
  /* ---------------------------------------------------------------------
     9. NEWS  (newest first.  tags are clickable on the News page)
     --------------------------------------------------------------------- */
  posts: [
    { slug: "fall-open-house-2026", sticky: true, date: "2026-10-28", author: "Admissions Office", tags: ["Admissions", "Events"], art: "building",
      title: "Fall Open House Set for Saturday, November 14",
      excerpt: "Families are invited to spend a morning on campus: classroom visits, student-led tours, and time with the Head of School and division directors.",
      body: [
        "KingsterKids will open its doors on Saturday, November 14, from 10:00 am to 1:00 pm. The morning is designed for families considering entry in Kindergarten through Grade 5.",
        "The programme begins in Main Hall with a short welcome from the Head of School, followed by student-led tours of the Lower, Middle and Upper School buildings. Teachers will be teaching live demonstration lessons in science, languages and the arts throughout the morning, so prospective students can see what a normal class feels like.",
        "Admissions staff will be on hand to talk through the application timeline and financial aid. Light refreshments are provided by the Parent Association. Registration is free but helps us plan; please use the tour request form or call the Admissions Office."
      ] },
    { slug: "debate-regional-title", date: "2026-11-02", author: "Communications Office", tags: ["Academics", "Community"], art: "stage",
      title: "KingsterKids Debate Team Takes Regional Title for Second Straight Year",
      excerpt: "Six students argued their way past twenty-two schools over a two-day tournament, and the final round went to a split decision.",
      body: [
        "The KingsterKids Debate Team returned from the regional championship with first place in team standings and individual speaker awards for juniors Maya Chen and Elliott Brooks.",
        "Coach Ahmed Haddad credits the result to a summer of preparation. 'They read far more than the topic required,' he said. 'The final round turned on a footnote one of our students had found in a government report.'",
        "The team now advances to the state tournament in February. New members from Grade 3 and above are welcome at Tuesday practice in Room 214."
      ] },
    { slug: "robotics-state-qualifier", date: "2026-10-21", author: "Communications Office", tags: ["Academics", "Awards"], art: "lab",
      title: "Upper School Robotics Team Qualifies for State Championship",
      excerpt: "A last-minute rebuild of the drive train in the Saturday qualifier turned a near-miss into a spot at State.",
      body: [
        "After a difficult first two rounds, the robotics team spent its lunch break replacing a failing gearbox. They won their remaining four matches and finished third overall, enough to qualify for the state event in March.",
        "Team captain Aisha Rahman, a senior, said the break was the most stressful thirty minutes of her season. 'We had one spare part and no spare time.'",
        "The team meets Wednesdays and Fridays in the engineering workshop. Sponsors and mentors from local industry are invited to contact Dr. Raman."
      ] },
    { slug: "varsity-soccer-semifinal", date: "2026-10-15", author: "Athletics Department", tags: ["Athletics"], art: "field",
      title: "Varsity Soccer Finishes 14–3 and Advances to the Semifinals",
      excerpt: "A season-best defensive record carried the team through the quarterfinal, decided on penalties after a scoreless draw.",
      body: [
        "The varsity squad conceded only nine goals in seventeen games, the best record in the program's history. Goalkeeper Sam Ortega saved two penalties in the quarterfinal shootout.",
        "The semifinal will be played on Thursday at 4:00 pm. Families are welcome and student buses will run from the Upper School entrance.",
        "Coach Delgado praised the team's depth. 'Eleven players started. Eighteen won the games.'"
      ] },
    { slug: "winter-concert-rehearsals", date: "2026-10-08", author: "Music Department", tags: ["Arts", "Events"], art: "music",
      title: "Winter Concert Rehearsals Begin: What Families Should Know",
      excerpt: "The concert is on Thursday, December 10. Here is the rehearsal calendar, dress code and ticket information.",
      body: [
        "The Winter Concert will take place on Thursday, December 10, at 7:00 pm in the Performing Arts Center. All Concert Band, Jazz Ensemble and Chamber Choir members take part, along with the Grade 4 and 5 recorder groups.",
        "Evening rehearsals run on Mondays from 6:00 to 7:30 pm through November. Concert dress is black and white; no jeans or sneakers, please.",
        "Admission is free. A retiring collection supports the music scholarship fund."
      ] },
    { slug: "new-science-wing", date: "2026-09-30", author: "Communications Office", tags: ["Academics", "Community"], art: "lab",
      title: "New Science Wing Opens to Students",
      excerpt: "Six laboratories, a greenhouse and a prep room replaced the 1970s wing over the summer.",
      body: [
        "After fourteen months of construction, the new science wing welcomed its first classes in September. It houses six laboratories, a rooftop greenhouse, a shared prep room and a flexible workshop.",
        "Each lab has fume hoods, gas lines and movable benches. Middle School students now have regular lab access for the first time.",
        "Tours of the wing are included in every campus visit. A formal dedication will take place during Alumni Weekend in February."
      ] },
    { slug: "new-faculty-2026", date: "2026-09-22", author: "Communications Office", tags: ["Community", "Faculty"], art: "classroom",
      title: "Meet the New Faculty: Six Teachers Joining KingsterKids This Year",
      excerpt: "A chemist, two language teachers, a historian, a violinist and a Grade 2 teacher with twenty years of experience.",
      body: [
        "Six new teachers joined the faculty in August. Between them they bring more than seventy years of classroom experience and an unusual range of backgrounds, including a former lab researcher and a conservatory-trained violinist.",
        "Each new teacher is paired with a mentor from the department and observed by a colleague during their first term. Parents will have a chance to meet them at the Back-to-School evening.",
        "Short profiles of each new colleague are posted on the Faculty page."
      ] },
    { slug: "financial-aid-open", date: "2026-09-14", author: "Admissions Office", tags: ["Admissions"], art: "library",
      title: "Financial Aid Applications for 2027–28 Now Open",
      excerpt: "KingsterKids awards need-based aid to roughly a third of families. Applications are due alongside the admission application.",
      body: [
        "Families applying for the 2027–28 school year can now submit financial aid requests through our secure partner portal. The aid deadline matches the admission deadline of January 15.",
        "Awards are need-based and renewable annually. Families are encouraged to apply even if they are unsure whether they will qualify.",
        "The Business Office is holding two information evenings, one in person and one online. Details are on the Tuition & Financial Aid page."
      ] },
    { slug: "alumni-spotlight-osei", date: "2026-09-05", author: "Alumni Relations", tags: ["Alumni", "Community"], art: "globe",
      title: "Alumni Spotlight: Dr. Amara Osei '09 on Becoming a Pediatric Surgeon",
      excerpt: "Dr. Osei returned to campus to speak with seniors about medicine, mistakes and the teacher who taught her to rewrite.",
      body: [
        "Dr. Amara Osei, class of 2009, now practises pediatric surgery in Chicago. She spent a morning with Upper School students answering questions about her path, from AP Biology to residency.",
        "'The most useful thing I learned here was how to take criticism of my writing,' she told the room. 'It turns out surgeons get a lot of that.'",
        "Alumni interested in speaking to students can reach the Alumni Relations office through the Contact page."
      ] },
    { slug: "summer-reading-wrap", date: "2026-08-27", author: "Library", tags: ["Academics", "Community"], art: "library",
      title: "Summer Reading Project Wraps with Record Participation",
      excerpt: "Nearly nine in ten students submitted a response to at least one book, and the librarians have a favourite shelf of the results.",
      body: [
        "Students from Kindergarten through Grade 5 took part in the summer reading project this year, choosing from lists compiled by faculty. More than 600 reading responses were submitted in print, audio and drawn form.",
        "The library has created a display of the most popular titles, including several recommended by students in the Middle School.",
        "The 2027 reading list will be announced in May."
      ] }
  ],

  /* ---------------------------------------------------------------------
     10. EVENTS
     --------------------------------------------------------------------- */
  events: [
    { id: "open-house", date: "2026-11-14", title: "Fall Open House", time: "10:00 am – 1:00 pm", place: "Main Hall", link: "tour.html" },
    { id: "winter-concert", date: "2026-12-10", title: "Winter Concert", time: "7:00 pm – 8:30 pm", place: "Performing Arts Center", link: "news.html#/post/winter-concert-rehearsals" },
    { id: "priority-deadline", date: "2027-01-15", title: "Priority Application Deadline", time: "All day", place: "Admissions Office", link: "admissions.html#process" },
    { id: "alumni-weekend", date: "2027-02-06", title: "Alumni Weekend & Homecoming Game", time: "11:00 am – 4:00 pm", place: "Memorial Field", link: "news.html#/tag/Alumni" }
  ],

  /* ---------------------------------------------------------------------
     11. ADMISSIONS
     --------------------------------------------------------------------- */
  admissionsSteps: [
    { title: "Start Your Inquiry", text: "Tell us a little about your child and which grade you are considering. A member of the Admissions team will reply within two working days." },
    { title: "Visit Campus", text: "Book a tour. Prospective students spend part of the day with a current student host and sit in on a class." },
    { title: "Submit the Application", text: "Complete the online form and pay the $75 application fee (waivers are available on request)." },
    { title: "Send Your Documents", text: "Request transcripts from your child's current school and ask two teachers to complete recommendation forms." },
    { title: "Interview & Assessment", text: "Students meet with an admissions officer and complete a short, friendly assessment in reading and mathematics." },
    { title: "Admission Decision", text: "Decisions are sent by e-mail and post on the date shown below. Families then have two weeks to accept and pay the enrollment deposit." }
  ],
  deadlines: [
    { round: "Early Action", deadline: "December 1", decision: "December 20" },
    { round: "Priority Round", deadline: "January 15", decision: "February 15" },
    { round: "Regular Round", deadline: "March 1", decision: "March 25" },
    { round: "Rolling (space permitting)", deadline: "After March 1", decision: "Within three weeks" }
  ],
  checklist: [
    "Report cards and transcript from the last two years",
    "Two teacher recommendations (one English or humanities, one math or science)",
    "A one-page parent or guardian statement",
    "SSAT or ISEE scores, if available (optional for Grades K–8)",
    "Immunization record and a copy of the student's birth certificate",
    "$75 application fee, or a fee waiver request"
  ],
  admissionsPillars: [
    { title: "Day Students", text: "Most KingsterKids students live within thirty minutes of campus. Bus routes cover the city and the northern suburbs." },
    { title: "International Students", text: "We welcome a small number of international families each year and offer English-language support in Grades 6 to 12." },
    { title: "Transfer Students", text: "Students may join in any grade where space allows. We look at transcripts and meet with the student before deciding." },
    { title: "Siblings & Alumni", text: "Brothers, sisters and children of alumni are given careful consideration when they apply. It is never a guarantee." }
  ],

  /* ---------------------------------------------------------------------
     12. TUITION  (annual figures; per-month = annual / 10)
     --------------------------------------------------------------------- */
  tuition: [
    { id: "lower", name: "Elementary School", grades: "Kindergarten to Grade 5", annual: 19400, icon: "book",
      includes: ["Full-day program, 8:15–3:00", "Spanish, music and art", "Daily lunch program option", "Field trips and outdoor classroom"] }
  ],
  fees: [
    { item: "Application fee", amount: "$75", note: "Non-refundable. Waivers available." },
    { item: "Enrollment deposit", amount: "$2,500", note: "Credited toward first-year tuition." },
    { item: "Technology fee", amount: "$350", note: "Annual. Covers laptop, licences and support." },
    { item: "Books & materials", amount: "$400 – $650", note: "Varies by division and course selection." },
    { item: "Uniform (starter set)", amount: "About $480", note: "Blazer, two shirts, trousers or skirt, tie." },
    { item: "Lunch program", amount: "$1,150", note: "Optional. Annual, billed with tuition." },
    { item: "Bus transportation", amount: "$1,900", note: "Optional. Door-to-stop service on seven routes." }
  ],
  aidFaq: [
    { q: "Who qualifies for financial aid?", a: "Aid is need-based. We look at household income, assets, family size and other educational costs. About one-third of KingsterKids families receive some form of assistance, with awards ranging from a few thousand dollars to a significant share of tuition." },
    { q: "Does applying for aid affect admission?", a: "No. The Admissions Committee reviews applications without knowledge of financial aid requests, except where it has been noted that a family will need aid to attend." },
    { q: "How do I apply?", a: "Complete the confidential online aid form through our partner portal when you submit the admission application. You will need your most recent tax return and two months of pay slips." },
    { q: "Is aid renewable?", a: "Yes. Families reapply each spring with updated information. Awards are adjusted for changes in circumstances, so aid can go up as well as down." },
    { q: "Are there payment plans?", a: "Yes. Choose annual payment, two installments (July and January) or ten equal monthly installments from July to April. There is a modest administration charge for monthly plans." }
  ],

  /* ---------------------------------------------------------------------
     13. SCHOOL TOUR
     --------------------------------------------------------------------- */
  tourTimes: ["11:00 am", "3:00 pm"],
  tourFaq: [
    { q: "How long will the tour take?", a: [
      "Allow about ninety minutes. We begin with a conversation in the Admissions Center, then walk the campus with a current student, and finish with a chance to visit one class in session.",
      "If you would like to meet a department head or tour the new science wing in more detail, mention it in the special request box and we will do our best to arrange it." ] },
    { q: "Is there parking nearby?", a: ["Yes. Visitor parking is free in the lot beside Main Hall (Entrance B). Please tell the receptionist you are here for a tour and they will give you a pass for the day."] },
    { q: "Can I leave bags or luggage at the meeting point?", a: ["The Admissions Center can store small bags and coats for the duration of your visit. Please do not leave valuables unattended."] },
    { q: "Will the tour be cancelled due to weather?", a: ["Tours run in all but the most severe weather. If the school is closed for snow or storm warnings, we will phone or e-mail you the evening before and offer another date."] },
    { q: "Can my child sit in on a class?", a: ["Yes, for students in Grade 5 and above. Younger children usually enjoy a story session in the Lower School library instead. Let us know when you book."] }
  ]
};

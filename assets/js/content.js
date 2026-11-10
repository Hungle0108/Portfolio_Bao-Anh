/**
 * BAO ANH — PORTFOLIO CONTENT DATA (site/assets/js/content.js)
 * Edit this single file to update text, New Media work, awards, leadership roles, academic scores, and certificates.
 * Loaded directly via <script src="assets/js/content.js"> so the site works over file:// and GitHub Pages.
 */
window.CONTENT = {
  meta: {
    name: "Nhu Nhat Bao Anh",
    shortName: "Bao Anh",
    kicker: "Applicant · Communications and New Media",
    issue: "Issue 2027 · Vol. I",
    school: "Hanoi–Amsterdam High School for the Gifted",
    classOf: "Class of 2027 · Literature Specialization",
    intendedMajors: "Communications and New Media (CNM)",
    standfirst: "Aspiring Communications & New Media student — telling stories where people, technology and science meet.",
    deck: "Literature specialist at Hanoi–Amsterdam High School for the Gifted (Class of 2027). Combining communication management and data-driven new media—as a Brand Communication Intern at TokyoLife, student public relations lead across state and school science initiatives, and patented e-learning co-inventor.",
    // Email split into parts to prevent automated scraping
    emailUser: "nnhatbaoanh",
    emailDomain: "gmail.com"
  },

  figures: [
    {
      label: "Academic GPA",
      value: "9.29",
      unit: "/ 10",
      detail: "Grade 11 (9.3) · Grade 10: 9.03 (9.0)"
    },
    {
      label: "English Proficiency",
      value: "7.5",
      unit: "IELTS",
      detail: "Academic · CEFR C1 (Reading 8.5)"
    },
    {
      label: "Advanced Placement",
      value: "4",
      unit: "/ 5",
      detail: "AP Psychology (2026)"
    },
    {
      label: "Industry Experience",
      value: "TokyoLife",
      unit: "(2026)",
      detail: "Brand Communication Intern · TokyoLife (2026)"
    },
    {
      label: "National Patent",
      value: "No. 4647",
      unit: "",
      detail: "VN Utility Solution Patent ('25)"
    },
    {
      label: "Invention Honours",
      value: "3",
      unit: "International Awards",
      detail: "KIDE Gold & Silver · MIIA Award"
    }
  ],

  about: {
    kicker: "02 — Editor's Letter",
    title: "Where Communication, Digital Media & Human-Centred Technology Meet",
    // Set showPullQuote: true once Bao Anh confirms her personal pull quote
    showPullQuote: false,
    pullQuote: "“Whether co-designing an e-learning assistant or leading a student public relations desk, communication is the bridge between technology and human impact.”",
    pullQuoteAttribution: "— Nhu Nhat Bao Anh"
  },

  experience: {
    sectionIndex: "03",
    sectionLabel: "Case Study",
    kicker: "Internship · Brand Communication",
    title: "Listening to 30 Days of Customers",
    standfirst: "Communication management meets data-driven new media: connecting AI-powered social listening, real-time sentiment analytics, and physical store concept adaptation during a summer internship at TokyoLife.",
    role: "Brand Communication Intern",
    department: "Creative & Content Development Department",
    company: "Staaar Joint Stock Company (TokyoLife brand)",
    location: "Hanoi, Vietnam",
    dates: "1 Jun 2026 – 31 Aug 2026",
    mentor: "Mr. Tran Hong Phuc, Director of Creative & Content Development",
    cnmFraming: "Communication Management + Data-Driven New Media: At the heart of NUS Communications and New Media is the shift from one-way publicity to two-way, evidence-based brand communication. Working inside TokyoLife’s Creative & Content Development Department, Bao Anh bridged automated social data listening with creative execution—turning 30 days of raw customer interactions into real-time sentiment tracking and tangible store experience adjustments.",
    steps: [
      {
        stepNum: "01",
        phase: "Listen",
        title: "AI-driven customer insights",
        description: "Collected and classified 30 days of social media interactions using local AI tools and Apify web scraping to identify customer pain points and assess service effectiveness."
      },
      {
        stepNum: "02",
        phase: "Visualise",
        title: "Real-time analytics dashboard",
        description: "Designed an automated dashboard to visualise categorised feedback and track brand sentiment in real time for business review."
      },
      {
        stepNum: "03",
        phase: "Adapt",
        title: "Concept & experience adaptation",
        description: "Translated data insights into strategic communication adjustments that directly influenced store layout and brand concept changes."
      }
    ],
    tools: "AI tools, Apify, analytics dashboard",
    toolsDetail: "Local AI tools (interaction classification) · Apify web scraping · Automated real-time sentiment analytics dashboard",
    pullQuote: "“Bao Anh impressively connected data listening with creative execution. Her ability to identify, deploy, and integrate AI media tools into brand strategy highlights her forward-thinking approach to modern communication.”",
    secondaryQuote: "“…a highly proactive, analytical, and tech-savvy individual.”",
    quoteAttribution: "Director of Creative & Content Development, TokyoLife",
    quoteContext: "Mr. Tran Hong Phuc · Internship Confirmation & Reference Letter (31 Aug 2026)"
  },

  invention: {
    projects: [
      {
        id: "project-itutortdn",
        indexLabel: "Project (a) · Patented E-Learning Co-Invention (2021–2025)",
        title: "iTutorTDN — An E-Learning Assistant Program",
        subtitle: "Official Patent Title: “Hệ thống hỗ trợ học tập từ xa” (Remote Learning Support System) · Vietnamese Utility Solution Patent No. 4647",
        cnmLens: "Designing Technology Around How People Learn & Communicate: Rather than treating software solely as an engineering exercise, iTutorTDN was conceived around a human communication problem—connecting teachers, students, and parents through structured feedback and accessible progress updates during remote learning.",
        description: "iTutorTDN is a study assistant application and remote learning support system connecting teacher terminals, a central learning management server, student terminals, and parent terminals over wireless networks. Using push notifications, automated statistical feedback, and encoded knowledge directories inside study materials, it enables students and families to actively track and manage academic progress.",
        teamAndHonors: "Co-invented with Le Gia Hung and Vu Minh Khang (Nguyen Du Secondary School & Tran Dai Nghia High School for the Gifted, HCMC). Awarded a Silver Medal at the 2021 Kaohsiung International Invention & Design EXPO (KIDE 2021) and granted Vietnamese Utility Solution Patent No. 4647 by the Intellectual Property Office of Vietnam on 26 December 2025 (with Nhu Nhat Bao Anh listed as Co-Author #3 on the official “Danh sách kèm theo” Patent Annex).",
        todoNote: "TODO: Add Bao Anh’s specific role breakdown & product screenshots for iTutorTDN",
        meta: [
          { label: "Patent Number", value: "No. 4647 (Utility Solution)" },
          { label: "Application Number", value: "2-2025-01029 (Filed 26/01/2022)" },
          { label: "Grant Decision & Date", value: "289740/QĐ-SHTT.IP · 26/12/2025" },
          { label: "International Medal", value: "KIDE 2021 Silver Medal (Kaohsiung)" }
        ],
        hasArchitectureDiagram: true,
        patentPlates: [
          {
            certId: "patent-4647",
            badge: "Patent No. 4647 · Page 1 Cover",
            year: "26 Dec 2025",
            title: "Vietnamese Utility Solution Patent No. 4647 — Cover Page",
            caption: "Bằng Độc quyền Giải pháp Hữu ích Số 4647 (Page 1)",
            img: "assets/img/certs/patent-4647-itutor.webp",
            width: 1400,
            height: 1811,
            alt: "Vietnamese Utility Solution Patent No. 4647 cover page for Remote Learning Support System (patent owner name and residential addresses redacted)"
          },
          {
            certId: "patent-4647-annex",
            badge: "Patent No. 4647 · Authors Annex",
            year: "26 Dec 2025",
            title: "Official Patent Annex (“Danh sách kèm theo”)",
            caption: "Lists 3. NHỮ NHẬT BẢO ANH (VN) among Patented Co-Authors",
            img: "assets/img/certs/patent-4647-authors-annex.webp",
            width: 1400,
            height: 1049,
            alt: "Official Danh sách kèm theo annex page of Vietnamese Utility Solution Patent No. 4647 listing Nhu Nhat Bao Anh among the authors (residential addresses redacted)"
          }
        ],
        recognitions: [
          {
            certId: "patent-4647",
            badge: "National Utility Solution Patent",
            year: "26 Dec 2025",
            title: "Vietnamese Utility Solution Patent No. 4647 — “Hệ thống hỗ trợ học tập từ xa” (iTutorTDN)",
            issuer: "Intellectual Property Office of Vietnam · App No. 2-2025-01029",
            btnLabel: "Patent Cover ↗"
          },
          {
            certId: "patent-4647-annex",
            badge: "Official Patent Annex",
            year: "26 Dec 2025",
            title: "Patent No. 4647 Authors Annex (“Danh sách kèm theo” — Co-Author #3: Nhu Nhat Bao Anh)",
            issuer: "Intellectual Property Office of Vietnam · Page 21 of Patent Dossier",
            btnLabel: "Authors Annex ↗"
          },
          {
            certId: "cert-kide-2021-silver",
            badge: "Silver Medal · KIDE 2021",
            year: "2–4 Dec 2021",
            title: "Kaohsiung International Invention & Design EXPO (KIDE 2021) — “iTutorTDN – a study assistant center application”",
            issuer: "World Invention Intellectual Property Associations (WIIPA) · Kaohsiung, Taiwan",
            btnLabel: "Certificate ↗"
          }
        ]
      },
      {
        id: "project-ivihrm",
        indexLabel: "Project (b) · Applied Organisational AI Software (2025)",
        title: "iViHRM — AI-Powered Human Resource Management System for SMEs",
        subtitle: "Recognised at the 2025 Kaohsiung International Invention & Design EXPO (KIDE 2025) & by the Macao Innovation and Invention Association (MIIA)",
        cnmLens: "Organisational Communication & Workflow Design: iViHRM applies artificial intelligence to human resource management for small and medium-sized enterprises (SMEs), focusing on clearer internal coordination, personnel workflows, and decision support.",
        description: "Developed as a separate applied software project in 2025, iViHRM is an AI-powered human resource management system tailored for small and medium-sized enterprises (SMEs).",
        teamAndHonors: "Co-invented by Le Gia Hung (VNU-HCM High School for the Gifted) and Nhu Nhat Bao Anh (Hanoi–Amsterdam High School for the Gifted), alongside international collaborators. Recognised in December 2025 with two international honours strictly for iViHRM: a Gold Medal at KIDE 2025 (WIIPA, Kaohsiung) and the Leading Innovation Award from the Macao Innovation and Invention Association (MIIA).",
        todoNote: "TODO: Add 2–3 sentences on iViHRM system features & Bao Anh’s specific role",
        meta: [
          { label: "Project Name", value: "iViHRM (AI-Powered HRM for SMEs)" },
          { label: "Exhibition Dates", value: "4–6 December 2025 · Kaohsiung, Taiwan" },
          { label: "Recognition I", value: "KIDE 2025 Gold Medal (WIIPA)" },
          { label: "Recognition II", value: "MIIA 2025 Leading Innovation Award" }
        ],
        hasArchitectureDiagram: false,
        patentPlates: [],
        recognitions: [
          {
            certId: "cert-kide-2025-gold",
            badge: "Gold Medal · KIDE 2025",
            year: "4–6 Dec 2025",
            title: "Kaohsiung International Invention & Design EXPO (KIDE 2025) — “AI-powered Human Resource Management System (iViHRM)”",
            issuer: "World Invention Intellectual Property Associations (WIIPA) · Kaohsiung, Taiwan",
            btnLabel: "Certificate ↗"
          },
          {
            certId: "cert-miia-2025",
            badge: "Leading Innovation Award · 2025",
            year: "Dec 2025",
            title: "Macao Innovation and Invention Association (MIIA) Special Award — “iViHRM – An AI-Powered HRM System for SMEs”",
            issuer: "Macao Innovation and Invention Association (at KIDE 2025) · Kaohsiung / Macao",
            btnLabel: "Certificate ↗"
          }
        ]
      }
    ]
  },

  leadership: [
    {
      org: "RICEPsy",
      level: "State",
      role: "Vice Head of Public Relations",
      dates: "06/2026 – Present",
      category: "Communication Management & PR",
      impactTodo: "TODO: Add 1 line of PR impact (e.g. reach, campaigns, posts) + optional link.",
      certId: null
    },
    {
      org: "Science Camp 2026: “Glow On Grins” (Hola Academy)",
      level: "State",
      role: "Advisor",
      dates: "2026",
      category: "Science Outreach & Advisory",
      impactTodo: "TODO: Add 1 line on advisory scope for Science Camp 2026.",
      certId: "cert-science-camp-2026"
    },
    {
      org: "Science Alive",
      level: "State",
      role: "Vice Head of Organizer · Head of Public Relations",
      dates: "05/2024 – Present",
      category: "Communication Management & PR",
      impactTodo: "TODO: Add 1 line on multi-year PR leadership, campaign reach, or attendance.",
      certId: null
    },
    {
      org: "Scribbles Season 11, Stage 2",
      level: "School",
      role: "Media Advisor",
      dates: "11/2025 – 04/2026",
      category: "Media Direction & Editorial",
      impactTodo: "TODO: Add 1 line on media advisory and editorial direction.",
      certId: null
    },
    {
      org: "Cleen Project Season 8",
      level: "State",
      role: "Member, Human Resources",
      dates: "06/2025 – 04/2026",
      category: "Organisational Communication",
      impactTodo: "TODO: Add 1 line on team coordination or internal communications.",
      certId: null
    },
    {
      org: "Society of Open Science (Hanoi–Amsterdam)",
      level: "School",
      role: "Member of Public Relations Department",
      dates: "12/2024 – 09/2025",
      category: "Public Relations & Science Outreach",
      impactTodo: "TODO: Add 1 line on club communications and media outreach.",
      certId: "cert-sos-2025"
    },
    {
      org: "Science Tornado 2025: “Eternity”",
      level: "State / School",
      role: "Member of Public Relations Department",
      dates: "2025",
      category: "Public Relations & Event Media",
      impactTodo: "TODO: Add 1 line on media coverage or visitor outreach for Science Tornado 2025.",
      certId: "cert-science-tornado-2025"
    },
    {
      org: "Science Fair 2025: “Pixaverse”",
      level: "State / School",
      role: "Member of Public Relations Department",
      dates: "2025",
      category: "Public Relations & Event Media",
      impactTodo: "TODO: Add 1 line on PR campaigns for Science Fair 2025: Pixaverse.",
      certId: "cert-science-fair-2025"
    },
    {
      org: "Science Camp 2025: “Seek-out-sight” (Hola Academy)",
      level: "State",
      role: "Member of Logistics Department",
      dates: "06/2025 – 07/2025",
      category: "Event Operations",
      impactTodo: "TODO: Add 1 line on camp operations and on-site coordination.",
      certId: "cert-science-camp-2025"
    },
    {
      org: "Psi Ams (Hanoi–Amsterdam Psychology Club)",
      level: "School",
      role: "Member, Expertise Department",
      dates: "10/2024 – 06/2025",
      category: "Psychology Research & Content",
      impactTodo: "TODO: Add 1 line on psychology topics or articles researched.",
      certId: null
    },
    {
      org: "HAEC — Hanoi–Amsterdam Entrepreneur Club",
      level: "School",
      role: "Member, Content Department",
      dates: "10/2024 – 06/2025",
      category: "Content & Copywriting",
      impactTodo: "TODO: Add 1 line on editorial posts or entrepreneurship content.",
      certId: null
    },
    {
      org: "YOH — Youth of Highschool",
      level: "State",
      role: "Public Relations Advisor · Public Relations Ambassador",
      dates: "—",
      datesTodo: "TODO: Confirm exact start/end months for YOH",
      category: "Public Relations Advisory",
      impactTodo: "TODO: Add 1 line on ambassador campaigns and advisor duties.",
      certId: null
    }
  ],

  /**
   * Sub-section 05B — Selected New Media Work (3–6 pieces)
   * Hidden in production while showNewMediaWork is false (visible in ?draft mode).
   * Set showNewMediaWork: true once approved screenshots/links are added below.
   */
  showNewMediaWork: false,
  newMediaWork: [
    {
      isDraft: true,
      index: "Case 01",
      title: "TokyoLife social listening & sentiment dashboard",
      organisation: "Staaar Joint Stock Company (TokyoLife brand)",
      role: "Brand Communication Intern · Creative & Content Development Department (Jun–Aug 2026)",
      format: "Communication Management & Data-Driven New Media",
      tools: "AI tools, Apify, analytics dashboard",
      goalAndResult: "Collected and classified 30 days of social media interactions using local AI tools and Apify web scraping; designed a real-time analytics dashboard to visualise categorised feedback and brand sentiment, informing strategic communication adjustments that influenced store layout and brand concept changes. [TODO: Add approved outcomes — ask TokyoLife before using any company material.]",
      coverImg: "",
      coverTodo: "TODO: Add anonymised dashboard screenshot (no customer names or data) — ask before using any company material",
      linkUrl: "",
      linkLabel: "TODO: Add anonymised dashboard preview (with company permission)"
    },
    {
      isDraft: true,
      index: "Case 02",
      title: "[TODO: Campaign / Key Visual Title — e.g. Science Alive PR Campaign]",
      organisation: "Science Alive",
      role: "Head of Public Relations · Vice Head of Organizer",
      format: "Public Relations & Social Media Campaign",
      tools: "[TODO: Tools used — e.g. Canva, Adobe Illustrator, Meta Business Suite, Copywriting]",
      goalAndResult: "[TODO: 1–2 lines on the communication goal (who the audience was, what message needed to land) and the measurable result (reach, registrations, press mentions).]",
      coverImg: "",
      linkUrl: "",
      linkLabel: "TODO: Add external campaign link"
    },
    {
      isDraft: true,
      index: "Case 03",
      title: "[TODO: Exhibition PR / Media Piece — e.g. Science Tornado “Eternity” or “Pixaverse”]",
      organisation: "Society of Open Science · Science Tornado / Science Fair",
      role: "Member of Public Relations Department",
      format: "Event Branding, Press Release & Youth Outreach",
      tools: "[TODO: Tools used — e.g. Editorial Copywriting, Press Kit Design, Social Media Scheduling]",
      goalAndResult: "[TODO: 1–2 lines on how scientific concepts were translated into engaging public narratives for students and parents, plus campaign outcome.]",
      coverImg: "",
      linkUrl: "",
      linkLabel: "TODO: Add external post / article link"
    },
    {
      isDraft: true,
      index: "Case 04",
      title: "[TODO: Editorial / Media Advisory Project — e.g. RICEPsy or Scribbles Season 11]",
      organisation: "RICEPsy / Scribbles Season 11, Stage 2",
      role: "Vice Head of Public Relations / Media Advisor",
      format: "Digital Storytelling & Psychology / Literary Media",
      tools: "[TODO: Tools used — e.g. Content Strategy, Visual Direction, Video / Carousel Editing]",
      goalAndResult: "[TODO: 1–2 lines on guiding the editorial tone, visual identity, and audience engagement across digital channels.]",
      coverImg: "",
      linkUrl: "",
      linkLabel: "TODO: Add external project link"
    }
  ],

  honors: {
    invention: [
      {
        year: "Dec 2025",
        title: "Vietnamese Utility Solution Patent No. 4647 (Project: iTutorTDN)",
        subtitle: "Remote Learning Support System (“Hệ thống hỗ trợ học tập từ xa”) · App No. 2-2025-01029",
        issuer: "Intellectual Property Office of Vietnam",
        certId: "patent-4647"
      },
      {
        year: "Dec 2025",
        title: "Gold Medal — Kaohsiung International Invention & Design EXPO (Project: iViHRM)",
        subtitle: "AI-powered Human Resource Management System (iViHRM)",
        issuer: "World Invention Intellectual Property Associations (WIIPA)",
        certId: "cert-kide-2025-gold"
      },
      {
        year: "Dec 2025",
        title: "Leading Innovation Award (Project: iViHRM)",
        subtitle: "iViHRM – An AI-Powered HRM System for SMEs",
        issuer: "Macao Innovation and Invention Association (MIIA)",
        certId: "cert-miia-2025"
      },
      {
        year: "Dec 2021",
        title: "Silver Medal — Kaohsiung International Invention & Design EXPO (Project: iTutorTDN)",
        subtitle: "iTutorTDN – a study assistant center application",
        issuer: "World Invention Intellectual Property Associations (WIIPA)",
        certId: "cert-kide-2021-silver"
      }
    ],
    academic: [
      {
        year: "May 2026",
        title: "Academic Excellence Award — Outstanding Student (Học sinh Xuất sắc), Grade 11",
        subtitle: "School Year 2025–2026 · Class 11 Văn 2 (Literature Specialization)",
        issuer: "Hanoi–Amsterdam High School for the Gifted",
        certId: "cert-grade11-excellence"
      },
      {
        year: "May 2025",
        title: "Academic Excellence Award — Excellent Student (Học sinh Giỏi), Grade 10",
        subtitle: "School Year 2024–2025 · Class 10 Văn 2 (Literature Specialization)",
        issuer: "Hanoi–Amsterdam High School for the Gifted",
        certId: "cert-grade10-excellence"
      },
      {
        year: "May 2024",
        title: "Academic Excellence Award — Excellent Student (Học sinh Giỏi), Grade 9",
        subtitle: "School Year 2023–2024 · Class 9A6 · Graduated with Distinction",
        issuer: "Cau Giay Secondary School, Hanoi",
        certId: "cert-grade9-excellence"
      }
    ]
  },

  academics: {
    schools: [
      {
        period: "2024 – Present",
        grades: "Grades 10–12",
        name: "Hanoi–Amsterdam High School for the Gifted",
        location: "Hanoi, Vietnam",
        detail: "Specialization in Literature (Lớp Chuyên Văn)"
      },
      {
        period: "2023 – 2024",
        grades: "Grade 9",
        name: "Cau Giay Secondary School",
        location: "Hanoi, Vietnam",
        detail: "Class 9A6 · Graduated with Distinction (Giỏi)"
      },
      {
        period: "2020 – 2023",
        grades: "Grades 6–8",
        name: "Nguyen Du Secondary School",
        location: "Ho Chi Minh City, Vietnam",
        detail: "Lower secondary foundation"
      }
    ],
    selections: [
      {
        date: "Oct 2025",
        title: "Selected Participant — Hanoi City-Level Grade 12 Excellent Student & National Team Selection Exam",
        subject: "Literature (Ngữ văn)",
        detail: "Selected to represent Hanoi–Amsterdam High School for the Gifted and participated in the Grade 12 city-level Literature examination as an 11th-grade student (Class 11 Văn 2 · Certificate of Participation issued by the Hanoi Department of Education and Training).",
        certId: "cert-hanoi-city-2025"
      }
    ],
    gpaSummary: [
      {
        grade: "Grade 11 (2025–2026)",
        sem1: "9.34",
        sem2: "9.24",
        year: "9.29",
        roundedNote: "9.3 on school transcript",
        standing: "Outstanding Student (Học sinh Xuất sắc)"
      },
      {
        grade: "Grade 10 (2024–2025)",
        sem1: "9.03",
        sem2: "9.03",
        year: "9.03",
        roundedNote: "9.0 on school transcript",
        standing: "Excellent Student (Học sinh Giỏi)"
      }
    ],
    subjects: [
      { name: "Literature (Specialization)", g10: "8.7", g11: "9.3", highlight: true },
      { name: "English", g10: "8.9", g11: "9.6", highlight: true },
      { name: "Economics & Law Education", g10: "9.5", g11: "9.5", highlight: false },
      { name: "History", g10: "9.4", g11: "9.4", highlight: false },
      { name: "Geography", g10: "9.1", g11: "9.4", highlight: false },
      { name: "Technology", g10: "9.3", g11: "9.5", highlight: false },
      { name: "Mathematics", g10: "8.8", g11: "9.0", highlight: false },
      { name: "Biology", g10: "9.3", g11: "8.2", highlight: false },
      { name: "National Defence & Security Education (Army Training)", g10: "8.3", g11: "9.7", highlight: false }
    ],
    tests: [
      {
        name: "IELTS Academic",
        score: "7.5 Overall",
        badge: "CEFR Level C1",
        date: "11 Feb 2026",
        breakdown: "Reading 8.5 · Listening 7.5 · Writing 6.5 · Speaking 6.5"
      },
      {
        name: "Advanced Placement (AP)",
        score: "4 / 5",
        badge: "AP Psychology",
        date: "May / Sep 2026",
        breakdown: "College Board Advanced Placement Program"
      }
    ]
  },

  certificates: [
    {
      id: "patent-4647",
      category: "invention",
      categoryLabel: "Invention · iTutorTDN",
      title: "Utility Solution Patent No. 4647 — Cover Page (iTutorTDN – Remote Learning Support System)",
      issuer: "Intellectual Property Office of Vietnam",
      year: "2025",
      img: "assets/img/certs/patent-4647-itutor.webp",
      width: 1400,
      height: 1811,
      alt: "Vietnamese Utility Solution Patent No. 4647 cover page for Remote Learning Support System (patent owner and residential addresses redacted)"
    },
    {
      id: "patent-4647-annex",
      category: "invention",
      categoryLabel: "Invention · iTutorTDN",
      title: "Utility Solution Patent No. 4647 — Authors Annex (“Danh sách kèm theo”, Co-Author #3: Nhu Nhat Bao Anh)",
      issuer: "Intellectual Property Office of Vietnam",
      year: "2025",
      img: "assets/img/certs/patent-4647-authors-annex.webp",
      width: 1400,
      height: 1049,
      alt: "Official Danh sách kèm theo annex page of Vietnamese Utility Solution Patent No. 4647 listing Nhu Nhat Bao Anh among the authors (residential addresses redacted)"
    },
    {
      id: "cert-kide-2021-silver",
      category: "invention",
      categoryLabel: "Invention · iTutorTDN",
      title: "Silver Medal — Kaohsiung International Invention & Design EXPO (iTutorTDN)",
      issuer: "WIIPA · Kaohsiung, Taiwan",
      year: "2021",
      img: "assets/img/certs/2021-kide-silver-medal.webp",
      width: 1400,
      height: 1977,
      alt: "Silver Medal certificate from 2021 Kaohsiung International Invention and Design EXPO for iTutorTDN"
    },
    {
      id: "cert-kide-2025-gold",
      category: "invention",
      categoryLabel: "Invention · iViHRM",
      title: "Gold Medal — Kaohsiung International Invention & Design EXPO (iViHRM)",
      issuer: "WIIPA · Kaohsiung, Taiwan",
      year: "2025",
      img: "assets/img/certs/2025-kide-gold-medal.webp",
      width: 1400,
      height: 1977,
      alt: "Gold Medal certificate from 2025 Kaohsiung International Invention and Design EXPO for iViHRM"
    },
    {
      id: "cert-miia-2025",
      category: "invention",
      categoryLabel: "Invention · iViHRM",
      title: "Leading Innovation Award (iViHRM – AI-Powered HRM System for SMEs)",
      issuer: "Macao Innovation and Invention Association (MIIA)",
      year: "2025",
      img: "assets/img/certs/2025-miia-leading-innovation.webp",
      width: 1400,
      height: 1977,
      alt: "Leading Innovation Award certificate from Macao Innovation and Invention Association for iViHRM"
    },
    {
      id: "cert-grade11-excellence",
      category: "academic",
      categoryLabel: "Academic",
      title: "Academic Excellence Award — Outstanding Student (Grade 11)",
      issuer: "Hanoi–Amsterdam High School for the Gifted",
      year: "2026",
      img: "assets/img/certs/2026-grade11-academic-excellence.webp",
      width: 1400,
      height: 1081,
      alt: "Grade 11 Outstanding Student Certificate of Merit from Hanoi-Amsterdam High School for the Gifted"
    },
    {
      id: "cert-hanoi-city-2025",
      category: "academic",
      categoryLabel: "Academic Selection",
      title: "Certificate of Participation — Hanoi City-Level Grade 12 Excellent Student & National Team Selection Exam (Literature)",
      issuer: "Hanoi Department of Education and Training",
      year: "2025",
      img: "assets/img/certs/2025-hanoi-city-excellent-student.webp",
      width: 1400,
      height: 1081,
      alt: "Hanoi Department of Education and Training certificate of participation for Grade 12 City-Level Literature Examination (date of birth redacted)"
    },
    {
      id: "cert-grade10-excellence",
      category: "academic",
      categoryLabel: "Academic",
      title: "Academic Excellence Award — Excellent Student (Grade 10)",
      issuer: "Hanoi–Amsterdam High School for the Gifted",
      year: "2025",
      img: "assets/img/certs/2025-grade10-academic-excellence.webp",
      width: 1400,
      height: 1081,
      alt: "Grade 10 Excellent Student Certificate of Merit from Hanoi-Amsterdam High School for the Gifted"
    },
    {
      id: "cert-grade9-excellence",
      category: "academic",
      categoryLabel: "Academic",
      title: "Academic Excellence Award — Excellent Student (Grade 9)",
      issuer: "Cau Giay Secondary School",
      year: "2024",
      img: "assets/img/certs/2024-grade9-academic-excellence.webp",
      width: 1400,
      height: 1081,
      alt: "Grade 9 Excellent Student Certificate of Merit from Cau Giay Secondary School"
    },
    {
      id: "cert-science-camp-2026",
      category: "leadership",
      categoryLabel: "Leadership",
      title: "Advisor — Science Camp 2026: Glow On Grins",
      issuer: "Hola Academy",
      year: "2026",
      img: "assets/img/certs/2026-science-camp-advisor.webp",
      width: 1400,
      height: 1081,
      alt: "Certificate of recognition as Advisor of Science Camp 2026: Glow On Grins by Hola Academy"
    },
    {
      id: "cert-sos-2025",
      category: "leadership",
      categoryLabel: "Leadership",
      title: "Member of Public Relations Department — Society of Open Science (2024–2025)",
      issuer: "Union Executive Committee, Hanoi–Amsterdam High School for the Gifted",
      year: "2025",
      img: "assets/img/certs/2025-society-of-open-science-pr.webp",
      width: 1400,
      height: 1081,
      alt: "Certificate of Appreciation as Member of Public Relations Department of Society of Open Science"
    },
    {
      id: "cert-science-tornado-2025",
      category: "leadership",
      categoryLabel: "Leadership",
      title: "Member of Public Relations Department — Science Tornado 2025: Eternity",
      issuer: "Science Tornado Organizing Committee",
      year: "2025",
      img: "assets/img/certs/2025-science-tornado-pr.webp",
      width: 1400,
      height: 1081,
      alt: "Certificate of Appreciation as Member of Public Relations Department of Science Tornado 2025: Eternity"
    },
    {
      id: "cert-science-fair-2025",
      category: "leadership",
      categoryLabel: "Leadership",
      title: "Member of Public Relations Department — Science Fair 2025: Pixaverse",
      issuer: "Science Fair Organizing Committee",
      year: "2025",
      img: "assets/img/certs/2025-science-fair-pixaverse-pr.webp",
      width: 1400,
      height: 1081,
      alt: "Certificate of Appreciation as Member of Public Relations Department of Science Fair 2025: Pixaverse"
    },
    {
      id: "cert-science-camp-2025",
      category: "leadership",
      categoryLabel: "Leadership",
      title: "Member of Logistics Department — Science Camp 2025: Seek-out-sight",
      issuer: "Hola Academy",
      year: "2025",
      img: "assets/img/certs/2025-science-camp-logistics.webp",
      width: 1400,
      height: 1081,
      alt: "Certificate of recognition as Member of Logistics Department of Science Camp 2025: Seek-out-sight"
    }
  ]
};

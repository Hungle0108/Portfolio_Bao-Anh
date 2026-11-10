/**
 * BAO ANH — PORTFOLIO CONTENT DATA (site/assets/js/content.js)
 * Integrated with ./CV_NhuNhatBaoAnh/BaoAnh_Portfolio_Content_Form.xlsx (Tabs 00–10).
 * Every field stores its form row ID (e.g. "01.01", "02.01") so tools/sync_from_form.py can sync updates.
 * Loaded directly via <script src="assets/js/content.js"> so the site works over file:// and GitHub Pages.
 */
window.CONTENT = {
  meta: {
    formIds: {
      name: "01.01",
      preferredName: "01.02",
      school: "01.03",
      intendedMajors: "01.04",
      email: "01.05",
      location: "01.06",
      tagline: "01.07",
      intro: "01.08",
      personalQuote: "01.09",
      heroPortrait: "01.10",
      creativePhoto: "01.11",
      cvPdf: "01.12"
    },
    name: "Nhu Nhat Bao Anh",
    shortName: "Bao Anh",
    preferredNameTodo: "TODO (01.02): Preferred display name (Chưa bắt đầu)",
    kicker: "Applicant · Communications and New Media",
    issue: "Issue 2027 · Vol. I",
    school: "Hanoi–Amsterdam High School for the Gifted",
    location: "Hanoi, Vietnam",
    classOf: "Class of 2027 · Literature Specialization",
    intendedMajors: "Communications and New Media (CNM)",
    broaderField: "Multimedia Communication / Media & Communication",
    standfirst: "Aspiring Communications & New Media student — telling stories where people, technology and science meet.",
    taglineTodo: "TODO (01.07 — Tagline): Add 1-sentence personal tagline from form",
    deck: "Literature specialist at Hanoi–Amsterdam High School for the Gifted (Class of 2027, Hanoi, Vietnam). Combining communication management and data-driven new media—as a Brand Communication Intern at TokyoLife, student public relations lead across state and school science initiatives, and patented e-learning co-inventor.",
    introTodo: "TODO (01.08 — Introduction, 60–80 words): Add Bao Anh's 60–80-word personal introduction",
    personalQuoteTodo: "TODO (01.09 — Personal Quote): Add Bao Anh's personal quote",
    creativePhotoTodo: "TODO (01.11 — Creative Activity Photo): Add creative activity photo link",
    cvPdfUrl: "",
    cvPdfTodo: "TODO (01.12 / 09.06 / 10.09 — Download CV PDF): Attach English CV PDF file",
    // Email split into parts to prevent automated scraping (01.05 / 09.02)
    emailUser: "nnhatbaoanh",
    emailDomain: "gmail.com"
  },

  figures: [
    {
      formId: "03.04 / 03.09",
      label: "Academic GPA",
      value: "9.26",
      unit: "/ 10",
      detail: "Grade 11: 9.26 · Grade 10: 8.98"
    },
    {
      formId: "07.06 / 07.07",
      label: "English Proficiency",
      value: "7.5",
      unit: "IELTS",
      detail: "Academic · CEFR C1 (11 Feb 2026)"
    },
    {
      formId: "03.11",
      label: "Advanced Placement",
      value: "4",
      unit: "/ 5",
      detail: "AP Psychology (2026)"
    },
    {
      formId: "04.10–04.17",
      label: "Industry Experience",
      value: "TokyoLife",
      unit: "(2026)",
      detail: "Brand Communication Intern · TokyoLife (2026)"
    },
    {
      formId: "05.29 / 06.08",
      label: "Utility Solution Patent",
      value: "No. 4647",
      unit: "",
      detail: "VN Utility Solution Patent ('25)"
    },
    {
      formId: "06.01 / 06.03 / 06.19",
      label: "Invention Honours",
      value: "3",
      unit: "International Awards",
      detail: "KIDE Gold & Silver · MIIA Award"
    }
  ],

  about: {
    formIds: {
      myStory: "02.01",
      interests: "02.02 / 02.06–02.09",
      values: "02.03",
      personalityExamples: "02.04",
      schoolPhoto: "10.02",
      writingSamples: "10.08"
    },
    kicker: "02 — Editor's Letter",
    title: "Where Communication, Digital Media & Human-Centred Technology Meet",
    showPullQuote: false,
    pullQuote: "“Whether co-designing an e-learning assistant or leading a student public relations desk, communication is the bridge between technology and human impact.”",
    pullQuoteAttribution: "— Nhu Nhat Bao Anh",
    myStoryTodo: "TODO (02.01 — My Story, 150–200 words): Bao Anh's narrative on the Hanoi–Amsterdam Literature specialization, storytelling, and communication.",
    interests: [
      { formId: "02.02", label: "Public Relations" },
      { formId: "02.06", label: "Creative Writing" },
      { formId: "02.07", label: "Literature" },
      { formId: "02.08", label: "Innovation & Technology" },
      { formId: "02.09", label: "Youth-led Science Initiatives" }
    ],
    valuesTodo: "TODO (02.03 — Values): Add 3–5 core personal values",
    personalityExamplesTodo: "TODO (02.04 — Personality Examples): Add specific real-life examples demonstrating those values",
    schoolMediaTodo: "TODO (10.02 / 10.08 — Media): Add school activity photos (10.02) and creative writing samples (10.08)"
  },

  experience: {
    formIds: {
      formatInternship: "04.01–04.09",
      tokyoLifeInternship: "04.10–04.17",
      internshipMedia: "10.03"
    },
    sectionIndex: "03",
    sectionLabel: "Experience & Leadership",
    kicker: "Internship · Brand Communication",
    title: "Listening to 30 Days of Customers",
    standfirst: "Communication management meets data-driven new media: connecting AI-powered social listening, real-time sentiment analytics, and physical store concept adaptation during a summer internship at TokyoLife, alongside twelve student public relations and leadership roles.",
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
    quoteContext: "Mr. Tran Hong Phuc · Internship Confirmation & Reference Letter (31 Aug 2026)",
    tokyoLifeTodos: "TODO (04.16 / 04.17 / 10.03): Add personal learning reflection (04.16), signed & stamped letter scan (04.17), and approved internship photos (10.03)",
    formatSlot: {
      isDraft: true,
      formId: "04.01–04.09",
      company: "Format (Brand Experience Slot)",
      roleTodo: "TODO (04.01): Format – Role & Department",
      datesTodo: "TODO (04.02): Format – Internship Dates",
      responsibilitiesTodo: "TODO (04.03): Format – Responsibilities",
      campaignsTodo: "TODO (04.04): Format – Campaigns Participated In",
      contributionsTodo: "TODO (04.05): Format – Personal Contributions",
      toolsTodo: "TODO (04.06): Format – Tools Used",
      resultsTodo: "TODO (04.07): Format – Verifiable Results",
      learningTodo: "TODO (04.08): Format – Key Learning",
      evidenceTodo: "TODO (04.09): Format – Approved Public Evidence"
    }
  },

  leadership: [
    {
      formId: "04.20 / 06.10 / 07.11",
      org: "RICEPsy",
      level: "State",
      role: "Vice Head of Public Relations",
      dates: "06/2026 – Present",
      category: "Communication Management & PR",
      impactTodo: "TODO: Add 1 line of PR impact (e.g. reach, campaigns, posts) + optional link.",
      certId: null
    },
    {
      formId: "cert-science-camp-2026",
      org: "Science Camp 2026: “Glow On Grins” (Hola Academy)",
      level: "State",
      role: "Advisor",
      dates: "2026",
      category: "Science Outreach & Advisory",
      impactTodo: "TODO: Add 1 line on advisory scope for Science Camp 2026.",
      certId: "cert-science-camp-2026"
    },
    {
      formId: "04.18 / 04.27 / 06.05 / 06.20 / 07.10",
      org: "Science Alive",
      level: "State",
      role: "Vice Head of Organizer · Head of Public Relations",
      dates: "05/2024 – Present",
      category: "Communication Management & PR",
      impactTodo: "TODO: Add 1 line on multi-year PR leadership, campaign reach, or attendance.",
      certId: null
    },
    {
      formId: "04.19 / 06.11 / 07.08",
      org: "Scribbles Season 11, Stage 2",
      level: "School",
      role: "Media Advisor",
      dates: "11/2025 – 04/2026",
      category: "Media Direction & Editorial",
      impactTodo: "TODO: Add 1 line on media advisory and editorial direction.",
      certId: null
    },
    {
      formId: "04.22 / 06.13",
      org: "Cleen Project Season 8",
      level: "State",
      role: "Human Resources Member",
      dates: "06/2025 – 04/2026",
      category: "Organisational Communication",
      impactTodo: "TODO: Add 1 line on team coordination or internal communications.",
      certId: null
    },
    {
      formId: "04.25 / 06.16",
      org: "Society of Open Science (Hanoi–Amsterdam)",
      level: "School",
      role: "Public Relations Member",
      dates: "12/2024 – 09/2025",
      category: "Public Relations & Science Outreach",
      impactTodo: "TODO: Add 1 line on club communications and media outreach.",
      certId: "cert-sos-2025"
    },
    {
      formId: "cert-science-tornado-2025",
      org: "Science Tornado 2025: “Eternity”",
      level: "State / School",
      role: "Member of Public Relations Department",
      dates: "2025",
      category: "Public Relations & Event Media",
      impactTodo: "TODO: Add 1 line on media coverage or visitor outreach for Science Tornado 2025.",
      certId: "cert-science-tornado-2025"
    },
    {
      formId: "cert-science-fair-2025",
      org: "Science Fair 2025: “Pixaverse”",
      level: "State / School",
      role: "Member of Public Relations Department",
      dates: "2025",
      category: "Public Relations & Event Media",
      impactTodo: "TODO: Add 1 line on PR campaigns for Science Fair 2025: Pixaverse.",
      certId: "cert-science-fair-2025"
    },
    {
      formId: "04.26 / 06.17",
      org: "Science Camp 2025: “Seek-out-sight” (Hola Academy)",
      level: "State",
      role: "Logistics Member",
      dates: "06/2025 – 07/2025",
      category: "Event Operations",
      impactTodo: "TODO: Add 1 line on camp operations and on-site coordination.",
      certId: "cert-science-camp-2025"
    },
    {
      formId: "04.23 / 06.14",
      org: "Psi Ams (Hanoi–Amsterdam Psychology Club)",
      level: "School",
      role: "Expertise Member",
      dates: "10/2024 – 06/2025",
      category: "Psychology Research & Content",
      impactTodo: "TODO: Add 1 line on psychology topics or articles researched.",
      certId: null
    },
    {
      formId: "04.24 / 06.15 / 07.09",
      org: "HAEC — Hanoi–Amsterdam Entrepreneur Club",
      level: "School",
      role: "Content Member",
      dates: "10/2024 – 06/2025",
      category: "Content & Copywriting",
      impactTodo: "TODO: Add 1 line on editorial posts or entrepreneurship content.",
      certId: null
    },
    {
      formId: "04.21 / 04.28 / 06.12 / 06.21",
      org: "YOH — Youth of Highschool",
      level: "State",
      role: "Public Relations Advisor · Ambassador",
      dates: "—",
      datesTodo: "TODO (04.21 / 04.28): Confirm exact start/end months for YOH",
      category: "Public Relations Advisory",
      impactTodo: "TODO: Add 1 line on ambassador campaigns and advisor duties.",
      certId: null
    }
  ],

  invention: {
    projects: [
      {
        id: "project-itutortdn",
        formId: "05.28–05.31 / 06.08 / 06.19",
        indexLabel: "Case Study (a) · Patented E-Learning Co-Invention (2021–2025)",
        title: "iTutorTDN — An E-Learning Assistant Program",
        subtitle: "Vietnamese Utility Solution Patent No. 4647 (“Bằng độc quyền giải pháp hữu ích” — “Hệ thống hỗ trợ học tập từ xa”) · Application No. 2-2025-01029",
        cnmLens: "Designing Technology Around How People Learn & Communicate: Rather than treating software solely as an engineering exercise, iTutorTDN was conceived around a human communication problem—connecting teachers, students, and parents through structured feedback and accessible progress updates during remote learning.",
        description: "iTutorTDN is a study assistant application and remote learning support system connecting teacher terminals, a central learning management server, student terminals, and parent terminals over wireless networks. Using push notifications, automated statistical feedback, and encoded knowledge directories inside study materials, it enables students and families to actively track and manage academic progress.",
        teamAndHonors: "Co-invented with Le Gia Hung and Vu Minh Khang (Nguyen Du Secondary School & Tran Dai Nghia High School for the Gifted, HCMC). Awarded a Silver Medal at the 2021 Kaohsiung International Invention & Design EXPO (KIDE 2021) and granted Vietnamese Utility Solution Patent No. 4647 (“Bằng độc quyền giải pháp hữu ích”) by the Intellectual Property Office of Vietnam on 26 December 2025 (Application No. 2-2025-01029, filed 26/01/2022), with Nhu Nhat Bao Anh listed as Co-Author #3 on the official “Danh sách kèm theo” Patent Annex.",
        myRoleTodo: "TODO (05.30 — My Role / Contribution): To be confirmed by Bao Anh. Per portfolio rules, Bao Anh's specific tasks are never inferred from her name appearing on the patent/certificate.",
        caseFieldsTodo: [
          "TODO (05.28 — Extended Overview): Add feature breakdown confirmed by Bao Anh",
          "TODO (05.30 — My Role): Specify Bao Anh's exact tasks (e.g. user research, UX content, storytelling, or presentation)",
          "TODO (10.04 — Competition Media): Add optional KIDE 2021 presentation photos or product screenshots"
        ],
        meta: [
          { label: "Patent Type & No.", value: "Utility Solution Patent No. 4647" },
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
            height: 1812,
            alt: "Vietnamese Utility Solution Patent No. 4647 cover page for Remote Learning Support System"
          },
          {
            certId: "patent-4647-annex",
            badge: "Patent No. 4647 · Authors Annex",
            year: "26 Dec 2025",
            title: "Official Patent Annex (“Danh sách kèm theo”)",
            caption: "Lists 3. NHỮ NHẬT BẢO ANH (VN) among Patented Co-Authors",
            img: "assets/img/certs/patent-4647-authors-annex.webp",
            width: 1400,
            height: 1051,
            alt: "Official Danh sách kèm theo annex page of Vietnamese Utility Solution Patent No. 4647 listing Nhu Nhat Bao Anh among the authors"
          }
        ],
        recognitions: [
          {
            certId: "patent-4647",
            badge: "Vietnamese Utility Solution Patent",
            year: "26 Dec 2025",
            title: "Vietnamese Utility Solution Patent No. 4647 — “Hệ thống hỗ trợ học tập từ xa” (iTutorTDN)",
            issuer: "Intellectual Property Office of Vietnam · App No. 2-2025-01029 (Filed 26/01/2022)",
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
        formId: "05.01–05.14 / 05.32–05.33",
        indexLabel: "Case Study (b) · Applied Organisational AI Software (2025)",
        title: "iViHRM — AI-Powered Human Resource Management System for SMEs",
        subtitle: "Recognised at the 2025 Kaohsiung International Invention & Design EXPO (KIDE 2025) & by the Macao Innovation and Invention Association (MIIA)",
        cnmLens: "Organisational Communication & Workflow Design: iViHRM applies artificial intelligence to human resource management for small and medium-sized enterprises (SMEs), focusing on clearer internal coordination, personnel workflows, and decision support.",
        description: "Developed as a separate applied software project in 2025, iViHRM is an AI-powered human resource management system tailored for small and medium-sized enterprises (SMEs).",
        teamAndHonors: "Co-invented by Le Gia Hung (VNU-HCM High School for the Gifted) and Nhu Nhat Bao Anh (Hanoi–Amsterdam High School for the Gifted), alongside international collaborators. Both the KIDE 2025 Gold Medal (WIIPA, Kaohsiung) and the MIIA 2025 Leading Innovation Award explicitly name Le Gia Hung and Nhu Nhat Bao Anh for iViHRM.",
        myRoleTodo: "TODO (05.05 — My Role): To be confirmed by Bao Anh. Per portfolio rules, Bao Anh's specific tasks are never inferred from her name appearing on the award certificates.",
        caseFieldsTodo: [
          "TODO (05.01 — Overview, 100–150 words): Full project overview by Bao Anh",
          "TODO (05.02 / 05.03 / 05.04 — Organization, Dates & Team): Confirm partner organisation & timeline details",
          "TODO (05.05 — My Role): Specify Bao Anh's actual tasks on iViHRM",
          "TODO (05.06 — User Research): Add user research notes if applicable",
          "TODO (05.07 — UX Content): Add UX content & information architecture notes if applicable",
          "TODO (05.08 — Storytelling): Add product narrative & storytelling notes if applicable",
          "TODO (05.09 — Pitch): Add pitch deck / presentation notes if applicable",
          "TODO (05.10 — Visual Communication): Add media/communication design notes if applicable",
          "TODO (05.11 — Reflection, 80–120 words): Key lessons learned from iViHRM",
          "TODO (05.14 / 10.04 — Gallery): Add competition photos, slides, or video links"
        ],
        meta: [
          { label: "Project Name", value: "iViHRM (AI-Powered HRM for SMEs)" },
          { label: "Exhibition Dates", value: "4–6 December 2025 · Kaohsiung, Taiwan" },
          { label: "Recognition I (05.13)", value: "KIDE 2025 Gold Medal (WIIPA)" },
          { label: "Recognition II (05.33)", value: "MIIA 2025 Leading Innovation Award" }
        ],
        hasArchitectureDiagram: false,
        patentPlates: [],
        recognitions: [
          {
            certId: "cert-kide-2025-gold",
            badge: "Gold Medal · KIDE 2025 (05.12 / 05.13)",
            year: "4–6 Dec 2025",
            title: "Kaohsiung International Invention & Design EXPO (KIDE 2025) — “AI-powered Human Resource Management System (iViHRM)”",
            issuer: "World Invention Intellectual Property Associations (WIIPA) · Kaohsiung, Taiwan",
            btnLabel: "Certificate ↗"
          },
          {
            certId: "cert-miia-2025",
            badge: "Leading Innovation Award · 2025 (05.32 / 05.33)",
            year: "Dec 2025",
            title: "Macao Innovation and Invention Association (MIIA) Special Award — “iViHRM – An AI-Powered HRM System for SMEs”",
            issuer: "Macao Innovation and Invention Association (at KIDE 2025) · Kaohsiung / Macao",
            btnLabel: "Certificate ↗"
          }
        ]
      }
    ]
  },

  /**
   * Additional Case Study Slots in Section 04 (Projects) — Form Tab 05 PROJECTS
   * Hidden in production while showNewMediaWork is false (visible in ?draft mode).
   */
  showNewMediaWork: false,
  newMediaWork: [
    {
      isDraft: true,
      formId: "04.10–04.17",
      index: "Case Study (c-1) · Brand & Data-Driven Media",
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
      formId: "05.15–05.21",
      index: "Case Study (c-2) · Brand Project Slot (05.15–05.21)",
      title: "[TODO (05.15): Brand Project Name — Format or TokyoLife Campaign]",
      organisation: "[TODO: Brand / Organisation]",
      role: "[TODO (05.18): My Role & Creative Concept]",
      format: "Brand Communication Campaign",
      tools: "[TODO (05.19): Deliverables Produced]",
      goalAndResult: "[TODO (05.16 / 05.17 / 05.20): Campaign Objective (05.16), Target Audience (05.17), and Measurable Results (05.20).]",
      coverImg: "",
      coverTodo: "TODO (05.21): Add approved Brand Project visual / evidence",
      linkUrl: "",
      linkLabel: "TODO (05.21): Brand Project Evidence Link"
    },
    {
      isDraft: true,
      formId: "05.22–05.27",
      index: "Case Study (d) · Creative Project Slot (05.22–05.27)",
      title: "[TODO (05.22): Creative Project Name]",
      organisation: "Independent / School Creative Project",
      role: "[TODO (05.24): Creative Process & Execution]",
      format: "Creative Writing, Storytelling & Media Production",
      tools: "[TODO (05.25): Final Output Format]",
      goalAndResult: "[TODO (05.23 / 05.26): Inspiration (05.23) and Key Reflection / Lessons Learned (05.26).]",
      coverImg: "",
      coverTodo: "TODO (05.27): Add Creative Project visual / cover",
      linkUrl: "",
      linkLabel: "TODO (05.27): Creative Project Link"
    }
  ],

  honors: {
    volunteeringTodo: {
      formId: "06.06 / 06.07",
      title: "TODO (06.06 / 06.07 — Volunteering & Community Impact)",
      detail: "Add community service / volunteering roles, social impact, and supporting evidence photos or certificates (Chưa bắt đầu in form)."
    },
    invention: [
      {
        formId: "05.29 / 06.08",
        year: "Dec 2025",
        title: "Vietnamese Utility Solution Patent No. 4647 (Project: iTutorTDN)",
        subtitle: "Remote Learning Support System (“Bằng độc quyền giải pháp hữu ích — Hệ thống hỗ trợ học tập từ xa”) · App No. 2-2025-01029 (Filed 26/01/2022, Granted 26/12/2025)",
        issuer: "Intellectual Property Office of Vietnam",
        certId: "patent-4647"
      },
      {
        formId: "05.13 / 06.01",
        year: "Dec 2025",
        title: "Gold Medal — Kaohsiung International Invention & Design EXPO (Project: iViHRM)",
        subtitle: "AI-powered Human Resource Management System (iViHRM)",
        issuer: "World Invention Intellectual Property Associations (WIIPA)",
        certId: "cert-kide-2025-gold"
      },
      {
        formId: "05.33 / 06.03",
        year: "Dec 2025",
        title: "Leading Innovation Award (Project: iViHRM)",
        subtitle: "iViHRM – An AI-Powered HRM System for SMEs",
        issuer: "Macao Innovation and Invention Association (MIIA)",
        certId: "cert-miia-2025"
      },
      {
        formId: "06.19",
        year: "Dec 2021",
        title: "Silver Medal — Kaohsiung International Invention & Design EXPO (Project: iTutorTDN)",
        subtitle: "iTutorTDN – a study assistant center application",
        issuer: "World Invention Intellectual Property Associations (WIIPA)",
        certId: "cert-kide-2021-silver"
      }
    ],
    academic: [
      {
        formId: "03.10",
        year: "May 2026",
        title: "Academic Excellence Award — Outstanding Student (Học sinh Xuất sắc), Grade 11",
        subtitle: "School Year 2025–2026 · Class 11 Văn 2 (Literature Specialization)",
        issuer: "Hanoi–Amsterdam High School for the Gifted",
        certId: "cert-grade11-excellence"
      },
      {
        formId: "03.07",
        year: "May 2025",
        title: "Academic Excellence Award — Excellent Student (Học sinh Giỏi), Grade 10",
        subtitle: "School Year 2024–2025 · Class 10 Văn 2 (Literature Specialization)",
        issuer: "Hanoi–Amsterdam High School for the Gifted",
        certId: "cert-grade10-excellence"
      },
      {
        formId: "cert-grade9-excellence",
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
        formId: "03.01 / 03.02 / 03.03 / 03.06",
        period: "2024 – 2027 (Expected)",
        grades: "Grades 10–12",
        name: "Hanoi–Amsterdam High School for the Gifted",
        location: "Hanoi, Vietnam",
        detail: "Specialization in Literature (Lớp Chuyên Văn — Verified on official school records)"
      },
      {
        formId: "school-caugiay",
        period: "2023 – 2024",
        grades: "Grade 9",
        name: "Cau Giay Secondary School",
        location: "Hanoi, Vietnam",
        detail: "Class 9A6 · Graduated with Distinction (Giỏi)"
      },
      {
        formId: "school-nguyendu",
        period: "2020 – 2023",
        grades: "Grades 6–8",
        name: "Nguyen Du Secondary School",
        location: "Ho Chi Minh City, Vietnam",
        detail: "Lower secondary foundation"
      }
    ],
    selections: [
      {
        formId: "cert-hanoi-city-2025",
        date: "Oct 2025",
        title: "Selected Participant — Hanoi City-Level Grade 12 Excellent Student & National Team Selection Exam",
        subject: "Literature (Ngữ văn)",
        detail: "Selected to represent Hanoi–Amsterdam High School for the Gifted and participated in the Grade 12 city-level Literature examination as an 11th-grade student (Class 11 Văn 2 · Certificate of Participation issued by the Hanoi Department of Education and Training).",
        certId: "cert-hanoi-city-2025"
      }
    ],
    gpaSummary: [
      {
        formId: "03.09",
        grade: "Grade 11 (2025–2026)",
        sem1: "9.34",
        sem2: "9.20",
        year: "9.26",
        roundedNote: "9.2625 in form · 9.29 / 9.3 on 9-subject signed transcript",
        standing: "Outstanding Student (Học sinh Xuất sắc)"
      },
      {
        formId: "03.04",
        grade: "Grade 10 (2024–2025)",
        sem1: "8.94",
        sem2: "9.00",
        year: "8.98",
        roundedNote: "8.975 in form · 9.03 / 9.0 on 9-subject signed transcript",
        standing: "Excellent Student (Học sinh Giỏi)"
      }
    ],
    subjects: [
      { formId: "03.05", name: "Literature (Specialization)", g10: "8.7", g11: "9.3", highlight: true },
      { formId: "03.12", name: "English", g10: "8.9", g11: "9.6", highlight: true },
      { formId: "transcript-gdktpl", name: "Economics & Law Education", g10: "9.5", g11: "9.5", highlight: false },
      { formId: "03.13", name: "History", g10: "9.4", g11: "9.4", highlight: false },
      { formId: "03.14", name: "Geography", g10: "9.1", g11: "9.4", highlight: false },
      { formId: "transcript-tech", name: "Technology", g10: "9.3", g11: "9.5", highlight: false },
      { formId: "transcript-math", name: "Mathematics", g10: "8.8", g11: "9.0", highlight: false },
      { formId: "transcript-bio", name: "Biology", g10: "9.3", g11: "8.2", highlight: false },
      { formId: "transcript-gdqp", name: "National Defence & Security Education (Army Training)", g10: "8.3", g11: "9.7", highlight: false }
    ],
    tests: [
      {
        formId: "07.06 / 07.07",
        name: "IELTS Academic",
        score: "7.5 Overall",
        badge: "CEFR Level C1",
        date: "11 Feb 2026",
        breakdown: "Reading 8.5 · Listening 7.5 · Writing 6.5 · Speaking 6.5 (Verified from official TRF)"
      },
      {
        formId: "03.11",
        name: "Advanced Placement (AP)",
        score: "4 / 5",
        badge: "AP Psychology",
        date: "2026",
        breakdown: "College Board Advanced Placement Program (Verified from score report)"
      }
    ]
  },

  /**
   * 07 — SKILLS & TOOLS (Form Tab 07 SKILLS)
   */
  skills: {
    communication: [
      {
        formId: "07.11",
        skill: "Public Relations Leadership",
        period: "May 2024 – Present",
        proofRole: "Vice Head of Public Relations — RICEPsy (Jun 2026–Present) · Head of Public Relations — Science Alive (May 2024–Present)",
        detail: "Directing strategic public relations, campaign messaging, and external media coordination across state-level youth psychology and science organisations.",
        certId: null
      },
      {
        formId: "07.08",
        skill: "Media Advising",
        period: "Nov 2025 – Apr 2026",
        proofRole: "Media Advisor — Scribbles Season 11, Stage 2",
        detail: "Advising student editorial and media teams on narrative tone, content planning, and audience engagement.",
        certId: null
      },
      {
        formId: "07.09",
        skill: "Content Development",
        period: "Oct 2024 – Aug 2026",
        proofRole: "Content Member — HAEC (Oct 2024–Jun 2025) · Brand Communication Intern — TokyoLife (Jun–Aug 2026)",
        detail: "Developing editorial copy, social media content, and insight-driven brand communication strategies.",
        certId: null
      },
      {
        formId: "07.10",
        skill: "Event Organization",
        period: "May 2024 – Present",
        proofRole: "Vice Head of Organizer — Science Alive (May 2024–Present) · Logistics Member — Science Camp 2025",
        detail: "Co-leading multi-year science outreach exhibitions, on-site camp operations, and cross-departmental coordination.",
        certId: "cert-science-camp-2025"
      },
      {
        formId: "07.01",
        skill: "Public Relations & Science Outreach",
        period: "Dec 2024 – Present",
        proofRole: "Public Relations Member — Society of Open Science, Science Tornado 2025 (“Eternity”), Science Fair 2025 (“Pixaverse”) · PR Advisor & Ambassador — YOH",
        detail: "Executing press outreach, youth engagement campaigns, and public communication for flagship Hanoi–Amsterdam science initiatives.",
        certId: "cert-sos-2025"
      }
    ],
    communicationEvidenceTodo: "TODO (07.02 — Communication Evidence): Add links to published PR articles, press kits, and campaign writing samples",
    tools: {
      verified: [
        {
          name: "Local AI Media & Classification Tools",
          context: "TokyoLife Brand Communication Internship (2026)",
          detail: "Deployed to classify 30 days of customer social media interactions and identify service pain points."
        },
        {
          name: "Apify Web Scraping",
          context: "TokyoLife Brand Communication Internship (2026)",
          detail: "Used to collect 30 days of multi-channel social media feedback for brand listening analysis."
        },
        {
          name: "Automated Real-Time Analytics Dashboard",
          context: "TokyoLife Brand Communication Internship (2026)",
          detail: "Designed to visualise categorised customer feedback and track brand sentiment in real time."
        }
      ],
      toolsTodo: "TODO (07.03 / 07.04 — Creative Tools & Evidence): Confirm creative & design tools (e.g. Canva, Adobe Creative Cloud, Figma) and attach work samples by tool"
    },
    languages: [
      {
        formId: "07.05",
        language: "Vietnamese",
        level: "Native Proficiency",
        detail: "Specialization in Literature (Lớp Chuyên Văn), Hanoi–Amsterdam High School for the Gifted · Selected Participant, Hanoi City-Level Grade 12 Literature Exam (2025)"
      },
      {
        formId: "07.06 / 07.07",
        language: "English",
        level: "IELTS Academic 7.5 Overall (CEFR Level C1)",
        detail: "Reading 8.5 · Listening 7.5 · Writing 6.5 · Speaking 6.5 · Test Date: 11 Feb 2026 (Official IELTS Test Report Form)"
      }
    ]
  },

  /**
   * 08 — VISION (Form Tab 08 MY VISION, merged with CNM Motivation Box)
   */
  vision: {
    kicker: "08 — Vision & Academic Direction",
    title: "Why Communications & New Media",
    headlineField: "Communications and New Media (CNM)",
    broaderField: "Multimedia Communication / Media & Communication",
    editorialSummary: "Across literature studies at Hanoi–Amsterdam, data-driven brand listening at TokyoLife, twelve student public relations roles, and two co-invented software systems (iTutorTDN and iViHRM), Bao Anh’s work explores one central question: how emerging media technologies and strategic communication can make complex ideas accessible, trustworthy, and human-centred.",
    pillars: [
      {
        formId: "08.01",
        label: "08.01 · Why Communications & New Media / Multimedia Communication",
        prompt: "120–150 words explaining why Bao Anh chooses Communications and New Media (and the broader Multimedia Communication / Media & Communication field).",
        todoText: "[TODO (08.01): Insert Bao Anh’s 120–150-word personal statement on why she is applying to Communications and New Media.]"
      },
      {
        formId: "08.02",
        label: "08.02 · University Academic Goals",
        prompt: "Specific courses, research areas, labs, and interdisciplinary questions across communication management, digital culture, and interactive media she wants to pursue at university.",
        todoText: "[TODO (08.02): Insert Bao Anh’s university academic goals.]"
      },
      {
        formId: "08.03",
        label: "08.03 · Future Career Aspiration",
        prompt: "70–100 words on her post-graduation career direction in strategic brand communication, digital media, and technology.",
        todoText: "[TODO (08.03): Insert Bao Anh’s 70–100-word future career aspiration.]"
      },
      {
        formId: "08.04",
        label: "08.04 · Personal Impact",
        prompt: "The social, cultural, and community value she aims to create through communication and new media.",
        todoText: "[TODO (08.04): Insert Bao Anh’s personal impact statement.]"
      }
    ]
  },

  certificates: [
    {
      id: "patent-4647",
      formId: "05.29 / 06.08",
      category: "invention",
      categoryLabel: "Invention · iTutorTDN",
      title: "Utility Solution Patent No. 4647 — Cover Page (iTutorTDN – Remote Learning Support System)",
      issuer: "Intellectual Property Office of Vietnam",
      year: "2025",
      img: "assets/img/certs/patent-4647-itutor.webp",
      width: 1400,
      height: 1812,
      alt: "Vietnamese Utility Solution Patent No. 4647 cover page for Remote Learning Support System"
    },
    {
      id: "patent-4647-annex",
      formId: "05.29 / 05.31",
      category: "invention",
      categoryLabel: "Invention · iTutorTDN",
      title: "Utility Solution Patent No. 4647 — Authors Annex (“Danh sách kèm theo”, Co-Author #3: Nhu Nhat Bao Anh)",
      issuer: "Intellectual Property Office of Vietnam",
      year: "2025",
      img: "assets/img/certs/patent-4647-authors-annex.webp",
      width: 1400,
      height: 1051,
      alt: "Official Danh sách kèm theo annex page of Vietnamese Utility Solution Patent No. 4647 listing Nhu Nhat Bao Anh among the authors"
    },
    {
      id: "cert-kide-2021-silver",
      formId: "06.19",
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
      formId: "05.13 / 06.01",
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
      formId: "05.33 / 06.03",
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
      formId: "03.10",
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
      formId: "03.02",
      category: "academic",
      categoryLabel: "Academic Selection",
      title: "Certificate of Participation — Hanoi City-Level Grade 12 Excellent Student & National Team Selection Exam (Literature)",
      issuer: "Hanoi Department of Education and Training",
      year: "2025",
      img: "assets/img/certs/2025-hanoi-city-excellent-student.webp",
      width: 1400,
      height: 1082,
      alt: "Hanoi Department of Education and Training certificate of participation for Grade 12 City-Level Literature Examination"
    },
    {
      id: "cert-grade10-excellence",
      formId: "03.07",
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
      formId: "cert-grade9",
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
      formId: "cert-science-camp-2026",
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
      formId: "04.25 / 06.16",
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
      formId: "cert-science-tornado-2025",
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
      formId: "cert-science-fair-2025",
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
      formId: "04.26 / 06.17",
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
  ],

  /* BEGIN_FORM_SYNC_INDEX */
  formRows: {
    "01.01": {"field": "Full name", "timeline": "", "value": "Nhu Nhat Bao Anh", "status": "Hoàn thành", "isTodo": false},
    "01.02": {"field": "Preferred name", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "01.03": {"field": "Current school", "timeline": "2024–2027 (expected)", "value": "Hanoi - Amsterdam High School for the Gifted", "status": "Hoàn thành", "isTodo": false},
    "01.04": {"field": "Intended major", "timeline": "", "value": "Communication and New Media / Multimedia Communication (intended field; final major to confirm)", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "01.05": {"field": "Email", "timeline": "", "value": "nnhatbaoanh@gmail.com", "status": "Hoàn thành", "isTodo": false},
    "01.06": {"field": "Location", "timeline": "", "value": "Hanoi, Vietnam", "status": "Hoàn thành", "isTodo": false},
    "01.07": {"field": "Tagline", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "01.08": {"field": "Introduction", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "01.09": {"field": "Personal quote", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "01.10": {"field": "Hero portrait", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "01.11": {"field": "Creative activity photo", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "01.12": {"field": "English CV", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "02.01": {"field": "My Story", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "02.02": {"field": "Interests", "timeline": "", "value": "Public relations.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "02.03": {"field": "Values", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "02.04": {"field": "Personality examples", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "02.06": {"field": "Interest — Creative writing", "timeline": "", "value": "Creative writing", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "02.07": {"field": "Interest — Literature", "timeline": "", "value": "Literature", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "02.08": {"field": "Interest — Innovation and technology", "timeline": "", "value": "Innovation and technology", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "02.09": {"field": "Interest — Youth-led science initiatives", "timeline": "", "value": "Youth-led science initiatives", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "03.01": {"field": "School", "timeline": "2024–2027 (expected)", "value": "Hanoi - Amsterdam High School for the Gifted, Hanoi, Vietnam", "status": "Hoàn thành", "isTodo": false},
    "03.02": {"field": "Specialization", "timeline": "2024–2027 (expected)", "value": "Literature specialization (to be verified against school records)", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "03.03": {"field": "Period", "timeline": "2024–2027 (expected)", "value": "2024–2027 (expected)", "status": "Hoàn thành", "isTodo": false},
    "03.04": {"field": "GPA", "timeline": "2024–2025", "value": "8.98 (rounded to 2 decimals from 8.975 across 8 graded subjects; Semester 1: 8.85, Semester 2: 9.09)", "status": "Hoàn thành", "isTodo": false},
    "03.05": {"field": "Relevant subjects", "timeline": "2025–2026", "value": "Literature — Grade 11: 9.3/10", "status": "Hoàn thành", "isTodo": false},
    "03.06": {"field": "Graduation", "timeline": "2027 (expected)", "value": "2027 (expected)", "status": "Hoàn thành", "isTodo": false},
    "03.07": {"field": "Academic highlights", "timeline": "2024–2025", "value": "Excellent Student certificate — Grade 10 (2024–2025).", "status": "Hoàn thành", "isTodo": false},
    "03.09": {"field": "Grade 11 GPA", "timeline": "2025–2026", "value": "9.26 (rounded to 2 decimals from 9.2625 across 8 graded subjects; Semester 1: 9.19, Semester 2: 9.30)", "status": "Hoàn thành", "isTodo": false},
    "03.10": {"field": "Excellent Student — Grade 11", "timeline": "2025–2026", "value": "Excellent Student certificate.", "status": "Hoàn thành", "isTodo": false},
    "03.11": {"field": "AP Psychology", "timeline": "2026", "value": "AP Psychology score: 4.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "03.12": {"field": "English — Grade 11", "timeline": "2025–2026", "value": "English: 9.6/10", "status": "Hoàn thành", "isTodo": false},
    "03.13": {"field": "History — Grade 11", "timeline": "2025–2026", "value": "History: 9.4/10", "status": "Hoàn thành", "isTodo": false},
    "03.14": {"field": "Geography — Grade 11", "timeline": "2025–2026", "value": "Geography: 9.4/10", "status": "Hoàn thành", "isTodo": false},
    "04.01": {"field": "Format – Role", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.02": {"field": "Format – Dates", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.03": {"field": "Format – Responsibilities", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.04": {"field": "Format – Campaigns", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.05": {"field": "Format – Contributions", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.06": {"field": "Format – Tools", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.07": {"field": "Format – Results", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.08": {"field": "Format – Learning", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.09": {"field": "Format – Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.10": {"field": "TokyoLife – Role", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.11": {"field": "TokyoLife – Dates", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.12": {"field": "TokyoLife – Responsibilities", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.13": {"field": "TokyoLife – Campaigns", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.14": {"field": "TokyoLife – Contributions", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.15": {"field": "TokyoLife – Results", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.16": {"field": "TokyoLife – Learning", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.17": {"field": "TokyoLife – Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "04.18": {"field": "Science Alive — Vice Head of Organizer", "timeline": "May 2024–present", "value": "Vice Head of Organizer", "status": "Hoàn thành", "isTodo": false},
    "04.19": {"field": "Scribbles Season 11 Stage 2 — Role", "timeline": "Nov 2025–Apr 2026", "value": "Media Advisor", "status": "Hoàn thành", "isTodo": false},
    "04.20": {"field": "RICEPsy — Role", "timeline": "Jun 2026–present", "value": "Vice Head of Public Relations", "status": "Hoàn thành", "isTodo": false},
    "04.21": {"field": "YOH — Public Relations Advisor", "timeline": "", "value": "Public Relations Advisor", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "04.22": {"field": "Cleen Project Season 8 — Role", "timeline": "Jun 2025–Apr 2026", "value": "Human Resources Member", "status": "Hoàn thành", "isTodo": false},
    "04.23": {"field": "Psi Ams — Role", "timeline": "Oct 2024–Jun 2025", "value": "Expertise Member", "status": "Hoàn thành", "isTodo": false},
    "04.24": {"field": "HAEC — Role", "timeline": "Oct 2024–Jun 2025", "value": "Content Member", "status": "Hoàn thành", "isTodo": false},
    "04.25": {"field": "Society of Open Science — Role", "timeline": "Dec 2024–Sep 2025", "value": "Public Relations Member", "status": "Hoàn thành", "isTodo": false},
    "04.26": {"field": "Science Camp 2025 — Role", "timeline": "Jun–Jul 2025", "value": "Logistics Member", "status": "Hoàn thành", "isTodo": false},
    "04.27": {"field": "Science Alive — Head of Public Relations", "timeline": "May 2024–present", "value": "Head of Public Relations", "status": "Hoàn thành", "isTodo": false},
    "04.28": {"field": "YOH – Youth of Highschool — Ambassador", "timeline": "", "value": "Ambassador", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "05.01": {"field": "iViHRM – Overview", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.02": {"field": "iViHRM – Organization", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.03": {"field": "iViHRM – Dates", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.04": {"field": "iViHRM – Team", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.05": {"field": "iViHRM – My Role", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.06": {"field": "iViHRM – User Research", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.07": {"field": "iViHRM – UX Content", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.08": {"field": "iViHRM – Storytelling", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.09": {"field": "iViHRM – Pitch", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.10": {"field": "iViHRM – Visual Communication", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.11": {"field": "iViHRM – Reflection", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.12": {"field": "iViHRM – Competitions", "timeline": "2025", "value": "Kaohsiung International Invention & Design EXPO, 2025. Relationship to iViHRM to be verified.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "05.13": {"field": "iViHRM – Awards", "timeline": "2025", "value": "Gold Medal — Kaohsiung International Invention & Design EXPO, 2025. Relationship to iViHRM to be verified.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "05.14": {"field": "iViHRM – Gallery", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.15": {"field": "Brand Project – Name", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.16": {"field": "Brand Project – Objective", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.17": {"field": "Brand Project – Audience", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.18": {"field": "Brand Project – My Role", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.19": {"field": "Brand Project – Deliverables", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.20": {"field": "Brand Project – Results", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.21": {"field": "Brand Project – Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.22": {"field": "Creative Project – Name", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.23": {"field": "Creative Project – Inspiration", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.24": {"field": "Creative Project – Process", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.25": {"field": "Creative Project – Output", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.26": {"field": "Creative Project – Reflection", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.27": {"field": "Creative Project – Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.28": {"field": "iTutorTDN – Project Overview", "timeline": "", "value": "iTutorTDN – an e-learning assistant program. Further project details and Bao Anh's role to be confirmed.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "05.29": {"field": "iTutorTDN – Patent", "timeline": "26 Dec 2025", "value": "Patent for iTutorTDN – an e-learning assistant program; No. 4647; issued 26 December 2025.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "05.30": {"field": "iTutorTDN – My Contribution", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.31": {"field": "iTutorTDN – Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "05.32": {"field": "iViHRM – Macao Competition", "timeline": "2025", "value": "Macao Invention & Innovation Association (2025). Project attribution needs confirmation.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "05.33": {"field": "iViHRM – Macao Award", "timeline": "2025", "value": "Leading Innovation Award — Macao Invention & Innovation Association, 2025. Project attribution needs confirmation.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "06.01": {"field": "Award 01", "timeline": "2025", "value": "Gold Medal — Kaohsiung International Invention & Design EXPO, 2025.", "status": "Hoàn thành", "isTodo": false},
    "06.02": {"field": "Award 01 Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "06.03": {"field": "Award 02", "timeline": "2025", "value": "Leading Innovation Award — Macao Invention & Innovation Association, 2025.", "status": "Hoàn thành", "isTodo": false},
    "06.04": {"field": "Award 02 Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "06.05": {"field": "Activity — Science Alive (Vice Head of Organizer)", "timeline": "May 2024–present", "value": "Vice Head of Organizer — Science Alive.", "status": "Hoàn thành", "isTodo": false},
    "06.06": {"field": "Volunteering", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "06.07": {"field": "Activities Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "06.08": {"field": "iTutorTDN – Patent", "timeline": "26 Dec 2025", "value": "Patent for iTutorTDN – an e-learning assistant program; No. 4647; issued 26 December 2025.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "06.09": {"field": "iTutorTDN – Patent Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "06.10": {"field": "Activity — RICEPsy", "timeline": "Jun 2026–present", "value": "Vice Head of Public Relations", "status": "Hoàn thành", "isTodo": false},
    "06.11": {"field": "Activity — Scribbles Season 11 Stage 2", "timeline": "Nov 2025–Apr 2026", "value": "Media Advisor", "status": "Hoàn thành", "isTodo": false},
    "06.12": {"field": "Activity — YOH (Public Relations Advisor)", "timeline": "", "value": "Public Relations Advisor", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "06.13": {"field": "Activity — Cleen Project Season 8", "timeline": "Jun 2025–Apr 2026", "value": "Human Resources Member", "status": "Hoàn thành", "isTodo": false},
    "06.14": {"field": "Activity — Psi Ams", "timeline": "Oct 2024–Jun 2025", "value": "Expertise Member", "status": "Hoàn thành", "isTodo": false},
    "06.15": {"field": "Activity — HAEC", "timeline": "Oct 2024–Jun 2025", "value": "Content Member", "status": "Hoàn thành", "isTodo": false},
    "06.16": {"field": "Activity — Society of Open Science", "timeline": "Dec 2024–Sep 2025", "value": "Public Relations Member", "status": "Hoàn thành", "isTodo": false},
    "06.17": {"field": "Activity — Science Camp 2025", "timeline": "Jun–Jul 2025", "value": "Logistics Member", "status": "Hoàn thành", "isTodo": false},
    "06.19": {"field": "Silver Medal — Kaohsiung International Invention & Design EXPO", "timeline": "2021", "value": "Silver Medal — Kaohsiung International Invention & Design EXPO (2021).", "status": "Hoàn thành", "isTodo": false},
    "06.20": {"field": "Activity — Science Alive (Head of Public Relations)", "timeline": "May 2024–present", "value": "Head of Public Relations — Science Alive.", "status": "Hoàn thành", "isTodo": false},
    "06.21": {"field": "Activity — YOH (Ambassador)", "timeline": "", "value": "Ambassador — YOH.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "07.01": {"field": "Communication Skills", "timeline": "", "value": "Public relations (experience demonstrated through club roles; samples to be added).", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "07.02": {"field": "Communication Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "07.03": {"field": "Creative Tools", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "07.04": {"field": "Tool Evidence", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "07.05": {"field": "Vietnamese", "timeline": "", "value": "Vietnamese (native; self-confirm)", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "07.06": {"field": "English", "timeline": "11 Feb 2026", "value": "English — IELTS 7.5 Academic (Reading 8.5 · Listening 7.5 · Writing 6.5 · Speaking 6.5 · CEFR C1 · Test date: 11 Feb 2026, Official TRF)", "status": "Hoàn thành", "isTodo": false},
    "07.07": {"field": "English Tests", "timeline": "11 Feb 2026", "value": "IELTS Academic 7.5 Overall (R 8.5, L 7.5, W 6.5, S 6.5) — Official Test Report Form dated 11 Feb 2026", "status": "Hoàn thành", "isTodo": false},
    "07.08": {"field": "Media advising", "timeline": "Nov 2025–Apr 2026", "value": "Media Advisor — Scribbles Season 11 Stage 2.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "07.09": {"field": "Content development", "timeline": "Oct 2024–Jun 2025", "value": "Content Member — HAEC.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "07.10": {"field": "Event organization", "timeline": "May 2024–present", "value": "Vice Head of Organizer — Science Alive.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "07.11": {"field": "Public relations leadership", "timeline": "Jun 2026–present", "value": "Vice Head of Public Relations — RICEPsy.", "status": "Chờ xác minh (Verified)", "isTodo": false},
    "08.01": {"field": "Why Multimedia Communication", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "08.02": {"field": "Academic Goals", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "08.03": {"field": "Future Aspiration", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "08.04": {"field": "Personal Impact", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "09.01": {"field": "Full name", "timeline": "", "value": "Nhu Nhat Bao Anh", "status": "Hoàn thành", "isTodo": false},
    "09.02": {"field": "Email", "timeline": "", "value": "nnhatbaoanh@gmail.com", "status": "Hoàn thành", "isTodo": false},
    "09.03": {"field": "LinkedIn", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "09.04": {"field": "Behance", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "09.05": {"field": "YouTube / Instagram", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "09.06": {"field": "CV PDF", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "09.07": {"field": "Contact Message", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.01": {"field": "Portrait", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.02": {"field": "School", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.03": {"field": "Internship", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.04": {"field": "Competition", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.05": {"field": "Awards", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.06": {"field": "Brand Logos", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.07": {"field": "Videos", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.08": {"field": "Writing samples", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true},
    "10.09": {"field": "CV", "timeline": "", "value": "", "status": "Chưa bắt đầu", "isTodo": true}
  }
  /* END_FORM_SYNC_INDEX */
};

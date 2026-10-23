// Shared listing data for opportunities.html and compare.html.
// Live listings from aseangems.org/scholarships and /mobility. c = ASEAN country of the institution.
const G = p => 'https://aseangems.org/getattachment/' + p;
const M = p => 'https://aseangems.org/getmedia/' + p;
const U = p => 'https://aseangems.org/' + p;
const LOGO = {
  mila: G('31144691-fc76-484b-859e-acd4e336e597/mila_logo-(1).png?lang=en-US&ext=.png'),
  tarumt: G('70936f21-25ec-4aed-b421-10d2cb4414a9/tarumt.webp?lang=en-US&ext=.webp'),
  nklic: G('5ccf4451-c42e-4c14-bd37-12398fe16afc/NKL.png?lang=en-US&ext=.png'),
  unikl: G('07d51e35-5305-4498-a3c4-4ed46cd92e58/UniKL-Logo.png?lang=en-US&ext=.png'),
  vnuk: G('495ba35c-5e9a-4cf7-851b-8f001a875a2c/images.png?lang=en-US&ext=.png'),
  mfu: G('49de1ca9-ed51-4810-8977-365a4b370067/images-(1).jpeg?lang=en-US&ext=.jpeg'),
};
const DATA = {
  sch: [
    { t: 'ASEAN Scholarship Scheme Merit Scholarship', inst: 'Mila University', loc: 'Putra Nilai, Negeri Sembilan', date: '30 Dec 2026', c: 'Malaysia', logo: LOGO.mila, url: U('scholarships/mila-university/asean-scholarship-scheme-merit-scholarship') },
    { t: 'MBA Scholarship by Saito University College', inst: 'Saito University College', loc: '', date: '30 Dec 2026', c: 'Malaysia', logo: G('5dc21da3-7f3d-404e-a707-2936a3ece1ae/channels4_profile.jpg?lang=en-US&ext=.jpg'), url: U('scholarships/saito-university-college/mba-scholarship-by-saito-university-college') },
    { t: 'SMILE - SCHOLARSHIP FOR MOBILITY AND INTERNATIONAL LEARNING EXPERIENCE', inst: 'Management & Science University (MSU)', loc: '', date: '31 Dec 2026', c: 'Malaysia', logo: M('4f504d5a-18b0-48cf-a10e-4bb730a80e58/msu-logo_1.jpg?width=1201&height=631&mediaprotectionhash=3fbc415bad3b8a4b191fe8debdbfcfd497c9b86e640af21c655c5f99bf779a65&ext=.jpg'), url: U('malaysia/management-science-university-(msu)/smile-scholarship-for-mobility-and-international-learning-experience') },
    { t: 'NEMSU Lianga ASEAN Scholarship', inst: 'NEMSU Lianga Campus', loc: '', date: '31 Dec 2031', c: 'Philippines', logo: M('dd60f3e6-1651-4c60-a185-1eaed4910a42/Nemsu.jpeg?width=224&height=224&mediaprotectionhash=a12c000d7cbee0fa10c6003b60381c1b41b0c12ee05ffe1491fc54328fb691d6&ext=.jpeg'), url: U('philippines/nemsu-lianga-campus/nemsu-lianga-asean-scholarship') },
    { t: "Universitas Esa Unggul's Scholarship (Tuition Fees Only)", inst: 'Universitas Esa Unggul', loc: '', date: '31 Dec 2026', c: 'Indonesia', logo: M('7242016b-9382-4910-afa7-3d198cdc6dd0/Universitas-Esa-Unggul_1.png?width=552&height=556&mediaprotectionhash=0492b14597654335ea166d711c52377ba6d9c19f1b028fca4f5a7f1c9c14f620&ext=.png'), url: U('indonesia/universitas-esa-unggul/universitas-esa-unggul-s-scholarship-(tuition-fees-only)') },
    { t: 'NKLIC ASEAN Scholarship', inst: 'NORTHERN KUALA LUMPUR INTERNATIONAL COLLEGE', loc: '', date: '31 Dec 2026', c: 'Malaysia', logo: LOGO.nklic, url: U('scholarships/northern-kuala-lumpur-international-college/accounting,-management,-marketing,-early-childhood-education,-real-estate-management') },
    { t: 'TARUMT ASEAN Scholarship', inst: 'TUNKU ABDUL RAHMAN UNIVERSITY OF MANAGEMENT AND TECHNOLOGY', loc: '', date: '31 Dec 2026', c: 'Malaysia', logo: LOGO.tarumt, url: U('scholarships/tunku-abdul-rahman-university-of-management-and-technology/asean-scholarship') },
    { t: 'ASEAN Scholarship', inst: 'Noli college of Bayugan City Agusan del Sur', loc: '', date: '31 Dec 2026', c: 'Philippines', logo: '', url: U('philippines/noli-college-of-bayugan-city-agusan-del-sur/asean-scholarship') },
    { t: 'APU ASEAN Scholarship', inst: 'ASIA PACIFIC UNIVERSITY OF TECHNOLOGY & INNOVATION', loc: '', date: '31 Dec 2026', c: 'Malaysia', logo: G('83a3baa7-5c01-4115-9e6f-cf5509b4c0c4/AsiaPacificUniversityOfTechnology-Innovation-svg.png?lang=en-US&ext=.png'), url: U('scholarships/asia-pacific-university-of-technology-innovation/apu-asean-scholarship') },
    { t: 'NKLIC Scholarship', inst: 'NORTHERN KUALA LUMPUR INTERNATIONAL COLLEGE', loc: 'Kuala Lumpur', date: '30 Dec 2026', c: 'Malaysia', logo: LOGO.nklic, url: U('malaysia/northern-kuala-lumpur-international-college/nklic-scholarship') },
    { t: "High Achiever's Scholarship - IFP", inst: 'University of Reading Malaysia', loc: '', date: '31 Dec 2026', c: 'Malaysia', logo: G('de079432-3bc9-458a-8396-393bb9bc6339/ea-inst-logo-uorm.png?lang=en-US&ext=.png'), url: U('malaysia/university-of-reading-malaysia/merit-scholarship') },
    { t: "CHANCELLOR'S SCHOLARSHIP", inst: 'University of Cyberjaya (UoC)', loc: 'Cyberjaya, Selangor', date: '30 Oct 2026', c: 'Malaysia', logo: G('cc657f88-0f69-439a-8cc9-2830f391e439/images.png?lang=en-US&ext=.png'), url: U('malaysia/university-of-cyberjaya-(uoc)/chancellor-s-scholarship') },
    { t: 'Post Graduate Tuition Fee Scholarship', inst: 'INTI INTERNATIONAL UNIVERSITY', loc: 'Negeri Sembilan, Malaysia', date: '30 Dec 2026', c: 'Malaysia', logo: G('c6ed1fdb-25e4-4627-882c-36cfdf842d52/inti-university-(1).webp?lang=en-US&ext=.webp'), url: U('malaysia/inti-international-university/post-graduate-tuition-fee-scholarship') },
    { t: 'ASEAN Scholarship', inst: 'Universiti Poly-Tech Malaysia (UPTM)', loc: 'Kuala Lumpur, Malaysia', date: '30 Dec 2026', c: 'Malaysia', logo: G('55119f6f-fe3b-4996-80ac-bab77e5bcef3/LOGO_UPTM_no_bg_baru1.png?lang=en-US&ext=.png'), url: U('malaysia/universiti-poly-tech-malaysia-(uptm)/asean-scholarship') },
    { t: 'The Tan Sri Yeoh Tiong Lay (YTL) ASB Scholarship Award', inst: 'Asia School of Business (ASB) In Collaboration With MIT Sloan', loc: 'Kuala Lumpur', date: '28 Feb 2027', c: 'Malaysia', logo: G('a91b306c-21f8-468b-b357-7c5c798fc90d/ASB.png?lang=en-US&ext=.png'), url: U('malaysia/asia-school-of-business-(asb)-in-collaboration-with-mit-sloan/the-tan-sri-yeoh-tiong-lay-(ytl)-asb-scholarship-award') },
    { t: 'EWIC ASEAN Scholarship', inst: 'EAST WEST INTERNATIONAL COLLEGE', loc: 'Seremban, Negeri Sembilan', date: '31 Dec 2026', c: 'Malaysia', logo: G('62b3d7db-2109-4e9e-954b-14835b812dc9/images.png?lang=en-US&ext=.png'), url: U('malaysia/east-west-international-college/ewic-asean-scholarship') },
    { t: 'UniKL TOP ACHIEVERS FOUNDATION SCHOLARSHIP (UTAFS)', inst: 'Universiti Kuala Lumpur (UniKL)', loc: 'Kuala Lumpur', date: '30 Jun 2027', c: 'Malaysia', logo: LOGO.unikl, url: U('malaysia/unikl/unikl-top-achievers-foundation-scholarship-(utafs)') },
    { t: 'VNUK Institute ASEAN Scholarship', inst: 'VNUK Institute for Research and Executive Education - The University of Danang', loc: 'Da Nang, Vietnam', date: '31 Dec 2026', c: 'Vietnam', logo: LOGO.vnuk, url: U('scholarships/van-lang-university/vnuk-institute-asean-scholarship') },
    { t: 'MILA ASEAN Scholarship; Merit Scholarship; ODL Scholarship', inst: 'Mila University', loc: 'Putra Nilai, Negeri Sembilan', date: '30 Dec 2026', c: 'Malaysia', logo: LOGO.mila, url: U('scholarships/mila-university/mila-asean-scholarship;-merit-scholarship;-odl-scholarship') },
    { t: 'Trust Education Grant', inst: 'UCSI UNIVERSITY', loc: '', date: '31 Dec 2026', c: 'Malaysia', logo: G('8dd54e67-2614-4be8-8502-d479ee616209/images.png?lang=en-US&ext=.png'), url: U('scholarships/ucsi-university/trust-education-grant') },
  ],
  mob: [
    { t: 'EXPLORE MALAYSIA WITH TAR UMT', inst: 'TUNKU ABDUL RAHMAN UNIVERSITY OF MANAGEMENT AND TECHNOLOGY', loc: 'TAR UMT KL MAIN CAMPUS', date: '', c: 'Malaysia', logo: LOGO.tarumt, url: U('malaysia/tunku-abdul-rahman-university-of-management-and-technology/explore-malaysia-with-tar-umt') },
    { t: 'Student Exchange / Short Research / Internship / Clinical Attachment / Summer Course / Erasmus+ / Short-term', inst: 'International Islamic University Malaysia (IIUM)', loc: 'IIUM Gombak Campus, Pagoh Campus, Kuantan Campus', date: '', c: 'Malaysia', logo: M('79cd430d-6575-4eb5-8235-774e2d109f18/IIUM_TAWHIDIC_UMMATIC_KHALIFAH.png?width=900&height=150&mediaprotectionhash=1bc5a190c256148f21eaae797f57408be4f3d2e46fbcdd3517dbf0dfd377cd9f&ext=.png'), url: U('malaysia/international-islamic-university-malaysia-(iium)/student-exchange-short-research-internship-clinical-attachment-summer-course-erasmus-sh') },
    { t: 'Global Exchange Malaysia Unisel', inst: 'Universiti Selangor (UNISEL)', loc: 'Bestari Jaya, Selangor Darul Ehsan Malaysia', date: '01 Nov 2026', c: 'Malaysia', logo: G('a0b9c153-2966-40db-afcb-70af25783fcd/Logo_of_Unisel_universiti_Selangor.png?lang=en-US&ext=.png'), url: U('malaysia/universiti-selangor-(unisel)/global-exchange-malaysia-unisel') },
    { t: 'VNUK Exchange Program', inst: 'VNUK Institute for Research and Executive Education - The University of Danang', loc: 'Da Nang, Vietnam', date: '10 Feb 2027', c: 'Vietnam', logo: LOGO.vnuk, url: U('scholarships/van-lang-university/vnuk-exchange-program') },
    { t: 'EDU TOURISM ENRICHMENT PROGRAMME', inst: 'FIRST CITY UNIVERSITY COLLEGE', loc: 'Bandar Utama, Petaling Jaya, Selangor', date: '31 Dec 2026', c: 'Malaysia', logo: G('bcef8da0-35a3-48b8-ae12-0fa6cac850f9/logo-1.png?lang=en-US&ext=.png'), url: U('malaysia/universiti-selangor-(unisel)-f07981786ebf4bf27d06d6c0d480068d/global-exchange-malaysia-unisel') },
    { t: 'ASEAN Student Experiential Mobility (ASEMO) 2026', inst: 'Universiti Kuala Lumpur (UniKL)', loc: 'UniKL Business School, Quill City Mall, Jalan Sultan Ismail, 50250 Kuala Lumpur', date: '13 Nov 2026 - 19 Nov 2026', c: 'Malaysia', logo: LOGO.unikl, url: U('malaysia/unikl/asean-student-experiential-mobility-(asemo)-2026') },
    { t: 'MFU Student Mobility Program', inst: 'Mae Fah Luang University', loc: 'Chiang Rai, Thailand', date: '30 Nov 2026', c: 'Thailand', logo: LOGO.mfu, url: U('scholarships/mae-fah-luang-university/mila-university-edutourism-programmes') },
    { t: 'TAR UMT INBOUND STUDENT EXCHANGE PROGRAMME 2027', inst: 'TUNKU ABDUL RAHMAN UNIVERSITY OF MANAGEMENT AND TECHNOLOGY', loc: 'TAR UMT KL Main Campus', date: '16 Jun 2026 - 16 May 2027', c: 'Malaysia', logo: LOGO.tarumt, url: U('malaysia/tunku-abdul-rahman-university-of-management-and-technology/tar-umt-inbound-student-exchange-programme-2027') },
    { t: 'MILA UNIVERSITY EDUTOURISM PROGRAMMES', inst: 'Mila University', loc: 'Mila University, Malaysia', date: '', c: 'Malaysia', logo: LOGO.mila, url: U('malaysia/mila-university/mila-university-edutourism-programmes') },
    { t: 'MFU Student Exchange Programme (Inbound Students)', inst: 'Mae Fah Luang University', loc: 'Mae Fah Luang University, Chiang Rai, Thailand', date: '', c: 'Thailand', logo: LOGO.mfu, url: U('mae-fah-luang-university/mfu-student-exchange-programme-(inbound-students)') },
  ],
};

// Compare page details (Overview / Eligibility / Fees), keyed by listing url.
// Only these two have been supplied so far; any other scholarship shows "Not listed yet".
const COMPARE_DETAILS = {
  [U('scholarships/mila-university/asean-scholarship-scheme-merit-scholarship')]: {
    levels: ['Foundation', 'Diploma'],
    countries: ['Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Vietnam'],
    cgpa: 0, income: [0, 0], leadership: 'N/A', sports: 'N/A',
    fees: 'Approximately USD 17,000 per student',
  },
  [U('scholarships/saito-university-college/mba-scholarship-by-saito-university-college')]: {
    levels: ["Bachelor's Degree", 'Masters'],
    countries: ['Indonesia', 'Philippines', 'Singapore', 'Thailand', 'Vietnam'],
    cgpa: 0, income: [0, 0], leadership: 'N/A', sports: 'N/A',
    fees: '',
  },
};

// Scholarships picked for comparing, shared between the listing and compare pages
const CMP_KEY = 'ag-compare';
const readCompare = () => { try { const a = JSON.parse(localStorage.getItem(CMP_KEY)); return Array.isArray(a) ? a : []; } catch (e) { return []; } };
const writeCompare = urls => { try { localStorage.setItem(CMP_KEY, JSON.stringify(urls)); } catch (e) {} };

// Bookmarks, shared with the profile dashboard (index.html). Stored as the rows the dashboard shows.
const BM_KEY = 'ag-bookmarks';
const readBookmarks = () => { try { const a = JSON.parse(localStorage.getItem(BM_KEY)); return Array.isArray(a) ? a : null; } catch (e) { return null; } };
const bookmarkedUrls = () => (readBookmarks() || []).map(r => r.url).filter(Boolean);

function setBookmark(url, on) {
  // No list yet means the dashboard hasn't been opened; it adds its starting bookmarks on first visit
  const list = (readBookmarks() || []).filter(r => r.url !== url);
  if (on) {
    const type = DATA.sch.some(it => it.url === url) ? 'sch' : 'mob';
    const it = DATA[type].find(x => x.url === url);
    const date = it.date ? it.date.split(' - ').pop() : null;
    const ini = it.inst.replace(/\(.*?\)/g, '').split(/\s+/).filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('') || it.inst.slice(0, 4);
    list.unshift({ id: url, url, type, title: it.t, place: it.loc || it.inst, date, logo: it.logo || null, ini });
  }
  try { localStorage.setItem(BM_KEY, JSON.stringify(list)); } catch (e) {}
}

// Link to a scholarship's or mobility programme's own page
const pageUrl = url => 'opportunity.html?id=' + encodeURIComponent(url);

// SMILE's compare facts, taken from its scholarship page text
COMPARE_DETAILS[U('malaysia/management-science-university-(msu)/smile-scholarship-for-mobility-and-international-learning-experience')] = {
  levels: ['Undergraduate', "Master's"],
  countries: ['Brunei Darussalam', 'Cambodia', 'East Timor', 'Indonesia', 'Laos', 'Myanmar', 'Philippines', 'Singapore', 'Thailand', 'Vietnam'],
  cgpa: 3.5, income: [0, 0], leadership: 'N/A', sports: 'N/A',
  fees: 'USD 5,000',
};

// Scholarship page content (as on the current site), keyed by listing url. Others show "details coming soon".
const SCHOLARSHIP_PAGES = {
  [U('scholarships/mila-university/asean-scholarship-scheme-merit-scholarship')]: {
    field: 'Any fields of study',
    coverage: 'Approximately USD 17,000 per student',
    overview: ['MILA University in Malaysia offers the ASEAN GEMS Scholarship under the ASEAN Scholarship Scheme to support outstanding international students from Myanmar, Indonesia, Laos, Cambodia, and Vietnam. The scholarship provides <b>50% tuition fee coverage</b> through the Merit Scholarship for international students (subject to limited availability and an earlier deadline) or <b>35% tuition fee coverage</b> under the Emerging Scholarship, with an estimated value of up to USD 17,000 per student. A total of <b>five awards</b> are available.'],
    criteria: [{ h: 'Qualifications', items: ['Nationality from: Indonesia, Laos, Cambodia, Myanmar, Vietnam', 'Year 11 or O Level students can apply for foundation or diploma programmes', "Year 12 or A-Levels students can apply for bachelor's degree programmes", 'English proficiency: IELTS, TOEFL (iBT), MUET, TOEFL Essentials, PTE'] }],
    docs: ['Official graduation certificate and transcript', 'Passport details page', 'Passport-sized photo'],
  },
  [U('malaysia/management-science-university-(msu)/smile-scholarship-for-mobility-and-international-learning-experience')]: {
    field: 'Any fields of study',
    coverage: 'USD 5,000',
    intakes: 'February – June and September – January',
    overview: [
      "The <b>SMILE (Scholarship for Mobility and International Learning Experience)</b> is offered by <b>Management &amp; Science University (MSU), Malaysia</b> to support international student mobility and academic exchange. The scholarship is open to undergraduate and master's students from all ASEAN countries <b>except Malaysia</b> who wish to participate in mobility programmes at MSU.",
      'Successful applicants may receive a <b>USD 5,000 scholarship fee</b>. The scholarship is available for the <b>February – June</b> and <b>September – January</b> intake periods.',
      "Applicants must demonstrate strong academic performance with a <b>minimum CGPA of 3.50</b>, meet the university's English proficiency requirements, be enrolled as full-time students, participate in extracurricular activities, and must not be receiving any other scholarship.",
    ],
    criteria: [{ h: '', items: ['English proficiency', 'CGPA 3.50 and above', 'Strong academic performance', 'Extracurricular activities', 'Full-time studies', 'Not holding any other scholarship'] }],
    docs: ['Student active / enrolment letter', 'Passport details page', 'Academic transcript', 'Recommendation letter', 'Mobility form'],
  },
};

// Mobility programme page content, same shape as SCHOLARSHIP_PAGES plus duration / cost.
// MADE-UP SAMPLE CONTENT for testing the design: not supplied by the universities. Pages show a "sample content" note (sample: true).
const MOBILITY_PAGES = Object.fromEntries([
  ['EXPLORE MALAYSIA WITH TAR UMT', {
    field: 'Culture, language and business', duration: '2 weeks', cost: 'USD 650 (accommodation and meals included)',
    overview: [
      '<b>Explore Malaysia with TAR UMT</b> is a short cultural immersion programme at the Kuala Lumpur main campus. Students join Malay language classes, campus workshops and guided visits to Kuala Lumpur, Melaka and Putrajaya.',
      'The programme ends with a group project presented to TAR UMT lecturers, and every participant receives a <b>certificate of completion</b>.',
    ],
    criteria: [{ h: 'Who can join', items: ['Full-time undergraduate students from an ASEAN partner university', 'Aged 18 or above', 'Basic English communication skills', 'Nominated by the home university'] }],
    docs: ['Passport details page', 'Nomination letter from home university', 'Passport-sized photo'],
  }],
  ['Student Exchange / Short Research / Internship / Clinical Attachment / Summer Course / Erasmus+ / Short-term', {
    field: 'All fields (by faculty)', duration: '2 weeks to 1 semester', cost: 'Tuition waived for partner universities',
    overview: [
      'IIUM welcomes inbound students for a range of mobility options across its <b>Gombak, Pagoh and Kuantan</b> campuses: one-semester exchange, short research attachments, internships, clinical attachments for health sciences, summer courses and Erasmus+ placements.',
      'Students from partner universities pay <b>no tuition fees</b> at IIUM and are supported by the International Affairs office for housing and visa letters.',
    ],
    criteria: [{ h: 'Requirements', items: ['Currently enrolled at a recognised university', 'Minimum CGPA of 3.00 (or equivalent)', 'English proficiency: IELTS 5.5 or equivalent', 'Clinical attachments: completed at least year 3 of a medical or health programme'] }],
    docs: ['Academic transcript', 'Passport details page', 'Nomination letter', 'English proficiency certificate', 'Study or research plan'],
  }],
  ['Global Exchange Malaysia Unisel', {
    field: 'Business, engineering and computing', duration: '1 semester (about 4 months)', cost: 'Tuition waived · accommodation from USD 120 / month',
    overview: [
      'Spend a semester at <b>Universiti Selangor (UNISEL)</b> in Bestari Jaya and take credit-bearing courses alongside Malaysian students. Credits can be transferred back to your home university.',
      'The programme includes an orientation week, a buddy from the local student body and weekend trips around Selangor.',
    ],
    criteria: [{ h: 'Requirements', items: ['Undergraduate student in year 2 or above', 'Minimum CGPA of 2.75', 'Approval from your home university', 'Good standing with no disciplinary record'] }],
    docs: ['Application form', 'Academic transcript', 'Passport details page', 'Learning agreement signed by home university'],
  }],
  ['VNUK Exchange Program', {
    field: 'Business, IT and engineering', duration: '1 semester', cost: 'Tuition waived · living costs about USD 300 / month',
    overview: [
      'The <b>VNUK Exchange Program</b> brings international students to the University of Danang for a semester of English-taught courses, with classes designed around project-based learning.',
      'Students can also join the VNUK Vietnamese language club and a field trip to Hoi An and Hue.',
    ],
    criteria: [{ h: 'Requirements', items: ['Undergraduate student from an ASEAN partner university', 'Minimum CGPA of 2.80', 'English proficiency: IELTS 6.0 or equivalent', 'Nominated by the home university'] }],
    docs: ['Academic transcript', 'Passport details page', 'English proficiency certificate', 'Nomination letter', 'Health insurance proof'],
  }],
  ['EDU TOURISM ENRICHMENT PROGRAMME', {
    field: 'Hospitality and tourism', duration: '10 days', cost: 'USD 480 (all-inclusive)',
    overview: [
      "First City University College's <b>Edu Tourism Enrichment Programme</b> combines hospitality workshops at the Bandar Utama campus with industry visits to hotels and tourism sites in the Klang Valley.",
      'Participants learn front-office, food and beverage and event management basics from industry trainers.',
    ],
    criteria: [{ h: 'Who can join', items: ['Diploma or undergraduate students', 'Interest in hospitality, tourism or events', 'Aged 18 or above'] }],
    docs: ['Passport details page', 'Student ID or enrolment letter', 'Passport-sized photo'],
  }],
  ['ASEAN Student Experiential Mobility (ASEMO) 2026', {
    field: 'Business and entrepreneurship', duration: '7 days', cost: 'USD 350 (accommodation, meals and activities)',
    overview: [
      '<b>ASEMO 2026</b> is a one-week experiential programme hosted by UniKL Business School. Students from across ASEAN team up on an entrepreneurship challenge with local start-ups and present their ideas on the final day.',
      'The week also includes cultural evenings and a city tour of Kuala Lumpur.',
    ],
    criteria: [{ h: 'Who can join', items: ['Undergraduate students from ASEAN universities', 'Basic English communication skills', 'Interest in business or entrepreneurship'] }],
    docs: ['Passport details page', 'Student ID or enrolment letter', 'Short personal statement (200 words)'],
  }],
  ['MFU Student Mobility Program', {
    field: 'All fields', duration: '1 semester', cost: 'Tuition waived · on-campus housing about USD 150 / month',
    overview: [
      "<b>Mae Fah Luang University</b> in Chiang Rai invites students to spend a semester on its green hillside campus. MFU teaches its international programmes in English, so most courses are open to exchange students.",
      'Students can also join Thai language classes and cultural activities organised by the International Affairs office.',
    ],
    criteria: [{ h: 'Requirements', items: ['Currently enrolled in a bachelor or master programme', 'Minimum CGPA of 2.50', 'English proficiency: IELTS 5.5 or equivalent', 'Nominated by a partner university'] }],
    docs: ['Application form', 'Academic transcript', 'Passport details page', 'English proficiency certificate', 'Nomination letter'],
  }],
  ['TAR UMT INBOUND STUDENT EXCHANGE PROGRAMME 2027', {
    field: 'All fields', duration: '1 or 2 semesters', cost: 'Tuition waived for partner universities',
    overview: [
      'The <b>TAR UMT Inbound Student Exchange Programme 2027</b> lets students from partner universities study at TAR UMT for one or two semesters and transfer the credits home.',
      'Exchange students are placed with a faculty that matches their programme and get help with housing, visas and course selection.',
    ],
    criteria: [{ h: 'Requirements', items: ['Undergraduate student in year 2 or above', 'Minimum CGPA of 3.00', 'Approval from the home university', 'English proficiency: IELTS 5.5 or equivalent'] }],
    docs: ['Academic transcript', 'Passport details page', 'Learning agreement', 'English proficiency certificate', 'Passport-sized photo'],
  }],
  ['MILA UNIVERSITY EDUTOURISM PROGRAMMES', {
    field: 'Health sciences, business and culture', duration: '5 to 14 days', cost: 'From USD 300, depending on the package',
    overview: [
      'Mila University runs short <b>edutourism packages</b> that mix campus classes with trips around Negeri Sembilan and Kuala Lumpur. Packages can be tailored for school groups or university cohorts.',
      'Popular themes include healthcare and wellness, halal business and Malaysian heritage.',
    ],
    criteria: [{ h: 'Who can join', items: ['Groups of 10 or more students', 'Secondary school leavers or university students', 'A group leader from the home institution'] }],
    docs: ['Group registration form', 'Passport details page for each student', 'Letter from the home institution'],
  }],
  ['MFU Student Exchange Programme (Inbound Students)', {
    field: 'All fields', duration: '1 semester or 1 academic year', cost: 'Tuition waived for partner universities',
    overview: [
      "MFU's <b>inbound exchange programme</b> is for students from partner universities who want a longer stay in Thailand. Students choose courses from any school at MFU and receive an official transcript at the end.",
      'An orientation week, a Thai buddy and a field trip to the Golden Triangle are part of the programme.',
    ],
    criteria: [{ h: 'Requirements', items: ['Enrolled at an MFU partner university', 'Minimum CGPA of 2.50', 'English proficiency: IELTS 5.5 or equivalent', 'Health insurance for the full stay'] }],
    docs: ['Application form', 'Academic transcript', 'Passport details page', 'Nomination letter', 'Health insurance proof'],
  }],
].map(([title, page]) => [DATA.mob.find(m => m.t === title).url, { sample: true, ...page }]));

// "Scholarship details" block on the scholarship page, as universities key it in on the back end.
// award: { kind: 'full' } | { kind: 'percent', value } | { kind: 'fixed', value }, with optional `text` to show instead of the value.
// grade: { min, scale } for a minimum grade · tiers: { scale, rows: [{ min, award }] } when it depends on the grade · neither = no grade needed.
// english: [[test, minimum]] (minimum may be '' if not stated). Only filled in from the content we have; others show no block.
const SCHOLARSHIP_DETAILS = {
  [U('scholarships/mila-university/asean-scholarship-scheme-merit-scholarship')]: {
    award: { kind: 'percent', text: '50% (Merit) or 35% (Emerging) tuition fee waiver' },
    english: [['IELTS', ''], ['TOEFL (iBT)', ''], ['MUET', ''], ['TOEFL Essentials', ''], ['PTE', '']],
    nationalities: ['Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Vietnam'],
    levels: ['Foundation', 'Diploma'], fields: 'all',
  },
  [U('malaysia/management-science-university-(msu)/smile-scholarship-for-mobility-and-international-learning-experience')]: {
    award: { kind: 'fixed', value: 5000 },
    grade: { min: '3.50', scale: 'CGPA' },
    english: [["Meets MSU's English proficiency requirement", '']],
    nationalities: ['Brunei', 'Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Philippines', 'Singapore', 'Thailand', 'Timor-Leste', 'Vietnam'],
    levels: ['Undergraduate', 'Master'], fields: 'all',
  },
};

// ---------------------------------------------------------------------------------------------
// MADE-UP SAMPLE CONTENT for the 18 scholarships we don't have real details for (all except Mila's
// ASEAN Scholarship Scheme and MSU SMILE). It covers every way a scholarship can be awarded, for
// testing the design. Pages using it show a "sample content" note (sample: true).
//   met    = meet a minimum grade      -> full / partial % / partial fixed
//   tiered = depends on the grade      -> a table of results and awards
//   none   = no grade requirement      -> full / partial % / partial fixed
// Keyed by position in DATA.sch, because two listings share the title "ASEAN Scholarship".
// ---------------------------------------------------------------------------------------------
(() => {
  const ALL = ['Brunei', 'Cambodia', 'Indonesia', 'Laos', 'Malaysia', 'Myanmar', 'Philippines', 'Singapore', 'Thailand', 'Timor-Leste', 'Vietnam'];
  const except = c => ALL.filter(x => x !== c);
  const FULL = { kind: 'full' }, pct = value => ({ kind: 'percent', value }), fix = value => ({ kind: 'fixed', value });

  const SPECS = {
    1: { award: pct(40), grade: { min: '3.00', scale: 'CGPA (out of 4.0)' }, english: [['IELTS', '6.0'], ['TOEFL', '79']], nat: ALL, levels: ['Master'], fields: [['Business', 'Management, Finance']], places: 15,
      extra: 'At least one year of work experience', docs: ['Bachelor degree certificate and transcript', 'English test certificate', 'CV', 'Passport details page'] },
    3: { award: FULL, english: [['IELTS', '5.0'], ['CEFR', 'B1']], nat: ['Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Timor-Leste', 'Vietnam'], levels: ['Undergraduate'], fields: [['Education', ''], ['Agriculture & Natural Resources', '']], age: [17, 24], places: 10,
      docs: ['Secondary school results', 'English test certificate', 'Passport details page', 'Passport-sized photo'] },
    4: { award: FULL, grade: { min: '3.25', scale: 'CGPA (out of 4.0)' }, english: [['IELTS', '5.5'], ['TOEFL', '70'], ['Linguaskill', '160']], nat: except('Indonesia'), levels: ['Undergraduate', 'Master'], fields: [['Health Sciences', ''], ['Business', '']], places: 12,
      docs: ['Academic transcript', 'English test certificate', 'Passport details page', 'Recommendation letter'] },
    5: { tiers: { scale: 'Final results (%)', rows: [{ min: 90, award: FULL }, { min: 80, award: pct(50) }, { min: 70, award: pct(30) }] }, english: [['MUET', 'Band 3'], ['IELTS', '5.0']], nat: except('Malaysia'), levels: ['Foundation', 'Diploma'],
      fields: [['Business', 'Accounting, Marketing'], ['Education', 'Early Childhood Education'], ['Real Estate / Built Environment', '']],
      docs: ['Final school results', 'English test certificate', 'Passport details page'] },
    6: { award: fix(3000), grade: { min: '3.00', scale: 'CGPA (out of 4.0)' }, english: [['IELTS', '5.5'], ['MUET', 'Band 3.5']], nat: except('Malaysia'), levels: ['Diploma', 'Undergraduate'], fields: [['Engineering', ''], ['IT / Computer Science', ''], ['Business', '']], places: 30,
      docs: ['Academic transcript', 'English test certificate', 'Passport details page', 'Offer letter'] },
    7: { award: pct(50), english: [['IELTS', '5.0'], ['TOEIC', '550']], nat: ['Cambodia', 'Laos', 'Myanmar', 'Timor-Leste', 'Vietnam'], levels: ['Diploma', 'Undergraduate'], fields: [['Education', ''], ['Hospitality, Tourism & Culinary', '']], age: [17, 30], places: 8,
      docs: ['Secondary school results', 'English test certificate', 'Passport details page'] },
    8: { tiers: { scale: 'CGPA (out of 4.0)', rows: [{ min: 3.8, award: FULL }, { min: 3.5, award: pct(50) }, { min: 3.2, award: pct(25) }] }, english: [['IELTS', '5.5'], ['TOEFL', '72'], ['PTE', '50']], nat: ALL, levels: ['Foundation', 'Undergraduate'],
      fields: [['IT / Computer Science', 'Software Engineering, Cybersecurity, Data Science'], ['Engineering', '']],
      docs: ['Academic transcript', 'English test certificate', 'Passport details page', 'Personal statement'] },
    9: { award: fix(1500), english: [['MUET', 'Band 3'], ['IELTS', '5.0']], nat: except('Malaysia'), levels: ['Foundation', 'Diploma'], fields: [['Hospitality, Tourism & Culinary', ''], ['Business', '']], places: 25,
      docs: ['Secondary school results', 'English test certificate', 'Passport details page'] },
    10: { award: pct(30), grade: { min: '80%', scale: 'Foundation results' }, english: [['IELTS', '6.5'], ['PTE', '58']], nat: ALL, levels: ['Foundation'], fields: [['Business', ''], ['Law', ''], ['Science', '']], places: 10,
      docs: ['Foundation results', 'English test certificate', 'Passport details page'] },
    11: { tiers: { scale: 'Final results (%)', rows: [{ min: 95, award: FULL }, { min: 85, award: pct(70) }, { min: 75, award: pct(40) }] }, english: [['MUET', 'Band 4'], ['IELTS', '6.0']], nat: ALL, levels: ['Foundation', 'Undergraduate'],
      fields: [['Health Sciences', 'Medicine, Pharmacy, Dentistry'], ['Business', '']],
      docs: ['Final school results', 'English test certificate', 'Passport details page', 'Interview (if shortlisted)'] },
    12: { award: pct(25), grade: { min: '3.00', scale: 'CGPA (out of 4.0)' }, english: [['IELTS', '6.0'], ['TOEFL', '80']], nat: ALL, levels: ['Master', 'PhD'], fields: [['Business', ''], ['Education', ''], ['IT / Computer Science', '']],
      docs: ['Bachelor or master transcript', 'English test certificate', 'Research proposal (PhD only)', 'Passport details page'] },
    13: { award: pct(20), english: [['MUET', 'Band 3'], ['IELTS', '5.0'], ['TOEIC', '500']], nat: except('Malaysia'), levels: ['Diploma', 'Undergraduate'], fields: [['Business', ''], ['IT / Computer Science', ''], ['Arts & Humanities', 'Media & Communication']], places: 40,
      docs: ['Secondary school results', 'English test certificate', 'Passport details page'] },
    14: { award: FULL, grade: { min: '3.50', scale: 'CGPA (out of 4.0)' }, english: [['IELTS', '7.0'], ['TOEFL', '100']], nat: ALL, levels: ['Master'], fields: [['Business', 'Management, Entrepreneurship']], places: 2,
      extra: 'At least two years of full-time work experience', docs: ['Bachelor degree transcript', 'English test certificate', 'CV', 'Two recommendation letters', 'Essay'] },
    15: { award: fix(1000), english: [['IELTS', '5.0'], ['MUET', 'Band 3']], nat: ['Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Vietnam'], levels: ['Foundation', 'Diploma'], fields: [['Health Sciences', 'Nursing, Allied Health'], ['Business', '']], age: [17, 35], places: 20,
      docs: ['Secondary school results', 'English test certificate', 'Passport details page', 'Health declaration'] },
    16: { tiers: { scale: 'SPM / O-Level (number of As)', rows: [{ min: 9, award: FULL }, { min: 7, award: pct(75) }, { min: 5, award: pct(50) }] }, english: [['MUET', 'Band 3'], ['IELTS', '5.0']], nat: ALL, levels: ['Foundation'],
      fields: [['Engineering', ''], ['IT / Computer Science', '']],
      docs: ['SPM or O-Level results', 'English test certificate', 'Passport details page'] },
    17: { award: fix(2500), grade: { min: '7.0', scale: 'GPA (out of 10)' }, english: [['IELTS', '6.0'], ['TOEFL', '79'], ['CEFR', 'B2']], nat: except('Vietnam'), levels: ['Undergraduate', 'Master'], fields: [['Business', ''], ['IT / Computer Science', ''], ['Engineering', '']], places: 15,
      docs: ['Academic transcript', 'English test certificate', 'Passport details page', 'Study plan'] },
    18: { award: pct(35), english: [['IELTS', '5.0'], ['MUET', 'Band 3']], nat: ['Cambodia', 'Indonesia', 'Laos', 'Myanmar', 'Vietnam'], levels: ['Foundation', 'Diploma', 'Undergraduate'], fields: 'all',
      docs: ['Secondary school results', 'English test certificate', 'Passport details page'] },
    19: { award: pct(50), grade: { min: '2.75', scale: 'CGPA (out of 4.0)' }, english: [['IELTS', '5.5'], ['MUET', 'Band 3.5']], nat: ALL, levels: ['Undergraduate'], fields: 'all', places: 50,
      extra: 'Household income of USD 1,000 or less a month', docs: ['Academic transcript', 'English test certificate', 'Proof of household income', 'Passport details page'] },
  };

  const usd = n => 'USD ' + n.toLocaleString('en-US');
  const value = a => a.kind === 'full' ? 'Full tuition fee' : a.kind === 'percent' ? `${a.value}% tuition fee waiver` : usd(a.value);
  const words = a => a.kind === 'full' ? 'a full scholarship covering tuition fees' : a.kind === 'percent' ? `a partial scholarship of ${a.value}% off tuition fees` : `a partial scholarship of ${usd(a.value)}`;
  const list = xs => xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`;
  const natPhrase = n => n.length === ALL.length ? 'all ASEAN countries' : n.length === ALL.length - 1 ? `every ASEAN country except ${ALL.find(c => !n.includes(c))}` : list(n);
  const fieldNames = f => f === 'all' ? [] : f.map(x => x[0]);

  Object.entries(SPECS).forEach(([i, s]) => {
    const it = DATA.sch[+i], url = it.url;
    const top = s.tiers ? s.tiers.rows[0].award : s.award;
    const fieldText = s.fields === 'all' ? 'Any fields of study' : fieldNames(s.fields).join(', ');
    const lowest = s.tiers && s.tiers.rows[s.tiers.rows.length - 1];

    SCHOLARSHIP_DETAILS[url] = { sample: true, award: s.award, grade: s.grade, tiers: s.tiers, english: s.english, nationalities: s.nat, levels: s.levels, fields: s.fields, age: s.age };

    const how = s.tiers ? `The scholarship depends on your results, from <b>${words(lowest.award)}</b> up to <b>${words(top)}</b>.`
      : s.grade ? `Students who meet the academic and English requirements receive <b>${words(s.award)}</b>.`
      : `There is no minimum grade. Every eligible student receives <b>${words(s.award)}</b>.`;
    SCHOLARSHIP_PAGES[url] = {
      sample: true,
      field: fieldText,
      coverage: s.tiers ? `Up to ${value(top).replace('Full tuition fee', 'full tuition fee')}` : value(s.award),
      overview: [
        `${it.inst} offers the <b>${it.t}</b> to students from ${natPhrase(s.nat)} joining a ${list(s.levels.map(l => l.toLowerCase()))} programme${s.fields === 'all' ? ' in any field' : ` in ${list(fieldNames(s.fields))}`}.`,
        how + (s.places ? ` ${s.places} scholarships are available each intake.` : ' There is no fixed number of scholarships.'),
      ],
      criteria: [{ h: 'Requirements', items: [
        `Nationality: ${natPhrase(s.nat).replace(/^./, c => c.toUpperCase())}`,
        `Enrolled or holding an offer for a ${list(s.levels)} programme`,
        s.tiers ? `${s.tiers.scale}: at least ${lowest.min}` : s.grade ? `${s.grade.scale}: at least ${s.grade.min}` : 'No minimum grade',
        `English: ${s.english.map(e => `${e[0]} ${e[1]}`).join(' or ')}`,
        ...(s.age ? [`Aged ${s.age[0]} to ${s.age[1]}`] : []),
        ...(s.extra ? [s.extra] : []),
      ] }],
      docs: s.docs,
    };

    // Compare page columns, kept in line with the details above
    const cg = s.grade && /CGPA/.test(s.grade.scale) ? parseFloat(s.grade.min) : s.tiers && /CGPA/.test(s.tiers.scale) ? lowest.min : 0;
    COMPARE_DETAILS[url] = { levels: s.levels, countries: s.nat, cgpa: cg, income: [0, 0], leadership: 'N/A', sports: 'N/A', fees: SCHOLARSHIP_PAGES[url].coverage };
  });
})();

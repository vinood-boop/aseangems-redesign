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

// Mobility programme page content, same shape as SCHOLARSHIP_PAGES (overview / criteria / docs, plus optional field).
// None supplied yet, so every mobility page shows "details coming soon".
const MOBILITY_PAGES = {};

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' };
const amber: Palette = { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#16091f', via: '#55206f', to: '#08050d', accent: '#b98bff' };
const jade: Palette = { from: '#061712', via: '#12664e', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Venu Gopal Reddy Narala',
  displayName: 'Venu Gopal Reddy Narala',
  firstName: 'VENU GOPAL',
  seriesTag: 'VN SERIES',
  originalLabel: 'A NARALA ORIGINAL',
  role: 'Python Developer',
  tagline: ['Python Developer', 'Backend Development', 'Automation', 'AI & Data Science'],
  intro:
    'A Computer Science Engineering graduate specializing in Artificial Intelligence and Data Science, with hands-on experience in Python development, backend applications, REST APIs, databases and AI & Data Science projects.',
  location: 'Hyderabad',
  email: 'naralavenugopalreddy@gmail.com',
  phone: '+91-9121499852',
  links: {
    linkedin: 'https://www.linkedin.com/in/venugopalreddynarala/',
    github: 'https://github.com/venugopalreddynarala',
  },
  resumePdf: '/assets/Venu_Gopal_Reddy_Narala_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Venu Gopal Reddy Narala',
  },
  interests: ['Python Automation', 'Backend Systems', 'Computer Vision', 'Machine Learning'],
};

export const education = [
  {
    school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute',
    place: 'Chennai',
    degree: 'B.Tech — Computer Science and Engineering (AI & Data Science)',
    period: '2022 – 2026',
    score: 'CGPA 8.0',
  },
  {
    school: 'Chaitanya Junior College',
    place: 'Hyderabad',
    degree: 'Intermediate — MPC',
    period: '2020 – 2022',
    score: '80%',
  },
  {
    school: 'All Saints English Medium School',
    place: 'Hyderabad',
    degree: 'SSC',
    period: '2019 – 2020',
    score: '92.6%',
  },
];

export const experience = [
  {
    company: 'V CUBE Software Solutions',
    role: 'Python Full Stack with AI & FDE Intern',
    place: 'Hyderabad',
    period: 'Aug 2026',
    points: [
      'Practicing Python programming, object-oriented programming, data structures and problem-solving.',
      'Learning full-stack development using Django, React, SQL and REST APIs.',
      'Exploring AI & Data Science, generative AI and AI-assisted application development.',
    ],
  },
  {
    company: 'LearnFlu',
    role: 'Full Stack Web Development Intern',
    place: 'Hyderabad',
    period: 'Aug 2025 – Oct 2025',
    points: [
      'Developed full-stack web applications using HTML, CSS, JavaScript and backend technologies.',
      'Implemented frontend components, backend functionality and database integration.',
      'Practiced debugging, application testing and responsive web design.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'age-gender-predicter',
    title: 'Age & Gender Predictor',
    year: 'Recent',
    genre: 'Computer Vision • Deep Learning',
    logline: 'Real-time age and gender detection using webcam or static images.',
    stack: ['Python', 'OpenCV', 'Caffe', 'Deep Learning'],
    build: [
      'Built a real-time face detection and prediction system using OpenCV DNN.',
      'Used pretrained Caffe age and gender models to predict age ranges and gender.',
      'Optimized webcam processing to detect faces once every two seconds.',
    ],
    features: ['Webcam and image input', 'Real-time face detection', 'Age-range prediction', 'Gender prediction', 'Histogram equalization'],
    metrics: [
      { value: 'Real-time', label: 'webcam detection' },
      { value: 'OpenCV', label: 'DNN face detection' },
      { value: 'Caffe', label: 'age and gender models' },
    ],
    github: 'https://github.com/venugopalreddynarala/age-gender-predicter',
    palette: ocean,
    motif: 'shield',
  },
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    year: '2025',
    genre: 'UI/UX • Mobile Product Design',
    logline: 'A clean mobile interface concept for tracking expenses and managing budgets.',
    stack: ['Figma', 'Adobe XD', 'UI/UX', 'Mobile Design'],
    build: [
      'Designed a mobile finance dashboard with balance summaries and recent transactions.',
      'Created expense-entry, statistics and settings screens with a consistent visual system.',
      'Designed a simple user flow for adding expenses and reviewing spending patterns.',
    ],
    features: ['Home dashboard', 'Add-expense flow', 'Statistics and charts', 'Settings screen', 'Responsive mobile layouts'],
    metrics: [
      { value: '4', label: 'core product screens' },
      { value: 'Adobe XD', label: 'design tool' },
      { value: 'Mobile', label: 'responsive UI concept' },
    ],
    github: 'https://github.com/venugopalreddynarala/Personal-Finance-Tracker',
    palette: violet,
    motif: 'flow',
  },
  {
    id: 'attendance-system',
    title: 'AttendEase',
    year: 'Recent',
    genre: 'Full-Stack • Role-Based System',
    logline: 'An employee attendance platform with employee and manager dashboards.',
    stack: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    build: [
      'Built a full-stack employee attendance system with employee and manager roles.',
      'Implemented JWT authentication, check-in/out tracking and monthly summaries.',
      'Added manager analytics, attendance filters, team charts and CSV report export.',
    ],
    features: ['JWT authentication', 'Check-in and check-out', 'Employee attendance history', 'Manager dashboards', 'CSV report export'],
    metrics: [
      { value: 'JWT', label: 'authenticated access' },
      { value: 'React', label: 'frontend application' },
      { value: 'MongoDB', label: 'attendance data storage' },
    ],
    github: 'https://github.com/venugopalreddynarala/attendance-system',
    palette: jade,
    motif: 'tenants',
  },
  {
    id: 'survivalence',
    title: 'Survivalence',
    year: 'Recent',
    genre: 'AI Surveillance • Computer Vision',
    logline: 'A production-oriented video intelligence system for suspicious and dangerous behavior detection.',
    stack: ['Python', 'YOLOv8', 'PyTorch', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    build: [
      'Built a surveillance pipeline for detection, tracking, pose estimation and behavior analysis.',
      'Added temporal Transformer/LSTM/GRU models for risk and behavior prediction.',
      'Designed FastAPI and WebSocket services with PostgreSQL, Redis and Docker deployment.',
    ],
    features: ['Abandoned-object detection', 'Loitering and aggression analysis', 'Restricted-zone alerts', 'Real-time WebSocket alerts', 'Docker deployment'],
    metrics: [
      { value: 'YOLOv8', label: 'detection and pose' },
      { value: 'FastAPI', label: 'real-time API' },
      { value: 'Docker', label: 'containerized deployment' },
    ],
    github: 'https://github.com/venugopalreddynarala/AI-VIDEO-INTELLIGENCE-SURVEILLANCE-SYSTEM',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'vegetable-market',
    title: 'Vegetable Market System',
    year: 'Recent',
    genre: 'Python • Inventory • Billing',
    logline: 'A Python console application for vegetable inventory, purchases and sales reporting.',
    stack: ['Python', 'Lists', 'Loops', 'Conditional Logic', 'Billing'],
    build: [
      'Built a customer interface for selecting vegetables, quantities and automatically generated bills.',
      'Added shopkeeper tools for inventory updates, stock management and pricing.',
      'Implemented revenue, cost, profit and low-stock reporting.',
    ],
    features: ['Inventory management', 'Customer billing', 'Stock updates', 'Revenue and profit reports', 'Low-stock suggestions'],
    metrics: [
      { value: 'Python', label: 'console application' },
      { value: 'Billing', label: 'automatic customer totals' },
      { value: 'Reports', label: 'sales and profit analytics' },
    ],
    github: 'https://github.com/venugopalreddynarala/vegetable-market-mini-project',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'xray-pneumonia',
    title: 'AI-Powered X-Ray Visualization',
    year: '2026',
    genre: 'Deep Learning • Computer Vision • Flask',
    logline: 'Pneumonia detection with Grad-CAM explainable AI for chest X-ray images.',
    stack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'Flask'],
    build: [
      'Developed a deep learning application to detect pneumonia from chest X-ray images using image preprocessing.',
      'Integrated Grad-CAM explainable AI to visualize image regions that influence model predictions.',
      'Built a Flask web application for image uploads, prediction and visualization.',
    ],
    features: ['Chest X-ray preprocessing', 'Pneumonia classification', 'Grad-CAM visualization', 'Flask image upload interface'],
    metrics: [{ value: 'CNN', label: 'deep learning model' }, { value: 'Grad-CAM', label: 'model explainability' }, { value: 'Flask', label: 'web application' }],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'smart-cursor',
    title: 'AI Smart Cursor Control',
    year: '2025',
    genre: 'Computer Vision • Hands-Free Interaction',
    logline: 'A hands-free cursor system driven by head and eye movement tracking.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'CNN'],
    build: [
      'Developed a hands-free computer interaction system using head and eye movement tracking.',
      'Applied computer vision and facial landmark detection to translate movements into cursor actions.',
      'Tested and debugged the system to improve real-time interaction reliability.',
    ],
    features: ['Head and eye tracking', 'Facial landmark detection', 'Hands-free cursor control', 'Real-time testing'],
    metrics: [{ value: 'OpenCV', label: 'computer vision' }, { value: 'MediaPipe', label: 'facial landmarks' }, { value: 'CNN', label: 'vision model' }],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'payment-fraud',
    title: 'Payment Fraud Detection',
    year: '2024',
    genre: 'Machine Learning • Data Analysis',
    logline: 'A machine learning solution for identifying potentially fraudulent transactions.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    build: [
      'Developed a machine learning solution to identify potentially fraudulent online transactions.',
      'Performed data preprocessing, feature selection and classification model evaluation.',
      'Analyzed model performance using data analysis and visualization techniques.',
    ],
    features: ['Transaction data preprocessing', 'Feature selection', 'Classification evaluation', 'Performance visualization'],
    metrics: [{ value: 'ML', label: 'classification models' }, { value: 'Pandas', label: 'data processing' }, { value: 'Matplotlib', label: 'analysis visualisation' }],
    palette: violet,
    motif: 'tenants',
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    year: '2023',
    genre: 'Full-Stack • Database • CRUD',
    logline: 'A database-driven inventory and stock management web application.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    build: [
      'Developed a database-driven web application to manage inventory, user accounts and stock information using CRUD operations.',
      'Implemented role-based access control and designed a responsive dashboard.',
      'Tested application functionality and resolved development issues.',
    ],
    features: ['Inventory CRUD operations', 'User account management', 'Role-based access', 'Responsive dashboard'],
    metrics: [{ value: 'CRUD', label: 'database operations' }, { value: 'RBAC', label: 'role-based access' }, { value: 'MySQL', label: 'data storage' }],
    palette: amber,
    motif: 'flow',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };

export const achievements: Achievement[] = [
  { id: 'sankalp', title: 'Sankalp Tech Fest', org: '2025 Participant', detail: 'Participated in the Sankalp 2025 technical fest.', laurel: 'Tech Fest' },
  { id: 'team-lead', title: 'Team Lead', org: 'Academic Project', detail: 'Led an academic project team and coordinated technical delivery.', laurel: 'Leadership' },
  { id: 'coordinator', title: 'Event Coordinator', org: 'College Events', detail: 'Coordinated college events and technical activities.', laurel: 'Coordinator' },
  { id: 'workshops', title: 'Workshops & Training', org: 'Technical Workshops', detail: 'Organized college events and technical workshops.', laurel: 'Community' },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'LearnFlu', name: 'Full-Stack Web Development', link: '#' },
  { issuer: 'Cisco', name: 'Networking and Python', link: '#' },
  { issuer: 'Wipro', name: 'Data Science — TalentNext', link: '#' },
  { issuer: 'AWS Academy', name: 'Cloud Foundations', link: '#' },
  { issuer: 'HackerRank', name: 'SQL', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  { id: 'python', title: 'Python', subtitle: 'Scripting • Automation • AI & Data Science', skills: [
    { name: 'Python', mono: 'Py', note: 'Primary' }, { name: 'Pandas', mono: 'Pd' }, { name: 'NumPy', mono: 'Np' },
    { name: 'OpenCV', mono: 'Cv' }, { name: 'Matplotlib', mono: 'Mt' }, { name: 'OOP', mono: 'Oo' },
    { name: 'Agentic AI & AI Tools', mono: 'AI' },
  ] },
  { id: 'backend', title: 'Backend', subtitle: 'APIs • Routing • Services', skills: [
    { name: 'Flask', mono: 'Fl' }, { name: 'REST APIs', mono: 'Ap' }, { name: 'JSON', mono: 'Js' }, { name: 'Django', mono: 'Dj' },
  ] },
  { id: 'database', title: 'Databases', subtitle: 'Queries • Modeling • Data', skills: [
    { name: 'MySQL', mono: 'My' }, { name: 'SQL', mono: 'Sq' }, { name: 'Snowflake', mono: 'Sn' }, { name: 'Data Modeling', mono: 'Dm' },
  ] },
  { id: 'web', title: 'Web', subtitle: 'Frontend • Responsive UI', skills: [
    { name: 'HTML', mono: 'Ht' }, { name: 'CSS', mono: 'Cs' }, { name: 'JavaScript', mono: 'Js' }, { name: 'React.js', mono: 'Re' },
  ] },
  { id: 'cloud', title: 'Cloud', subtitle: 'Storage • Access • Pipelines', skills: [
    { name: 'Cloud Storage', mono: 'Cl' }, { name: 'Secure Access', mono: 'Sa' }, { name: 'Data Pipelines', mono: 'Dp' },
  ] },
  { id: 'fundamentals', title: 'CS Fundamentals', subtitle: 'Debugging • Problem solving', skills: [
    { name: 'Data Structures', mono: 'Ds' }, { name: 'DBMS', mono: 'Db' }, { name: 'SDLC', mono: 'Sd' }, { name: 'Troubleshooting', mono: 'Tr' }, { name: 'Git', mono: 'Gt' },
  ] },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['AI-powered X-ray project', 'Smart Cursor project', 'Cisco Networking and Python'],
  'Agentic AI & AI Tools': ['AI-assisted application development', 'V CUBE internship'],
  Pandas: ['Payment Fraud Detection'],
  NumPy: ['X-ray and fraud detection projects'],
  OpenCV: ['AI-Powered Smart Cursor Control'],
  Matplotlib: ['X-ray and payment fraud projects'],
  Flask: ['AI-Powered X-Ray Visualization'],
  'REST APIs': ['Flask backend development'],
  MySQL: ['Inventory Management System'],
  SQL: ['Inventory Management', 'HackerRank SQL'],
  Snowflake: ['Technical Skills'],
  HTML: ['Inventory Management', 'Full-Stack Web Development'],
  CSS: ['Inventory Management', 'Full-Stack Web Development'],
  JavaScript: ['Inventory Management', 'Full-Stack Web Development'],
  Git: ['Full-stack development workflow'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };

export const seasons: Season[] = [
  {
    number: 1, title: 'The Foundation', period: '2019 – 2022',
    synopsis: 'The academic foundation began with school and intermediate studies in Hyderabad.',
    episodes: [
      { code: 'S01 E01', title: 'SSC', description: 'Completed SSC with 92.6% at All Saints English Medium School.', tags: ['SSC', '92.6%'], runtime: '2019 – 2020', palette: jade },
      { code: 'S01 E02', title: 'MPC Intermediate', description: 'Completed Intermediate in MPC at Chaitanya Junior College with 80%.', tags: ['MPC', 'Intermediate'], runtime: '2020 – 2022', palette: amber },
    ],
  },
  {
    number: 2, title: 'Enter: AI & Data Science', period: '2022 – 2026',
    synopsis: 'B.Tech studies in Computer Science Engineering with specialization in AI and Data Science.',
    episodes: [
      { code: 'S02 E01', title: 'The Engineer', description: 'Pursuing B.Tech at Vel Tech Rangarajan Dr. Sagunthala R&D Institute with a CGPA of 8.0.', tags: ['B.Tech', 'AI & Data Science'], runtime: '2022 – 2026', palette: violet },
      { code: 'S02 E02', title: 'Technical Leadership', description: 'Developed team leadership and event coordination experience through academic and technical activities.', tags: ['Team Lead', 'Coordinator'], runtime: 'College', palette: crimson },
    ],
  },
  {
    number: 3, title: 'Learning to Build', period: '2025 – 2026',
    synopsis: 'Practical full-stack experience through internships and application development.',
    episodes: [
      { code: 'S03 E01', title: 'The Full-Stack Intern', description: 'Built responsive web applications and connected frontend components with backend and database functionality at LearnFlu.', tags: ['HTML', 'CSS', 'JavaScript'], runtime: 'Aug 2025 – Oct 2025', palette: ocean },
      { code: 'S03 E02', title: 'Python, AI & Data Science', description: 'Practicing Python, DSA, Django, React, SQL, REST APIs and AI-assisted development at V CUBE.', tags: ['Python', 'Django', 'AI & Data Science'], runtime: 'Aug 2026', palette: crimson },
    ],
  },
  {
    number: 4, title: 'Building Real Products', period: '2023 – 2026',
    synopsis: 'A growing portfolio of AI, computer vision, machine learning and database applications.',
    episodes: [
      { code: 'S04 E01', title: 'The AI Builder', description: 'Built pneumonia detection and X-ray visualization using TensorFlow, Keras and Grad-CAM.', tags: ['TensorFlow', 'Keras', 'Flask'], runtime: '2026', palette: crimson },
      { code: 'S04 E02', title: 'The Vision Developer', description: 'Developed a smart cursor system with OpenCV, MediaPipe and CNN-based computer vision.', tags: ['OpenCV', 'MediaPipe', 'CNN'], runtime: '2025', palette: ocean },
      { code: 'S04 E03', title: 'The Data Developer', description: 'Built fraud detection and inventory management applications with ML and database-driven CRUD workflows.', tags: ['Scikit-learn', 'MySQL', 'PHP'], runtime: '2023 – 2024', palette: violet },
    ],
  },
  {
    number: 5, title: "What's Next", period: 'Now streaming',
    synopsis: 'The next chapter focuses on Python backend engineering, automation and practical AI solutions.',
    episodes: [
      { code: 'S05 E01', title: 'Associate Software Engineer', description: 'Seeking an entry-level role in software development, application testing and enterprise technology solutions.', tags: ['Python', 'Backend', 'Testing'], runtime: 'In production', palette: violet },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'Scripting • Automation • AI & Data Science', palette: amber },
  { label: 'AI project', title: 'Pneumonia Detection', detail: 'TensorFlow • Keras • Grad-CAM', palette: crimson },
  { label: 'Computer vision', title: 'Smart Cursor', detail: 'OpenCV • MediaPipe • CNN', palette: ocean },
  { label: 'Machine learning', title: 'Fraud Detection', detail: 'Scikit-learn • Pandas • NumPy', palette: violet },
  { label: 'Academic high', title: 'CGPA 8.0', detail: 'B.Tech AI & Data Science', palette: jade },
  { label: 'Cloud credential', title: 'AWS', detail: 'Cloud Foundations', palette: amber },
  { label: 'Database credential', title: 'SQL', detail: 'HackerRank', palette: crimson },
  { label: 'Internship', title: 'V CUBE', detail: 'Python Full Stack with AI & FDE', palette: ocean },
  { label: 'Web development', title: 'LearnFlu', detail: 'Full-Stack Web Development', palette: jade },
  { label: 'Career goal', title: 'Backend Engineer', detail: 'Python • APIs • Databases', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.Tech · AI & Data Science', lines: ['Vel Tech Rangarajan Dr. Sagunthala R&D Institute', '2022 – 2026'], chips: ['CGPA 8.0'] },
  { kicker: 'Skills', title: 'Python first.', lines: ['Pandas, NumPy, OpenCV, Matplotlib', 'Flask, SQL, MySQL, Snowflake'], chips: ['Python', 'Flask', 'SQL', 'OpenCV', 'React'] },
  { kicker: 'Internships', title: 'Full-Stack & AI', lines: ['V CUBE — Python Full Stack with AI & FDE', 'LearnFlu — Full-Stack Web Development'], chips: ['Django', 'REST APIs', 'React'] },
  { kicker: 'Projects', title: 'Nine Originals', lines: ['AI video surveillance and age-gender prediction', 'AttendEase attendance system and personal finance UI', 'Pneumonia detection, smart cursor and vegetable market management'] },
  { kicker: 'Achievements', title: 'Leadership & Community', lines: ['Sankalp Tech Fest participant', 'Academic project team lead', 'Event coordinator and workshop organizer'] },
  { kicker: 'Certified', title: 'Five Certifications', lines: ['LearnFlu • Cisco • Wipro • AWS Academy • HackerRank'] },
  { kicker: 'Current mission', title: 'Associate Software Engineer', lines: ['Python • Backend • Automation • Application Testing'] },
];

export type ProfileId = 'venu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'venu', name: 'Venu', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, achievements & skills first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, stack & GitHub first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2023–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

'use strict';

const NAV = ['home', 'about', 'skills', 'stack', 'projects', 'contact'];
const NAV_LABEL = {
  home: 'HOME',
  about: 'ABOUT',
  skills: 'CAPABILITIES',
  stack: 'STACK',
  projects: 'PROJECTS',
  contact: 'CONTACT',
};

const TYPE_LINES = [
  'Engineering systems businesses rely on.',
  'APIs that power web and mobile apps.',
  'Scalable architecture. Production ready.',
  'Clean code. Real-world impact.',
];

const SKILLS = [
  {
    iconGlyph: '🧠',
    title: 'Frontend Development',
    desc: 'Responsive interfaces using Vue, Quasar, HTML, CSS, and modern UI frameworks.',
  },
  {
    iconGlyph: '🔗',
    title: 'Backend & API Architecture',
    desc: 'Scalable server logic and RESTful APIs built with Laravel, CodeIgniter, and Python.',
  },
  {
    iconGlyph: '🗄',
    title: 'System Integrations',
    desc: 'Connecting platforms using Google APIs, third-party services, SMS gateways, and automation workflows.',
  },
  {
    iconGlyph: '🚀',
    title: 'Production & Deployment',
    desc: 'Deploying and optimizing systems using Docker, Linux environments, and structured configuration management.',
  },
];

const TECH_ICON_IMAGE = {
  'Flutter': 'assets/icons/flutter.svg',
  'Flutter (Cross-platform mobile apps)': 'assets/icons/flutter.svg',
  'Microsoft PowerApps': 'assets/icons/powerapps.png',
  'AppSheet': 'assets/icons/appsheet.png',
  'Semaphore SMS API': 'assets/icons/semaphore.png',
  'Semaphore SMS': 'assets/icons/semaphore.png',
  'SMS Integration API': 'assets/icons/semaphore.png',
  'cPanel': 'assets/icons/cpanel.svg',
  'Chart.js': 'assets/icons/chartjs.svg',
  'amCharts': 'assets/icons/amcharts.svg',
  'ApexCharts': 'assets/icons/apexcharts.png',
};

const TECH_ICON_CLASS = {
  'PHP': 'devicon-php-plain colored',
  'Native PHP': 'devicon-php-plain colored',
  'Laravel': 'devicon-laravel-original colored',
  'CodeIgniter': 'devicon-codeigniter-plain colored',
  'CodeIgniter 3 & 4': 'devicon-codeigniter-plain colored',
  'Python (API Development)': 'devicon-python-plain colored',
  'Python API': 'devicon-python-plain colored',
  'RESTful API Design': 'devicon-fastapi-plain colored',
  'REST': 'devicon-fastapi-plain colored',
  'Third-Party API Integration': 'devicon-postman-plain colored',
  'HTML': 'devicon-html5-plain colored',
  'CSS': 'devicon-css3-plain colored',
  'Bootstrap': 'devicon-bootstrap-plain colored',
  'Tailwind': 'devicon-tailwindcss-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  'JavaScript': 'devicon-javascript-plain colored',
  'Vanilla JS': 'devicon-javascript-plain colored',
  'jQuery': 'devicon-jquery-plain colored',
  'Vue': 'devicon-vuejs-plain colored',
  'Vue 3': 'devicon-vuejs-plain colored',
  'Quasar': 'devicon-quasar-plain colored',
  'Quasar Framework': 'devicon-quasar-plain colored',
  'PostgreSQL': 'devicon-postgresql-plain colored',
  'MySQL': 'devicon-mysql-plain colored',
  'Google APIs': 'devicon-googlecloud-plain colored',
  'Google Maps JavaScript API': 'devicon-googlecloud-plain colored',
  'Google Directions & Geocoding APIs': 'devicon-googlecloud-plain colored',
  'Google Apps Script (Web App Deployment)': 'devicon-googlecloud-plain colored',
  'Third-Party REST APIs': 'devicon-postman-plain colored',
  'Docker': 'devicon-docker-plain colored',
  'Webpack': 'devicon-webpack-plain colored',
  'Linux Environment': 'devicon-linux-plain',
  'Git': 'devicon-git-plain colored',
  'GitHub': 'devicon-github-original',
  'Postman': 'devicon-postman-plain colored',
  'Browser Developer Tools': 'devicon-chrome-plain colored',
  'Visual Studio Code': 'devicon-vscode-plain colored',
  'Trello': 'devicon-trello-plain colored',
};

const TECH_ICON_BADGE = {
  'Axios': 'AX',
  'Webhooks': 'WH',
  'JSON': '{}',
  'OAuth': 'OA',
  'CI/CD basics': 'CI/CD',
};

const STACK = [
  {
    iconGlyph: '⚙️',
    title: 'Backend',
    tags: ['PHP', 'Laravel', 'CodeIgniter 3 & 4', 'Python (API Development)', 'RESTful API Design', 'Third-Party API Integration'],
  },
  {
    iconGlyph: '🖥️',
    title: 'Frontend',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Vue 3', 'Quasar'],
  },
  {
    iconGlyph: '📱',
    title: 'Mobile',
    tags: ['Flutter'],
  },
  {
    iconGlyph: '🧩',
    title: 'Low-Code Platforms',
    tags: ['Microsoft PowerApps', 'AppSheet'],
  },
  {
    iconGlyph: '🗄️',
    title: 'Database',
    tags: ['PostgreSQL', 'MySQL'],
  },
  {
    iconGlyph: '🔌',
    title: 'API & Integrations',
    tags: [
      'Google Maps JavaScript API',
      'Google Directions & Geocoding APIs',
      'Google Apps Script (Web App Deployment)',
      'Semaphore SMS API',
      'Third-Party REST APIs',
    ],
  },
  {
    iconGlyph: '🚀',
    title: 'DevOps & Deployment',
    tags: ['Docker', 'cPanel', 'Webpack', 'Linux Environment'],
  },
  {
    iconGlyph: '🛠️',
    title: 'Development Tools',
    tags: ['Git', 'GitHub', 'Postman', 'Browser Developer Tools', 'Visual Studio Code', 'Trello'],
  },
];

const PROJECTS = [
  {
    title: '💼 HR & Payroll Management System',
    desc: 'Integrated employee attendance, payroll computation, and HR management platform with real-time reporting, notifications, and structured backend processing.',
    stack: ['Laravel', 'Quasar', 'Vue', 'Axios', 'MySQL', 'Chart.js', 'amCharts', 'SMS Integration API', 'PHPMailer'],
  },
  {
    title: '🧩 IT Blaster – Project Management System',
    desc: 'Kanban-based internal platform for structured task assignment, workflow tracking, and analytics-driven team performance monitoring.',
    stack: ['CodeIgniter', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'Vanilla JS', 'Chart.js', 'amCharts', 'PHPMailer'],
  },
  {
    title: '📊 CRM & Engagement Platform',
    desc: 'Custom-built CRM system with messaging workflows, email tracking, and interactive analytics dashboards for measurable client engagement.',
    stack: ['Native PHP', 'MySQL', 'jQuery', 'PHPMailer', 'amCharts', 'ApexCharts'],
  },
  {
    title: '📄 E-Forms – Workflow & Compliance System',
    desc: 'Digitized audit and production forms into automated web workflows with integrated notifications and real-time performance reporting.',
    stack: ['CodeIgniter', 'MySQL', 'PHPMailer', 'SMS Integration API', 'Chart.js', 'amCharts', 'ApexCharts', 'JavaScript'],
  },
  {
    title: '⏱ Time Tracking System – Workforce Module',
    desc: 'Attendance and reporting system designed for structured employee time logging and administrative visibility.',
    stack: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Chart.js'],
  },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
window.scrollToSection = scrollToSection;

function createChipRow(tags) {
  const row = document.createElement('div');
  row.className = 'chip-row';
  row.innerHTML = tags.map(t => {
    const iconImage = TECH_ICON_IMAGE[t];
    const iconClass = TECH_ICON_CLASS[t];
    const badgeText = TECH_ICON_BADGE[t];
    const isPhpMailer = t === 'PHPMailer';
    const icon = isPhpMailer
      ? '<span class="chip-tech-envelope" aria-hidden="true">✉</span>'
      : iconImage
        ? `<img class="chip-tech-img" src="${iconImage}" alt="" loading="lazy" decoding="async" aria-hidden="true">`
        : iconClass
          ? `<i class="chip-tech-icon ${iconClass}" aria-hidden="true"></i>`
          : badgeText
            ? `<span class="chip-tech-badge" aria-hidden="true">${badgeText}</span>`
            : '<span class="chip-tech-fallback" aria-hidden="true">•</span>';
    return `<span class="chip">${icon}<span>${t}</span></span>`;
  }).join('');
  return row;
}

function initTheme() {
  const key = 'vibe-theme';
  const current = localStorage.getItem(key) || 'dark';
  document.documentElement.className = current;

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
    document.documentElement.className = next;
    localStorage.setItem(key, next);
  });
}

function initTypewriter() {
  const wrap = document.getElementById('typewriter');
  const el = document.getElementById('typewriter-text');
  if (!wrap || !el) return;

  let line = 0;
  let index = 0;
  let deleting = false;

  function reserveTypewriterHeight() {
    const previous = el.textContent;
    let maxHeight = 0;

    TYPE_LINES.forEach(text => {
      el.textContent = text;
      maxHeight = Math.max(maxHeight, wrap.offsetHeight);
    });

    wrap.style.height = `${maxHeight}px`;
    el.textContent = previous || '\u00A0';
  }

  reserveTypewriterHeight();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(reserveTypewriterHeight, 120);
  });

  function tick() {
    const full = TYPE_LINES[line % TYPE_LINES.length];

    if (!deleting) {
      index++;
      el.textContent = full.slice(0, index);
      if (index === full.length) {
        deleting = true;
        return setTimeout(tick, 2000);
      }
      return setTimeout(tick, 45);
    }

    index--;
    el.textContent = full.slice(0, index) || '\u00A0';
    if (index === 0) {
      deleting = false;
      line++;
      return setTimeout(tick, 0);
    }

    return setTimeout(tick, 25);
  }

  setTimeout(tick, 500);
}

function initDataRender() {
  const skillGrid = document.getElementById('skill-grid');
  SKILLS.forEach(s => {
    const card = document.createElement('article');
    card.className = 'skill-card reveal';
    const skillIcon = s.iconGlyph
      ? `<span class="skill-icon-glyph" aria-hidden="true">${s.iconGlyph}</span>`
      : '<span class="skill-icon-glyph skill-icon-fallback" aria-hidden="true">◆</span>';

    card.innerHTML = `
      <div class="skill-card-head">
        <span class="skill-icon" aria-hidden="true">${skillIcon}</span>
        <h3>${s.title}</h3>
      </div>
      <p>${s.desc}</p>
    `;
    skillGrid.appendChild(card);
  });

  const stackGrid = document.getElementById('stack-grid');
  STACK.forEach(s => {
    const card = document.createElement('article');
    card.className = 'stack-card reveal';
    const stackIcon = s.iconGlyph
      ? `<span class="stack-icon-glyph" aria-hidden="true">${s.iconGlyph}</span>`
      : '<span class="stack-icon-glyph stack-icon-fallback" aria-hidden="true">◆</span>';

    card.innerHTML = `
      <div class="stack-card-head">
        <span class="stack-icon" aria-hidden="true">${stackIcon}</span>
        <h3>${s.title}</h3>
      </div>
    `;
    card.appendChild(createChipRow(s.tags));
    stackGrid.appendChild(card);
  });

  const projectGrid = document.getElementById('project-grid');
  PROJECTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    card.appendChild(createChipRow(p.stack || []));

    if (p.link) {
      const link = document.createElement('a');
      link.href = p.link;
      link.textContent = 'VIEW PROJECT →';
      card.appendChild(link);
    }

    projectGrid.appendChild(card);
  });
}

function initNav() {
  const nav = document.getElementById('dot-nav');
  NAV.forEach(id => {
    const btn = document.createElement('button');
    const label = NAV_LABEL[id] || id.toUpperCase();
    btn.className = 'dot-btn';
    btn.title = label;
    btn.setAttribute('data-label', label);
    btn.setAttribute('aria-label', `Go to ${label}`);
    btn.addEventListener('click', () => scrollToSection(id));
    nav.appendChild(btn);
  });

  const updateActive = () => {
    const marker = window.scrollY + window.innerHeight * 0.35;
    let active = NAV[0];
    NAV.forEach(id => {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= marker) active = id;
    });

    nav.querySelectorAll('.dot-btn').forEach((btn, i) => {
      btn.classList.toggle('active', NAV[i] === active);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 420);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initContact() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      feedback.textContent = 'Please fill in all required fields.';
      return;
    }

    feedback.textContent = 'Sending...';
    setTimeout(() => {
      form.reset();
      feedback.textContent = 'Message received. I will reply soon.';
      setTimeout(() => (feedback.textContent = ''), 4500);
    }, 800);
  });
}

function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => io.observe(t));
}

function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let dots = [];

  const mouse = {
    x: 0,
    y: 0,
    active: false,
    radius: 160,
  };

  function createDot() {
    const giant = Math.random() < 0.14;
    const whiteStar = Math.random() < 0.55;
    const speedScale = giant ? 0.28 : 1;

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45 * speedScale,
      vy: (Math.random() - 0.5) * 0.45 * speedScale,
      r: giant ? (Math.random() * 2.8 + 2.8) : (Math.random() * 1.7 + 0.7),
      giant,
      whiteStar,
      baseAlpha: giant ? (0.42 + Math.random() * 0.26) : (0.24 + Math.random() * 0.35),
      twinkleAmp: giant ? (0.17 + Math.random() * 0.15) : (0.08 + Math.random() * 0.14),
      twinkleSpeed: giant ? (0.7 + Math.random() * 1.1) : (1.2 + Math.random() * 2.1),
      twinklePhase: Math.random() * Math.PI * 2,
    };
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const total = Math.max(120, Math.floor((canvas.width * canvas.height) / 9000));
    dots = Array.from({ length: total }, createDot);
  }

  function setMouse(x, y) {
    mouse.x = x;
    mouse.y = y;
    mouse.active = true;
  }

  function clampVelocity(dot) {
    const max = dot.giant ? 0.55 : 1.25;
    const speed = Math.hypot(dot.vx, dot.vy);
    if (speed > max) {
      dot.vx = (dot.vx / speed) * max;
      dot.vy = (dot.vy / speed) * max;
    }
  }

  function dotColor(dot, dark, alpha) {
    if (dark) {
      if (dot.whiteStar) return `rgba(255,255,255,${alpha})`;
      return `rgba(45,226,230,${alpha})`;
    }

    if (dot.whiteStar) return `rgba(17,24,39,${Math.min(0.62, alpha)})`;
    return `rgba(55,65,81,${Math.min(0.5, alpha)})`;
  }

  function draw() {
    const dark = document.documentElement.classList.contains('dark');
    const line = dark ? 'rgba(45,226,230,0.11)' : 'rgba(17,24,39,0.16)';
    const mouseLineBase = dark ? 0.33 : 0.26;
    const t = performance.now() * 0.001;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];

      if (mouse.active) {
        const dx = a.x - mouse.x;
        const dy = a.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        const radius2 = mouse.radius * mouse.radius;

        if (d2 < radius2) {
          const dist = Math.sqrt(d2) || 1;
          const force = (mouse.radius - dist) / mouse.radius;
          a.vx += (dx / dist) * force * 0.05;
          a.vy += (dy / dist) * force * 0.05;

          ctx.strokeStyle = dark
            ? `rgba(255,255,255,${force * mouseLineBase})`
            : `rgba(17,24,39,${force * mouseLineBase})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(a.x, a.y);
          ctx.stroke();
        }
      }

      clampVelocity(a);
      a.x += a.vx;
      a.y += a.vy;

      if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
      if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

      a.vx *= 0.996;
      a.vy *= 0.996;

      const twinkle = a.baseAlpha + Math.sin(t * a.twinkleSpeed + a.twinklePhase) * a.twinkleAmp;
      const alpha = Math.max(0.06, Math.min(0.95, twinkle));

      if (a.giant) {
        const glow = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.r * 3.6);
        const glowColor = dark
          ? (a.whiteStar ? `rgba(255,255,255,${alpha * 0.28})` : `rgba(45,226,230,${alpha * 0.24})`)
          : `rgba(17,24,39,${alpha * 0.14})`;
        glow.addColorStop(0, glowColor);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r * 3.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.fillStyle = dotColor(a, dark, alpha);
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 7800) {
          ctx.strokeStyle = line;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    if (mouse.active) {
      const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 0.8);
      glow.addColorStop(0, dark ? 'rgba(255,255,255,0.1)' : 'rgba(17,24,39,0.08)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('mousemove', e => setMouse(e.clientX, e.clientY), { passive: true });
  window.addEventListener('touchmove', e => {
    const touch = e.touches && e.touches[0];
    if (touch) setMouse(touch.clientX, touch.clientY);
  }, { passive: true });
  document.addEventListener('mouseleave', () => { mouse.active = false; }, { passive: true });
  window.addEventListener('touchend', () => { mouse.active = false; }, { passive: true });
  window.addEventListener('blur', () => { mouse.active = false; }, { passive: true });

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}

function initYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

initTheme();
initTypewriter();
initDataRender();
initNav();
initScrollTop();
initContact();
initReveal();
initCanvas();
initYear();

<template>
  <div id="app-wrap">
    <!-- NAVBAR -->
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="nav-inner">
        <a class="logo" href="#hero">MB<span class="dot">.</span></a>
        <ul class="nav-links" :class="{ open: menuOpen }">
          <li><a href="#about" @click="menuOpen=false">About</a></li>
          <li><a href="#skills" @click="menuOpen=false">Skills</a></li>
          <li><a href="#projects" @click="menuOpen=false">Projects</a></li>
          <li><a href="#experience" @click="menuOpen=false">Experience</a></li>
          <li><a href="#contact" @click="menuOpen=false">Contact</a></li>
        </ul>
        <a class="btn-cv" href="https://drive.google.com/file/d/1bCQtXCRb60KjhGd2qFiS5Q390FPBQFVb/view?usp=drive_link" target="_blank">Download CV</a>
        <button class="hamburger" @click="menuOpen=!menuOpen" :class="{ active: menuOpen }">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- HERO -->
    <section id="hero" class="hero">
      <div class="hero-bg-glow"></div>
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-greeting">Hi there 👋, I'm</p>
          <h1 class="hero-name">Michael Bankole</h1>
          <h2 class="hero-title">Frontend Engineer <span class="accent">·</span> Web &amp; Mobile</h2>
          <p class="hero-bio">I craft fast, scalable web and mobile applications,turning complex requirements into clean, intuitive user experiences. I've shipped real-time tracking apps, AI-powered chatbots, role-based dashboards, and cross-platform mobile apps using React, React Native, TypeScript, and Next.js.</p>
          <div class="hero-cta">
            <a href="#projects" class="btn-primary">View Projects</a>
            <a href="#contact" class="btn-outline">Get in Touch</a>
          </div>
          <div class="hero-badges">
            <span v-for="badge in badges" :key="badge" class="badge">{{ badge }}</span>
          </div>
        </div>
        <div class="hero-img">
          <div class="avatar-ring">
            <img src="../assets/avatar.png" alt="Michael Bankole" class="avatar" />
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <span></span>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section" ref="about">
      <div class="container reveal" :class="{ visible: visibleSections.about }">
        <h2 class="section-title">About Me</h2>
        <div class="about-grid">
          <div class="about-text">
            <p>I'm a <strong>Frontend Engineer</strong> with ~4 years of experience building scalable web and mobile applications across startup and enterprise environments. I specialise in the <strong>React / React Native / Next.js / Vue.js</strong> ecosystem and love turning complex problems into clean, intuitive interfaces.</p>
            <p>I've shipped products used by schools, government agencies, and logistics companies — including real-time tracking systems, AI-powered chatbots, ride-hailing apps, and content management platforms.</p>
            <p>I'm fluent in TypeScript, state management (Redux, Zustand, TanStack Query), real-time features (WebSockets, SignalR), and integrating REST APIs at scale.</p>
            <p>Outside code, I enjoy reading, watching football, and exploring finance and economics.</p>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-num">4<span class="accent">+</span></span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">7<span class="accent">+</span></span>
              <span class="stat-label">Projects Shipped</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">4<span class="accent">+</span></span>
              <span class="stat-label">Companies</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">2<span class="accent">+</span></span>
              <span class="stat-label">Platforms</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section" ref="skills">
      <div class="container reveal" :class="{ visible: visibleSections.skills }">
        <h2 class="section-title">Skills &amp; Tools</h2>
        <div class="skills-categories">
          <div class="skill-group" v-for="group in skillGroups" :key="group.label">
            <h4 class="skill-group-label">{{ group.label }}</h4>
            <div class="skill-tags">
              <span class="skill-tag" v-for="s in group.items" :key="s">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section" ref="projects">
      <div class="container reveal" :class="{ visible: visibleSections.projects }">
        <h2 class="section-title">Selected Projects</h2>
        <div class="projects-grid">
          <div class="project-card" v-for="p in projects" :key="p.title">
            <div class="project-img-wrap">
              <img :src="p.img" :alt="p.title" class="project-img" />
              <div class="project-overlay">
                <a v-if="p.live" :href="p.live" target="_blank" class="overlay-btn">Live ↗</a>
                <a v-if="p.github" :href="p.github" target="_blank" class="overlay-btn">GitHub</a>
              </div>
            </div>
            <div class="project-body">
              <div class="project-header">
                <h3 class="project-title">{{ p.title }}</h3>
                <span class="project-type" :class="p.type === 'Mobile' ? 'mobile' : p.type === 'Web + Mobile' ? 'both' : ''">{{ p.type }}</span>
              </div>
              <p class="project-desc">{{ p.desc }}</p>
              <div class="project-tags">
                <span v-for="t in p.tags" :key="t" class="proj-tag">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="section" ref="experience">
      <div class="container reveal" :class="{ visible: visibleSections.experience }">
        <h2 class="section-title">Work Experience</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="job in experience" :key="job.company">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="job-header">
                <div>
                  <h3 class="job-title">{{ job.role }}</h3>
                  <p class="job-company">{{ job.company }}</p>
                </div>
                <div class="job-meta">
                  <span class="job-period">{{ job.period }}</span>
                  <span class="job-type">{{ job.type }}</span>
                </div>
              </div>
              <ul class="job-points">
                <li v-for="pt in job.points" :key="pt">{{ pt }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section" ref="contact">
      <div class="container reveal contact-wrap" :class="{ visible: visibleSections.contact }">
        <h2 class="section-title">Get In Touch</h2>
        <p class="contact-sub">Looking to build something great? Whether you have a project in mind, a role to discuss, or just want to say hi — my inbox is always open.</p>
        <a href="mailto:bankole123michael@gmail.com" class="btn-primary contact-btn">Send me an email</a>
        <div class="socials">
          <a href="https://www.linkedin.com/in/bankole-michael/" target="_blank" class="social-link">LinkedIn</a>
          <a href="https://github.com/bhankymyk/" target="_blank" class="social-link">GitHub</a>
          <a href="https://twitter.com/bhankymyk1" target="_blank" class="social-link">Twitter</a>
          <a href="https://wa.link/fhdus1" target="_blank" class="social-link">WhatsApp</a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>© 2026 Michael Bankole · Built with Vue.js</p>
    </footer>
  </div>
</template>

<script>
import avatarImg from '../assets/avatar.png';
import chatbotImg from '../assets/project-chatbot.png';
import cmsImg from '../assets/project-cms.png';
import trackerImg from '../assets/project-tracker.png';
import haustidyImg from '../assets/project-haustidy.png';
import ansaaImg from '../assets/project-ansaa.png';
import mystarImg from '../assets/project-mystartracker.png';
import gorydaImg from '../assets/project-goryda.png';

export default {
  name: 'Portfolio',
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      visibleSections: { about: false, skills: false, projects: false, experience: false, contact: false },
      badges: ['React', 'React Native', 'Next.js', 'Vue.js', 'TypeScript', 'Expo'],
      skillGroups: [
        { label: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
        { label: 'Frameworks', items: ['React.js', 'React Native', 'Next.js', 'Vue.js', 'Expo'] },
        { label: 'State Management', items: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'Redux Persist'] },
        { label: 'Styling', items: ['Tailwind CSS', 'Bootstrap', 'Styled Components', 'CSS Modules'] },
        { label: 'APIs & Real-time', items: ['REST APIs', 'WebSocket', 'SignalR', 'Google Maps API'] },
        { label: 'Tools & DevOps', items: ['Git', 'GitHub', 'Vercel', 'Jira', 'Linear', 'Figma'] },
      ],
      projects: [
        {
          title: 'AI Chatbot for Schools',
          type: 'Web',
          desc: 'AI-powered chatbot for SMS Abuja school that handles student & parent inquiries, reducing admin workload by 25% and response time from 1 hour to 2 minutes.',
          tags: ['React.js', 'AI', 'TypeScript'],
          live: 'https://www.smsabuja.com/',
          github: null,
          img: chatbotImg,
        },
        {
          title: 'School CMS',
          type: 'Web',
          desc: 'Content management system enabling non-technical staff to manage announcements, events, and academic calendars for a school website.',
          tags: ['React.js', 'CMS', 'TypeScript'],
          live: 'https://cms.smsabuja.com/',
          github: null,
          img: cmsImg,
        },
        {
          title: 'Student Transportation Tracker',
          type: 'Web',
          desc: 'Real-time school bus tracking app for parents using Google Maps with 5-second refresh. Includes two-way SignalR chat between parents and school admin.',
          tags: ['React.js', 'Google Maps', 'SignalR', 'Redux', 'Tailwind'],
          live: 'https://testmystartracker.space/',
          github: null,
          img: trackerImg,
        },
        {
          title: 'Declutter – Pre-owned Goods',
          type: 'Web + Mobile',
          desc: 'Marketplace for pre-owned goods with a matching React Native mobile app, powered by Zustand for seamless state synchronisation across platforms.',
          tags: ['React.js', 'React Native', 'Zustand', 'TypeScript'],
          live: 'https://haustidy.com/',
          github: null,
          img: haustidyImg,
        },
        {
          title: 'ANSAA Dashboard',
          type: 'Web',
          desc: 'Role-based dashboard for the Anambra State Government advertising agency — managing 1000+ signage assets and reducing manual tracking time by 40%.',
          tags: ['React.js', 'TypeScript', 'Redux', 'REST API'],
          live: 'https://ansaa-staging-f5bn.vercel.app/',
          github: null,
          img: ansaaImg,
        },
        {
          title: 'MyStarTracker Mobile App',
          type: 'Mobile',
          desc: 'React Native mobile app for student transportation tracking, featuring real-time location updates, push notifications, and role-based access for parents and admins.',
          tags: ['React Native', 'Expo', 'TypeScript', 'Google Maps'],
          live: 'https://play.google.com/store/apps/details?id=com.mystartracker.mystartrackermobile',
          github: null,
          img: mystarImg,
        },
        {
          title: 'Goryda – Ride Hailing App',
          type: 'Mobile',
          desc: 'Driver-side of a ride-hailing app with real-time WebSocket updates, biometric authentication, deep linking, and live trip coordination between drivers and passengers.',
          tags: ['React Native', 'Expo', 'WebSocket', 'Redux Toolkit', 'TanStack Query'],
          live: 'https://play.google.com/store/apps/details?id=com.goryda.customer',
          github: null,
          img: gorydaImg,
        },
      ],
      experience: [
        {
          role: 'Frontend Engineer',
          company: 'Glidex Technology',
          period: 'Oct 2025 – Present',
          type: 'Full Time',
          points: [
            'Built role-based ANSAA dashboard managing 1000+ signage assets, reducing manual tracking by 40%.',
            'Developed driver-side of ride-hailing app (React Native + Expo) with real-time WebSocket trip coordination.',
            'Integrated Redux Toolkit, Redux Persist, TanStack Query for resilient state and server-state management.',
            'Implemented biometric auth, push notifications, deep linking, and location services.',
          ],
        },
        {
          role: 'Frontend Developer',
          company: 'MyStars Technology',
          period: 'Jun 2025 – Feb 2026',
          type: 'Contract',
          points: [
            'Built AI chatbot reducing admin workload by 25% and response times from 1 hour to 2 minutes.',
            'Developed school CMS enabling non-technical staff to manage content independently.',
            'Built real-time student transportation tracker with Google Maps (5-second refresh interval).',
            'Implemented two-way SignalR chat system between parents and school admin.',
          ],
        },
        {
          role: 'Frontend Developer',
          company: 'Haven360Labs',
          period: 'Feb 2024 – Jun 2025',
          type: 'Full Time',
          points: [
            'Migrated LMS from WordPress to Vue.js, improving performance and scalability.',
            'Developed Declutter web + mobile app using React, React Native, and Zustand.',
            'Optimised e-commerce site with React/Redux, achieving a 15% increase in speed.',
            'Conducted code reviews and led cross-functional collaboration with design and backend teams.',
          ],
        },
        {
          role: 'Frontend Developer',
          company: 'Intplus Tech',
          period: 'Aug 2023 – Feb 2024',
          type: 'Volunteer',
          points: [
            'Led frontend team — broke down tasks, reviewed PRs, and coordinated delivery.',
            'Streamlined e-medical user flows, reducing registration time by 15% during testing.',
            'Built interactive UIs with React.js, TypeScript, and RESTful API integration.',
          ],
        },
        {
          role: 'Frontend Developer',
          company: 'Kohot Studio',
          period: 'Nov 2021 – Apr 2022',
          type: 'Contract',
          points: [
            'Contributed to an e-bill payment platform (airtime, electricity, etc.).',
            'Built responsive web apps with Bootstrap and JavaScript.',
            'Implemented pixel-perfect designs across multiple browsers and devices.',
          ],
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.setupObserver();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 60;
    },
    setupObserver() {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const key = e.target.dataset.section;
            if (key) this.visibleSections[key] = true;
          }
        });
      }, { threshold: 0.1 });
      ['about','skills','projects','experience','contact'].forEach(key => {
        const el = this.$refs[key];
        if (el) { el.dataset.section = key; obs.observe(el); }
      });
    },
  },
};
</script>

<style scoped>
/* ===== LAYOUT ===== */
#app-wrap { min-height: 100vh; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.section { padding: 100px 0; }
.section-title {
  font-size: 2rem; font-weight: 700; margin-bottom: 48px;
  background: linear-gradient(90deg, #f0f2ff, #6c63ff);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.reveal { opacity: 0; transform: translateY(40px); transition: all 0.7s ease; }
.reveal.visible { opacity: 1; transform: none; }

/* ===== NAVBAR ===== */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 20px 32px; transition: all 0.3s;
}
.navbar.scrolled {
  background: rgba(10,15,30,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 14px 32px;
}
.nav-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; gap: 32px;
}
.logo {
  font-size: 1.4rem; font-weight: 800; color: #f0f2ff;
  text-decoration: none; margin-right: auto; letter-spacing: -0.5px;
}
.dot { color: #6c63ff; }
.nav-links {
  display: flex; list-style: none; gap: 32px;
}
.nav-links a {
  color: #8a9bb0; text-decoration: none; font-size: 0.9rem;
  font-weight: 500; transition: color 0.2s;
}
.nav-links a:hover { color: #f0f2ff; }
.btn-cv {
  background: linear-gradient(135deg, #6c63ff, #00d4aa);
  color: #fff; text-decoration: none; padding: 9px 20px;
  border-radius: 8px; font-size: 0.85rem; font-weight: 600;
  white-space: nowrap; transition: opacity 0.2s;
}
.btn-cv:hover { opacity: 0.85; }
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.hamburger span {
  display: block; width: 24px; height: 2px;
  background: #f0f2ff; border-radius: 2px; transition: all 0.3s;
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ===== HERO ===== */
.hero {
  min-height: 100vh; display: flex; align-items: center;
  position: relative; overflow: hidden; padding: 80px 24px 40px;
}
.hero-bg-glow {
  position: absolute; top: -200px; left: -200px;
  width: 700px; height: 700px; border-radius: 50%;
  background: radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%);
  pointer-events: none;
}
.hero-content {
  max-width: 1100px; margin: 0 auto; width: 100%;
  display: flex; align-items: center; gap: 60px;
}
.hero-text { flex: 1; }
.hero-greeting { color: #00d4aa; font-size: 1rem; font-weight: 500; margin-bottom: 12px; letter-spacing: 1px; }
.hero-name {
  font-size: clamp(2.4rem, 6vw, 4rem); font-weight: 800;
  line-height: 1.1; margin-bottom: 12px;
  background: linear-gradient(135deg, #f0f2ff 0%, #6c63ff 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-title {
  font-size: clamp(1rem, 2.5vw, 1.4rem); font-weight: 500;
  color: #8a9bb0; margin-bottom: 24px;
}
.accent { color: #6c63ff; -webkit-text-fill-color: #6c63ff; }
.hero-bio {
  color: #8a9bb0; line-height: 1.8; max-width: 520px;
  margin-bottom: 32px; font-size: 1rem;
}
.hero-cta { display: flex; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
.btn-primary {
  background: linear-gradient(135deg, #6c63ff, #5a52e0);
  color: #fff; text-decoration: none; padding: 13px 28px;
  border-radius: 10px; font-weight: 600; font-size: 0.95rem;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(108,99,255,0.35);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(108,99,255,0.5); }
.btn-outline {
  border: 1px solid rgba(255,255,255,0.15); color: #f0f2ff;
  text-decoration: none; padding: 13px 28px; border-radius: 10px;
  font-weight: 600; font-size: 0.95rem; transition: all 0.2s;
  backdrop-filter: blur(8px);
}
.btn-outline:hover { border-color: #6c63ff; color: #6c63ff; }
.hero-badges { display: flex; gap: 10px; flex-wrap: wrap; }
.badge {
  background: rgba(108,99,255,0.12); border: 1px solid rgba(108,99,255,0.25);
  color: #6c63ff; padding: 5px 14px; border-radius: 100px;
  font-size: 0.8rem; font-weight: 600;
}
.hero-img { flex-shrink: 0; }
.avatar-ring {
  width: 300px; height: 300px; border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #6c63ff, #00d4aa);
  box-shadow: 0 0 60px rgba(108,99,255,0.3);
  animation: pulse-ring 3s ease-in-out infinite;
}
.avatar { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
@keyframes pulse-ring {
  0%, 100% { box-shadow: 0 0 40px rgba(108,99,255,0.3); }
  50% { box-shadow: 0 0 70px rgba(108,99,255,0.5); }
}
.scroll-hint {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
}
.scroll-hint span {
  display: block; width: 24px; height: 36px;
  border: 2px solid rgba(255,255,255,0.2); border-radius: 12px;
  position: relative;
}
.scroll-hint span::after {
  content: ''; position: absolute; top: 6px; left: 50%;
  transform: translateX(-50%); width: 4px; height: 8px;
  background: #6c63ff; border-radius: 2px;
  animation: scroll-dot 2s ease-in-out infinite;
}
@keyframes scroll-dot { 0%,100%{top:6px;opacity:1} 50%{top:16px;opacity:0.3} }

/* ===== ABOUT ===== */
.about-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; align-items: start; }
.about-text p {
  color: #8a9bb0; line-height: 1.85; margin-bottom: 18px; font-size: 0.98rem;
}
.about-text strong { color: #f0f2ff; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.stat-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px; padding: 28px 20px; text-align: center;
  backdrop-filter: blur(8px); transition: border-color 0.3s;
}
.stat-card:hover { border-color: rgba(108,99,255,0.4); }
.stat-num {
  display: block; font-size: 2.4rem; font-weight: 800;
  background: linear-gradient(135deg, #6c63ff, #00d4aa);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.stat-label { display: block; color: #8a9bb0; font-size: 0.82rem; margin-top: 6px; }

/* ===== SKILLS ===== */
#skills { background: rgba(255,255,255,0.015); }
.skills-categories { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.skill-group {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px; padding: 24px;
}
.skill-group-label {
  font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 1.5px; color: #6c63ff; margin-bottom: 14px;
}
.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag {
  background: rgba(108,99,255,0.08); border: 1px solid rgba(108,99,255,0.18);
  color: #c5c1ff; padding: 4px 12px; border-radius: 6px;
  font-size: 0.82rem; font-weight: 500;
}

/* ===== PROJECTS ===== */
.projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
.project-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px; overflow: hidden; transition: all 0.3s;
}
.project-card:hover { border-color: rgba(108,99,255,0.35); transform: translateY(-4px); }
.project-img-wrap { position: relative; overflow: hidden; height: 200px; }
.project-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
.project-card:hover .project-img { transform: scale(1.05); }
.project-overlay {
  position: absolute; inset: 0; background: rgba(10,15,30,0.75);
  display: flex; align-items: center; justify-content: center; gap: 12px;
  opacity: 0; transition: opacity 0.3s; backdrop-filter: blur(4px);
}
.project-card:hover .project-overlay { opacity: 1; }
.overlay-btn {
  background: linear-gradient(135deg, #6c63ff, #00d4aa);
  color: #fff; text-decoration: none; padding: 10px 22px;
  border-radius: 8px; font-weight: 600; font-size: 0.85rem;
  transition: transform 0.2s;
}
.overlay-btn:hover { transform: scale(1.05); }
.project-body { padding: 22px; }
.project-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 10px; }
.project-title { font-size: 1rem; font-weight: 700; color: #f0f2ff; }
.project-type {
  background: rgba(0,212,170,0.12); border: 1px solid rgba(0,212,170,0.25);
  color: #00d4aa; font-size: 0.7rem; font-weight: 700;
  padding: 3px 10px; border-radius: 100px; white-space: nowrap;
}
.project-type.mobile {
  background: rgba(108,99,255,0.12); border-color: rgba(108,99,255,0.25); color: #6c63ff;
}
.project-type.both {
  background: rgba(255,171,64,0.12); border-color: rgba(255,171,64,0.25); color: #ffab40;
}
.project-desc { color: #8a9bb0; font-size: 0.87rem; line-height: 1.7; margin-bottom: 16px; }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.proj-tag {
  background: rgba(255,255,255,0.06); color: #8a9bb0;
  padding: 3px 10px; border-radius: 5px; font-size: 0.75rem;
}

/* ===== EXPERIENCE ===== */
#experience { background: rgba(255,255,255,0.015); }
.timeline { position: relative; padding-left: 32px; }
.timeline::before {
  content: ''; position: absolute; left: 0; top: 8px; bottom: 0;
  width: 2px; background: linear-gradient(to bottom, #6c63ff, rgba(108,99,255,0.1));
}
.timeline-item { position: relative; margin-bottom: 40px; }
.timeline-dot {
  position: absolute; left: -38px; top: 10px; width: 14px; height: 14px;
  border-radius: 50%; background: #6c63ff;
  border: 3px solid #0a0f1e;
  box-shadow: 0 0 12px rgba(108,99,255,0.5);
}
.timeline-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px; padding: 24px; transition: border-color 0.3s;
}
.timeline-card:hover { border-color: rgba(108,99,255,0.3); }
.job-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; gap: 12px; }
.job-title { font-size: 1.05rem; font-weight: 700; color: #f0f2ff; }
.job-company { color: #6c63ff; font-size: 0.9rem; font-weight: 500; margin-top: 3px; }
.job-meta { text-align: right; flex-shrink: 0; }
.job-period { display: block; font-size: 0.82rem; color: #8a9bb0; }
.job-type {
  display: inline-block; margin-top: 4px;
  background: rgba(0,212,170,0.1); color: #00d4aa;
  font-size: 0.72rem; font-weight: 700; padding: 2px 10px; border-radius: 100px;
}
.job-points { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.job-points li {
  color: #8a9bb0; font-size: 0.88rem; line-height: 1.7; padding-left: 18px; position: relative;
}
.job-points li::before {
  content: '▸'; position: absolute; left: 0; color: #6c63ff;
}

/* ===== CONTACT ===== */
.contact-wrap { text-align: center; }
.contact-sub { color: #8a9bb0; max-width: 520px; margin: -24px auto 36px; line-height: 1.8; }
.contact-btn { display: inline-block; font-size: 1rem; }
.socials { display: flex; justify-content: center; gap: 24px; margin-top: 48px; flex-wrap: wrap; }
.social-link {
  color: #8a9bb0; text-decoration: none; font-size: 0.9rem; font-weight: 500;
  transition: color 0.2s; border-bottom: 1px solid transparent;
}
.social-link:hover { color: #6c63ff; border-bottom-color: #6c63ff; }

/* ===== FOOTER ===== */
.footer {
  border-top: 1px solid rgba(255,255,255,0.06);
  text-align: center; padding: 28px; color: #8a9bb0; font-size: 0.85rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .hero-content { flex-direction: column-reverse; text-align: center; gap: 40px; }
  .hero-bio { margin-left: auto; margin-right: auto; }
  .hero-cta, .hero-badges { justify-content: center; }
  .avatar-ring { width: 220px; height: 220px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .skills-categories { grid-template-columns: repeat(2, 1fr); }
  .projects-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .section { padding: 70px 0; }
  .nav-links {
    display: none; position: fixed; top: 0; right: 0; bottom: 0;
    width: 240px; background: rgba(10,15,30,0.97); backdrop-filter: blur(20px);
    flex-direction: column; padding: 80px 32px 32px; gap: 24px;
    border-left: 1px solid rgba(255,255,255,0.08);
  }
  .nav-links.open { display: flex; }
  .hamburger { display: flex; }
  .skills-categories { grid-template-columns: 1fr; }
  .job-header { flex-direction: column; gap: 6px; }
  .job-meta { text-align: left; }
  .stat-num { font-size: 1.8rem; }
}
</style>

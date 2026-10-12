import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, UserRound, GraduationCap, BriefcaseBusiness, Heart,
  ExternalLink, Download
} from 'lucide-react'

const projects = [
  {
    title: 'Calculator App',
    category: 'React Project',
    description: 'A clean calculator interface for performing everyday mathematical operations.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://thompson-calculator-sigma.vercel.app/',
    symbol: '＋',
  },
  {
    title: 'To-Do List App',
    category: 'React Project',
    description: 'A simple task manager that helps users organize tasks and keep track of what needs to be done.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://thompson-todo-list-m5me.vercel.app/',
    symbol: '✓',
  },
]

const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Projects', 'projects'],
  ['Resume', 'resume'], ['Contact', 'contact'],
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">J</span>
          <span>my<span className="brand-accent">portfolio.</span></span>
        </a>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> IT STUDENT · ASPIRING DEVELOPER</div>
            <p className="hero-intro">Hello, I’m</p>
            <h1>Neil John <span>Thompson.</span></h1>
            <h2 className="hero-subtitle">I’m learning to build useful digital experiences.</h2>
            <p className="hero-text">
              I’m an Information Technology student who enjoys learning web development,
              creating practical projects, and improving my skills one step at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Contact me <Mail size={17} /></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <span className="social-note">Open to learning opportunities</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative introduction card">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top"><span>PERSONAL PROFILE</span><span className="tiny-dot" /></div>
              <div className="avatar-placeholder"><UserRound size={64} strokeWidth={1.25} /></div>
              <h3>Curious mind.<br /><span>Creative solutions.</span></h3>
              <p>Learning, building, and growing through technology.</p>
              <div className="profile-card-bottom"><Code2 size={17} /> <span>React · JavaScript · CSS</span></div>
            </div>
            <div className="floating-note note-code"><Code2 size={17} /> Keep coding</div>
            <div className="floating-note note-heart"><Heart size={17} fill="currentColor" /> Stay curious</div>
            <div className="art-sparkle sparkle-one">✳</div>
            <div className="art-sparkle sparkle-two">✦</div>
          </div>
          <a href="#about" className="scroll-hint"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="The person behind the projects." description="A student, a problem-solver in progress, and someone who believes every project is a chance to learn." />
          <div className="about-grid">
            <article className="about-card about-main-card">
              <div className="card-icon"><UserRound size={22} /></div>
              <h3>Personal background</h3>
              <p>
                I’m Neil John Thompson, an IT student at Cavite State University – Tanza Campus.
                I’m building my foundation in programming and web development through school
                activities and personal projects.
              </p>
              <p>
                My goal is to keep learning, gain hands-on experience, and create websites
                and applications that are useful, clear, and easy to use.
              </p>
            </article>
            <article className="about-card">
              <div className="card-icon"><Heart size={22} /></div>
              <h3>Skills & interests</h3>
              <p>I enjoy exploring front-end development, solving coding problems, and turning ideas into working projects.</p>
              <div className="skill-pills"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Python</span><span>SQL</span></div>
            </article>
            <article className="about-card">
              <div className="card-icon"><GraduationCap size={22} /></div>
              <h3>Currently learning</h3>
              <p>Responsive layouts, reusable React components, application logic, and how to deploy projects online.</p>
              <a className="text-link" href="#projects">See my projects <ArrowUpRight size={16} /></a>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <SectionHeading eyebrow="SELECTED WORK" title="Projects I’ve been building." description="A few practical projects where I apply what I’m learning in web development." />
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className={`project-card project-${index + 1}`} key={project.title}>
                  <div className="project-preview">
                    <div className="preview-browser"><span /><span /><span /><small>{project.category}</small></div>
                    <div className="preview-art">
                      <span className="preview-symbol">{project.symbol}</span>
                      <div className="preview-lines"><i /><i /><i /></div>
                    </div>
                    <span className="project-number">0{index + 1}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-title-row"><div><p className="eyebrow">{project.category}</p><h3>{project.title}</h3></div>
                      <a className="round-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={18} /></a>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <button className="details-button" onClick={() => setActiveProject(activeProject === index ? null : index)}>
                      {activeProject === index ? 'Hide details' : 'View project details'} <ArrowUpRight size={16} />
                    </button>
                    {activeProject === index && (
                      <div className="project-details">
                        <p><strong>What it demonstrates:</strong> React components, interactive interface design, and front-end development practice.</p>
                        <a href={project.link} target="_blank" rel="noreferrer">Visit live project <ExternalLink size={14} /></a>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap resume-section" id="resume">
          <SectionHeading eyebrow="MY JOURNEY" title="Learning today, building for tomorrow." description="My education and growing skills are the foundation for my next opportunity." />
          <div className="resume-grid">
            <div className="resume-column">
              <div className="resume-label"><GraduationCap size={19} /> EDUCATION</div>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <p className="timeline-date">COLLEGE · CURRENT</p>
                <h3>Cavite State University – Tanza Campus</h3>
                <p className="timeline-subtitle">Bachelor-level studies in Information Technology</p>
                <p>Developing skills in programming, web technologies, databases, and software development.</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <p className="timeline-date">SENIOR HIGH SCHOOL</p>
                <h3>JHOAN Colleges of the Philippines</h3>
                <p className="timeline-subtitle">STEM</p>
                <p>Built communication, collaboration, and research skills.</p>
              </div>
            </div>
            <div className="resume-column">
              <div className="resume-label"><BriefcaseBusiness size={19} /> SKILLS & EXPERIENCE</div>
              <div className="skill-block"><h3>Front-end development</h3><p>Creating responsive pages with HTML, CSS, JavaScript, and React.</p><div className="skill-meter"><span style={{ width: '72%' }} /></div></div>
              <div className="skill-block"><h3>Programming fundamentals</h3><p>Practicing logic, functions, and problem-solving with Python and JavaScript.</p><div className="skill-meter"><span style={{ width: '62%' }} /></div></div>
              <div className="skill-block"><h3>Database fundamentals</h3><p>Learning SQL queries, relational tables, and database concepts.</p><div className="skill-meter"><span style={{ width: '55%' }} /></div></div>
              <div className="resume-note"><span>✦</span><p><strong>Currently growing:</strong> I’m looking for opportunities to learn from real projects and experienced developers.</p></div>
            </div>
          </div>
          <p className="resume-reminder"><Download size={16} /> To add a downloadable résumé, place your PDF in the <code>public</code> folder and link it here.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">LET’S CONNECT</p>
              <h2>Have a project or opportunity in mind?</h2>
              <p>I’d be happy to connect, learn more, and discuss how I can contribute while continuing to grow my skills.</p>
              <a className="contact-email" href="mailto:your.email@example.com"><Mail size={19} /> your.email@example.com <ArrowUpRight size={17} /></a>
              <div className="contact-socials"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a message</h3>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={form.name} onChange={updateForm} placeholder="Enter your name" required />
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={updateForm} placeholder="you@example.com" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={updateForm} placeholder="Tell me what’s on your mind..." rows="4" required />
              <button className="button button-primary submit-button" type="submit">Open email app <ArrowUpRight size={17} /></button>
              {sent && <p className="form-note">Your email app should open with your message ready to send.</p>}
              <p className="form-note">This form uses your device’s email app; it does not send messages directly from the website.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">J</span><span>my<span className="brand-accent">portfolio.</span></span></a>
        <p>Designed with care · Built with React</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  )
}
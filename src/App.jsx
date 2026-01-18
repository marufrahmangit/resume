import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, ChevronDown, Send, Github, Linkedin, Youtube, FileText, ShoppingBag } from 'lucide-react';

export default function PortfolioWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Received. Will connect shortly.');
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight"><a href='#'>Maruf Rahman</a></div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 md:top-0 left-0 right-0 bg-slate-950 md:bg-transparent border-b md:border-0 border-slate-800`}>
            <div className="flex flex-col md:flex-row gap-8 p-6 md:p-0 md:gap-12">
              {['about', 'experience', 'skills', 'competencies', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-slate-300 hover:text-slate-50 transition capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8">
            {/* <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                Systems Thinker.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                  Infrastructure Architect.
                </span>
                Security Advocate.
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                Building resilient systems and leading cross-functional teams to solve critical infrastructure challenges. Nearly a decade of experience shipping products, managing teams, and protecting what matters.
              </p>
            </div> */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
                Product Leader.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                  Who Thinks in Systems.
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                I own product problems end to end, from understanding real user workflows to shipping features and iterating based on outcomes. Backed by an engineering background, I’m comfortable making tradeoffs under ambiguity and working closely with design and engineering to deliver practical, high-impact solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition transform hover:scale-105"
              >
                View Work
              </button> */}
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition transform hover:scale-105"
              >
                View Product Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-50 rounded-lg font-medium transition"
              >
                Let's Talk
              </button>
              {/* <a
                href="./assets/maruf-rahman.pdf"
                target="_blank"
                className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-50 rounded-lg font-medium transition flex items-center gap-2"
              >
                <Download size={18} /> Resume
              </a> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <ChevronDown className="animate-bounce text-slate-400" size={28} />
        </div>
      </section>

      {/* Professional Photo Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Abstract circular background shape */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-600/20 blur-2xl"></div>
              <div className="absolute top-8 right-8 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-12 left-4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full border-2 border-slate-700/50 overflow-hidden shadow-2xl">
                <img
                  src="./assets/maruf-rahman-2.png"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
              </div>
            </div>
          </div>

          <div id="about" className="flex-1 space-y-6">
            <div>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">Maruf Rahman</h2>
              {/* <p className="text-xl text-slate-300 mb-4">Infrastructure Architect & Systems Leader</p> */}
              <p className="text-xl text-slate-300 mb-4">Product Leader Bridging Business, Users, and Engineering</p>
              {/* <p className="text-slate-400 leading-relaxed mb-4">
                With nearly a decade of experience building resilient systems and leading high-performing teams, I specialize in translating complex infrastructure challenges into elegant, scalable solutions. My journey from hands-on development to strategic system design has equipped me to navigate technical and organizational complexity with equal confidence.
              </p> */}
              <p className="text-slate-400 leading-relaxed mb-4">
                With nearly a decade of experience across product management, engineering, and systems roles, I focus on turning complex problems into clear product direction. I’ve worked closely with users, stakeholders, and delivery teams to define priorities, make tradeoffs, and ship features that balance usability, business needs, and technical constraints.
              </p>
              {/* <p className="text-slate-400 leading-relaxed">
                I'm passionate about cybersecurity, infrastructure reliability, and mentoring teams who care about doing things right. When not architecting systems, I'm exploring emerging security practices and and staying ahead of trends in IT and cybersecurity.
              </p> */}
              <p className="text-slate-400 leading-relaxed">
                I care deeply about building reliable, well-designed products and helping teams do their best work. I enjoy mentoring, clarifying direction when things are ambiguous, and continuously improving how products are discovered, delivered, and measured.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
              <div>
                <p className="text-2xl font-bold text-blue-400">9+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-300">15+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">People Led</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">100%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Employer Satisfaction</p>
              </div>             
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="professional-foundation" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Professional Foundation</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                Since 2018, I've progressed from individual contributor to systems leader, building expertise across software engineering, product management, and infrastructure security.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition">
                  <div className="text-sm font-semibold text-blue-400 mb-1">Developer → Technical Product Manager → Systems Analyst</div>
                  <p className="text-slate-400 text-sm">Clear progression demonstrating depth and breadth in technical decision-making</p>
                </div>
                <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition">
                  <div className="text-sm font-semibold text-cyan-400 mb-1">Cross-functional Leadership</div>
                  <p className="text-slate-400 text-sm">Led teams through critical infrastructure migrations, security hardening, and product launches</p>
                </div>
                {/* <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition">
                  <div className="text-sm font-semibold text-blue-400 mb-1">Cybersecurity Trajectory</div>
                  <p className="text-slate-400 text-sm">Transitioning into security-focused roles: SOC Analyst, Cybersecurity Analyst, IT Manager</p>
                </div> */}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Core Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  // { label: 'Systems Design', val: '95' },
                  // { label: 'Infrastructure', val: '88' },
                  // { label: 'Threat Analysis', val: '82' },
                  // { label: 'Team Leadership', val: '90' },
                  // { label: 'Problem Solving', val: '92' },
                  // { label: 'Incident Response', val: '85' }
                  { label: 'Problem Discovery & Framing', val: '95' },
                  { label: 'Roadmapping & Prioritization', val: '98' },
                  { label: 'Cross-functional Delivery', val: '95' },
                  { label: 'Tradeoff Decision-making', val: '90' },
                  { label: 'Stakeholder Communication', val: '97' },
                  { label: 'Outcome Evaluation & Iteration', val: '92' }
                ].map(skill => (
                  <div key={skill.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.label}</span>
                      <span className="text-xs text-slate-500">{skill.val}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        style={{ width: `${skill.val}%`, transition: 'width 1s ease-out' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience Arc</h2>
          
          <div className="space-y-8">
            {[
              {
                role: "Senior Systems Analyst",
                company: "Veradigm®",
                period: "2021 - Present",
                // impact: "Guide engineering teams through complex delivery cycles, shaping technical decisions, streamlining workflows, and ensuring scalable, high-quality solutions. Implemented system monitoring and security practices across multiple services, improving reliability to 99.98%.",
                impact: "Partner with Product Managers and engineering teams to shape problem statements, define delivery scope, and guide features from concept through release in a regulated healthcare SaaS environment.",
                tags: ["Systems Analysis", "Security", "Leadership"]
              },
              // {
              //   role: "Software Product Manager",
              //   company: "Labaid & Far-East IT Solutions Ltd.",
              //   period: "2020 - 2021",
              //   impact: "Directed full-stack healthcare and e-commerce product development. Defined roadmaps, managed sprints, and coordinated cross-functional teams to improve user experience and ensure timely delivery. Balanced business priorities with technical constraints effectively.",
              //   tags: ["Product Management", "Strategy", "Leadership"]
              // },
              {
                role: "Technical Product Manager",
                company: "Labaid",
                period: "2020 - 2021",
                // impact: "Directed full-stack healthcare and e-commerce product development. Defined roadmaps, managed sprints, and coordinated cross-functional teams to improve user experience and ensure timely delivery. Balanced business priorities with technical constraints effectively.",
                impact: "Worked directly with clinicians, operations teams, and business stakeholders to understand workflows and pain points before defining product priorities.",
                tags: ["Product Management", "Strategy", "Leadership"]
              },
              {
                role: "Software Engineer",
                company: "Electro-Mechanical Control Services & CSL Software Resources Ltd.",
                period: "2018 - 2020",
                impact: "Developed and customized enterprise and automation solutions, including SAP modules, to optimize workflows and reduce manual workload. Built scalable backend systems and pioneered security practices for early-stage deployments.",
                tags: ["Development", "Enterprise Systems", "Security"]
              }
            ].map((exp, idx) => (
              <div key={idx} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">{exp.role}</h3>
                    <p className="text-slate-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">{exp.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-slate-700/50 text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Arsenal</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Software Development",
                skills: ["Python", "JavaScript/TypeScript", "C#", "SQL", "REST APIs", "Docker", "Kubernetes"]
              },
              {
                category: "Infrastructure & DevOps",
                skills: ["AWS", "Linux Systems", "CI/CD Pipelines", "Terraform", "Monitoring & Observability", "Network Architecture"]
              },
              {
                category: "Security & Compliance",
                skills: ["Threat Modeling", "Vulnerability Assessment", "Incident Response", "SIEM Concepts", "Access Control", "Security Hardening"]
              },
              {
                category: "Systems Analysis",
                skills: ["Enterprise Architecture", "Process Optimization", "Requirements Analysis", "SAP Implementation", "Business Analysis"]
              },
              {
                category: "Leadership & Collaboration",
                skills: ["Team Management", "Cross-functional Alignment", "Decision-making", "Stakeholder Communication", "Mentorship"]
              },
              {
                category: "Product & Strategy",
                skills: ["Product Strategy", "Roadmapping", "User Research", "Data-driven Decisions", "Go-to-market Planning"]
              }
            ].map((skillGroup, idx) => (
              <div key={idx} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition">
                <h3 className="font-semibold text-slate-50 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map(skill => (
                    <span key={skill} className="text-xs px-3 py-2 bg-slate-700/40 text-slate-300 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Focus */}
      <section id="competencies" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* <h2 className="text-3xl font-bold mb-4">Security-First Mindset</h2> */}
          {/* <p className="text-slate-400 mb-12 text-lg">Transitioning into dedicated security roles with deep foundational knowledge and demonstrated commitment.</p> */}
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Target Trajectory</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300"><strong>Cybersecurity Analyst</strong> - Deep threat analysis & monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300"><strong>SOC Analyst</strong> - Incident detection & response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300"><strong>IT Manager</strong> - Security leadership & governance</span>
                </div>
              </div>
            </div> */}

            <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Product Focus</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">
                      <strong>Problem Ownership</strong> – Framing user problems, defining success, and driving solutions end to end
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">
                      <strong>Product Judgment</strong> – Making tradeoffs under ambiguity across user needs, business goals, and technical constraints
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">
                      <strong>Cross-functional Leadership</strong> – Partnering with design, engineering, and stakeholders to ship outcomes
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-cyan-300">Core Product Competencies</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">User research & workflow analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">Roadmapping, prioritization, and backlog management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300">Feature delivery & iterative improvement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">Stakeholder communication & alignment</span>
                  </div>
                </div>
              </div>


            {/* <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-cyan-300">Core Competencies</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Threat analysis & risk assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Security monitoring & SIEM fundamentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Incident response & recovery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Continuous learning in evolving threat landscape</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Projects & Portfolio */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          
          {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Security Hardening & Threat Analysis",
                desc: "Conducted hands-on security research, threat modeling, and vulnerability analysis across real-world systems. Documented findings, mitigation strategies, and defensive recommendations through detailed security writeups.",
                link: "https://sec.marufrahman.dev"
              },
              {
                title: "Secure System Design Case Study",
                desc: "Designed an end-to-end system architecture with focus on scalability, reliability, and security. Documented data flows, threat models, failure modes, and tradeoffs under real-world constraints.",
                link: "https://sec.marufrahman.dev/2025/12/30/secure-file-sharing-system-design/"
              },
              {
                title: "E-Commerce Platform Engineering",
                desc: "Engineered and maintained a production e-commerce platform using WordPress and WooCommerce. Implemented backend customizations, performance optimizations, and operational automation to improve reliability, security, and day-to-day autonomy of the system.",
                link: "https://cartmixbd.com"
              },
              {
                title: "SOC L1 Incident Triage, Reporting, and Escalation Case Study",
                desc: "Analyzed simulated SOC alerts to perform triage, investigation, incident reporting, and escalation. Documented decision-making, severity assessment, and communication with senior analysts during phishing and post-exploitation scenarios.",
                link: "https://sec.marufrahman.dev/2025/10/30/soc-level1-alert-reporting/"
              },
              // {
              //   title: "Security Monitoring & SOC Lab",
              //   desc: "Built a home SOC lab using open-source tools to simulate log ingestion, alerting, and incident analysis. Designed detection rules and documented investigation workflows.",
              //   link: "#"
              // },
            ].map((project, idx) => (
              <div key={idx} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition group">
                <h3 className="text-lg font-semibold text-slate-50 mb-3 group-hover:text-blue-300 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                >
                  View Details <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div> */}

          <div className="grid md:grid-cols-1 gap-4 mb-12">
            {[
              {
                title: "E-Commerce Platform Engineering",
                desc: "Engineered and maintained a production e-commerce platform using WordPress and WooCommerce. Implemented backend customizations, performance optimizations, and operational automation to improve reliability, security, and day-to-day autonomy of the system.",
                link: "https://cartmixbd.com"
              },
              {
                title: "File-Sharing Workflow Product Case Study",
                desc: "Designed an end-to-end system architecture with focus on scalability, reliability, and security. Documented data flows, threat models, failure modes, and tradeoffs under real-world constraints.",
                link: "https://sec.marufrahman.dev/2025/12/30/secure-file-sharing-system-design/"
              },                       
              {
                title: "Incident Response Decision-Making",
                desc: "Analyzed simulated SOC alerts to perform triage, investigation, incident reporting, and escalation. Documented decision-making, severity assessment, and communication with senior analysts during phishing and post-exploitation scenarios.",
                link: "https://sec.marufrahman.dev/2025/10/30/soc-level1-alert-reporting/"
              },
              // {
              //   title: "Security Monitoring & SOC Lab",
              //   desc: "Built a home SOC lab using open-source tools to simulate log ingestion, alerting, and incident analysis. Designed detection rules and documented investigation workflows.",
              //   link: "#"
              // },
            ].map((project, idx) => (
              <div key={idx} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-slate-600/50 transition group">
                <h3 className="text-lg font-semibold text-slate-50 mb-3 group-hover:text-blue-300 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition"
                >
                  View Details <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-slate-50">Professional Credibility</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-400 mb-4 text-sm uppercase tracking-wide">External Presence</h4>
                <div className="space-y-3">
                  {[
                    // { icon: FileText, label: "IT Security Portfolio", url: "https://sec.marufrahman.dev"},
                    { icon: Github, label: "GitHub", url: "https://github.com/marufrahmangit" },
                    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/marufrahmanpro" },
                    { icon: Youtube, label: "YouTube", url: "https://youtube.com/@marufrahmandigital" }                    
                  ].map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-slate-50 transition"
                    >
                      <link.icon size={18} />
                      <span className="text-sm">{link.label}</span>
                      <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-4 text-sm uppercase tracking-wide">Enterprise Experience</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  SAP implementation projects across enterprise clients. Led system architecture, process optimization, and change management across diverse organizations.
                </p>
                <p className="text-slate-500 text-xs">Demonstrates ability to work at scale and navigate complex organizational structures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400 mb-12">Open to conversations about infrastructure, security, and leadership opportunities.</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 mb-2">EMAIL</p>
                <a href="mailto:mail@marufrahman.dev" className="text-lg text-slate-50 hover:text-blue-400 transition">
                  mail@marufrahman.dev
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-2">LINKEDIN</p>
                <a href="https://linkedin.com/in/marufrahmanpro"  
                target="_blank"
                rel="noopener noreferrer" 
                className="text-lg text-slate-50 hover:text-blue-400 transition">
                  linkedin.com/in/marufrahmanpro
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-2">GITHUB</p>
                <a href="https://github.com/marufrahmangit" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-slate-50 hover:text-blue-400 transition">
                  github.com/marufrahmangit
                </a>
              </div>
            </div>

            {/* <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
              <textarea
                placeholder="Brief message"
                rows="4"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
              <button
                onClick={handleContactSubmit}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
              {formStatus && <p className="text-sm text-blue-400 text-center">{formStatus}</p>}
            </div> */}
            <form action="https://formspree.io/f/xkoojnbz" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
              <textarea
                name="message"
                placeholder="Brief message"
                rows="4"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-50 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-slate-500">
          <p>© 2025 Maruf Rahman. All rights reserved.</p>
          <p>Built with intent. Designed for impact.</p>
        </div>
      </footer>
    </div>
  );
}
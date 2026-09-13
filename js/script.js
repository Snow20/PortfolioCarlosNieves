document.addEventListener('DOMContentLoaded', () => {
    
    let currentLang = 'ES';

    // ==========================================
    // DICCIONARIO TRADUCIDO COMPLETO (ES, EN, GL)
    // Sin bloque Fenrirsoft en Experiencia
    // ==========================================
    const translations = {
        ES: {
            nav_runner: "[01] RUNNER",
            nav_skills: "[02] CYBERWARE SKILLS",
            nav_memorias: "[03] ENGRAMS",
            nav_arquitectura: "[04] CHASSIS",
            nav_protocolo: "[05] CREDENCIALES",
            nav_contacto: "[06] NETLINK",
            
            hero_badge: "BIO-DATA LOADED // UPLINK COMPLETE",
            hero_subtitle: "Senior L3 Application Support Engineer | Linux & Middleware Specialist",
            hero_desc: "Especializado en la gestión y diagnóstico de entornos de alta disponibilidad, resolución de incidencias L3 en arquitecturas SOAP/REST, automatización de sistemas Linux mediante Bash y garantía de continuidad operativa en plataformas bancarias y telecomunicaciones.",
            metric_l3: "AÑOS SOPORTE L3",
            metric_uptime: "UPTIME EDICONTROLLER",
            metric_critical: "ENTORNOS CRÍTICOS",
            metric_english: "INGLÉS TÉCNICO",
            
            btn_contact: "⚡ INICIAR TRANSMISIÓN / CONTACTO",
            btn_github: "📄 VER GITHUB (MD)",
            btn_cv_eng: "📄 DESCARGAR CV Carlos Nieves ENG (PDF)",
            btn_cv_esp: "📄 DESCARGAR CV Carlos Nieves ESP (PDF)",
            btn_cli: ">_ ABRIR TERMINAL",
            
            block02_title: "[02] MATRIZ DE HABILIDADES NEURALES",
            tab_all: "TODOS LOS NODOS",
            tab_sistemas: "LINUX & CORE",
            tab_middleware: "MIDDLEWARE & APIS",
            tab_devops: "DEVOPS & OBSERVABILIDAD",
            tab_backend: "DESARROLLO & DB",
            search_placeholder: "Buscar tecnología (ej: Linux, Bash, Splunk)...",
            skill_card_sistemas: "Sistemas Linux & Core",
            badge_8years: "+8 AÑOS",
            skill_card_middleware: "Middleware & Arquitecturas API",
            badge_enterprise: "ENTERPRISE",
            pill_clusters: "Clústeres Redundantes",
            pill_ha: "Alta Disponibilidad",
            skill_card_obs: "Observabilidad & Logs",
            badge_l3: "SOPORTE L3",
            pill_incidents: "Gestión Incidencias",
            skill_card_devops: "Contenedores & DevOps",
            badge_infra: "INFRAESTRUCTURA",
            skill_card_langs: "Lenguajes de Programación",
            badge_advanced: "AVANZADO",
            skill_card_web: "Desarrollo Web & Frontend",
            skill_card_db: "Bases de Datos & Backend",
            badge_core: "NÚCLEO",

            block03_title: "SECUENCIA DE MEMORIAS (EXPERIENCIA PROFESIONAL)",
            timeline_html: `
                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Especialista de Soporte L3 - Aplicaciones y Servicios</h4>
                            <span class="date-badge">12/2017 - 01/2025 (7 años 2 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🏢</span> Telecomunicaciones Movilnet C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Resolución de incidencias críticas L3 sobre aplicaciones <b>SOAP/REST</b> en entornos Linux de alta disponibilidad.</li>
                            <li>Reducción del MTTR mediante automatización con <b>Bash</b>, garantía de continuidad operativa y migración del sistema bancario <b>EDIController</b> con clústeres redundantes al 100% de uptime.</li>
                            <li>Soporte técnico de segundo nivel de aplicaciones y servicios, asesoramiento y consultoría a clientes.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Analista Operación POS</h4>
                            <span class="date-badge">04/2016 - 06/2017 (1 año 3 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🏦</span> Banesco Banco Universal C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Gestión de visitas técnicas, sustitución y retiro de dispositivos POS a nivel regional.</li>
                            <li>Atención y análisis directo de requerimientos operacionales para los agentes comerciales.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Desarrollador Web Junior</h4>
                            <span class="date-badge">01/2016 - 04/2016 (4 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">💻</span> Millennium Web Design C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Diseño y desarrollo de páginas web funcionales, estrategias SEO y SEM.</li>
                            <li>Mantenimiento de sitios web empresariales y gestión de canales de contenido.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Soporte Técnico y Programador (L1/L2)</h4>
                            <span class="date-badge">02/2014 - 09/2014 (8 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🛠️</span> Drivers, System & Parts C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Soporte técnico de primer y segundo nivel (L1/L2) presencial y remoto.</li>
                            <li>Diseño y desarrollo de aplicación personalizada en <b>Java/Linux</b> para la gestión del tiempo del personal.</li>
                        </ul>
                    </div>
                </div>
            `,

            block04_title: "NODOS ARQUITECTÓNICOS (PROYECTOS CLAVE)",
            proj1_title: "Plataforma EDIController",
            proj1_desc: "Arquitectura de alta disponibilidad para transferencia crítica de archivos bancarios. Implementación de clústeres redundantes sobre Linux con tolerancia a fallos y automatización en Bash.",
            proj2_title: "Fenrirsoft Web Engine",
            proj2_desc: "Infraestructura de despliegue continuo en Cloudflare Pages integrada con pipelines sincronizados en GitHub para la entrega de plataformas web empresariales.",

            block05_title: "CREDENCIALES Y PROTOCOLOS",
            proto_edu: "🎓 FORMACIÓN ACADÉMICA",
            proto_edu_content: `
                <div class="edu-item">
                    <h5>Certificado de Profesionalidad: Confección y Publicación de Páginas Web</h5>
                    <p class="institute">SEPE / Ministerio de Trabajo y Economía Social (España) - 560 horas (2026)</p>
                    <p class="institute" style="font-size:0.8rem; margin-top:0.2rem;">Cualificación oficial con 80h de prácticas en empresa acreditando despliegue en servidor y optimización web.</p>
                </div>
                <div class="edu-item" style="margin-top:0.8rem;">
                    <h5>Técnico Superior Universitario (TSU) en Informática</h5>
                    <p class="institute">Instituto Universitario de Tecnología Venezuela (2015)</p>
                </div>
            `,
            proto_cert: "ORG CERTIFICACIONES DESTACADAS",
            proto_cert_content: `
                <li><b>Developer Certification Suite</b> — freeCodeCamp (08/2026)<br><span class="cert-sub">Python, JavaScript, Front-End Dev Libraries, Responsive Web Design</span></li>
                <li><b>B1 English for Developers</b> — freeCodeCamp (08/2026)</li>
                <li><b>Cloud Computing</b> — Google Activate (08/2024)</li>
                <li><b>Fundamentos de Linux</b> — CANTV (04/2018)</li>
            `,
            proto_lang: "🗣️ IDIOMAS",
            proto_lang_content: `
                <p><b>Español:</b> Nativo</p>
                <p><b>Inglés:</b> Nivel B1 Técnico Certificado (freeCodeCamp)</p>
                <p><b>Galego:</b> Nivel Básico (Entorno A Coruña / Galicia)</p>
            `,

            block06_title: "TRANSMISIÓN DE SEÑAL & CONTACTO",
            contact_whatsapp: "WHATSAPP / MÓVIL",
            contact_email: "EMAIL DIRECTO",
            contact_linkedin: "PERFIL LINKEDIN",
            contact_github: "REPOSITORIOS GITHUB",
            
            term_modal_title: "EXP-92 CONSOLE // COMMAND TERMINAL",
            term_input_placeholder: "Escribe un comando (ej: help, bio, skills)...",
            term_welcome: `==================================================\nEXP-92 CONSOLE // COMMAND TERMINAL\n==================================================\nEscribe <span class="term-highlight">help</span> para desplegar la lista de protocolos disponibles.`,
            term_help_header: "PROTOCOLOS DE COMANDO DISPOÑIBLES:",
            term_help_bio: "Muestra el resumen profesional del operador.",
            term_help_skills: "Consulta la matriz de habilidades técnicas.",
            term_help_exp: "Lista la secuencia de experiencias laborales.",
            term_help_projects: "Muestra los nodos arquitectónicos principales.",
            term_help_contact: "Datos de transmisión y canales de comunicación.",
            term_help_theme: "Alterna entre Arasaka Dark y Animus White.",
            term_help_clear: "Limpia la pantalla de la consola.",
            term_help_exit: "Cierra la sesión de terminal.",
            term_bio_title: "SUJETO: CARLOS NIEVES",
            term_bio_desc: "Senior L3 Application Support Engineer | Linux & Middleware Specialist\n+8 años de experiencia en entornos de alta disponibilidad, incidencias L3, arquitecturas SOAP/REST, automatización Bash y clústeres redundantes.\nUbicación: Carballo, A Coruña, Galicia, España",
            term_skills_title: "MATRIZ DE HABILIDADES:",
            term_skills_body: `<ul class="term-list">
                <li>• <b>Sistemas Core:</b> Linux/Unix, Bash Shell, Systemd, Journalctl, SecureCRT</li>
                <li>• <b>Middleware & APIs:</b> SOAP, REST, Clústeres Redundantes (EDIController)</li>
                <li>• <b>Observabilidad & DevOps:</b> Splunk (SPL), ELK Stack, Docker, Kubernetes, Git, Terraform</li>
                <li>• <b>Lenguajes & Backend:</b> Java, Python, JavaScript, MySQL, Spring Boot</li>
            </ul>`,
            term_exp_title: "SECUENCIA DE MEMORIAS (EXPERIENCIA PROFESIONAL):",
            term_exp_body: `<ul class="term-list">
                <li>1. <b>12/2017 - 01/2025:</b> Telecomunicaciones Movilnet C.A. — Especialista de Soporte L3 (Aplicaciones & Servicios)<br>
                &nbsp;&nbsp;&nbsp;• Incidencias L3 en entornos Linux de alta disponibilidad (SOAP/REST).<br>
                &nbsp;&nbsp;&nbsp;• Automatización con Bash para reducir MTTR y migración de EDIController con clústeres redundantes (100% Uptime).</li>
                <li>2. <b>04/2016 - 06/2017:</b> Banesco Banco Universal C.A. — Analista Operación POS<br>
                &nbsp;&nbsp;&nbsp;• Soporte técnico regional, gestión, sustitución y retiro de dispositivos POS.<br>
                &nbsp;&nbsp;&nbsp;• Atención de requerimientos operacionales para aliados comerciales.</li>
                <li>3. <b>02/2014 - 09/2014:</b> Drivers, System & Parts C.A. — Soporte Técnico L1/L2 & Programador<br>
                &nbsp;&nbsp;&nbsp;• Soporte presencial/remoto L1/L2 y atención al público.<br>
                &nbsp;&nbsp;&nbsp;• Desarrollo de aplicación personalizada en Java/Linux para gestión de tiempo de personal.</li>
            </ul>`,
            term_projects_title: "NODOS ARQUITECTÓNICOS CLAVE:",
            term_projects_body: `<ul class="term-list">
                <li>• <b>EDIController:</b> Plataforma bancaria crítica con clúster redundante (100% Uptime).</li>
                <li>• <b>Fenrirsoft Web Engine:</b> Despliegues en Cloudflare Pages con CI/CD en GitHub.</li>
                <li>• <b>gRQL Engine:</b> Evaluación de arquitectura de base de datos gráfica en la nube.</li>
                <li>• <b>Gestión de Tiempos:</b> Herramienta interna Java/Linux para productividad de personal.</li>
            </ul>`,
            term_contact_title: "CANALES DE TRANSMISIÓN:",
            term_contact_body: `<ul class="term-list">
                <li>• <b>Móvil / WhatsApp:</b> +34 633 191 597</li>
                <li>• <b>Email:</b> carlos.a.n.batatimo@gmail.com</li>
                <li>• <b>LinkedIn:</b> linkedin.com/in/carlos-nievesb</li>
                <li>• <b>GitHub:</b> github.com/Snow20</li>
            </ul>`,
            term_unknown_cmd: 'Comando no reconocido: "%s". Escribe <span class="term-highlight">help</span> para consultar los comandos disponibles.'
        },
        EN: {
            nav_runner: "[01] RUNNER",
            nav_skills: "[02] CYBERWARE SKILLS",
            nav_memorias: "[03] ENGRAMS",
            nav_arquitectura: "[04] CHASSIS",
            nav_protocolo: "[05] CREDENTIALS",
            nav_contacto: "[06] NETLINK",
            
            hero_badge: "BIO-DATA LOADED // UPLINK COMPLETE",
            hero_subtitle: "Senior L3 Application Support Engineer | Linux & Middleware Specialist",
            hero_desc: "Specialized in managing and diagnosing high-availability environments, L3 incident resolution on SOAP/REST architectures, Linux automation via Bash, and operational continuity assurance across banking and telecom platforms.",
            metric_l3: "YEARS L3 SUPPORT",
            metric_uptime: "EDICONTROLLER UPTIME",
            metric_critical: "CRITICAL ENVIRONMENTS",
            metric_english: "TECHNICAL ENGLISH",
            
            btn_contact: "⚡ START TRANSMISSION / CONTACT",
            btn_github: "📄 VIEW GITHUB (MD)",
            btn_cv_eng: "📄 DOWNLOAD CV Carlos Nieves ENG (PDF)",
            btn_cv_esp: "📄 DOWNLOAD CV Carlos Nieves ESP (PDF)",
            btn_cli: ">_ OPEN TERMINAL",
            
            block02_title: "[02] NEURAL SKILLS MATRIX",
            tab_all: "ALL NODES",
            tab_sistemas: "LINUX & CORE",
            tab_middleware: "MIDDLEWARE & APIS",
            tab_devops: "DEVOPS & OBSERVABILITY",
            tab_backend: "DEVELOPMENT & DB",
            search_placeholder: "Search technology (e.g. Linux, Bash, Splunk)...",
            skill_card_sistemas: "Linux & Core Systems",
            badge_8years: "+8 YEARS",
            skill_card_middleware: "Middleware & API Architectures",
            badge_enterprise: "ENTERPRISE",
            pill_clusters: "Redundant Clusters",
            pill_ha: "High Availability",
            skill_card_obs: "Observability & Logs",
            badge_l3: "L3 SUPPORT",
            pill_incidents: "Incident Management",
            skill_card_devops: "Containers & DevOps",
            badge_infra: "INFRASTRUCTURE",
            skill_card_langs: "Programming Languages",
            badge_advanced: "ADVANCED",
            skill_card_web: "Web Development & Frontend",
            skill_card_db: "Databases & Backend",
            badge_core: "CORE",

            block03_title: "MEMORY SEQUENCE (PROFESSIONAL EXPERIENCE)",
            timeline_html: `
                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>L3 Support Specialist - Applications & Services</h4>
                            <span class="date-badge">12/2017 - 01/2025 (7 yrs 2 mos)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🏢</span> Telecomunicaciones Movilnet C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Critical L3 incident resolution on <b>SOAP/REST</b> applications in high-availability Linux environments.</li>
                            <li>MTTR reduction via <b>Bash</b> automation, operational continuity assurance, and migration of the <b>EDIController</b> banking system with redundant clusters achieving 100% uptime.</li>
                            <li>Second-level technical support for applications and services, customer advice and technical consulting.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>POS Operations Analyst</h4>
                            <span class="date-badge">04/2016 - 06/2017 (1 yr 3 mos)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🏦</span> Banesco Banco Universal C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Management of regional technical visits, replacement, and removal of POS (Point of Sale) devices.</li>
                            <li>Direct handling and resolution of operational requirements for commercial partners.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Junior Web Developer</h4>
                            <span class="date-badge">01/2016 - 04/2016 (4 mos)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">💻</span> Millennium Web Design C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Design and development of functional web pages, SEO, and SEM strategies.</li>
                            <li>Maintenance of corporate websites and social media channel management.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Technical Support & Developer (L1/L2)</h4>
                            <span class="date-badge">02/2014 - 09/2014 (8 mos)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🛠️</span> Drivers, System & Parts C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>First and second-level (L1/L2) on-site and remote technical support.</li>
                            <li>Development of custom <b>Java/Linux</b> application for personnel time tracking.</li>
                        </ul>
                    </div>
                </div>
            `,

            block04_title: "ARCHITECTURAL NODES (KEY PROJECTS)",
            proj1_title: "EDIController Platform",
            proj1_desc: "High-availability architecture for critical banking file transfers. Implementation of redundant clusters on Linux with fault tolerance and Bash automation.",
            proj2_title: "Fenrirsoft Web Engine",
            proj2_desc: "Continuous deployment infrastructure on Cloudflare Pages integrated with synchronized GitHub pipelines for enterprise web platforms.",

            block05_title: "CREDENTIALS AND PROTOCOLS",
            proto_edu: "🎓 ACADEMIC EDUCATION",
            proto_edu_content: `
                <div class="edu-item">
                    <h5>Professional Certificate: Web Page Design and Publishing</h5>
                    <p class="institute">SEPE / Ministry of Labor and Social Economy (Spain) - 560 hours (2026)</p>
                    <p class="institute" style="font-size:0.8rem; margin-top:0.2rem;">Official qualification including 80h internship in company accrediting server deployment and web optimization.</p>
                </div>
                <div class="edu-item" style="margin-top:0.8rem;">
                    <h5>Higher University Technician (TSU) in Computer Science</h5>
                    <p class="institute">Instituto Universitario de Tecnología Venezuela (2015)</p>
                </div>
            `,
            proto_cert: "ORG KEY CERTIFICATIONS",
            proto_cert_content: `
                <li><b>Developer Certification Suite</b> — freeCodeCamp (08/2026)<br><span class="cert-sub">Python, JavaScript, Front-End Dev Libraries, Responsive Web Design</span></li>
                <li><b>B1 English for Developers</b> — freeCodeCamp (08/2026)</li>
                <li><b>Cloud Computing</b> — Google Activate (08/2024)</li>
                <li><b>Linux Fundamentals</b> — CANTV (04/2018)</li>
            `,
            proto_lang: "🗣️ LANGUAGES",
            proto_lang_content: `
                <p><b>Spanish:</b> Native</p>
                <p><b>English:</b> Certified B1 Technical Level (freeCodeCamp)</p>
                <p><b>Galician:</b> Basic Level (A Coruña / Galicia Region)</p>
            `,

            block06_title: "SIGNAL TRANSMISSION & CONTACT",
            contact_whatsapp: "WHATSAPP / MOBILE",
            contact_email: "DIRECT EMAIL",
            contact_linkedin: "LINKEDIN PROFILE",
            contact_github: "GITHUB REPOSITORIES",
            
            term_modal_title: "EXP-92 CONSOLE // COMMAND TERMINAL",
            term_input_placeholder: "Type a command (e.g. help, bio, skills)...",
            term_welcome: `==================================================\nEXP-92 CONSOLE // COMMAND TERMINAL\n==================================================\nType <span class="term-highlight">help</span> to display available protocols.`,
            term_help_header: "AVAILABLE COMMAND PROTOCOLS:",
            term_help_bio: "Displays the operator's professional summary.",
            term_help_skills: "Queries the technical skills matrix.",
            term_help_exp: "Lists the work experience sequence.",
            term_help_projects: "Displays key architectural nodes.",
            term_help_contact: "Transmission data and communication channels.",
            term_help_theme: "Toggles between Arasaka Dark and Animus White.",
            term_help_clear: "Clears the console screen.",
            term_help_exit: "Closes the terminal session.",
            term_bio_title: "SUBJECT: CARLOS NIEVES",
            term_bio_desc: "Senior L3 Application Support Engineer | Linux & Middleware Specialist\n+8 years of experience in high-availability environments, L3 incidents, SOAP/REST architectures, Bash automation, and redundant clusters.\nLocation: Carballo, A Coruña, Galicia, Spain",
            term_skills_title: "SKILLS MATRIX:",
            term_skills_body: `<ul class="term-list">
                <li>• <b>Core Systems:</b> Linux/Unix, Bash Shell, Systemd, Journalctl, SecureCRT</li>
                <li>• <b>Middleware & APIs:</b> SOAP, REST, Redundant Clusters (EDIController)</li>
                <li>• <b>Observability & DevOps:</b> Splunk (SPL), ELK Stack, Docker, Kubernetes, Git, Terraform</li>
                <li>• <b>Languages & Backend:</b> Java, Python, JavaScript, MySQL, Spring Boot</li>
            </ul>`,
            term_exp_title: "MEMORY SEQUENCE (WORK EXPERIENCE):",
            term_exp_body: `<ul class="term-list">
                <li>1. <b>12/2017 - 01/2025:</b> Telecomunicaciones Movilnet C.A. — L3 Support Specialist (Apps & Services)<br>
                &nbsp;&nbsp;&nbsp;• L3 troubleshooting in high-availability Linux environments (SOAP/REST).<br>
                &nbsp;&nbsp;&nbsp;• Bash automation to reduce MTTR and EDIController migration with redundant clusters (100% Uptime).</li>
                <li>2. <b>04/2016 - 06/2017:</b> Banesco Banco Universal C.A. — POS Operations Analyst<br>
                &nbsp;&nbsp;&nbsp;• Regional tech support, management, replacement, and removal of POS terminals.<br>
                &nbsp;&nbsp;&nbsp;• Resolution of operational requirements for commercial partners.</li>
                <li>3. <b>02/2014 - 09/2014:</b> Drivers, System & Parts C.A. — L1/L2 Tech Support & Developer<br>
                &nbsp;&nbsp;&nbsp;• On-site/remote L1/L2 support and customer assistance.<br>
                &nbsp;&nbsp;&nbsp;• Custom Java/Linux app development for employee time management.</li>
            </ul>`,
            term_projects_title: "KEY ARCHITECTURAL NODES:",
            term_projects_body: `<ul class="term-list">
                <li>• <b>EDIController:</b> Critical banking platform with redundant cluster (100% Uptime).</li>
                <li>• <b>Fenrirsoft Web Engine:</b> Deployments on Cloudflare Pages with CI/CD on GitHub.</li>
                <li>• <b>gRQL Engine:</b> Evaluation of graph database cloud architecture.</li>
                <li>• <b>Time Management:</b> Internal Java/Linux personnel productivity tool.</li>
            </ul>`,
            term_contact_title: "TRANSMISSION CHANNELS:",
            term_contact_body: `<ul class="term-list">
                <li>• <b>Mobile / WhatsApp:</b> +34 633 191 597</li>
                <li>• <b>Email:</b> carlos.a.n.batatimo@gmail.com</li>
                <li>• <b>LinkedIn:</b> linkedin.com/in/carlos-nievesb</li>
                <li>• <b>GitHub:</b> github.com/Snow20</li>
            </ul>`,
            term_unknown_cmd: 'Unrecognized command: "%s". Type <span class="term-highlight">help</span> to view available commands.'
        },
        GL: {
            nav_runner: "[01] RUNNER",
            nav_skills: "[02] CYBERWARE SKILLS",
            nav_memorias: "[03] ENGRAMS",
            nav_arquitectura: "[04] CHASSIS",
            nav_protocolo: "[05] CREDENCIAS",
            nav_contacto: "[06] NETLINK",
            
            hero_badge: "DATOS BIOLÓXICOS CARGADOS // ENLACE COMPLETO",
            hero_subtitle: "Engenheiro Senior de Soporte L3 | Especialista en Linux e Middleware",
            hero_desc: "Especializado na xestión e diagnóstico de contornos de alta dispoñibilidade, resolución de incidencias L3 en arquitecturas SOAP/REST, automatización de sistemas Linux mediante Bash e garantía de continuidade operativa en plataformas bancarias e telecomunicacións.",
            metric_l3: "ANOS SOPORTE L3",
            metric_uptime: "UPTIME EDICONTROLLER",
            metric_critical: "CONTORNOS CRÍTICOS",
            metric_english: "INGLÉS TÉCNICO",
            
            btn_contact: "⚡ INICIAR TRANSMISIÓN / CONTACTO",
            btn_github: "📄 VER GITHUB (MD)",
            btn_cv_eng: "📄 DESCARGAR CV Carlos Nieves ENG (PDF)",
            btn_cv_esp: "📄 DESCARGAR CV Carlos Nieves ESP (PDF)",
            btn_cli: ">_ ABRIR TERMINAL",
            
            block02_title: "[02] MATRIZ DE HABILIDADES NEURAIS",
            tab_all: "TODOS OS NODOS",
            tab_sistemas: "LINUX & CORE",
            tab_middleware: "MIDDLEWARE & APIS",
            tab_devops: "DEVOPS & OBSERVABILIDADE",
            tab_backend: "DESENVOLVEMENTO & BD",
            search_placeholder: "Buscar tecnoloxía (ex: Linux, Bash, Splunk)...",
            skill_card_sistemas: "Sistemas Linux & Core",
            badge_8years: "+8 ANOS",
            skill_card_middleware: "Middleware & Arquitecturas API",
            badge_enterprise: "EMPRESARIAL",
            pill_clusters: "Clústeres Redundantes",
            pill_ha: "Alta Dispoñibilidade",
            skill_card_obs: "Observabilidade & Logs",
            badge_l3: "SOPORTE L3",
            pill_incidents: "Xestión Incidencias",
            skill_card_devops: "Contedores & DevOps",
            badge_infra: "INFRAESTRUTURA",
            skill_card_langs: "Linguaxes de Programación",
            badge_advanced: "AVANZADO",
            skill_card_web: "Desenvolvemento Web & Frontend",
            skill_card_db: "Bases de Datos & Backend",
            badge_core: "NÚCLEO",

            block03_title: "SECUENCIA DE MEMORIAS (EXPERIENCIA PROFESIONAL)",
            timeline_html: `
                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Especialista de Soporte L3 - Aplicacións e Servizos</h4>
                            <span class="date-badge">12/2017 - 01/2025 (7 anos 2 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🏢</span> Telecomunicaciones Movilnet C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Resolución de incidencias críticas L3 sobre aplicacións <b>SOAP/REST</b> en contornos Linux de alta dispoñibilidade.</li>
                            <li>Redución do MTTR mediante automatización con <b>Bash</b>, garantía de continuidade operativa e migración do sistema bancario <b>EDIController</b> con clústeres redundantes ao 100% de uptime.</li>
                            <li>Soporte técnico de segundo nivel de aplicacións e servizos, asesoramento e consultoría a clientes.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Analista Operación POS</h4>
                            <span class="date-badge">04/2016 - 06/2017 (1 ano 3 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🏦</span> Banesco Banco Universal C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Xestión de visitas técnicas, substitución e retiro de dispositivos POS a nivel rexional.</li>
                            <li>Atención e resolución directa de requirimentos operacionais para os axentes comerciais.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                        <div class="marker-line"></div>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Desenvolvedor Web Junior</h4>
                            <span class="date-badge">01/2016 - 04/2016 (4 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">💻</span> Millennium Web Design C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Deseño e desenvolvemento de páxinas web funcionais, estratexias SEO e SEM.</li>
                            <li>Mantemento de sitios web empresariais e xestión de canles de contido.</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="marker-node">◆</span>
                    </div>
                    <div class="cyber-skill-card timeline-card">
                        <span class="corner-bracket top-left"></span>
                        <span class="corner-bracket top-right"></span>
                        <span class="corner-bracket bottom-left"></span>
                        <span class="corner-bracket bottom-right"></span>
                        <div class="card-header-row">
                            <h4>Soporte Técnico e Programador (L1/L2)</h4>
                            <span class="date-badge">02/2014 - 09/2014 (8 meses)</span>
                        </div>
                        <div class="company-tag">
                            <span class="company-icon">🛠️</span> Drivers, System & Parts C.A. (Caracas, Venezuela)
                        </div>
                        <ul class="engram-bullets">
                            <li>Soporte técnico de primeiro e segundo nivel (L1/L2) presencial e remoto.</li>
                            <li>Deseño e desenvolvemento de aplicación personalizada en <b>Java/Linux</b> para a xestión do tempo do persoal.</li>
                        </ul>
                    </div>
                </div>
            `,

            block04_title: "NODOS ARQUITECTÓNICOS (PROXECTOS CLAVE)",
            proj1_title: "Plataforma EDIController",
            proj1_desc: "Arquitectura de alta dispoñibilidade para transferencia crítica de ficheiros bancarios. Implementación de clústeres redundantes sobre Linux con tolerancia a fallos e automatización en Bash.",
            proj2_title: "Fenrirsoft Web Engine",
            proj2_desc: "Infraestrutura de despregamento continuo en Cloudflare Pages integrada con pipelines sincronizados en GitHub para a entrega de plataformas web empresariais.",

            block05_title: "CREDENCIALES E PROTOCOLOS",
            proto_edu: "🎓 FORMACIÓN ACADÉMICA",
            proto_edu_content: `
                <div class="edu-item">
                    <h5>Certificado de Profesionalidade: Confección e Publicación de Páxinas Web</h5>
                    <p class="institute">SEPE / Ministerio de Traballo e Economía Social (España) - 560 horas (2026)</p>
                    <p class="institute" style="font-size:0.8rem; margin-top:0.2rem;">Cualificación oficial con 80h de prácticas en empresa acreditando despregamento en servidor e optimización web.</p>
                </div>
                <div class="edu-item" style="margin-top:0.8rem;">
                    <h5>Técnico Superior Universitario (TSU) en Informática</h5>
                    <p class="institute">Instituto Universitario de Tecnología Venezuela (2015)</p>
                </div>
            `,
            proto_cert: "ORG CERTIFICACIÓNS DESTACADAS",
            proto_cert_content: `
                <li><b>Developer Certification Suite</b> — freeCodeCamp (08/2026)<br><span class="cert-sub">Python, JavaScript, Front-End Dev Libraries, Responsive Web Design</span></li>
                <li><b>B1 English for Developers</b> — freeCodeCamp (08/2026)</li>
                <li><b>Cloud Computing</b> — Google Activate (08/2024)</li>
                <li><b>Fundamentos de Linux</b> — CANTV (04/2018)</li>
            `,
            proto_lang: "🗣️ IDIOMAS",
            proto_lang_content: `
                <p><b>Español:</b> Nativo</p>
                <p><b>Inglés:</b> Nivel B1 Técnico Certificado (freeCodeCamp)</p>
                <p><b>Galego:</b> Nivel Básico (Contorno A Coruña / Galicia)</p>
            `,

            block06_title: "TRANSMISIÓN DE SINAL E CONTACTO",
            contact_whatsapp: "WHATSAPP / MÓBIL",
            contact_email: "CORREO DIRECTO",
            contact_linkedin: "PERFIL LINKEDIN",
            contact_github: "REPOSITORIOS GITHUB",
            
            term_modal_title: "EXP-92 CONSOLE // COMMAND TERMINAL",
            term_input_placeholder: "Escribe un comando (ex: help, bio, skills)...",
            term_welcome: `==================================================\nEXP-92 CONSOLE // COMMAND TERMINAL\n==================================================\nEscribe <span class="term-highlight">help</span> para despregar os protocolos dispoñibles.`,
            term_help_header: "PROTOCOLOS DE COMANDO DISPOÑIBLES:",
            term_help_bio: "Mosa o resumo profesional do operador.",
            term_help_skills: "Consulta a matriz de habilidades técnicas.",
            term_help_exp: "Lista a secuencia de experiencias laborais.",
            term_help_projects: "Mosa os nodos arquitectónicos principais.",
            term_help_contact: "Datos de transmisión e canles de comunicación.",
            term_help_theme: "Alterna entre Arasaka Dark e Animus White.",
            term_help_clear: "Limpa a pantalla da consola.",
            term_help_exit: "Pecha a sesión de terminal.",
            term_bio_title: "SUXETO: CARLOS NIEVES",
            term_bio_desc: "Engenheiro Senior de Soporte L3 | Especialista en Linux e Middleware\n+8 anos de experiencia en contornos de alta dispoñibilidade, incidencias L3, arquitecturas SOAP/REST, automatización Bash e clústeres redundantes.\nUbicación: Carballo, A Coruña, Galicia, España",
            term_skills_title: "MATRIZ DE HABILIDADES:",
            term_skills_body: `<ul class="term-list">
                <li>• <b>Sistemas Core:</b> Linux/Unix, Bash Shell, Systemd, Journalctl, SecureCRT</li>
                <li>• <b>Middleware e APIs:</b> SOAP, REST, Clústeres Redundantes (EDIController)</li>
                <li>• <b>Observabilidade e DevOps:</b> Splunk (SPL), ELK Stack, Docker, Kubernetes, Git, Terraform</li>
                <li>• <b>Linguaxes e Backend:</b> Java, Python, JavaScript, MySQL, Spring Boot</li>
            </ul>`,
            term_exp_title: "SECUENCIA DE MEMORIAS (EXPERIENCIA LABORAL):",
            term_exp_body: `<ul class="term-list">
                <li>1. <b>12/2017 - 01/2025:</b> Telecomunicaciones Movilnet C.A. — Especialista de Soporte L3 (Aplicacións e Servizos)<br>
                &nbsp;&nbsp;&nbsp;• Incidencias L3 en contornos Linux de alta dispoñibilidade (SOAP/REST).<br>
                &nbsp;&nbsp;&nbsp;• Automatización con Bash para reducir MTTR e migración de EDIController con clústeres redundantes (100% Uptime).</li>
                <li>2. <b>04/2016 - 06/2017:</b> Banesco Banco Universal C.A. — Analista Operación POS<br>
                &nbsp;&nbsp;&nbsp;• Soporte técnico rexional, xestión, substitución e retiro de dispositivos POS.<br>
                &nbsp;&nbsp;&nbsp;• Atención de requirimentos operacionais para aliados comerciais.</li>
                <li>3. <b>02/2014 - 09/2014:</b> Drivers, System & Parts C.A. — Soporte Técnico L1/L2 e Programador<br>
                &nbsp;&nbsp;&nbsp;• Soporte presencial/remoto L1/L2 e atención ao público.<br>
                &nbsp;&nbsp;&nbsp;• Desenvolvemento de aplicación personalizada en Java/Linux para xestión de tempo de persoal.</li>
            </ul>`,
            term_projects_title: "NODOS ARQUITECTÓNICOS CLAVE:",
            term_projects_body: `<ul class="term-list">
                <li>• <b>EDIController:</b> Plataforma bancaria crítica con clúster redundante (100% Uptime).</li>
                <li>• <b>Fenrirsoft Web Engine:</b> Despregamentos en Cloudflare Pages con CI/CD en GitHub.</li>
                <li>• <b>gRQL Engine:</b> Avaliación de arquitectura de base de datos gráfica na nube.</li>
                <li>• <b>Xestión de Tempos:</b> Ferramenta interna Java/Linux para produtividade de persoal.</li>
            </ul>`,
            term_contact_title: "CANLES DE TRANSMISIÓN:",
            term_contact_body: `<ul class="term-list">
                <li>• <b>Móbil / WhatsApp:</b> +34 633 191 597</li>
                <li>• <b>Correo:</b> carlos.a.n.batatimo@gmail.com</li>
                <li>• <b>LinkedIn:</b> linkedin.com/in/carlos-nievesb</li>
                <li>• <b>GitHub:</b> github.com/Snow20</li>
            </ul>`,
            term_unknown_cmd: 'Comando non recoñecido: "%s". Escribe <span class="term-highlight">help</span> para consultar os comandos dispoñibles.'
        }
    };

    // ==========================================
    // BOTÓN NEON SCROLL TOP
    // ==========================================
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            triggerAudio(1200, 'sine', 0.03);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // MENÚ HAMBURGUESA RESPONSIVO
    // ==========================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navCenter = document.getElementById('nav-center');

    if (hamburgerBtn && navCenter) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navCenter.classList.toggle('active');
            triggerAudio(1100, 'square', 0.03);
        });

        navCenter.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navCenter.classList.remove('active');
            });
        });
    }

    // ==========================================
    // CONMUTADOR DE IDIOMA
    // ==========================================
    const languages = ['ES', 'EN', 'GL'];
    let currentLangIndex = 0;
    const langBtn = document.getElementById('lang-btn');

    function setLanguage(langCode) {
        currentLang = langCode;
        const langData = translations[langCode];
        if (!langData) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key] !== undefined) {
                el.innerHTML = langData[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (langData[key] !== undefined) {
                el.placeholder = langData[key];
            }
        });

        const timelineContainer = document.getElementById('timeline-container');
        if (timelineContainer && langData.timeline_html) {
            timelineContainer.innerHTML = langData.timeline_html;
        }

        const protoEduContainer = document.querySelector('[data-i18n="proto_edu_content"]');
        if (protoEduContainer && langData.proto_edu_content) {
            protoEduContainer.innerHTML = langData.proto_edu_content;
        }

        const protoCertContainer = document.querySelector('[data-i18n="proto_cert_content"]');
        if (protoCertContainer && langData.proto_cert_content) {
            protoCertContainer.innerHTML = langData.proto_cert_content;
        }

        const protoLangContainer = document.querySelector('[data-i18n="proto_lang_content"]');
        if (protoLangContainer && langData.proto_lang_content) {
            protoLangContainer.innerHTML = langData.proto_lang_content;
        }

        if (langBtn) langBtn.textContent = `[ 🌐 ${langCode} ]`;

        const terminalOutput = document.getElementById('terminal-output');
        if (terminalOutput && (terminalOutput.children.length === 0 || terminalOutput.children.length === 1)) {
            terminalOutput.innerHTML = `<div>${langData.term_welcome.replace(/\n/g, '<br>')}</div>`;
        }
    }

    setLanguage('ES');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLangIndex = (currentLangIndex + 1) % languages.length;
            setLanguage(languages[currentLangIndex]);
            triggerAudio(1000, 'sine', 0.03);
        });
    }

    // ==========================================
    // TERMINAL INTERACTIVA
    // ==========================================
    const terminalModal = document.getElementById('terminal-modal');
    const closeTerminalBtn = document.getElementById('close-terminal-btn');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    
    const cliNavBtn = document.getElementById('cli-btn');
    const openCliHeroBtn = document.getElementById('open-cli');

    function openTerminal() {
        if (!terminalModal) return;
        terminalModal.classList.add('active');
        
        if (terminalOutput && terminalOutput.children.length === 0) {
            terminalOutput.innerHTML = `<div>${translations[currentLang].term_welcome.replace(/\n/g, '<br>')}</div>`;
        }
        
        setTimeout(() => {
            if (terminalInput) terminalInput.focus();
        }, 100);
    }

    function closeTerminal() {
        if (!terminalModal) return;
        terminalModal.classList.remove('active');
    }

    if (cliNavBtn) {
        cliNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerAudio(500, 'sawtooth', 0.08);
            openTerminal();
        });
    }

    if (openCliHeroBtn) {
        openCliHeroBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerAudio(500, 'sawtooth', 0.08);
            openTerminal();
        });
    }

    if (closeTerminalBtn) closeTerminalBtn.addEventListener('click', closeTerminal);

    if (terminalModal) {
        terminalModal.addEventListener('click', (e) => {
            if (e.target === terminalModal) closeTerminal();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && terminalModal && terminalModal.classList.contains('active')) {
            closeTerminal();
        }
    });

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const rawInput = terminalInput.value;
                const cmd = rawInput.trim().toLowerCase();
                
                if (cmd === '') return;

                const echoDiv = document.createElement('div');
                echoDiv.className = 'cmd-echo';
                echoDiv.innerHTML = `<span class="prompt-user">RUNNER@EXP-92:~$</span> ${escapeHTML(rawInput)}`;
                terminalOutput.appendChild(echoDiv);

                const responseDiv = document.createElement('div');
                responseDiv.innerHTML = processCommand(cmd);
                terminalOutput.appendChild(responseDiv);

                terminalInput.value = '';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    function processCommand(cmd) {
        const t = translations[currentLang];

        switch (cmd) {
            case 'help':
                return `
<div class="term-section-title">${t.term_help_header}</div>
<ul class="term-list">
    <li><span class="term-highlight">bio / subject</span> - ${t.term_help_bio}</li>
    <li><span class="term-highlight">skills</span> - ${t.term_help_skills}</li>
    <li><span class="term-highlight">exp</span> - ${t.term_help_exp}</li>
    <li><span class="term-highlight">projects</span> - ${t.term_help_projects}</li>
    <li><span class="term-highlight">contact</span> - ${t.term_help_contact}</li>
    <li><span class="term-highlight">theme</span> - ${t.term_help_theme}</li>
    <li><span class="term-highlight">clear</span> - ${t.term_help_clear}</li>
    <li><span class="term-highlight">exit</span> - ${t.term_help_exit}</li>
</ul>`;

            case 'bio':
            case 'subject':
                return `
<div class="term-section-title">${t.term_bio_title}</div>
<p>${t.term_bio_desc.replace(/\n/g, '<br>')}</p>`;

            case 'skills':
                return `
<div class="term-section-title">${t.term_skills_title}</div>
${t.term_skills_body}`;

            case 'exp':
                return `
<div class="term-section-title">${t.term_exp_title}</div>
${t.term_exp_body}`;

            case 'projects':
                return `
<div class="term-section-title">${t.term_projects_title}</div>
${t.term_projects_body}`;

            case 'contact':
                return `
<div class="term-section-title">${t.term_contact_title}</div>
${t.term_contact_body}`;

            case 'theme':
                document.body.classList.toggle('light-mode');
                const isLight = document.body.classList.contains('light-mode');
                return `Theme: <span class="term-highlight">${isLight ? 'Animus White' : 'Arasaka Dark'}</span>`;

            case 'clear':
                setTimeout(() => {
                    terminalOutput.innerHTML = `<div>${t.term_welcome.replace(/\n/g, '<br>')}</div>`;
                }, 50);
                return '';

            case 'exit':
                closeTerminal();
                return '';

            default:
                return `<span class="term-error">${t.term_unknown_cmd.replace('%s', escapeHTML(cmd))}</span>`;
        }
    }

    // ==========================================
    // AUDIO & SFX
    // ==========================================
    let audioActive = true;
    const audioBtn = document.getElementById('audio-btn');
    const themeBtn = document.getElementById('theme-btn');

    function triggerAudio(frequency = 880, type = 'sine', duration = 0.04) {
        if (!audioActive) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const context = new AudioContext();
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();

            oscillator.type = type;
            oscillator.frequency.value = frequency;
            gainNode.gain.setValueAtTime(0.015, context.currentTime);

            oscillator.connect(gainNode);
            gainNode.connect(context.destination);

            oscillator.start();
            oscillator.stop(context.currentTime + duration);
        } catch (error) {}
    }

    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            audioActive = !audioActive;
            audioBtn.textContent = audioActive ? '[ 🔊 SFX: ON ]' : '[ 🔇 SFX: OFF ]';
            triggerAudio(audioActive ? 1200 : 300, 'square', 0.05);
        });
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            triggerAudio(600, 'triangle', 0.04);
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            themeBtn.textContent = isLight ? '[ ☀️ ANIMUS WHITE ]' : '[ 🌙 ARASAKA DARK ]';

            const flash = document.createElement('div');
            flash.className = 'theme-switch-flash';
            document.body.appendChild(flash);

            setTimeout(() => { flash.remove(); }, 450);
        });
    }

    // Filtros de Skills
    const tabs = document.querySelectorAll('.cyber-tab');
    const cards = document.querySelectorAll('.cyber-skill-card');
    const searchInput = document.getElementById('cyber-search-input');
    let activeCategory = 'all';

    function updateSkillsFilter() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        cards.forEach(card => {
            const categoryMatches = (activeCategory === 'all') || (card.dataset.category === activeCategory);
            const textMatches = card.textContent.toLowerCase().includes(query);
            card.style.display = (categoryMatches && textMatches) ? 'block' : 'none';
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategory = tab.dataset.category;
            updateSkillsFilter();
        });
    });

    if (searchInput) searchInput.addEventListener('input', updateSkillsFilter);

    // Audio Hover
    const interactables = document.querySelectorAll('.btn, .nav-center a, .nav-btn, .cyber-tab');
    interactables.forEach(item => {
        item.addEventListener('mouseenter', () => triggerAudio(1400, 'sine', 0.015));
        item.addEventListener('click', () => triggerAudio(900, 'square', 0.03));
    });

    // Desplazamiento suave
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

// Partículas de fondo
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 4 + 1.5,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.6 + 0.2,
            type: Math.random() > 0.5 ? 'square' : 'triangle'
        });
    }

    function drawTriangle(context, x, y, size) {
        context.beginPath();
        context.moveTo(x, y - size);
        context.lineTo(x - size, y + size);
        context.lineTo(x + size, y + size);
        context.closePath();
    }

    function renderFrame() {
        ctx.clearRect(0, 0, width, height);
        const isLight = document.body.classList.contains('light-mode');
        const colorRGB = isLight ? '0, 131, 143' : '0, 210, 211';

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.fillStyle = `rgba(${colorRGB}, ${p.opacity})`;
            if (p.type === 'square') {
                ctx.fillRect(p.x, p.y, p.size, p.size);
            } else {
                drawTriangle(ctx, p.x, p.y, p.size * 1.2);
                ctx.fill();
            }
        });

        requestAnimationFrame(renderFrame);
    }

    renderFrame();
}
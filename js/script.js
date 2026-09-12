document.addEventListener('DOMContentLoaded', () => {
    
    let currentLang = 'ES';

    // ==========================================
    // 1. DICCIONARIO TRADUCIDO CON TUS 4 EXPERIENCIAS
    // ==========================================
    const translations = {
        ES: {
            // Navbar
            nav_runner: "[01] RUNNER",
            nav_skills: "[02] CYBERWARE SKILLS",
            nav_memorias: "[03] ENGRAMS",
            nav_arquitectura: "[04] CHASSIS",
            nav_contacto: "[06] NETLINK",
            
            // Hero
            hero_badge: "BIO-DATA LOADED // UPLINK COMPLETE",
            hero_subtitle: "Senior L3 Application Support Engineer | Linux & Middleware Specialist",
            hero_desc: "Especializado en la gestión y diagnóstico de entornos de alta disponibilidad, resolución de incidencias L3 en arquitecturas SOAP/REST, automatización de sistemas Linux mediante Bash y garantía de continuidad operativa en plataformas bancarias y telecomunicaciones.",
            metric_l3: "AÑOS SOPORTE L3",
            metric_uptime: "UPTIME EDICONTROLLER",
            metric_critical: "ENTORNOS CRÍTICOS",
            metric_english: "INGLÉS TÉCNICO",
            
            // Botones Hero
            btn_contact: "⚡ INICIAR TRANSMISIÓN / CONTACTO",
            btn_github: "📄 VER GITHUB (MD)",
            btn_cv_eng: "📄 DESCARGAR CV ENG (PDF)",
            btn_cv_esp: "📄 DESCARGAR CV ESP (PDF)",
            btn_cli: ">_ ABRIR TERMINAL",
            
            // Secciones UI
            block02_title: "[02] MATRIZ DE HABILIDADES NEURALES",
            tab_all: "TODOS LOS NODOS",
            tab_sistemas: "LINUX & CORE",
            tab_middleware: "MIDDLEWARE & APIS",
            tab_devops: "DEVOPS & OBSERVABILIDAD",
            tab_backend: "DESARROLLO & DB",
            search_placeholder: "Buscar tecnología (ej: Linux, Bash, Splunk)...",
            block03_title: "SECUENCIA DE MEMORIAS (EXPERIENCIA PROFESIONAL)",
            block04_title: "NODOS ARQUITECTÓNICOS (PROYECTOS CLAVE)",
            block05_title: "CREDENCIALES Y PROTOCOLOS",
            proto_edu: "🎓 FORMACIÓN ACADÉMICA",
            proto_cert: "ORG CERTIFICACIONES DESTACADAS",
            proto_lang: "🗣️ IDIOMAS",
            block06_title: "TRANSMISIÓN DE SEÑAL & CONTACTO",
            contact_whatsapp: "WHATSAPP / MÓVIL",
            contact_email: "EMAIL DIRECTO",
            contact_linkedin: "PERFIL LINKEDIN",
            contact_github: "REPOSITORIOS GITHUB",
            
            // Terminal i18n
            term_modal_title: "EXP-92 CONSOLE // COMMAND TERMINAL",
            term_input_placeholder: "Escribe un comando (ej: help, bio, skills)...",
            term_welcome: `==================================================\nEXP-92 CONSOLE // COMMAND TERMINAL\n==================================================\nEscribe <span class="term-highlight">help</span> para desplegar la lista de protocolos disponibles.`,
            term_help_header: "PROTOCOLOS DE COMANDO DISPONIBLES:",
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
                <li>1. <b>2024 - Presente:</b> Fenrirsoft Digital Agency — Fundador & Lead Developer (CEO)<br>
                &nbsp;&nbsp;&nbsp;• Dirección técnica en desarrollo web, consultoría IT y soluciones cloud.<br>
                &nbsp;&nbsp;&nbsp;• Despliegues en Cloudflare Pages, pipelines CI/CD en GitHub, auditorías de accesibilidad.</li>
                <li>2. <b>12/2017 - 01/2025:</b> Telecomunicaciones Movilnet C.A. — Especialista de Soporte L3 (Aplicaciones & Servicios)<br>
                &nbsp;&nbsp;&nbsp;• Incidencias L3 en entornos Linux de alta disponibilidad (SOAP/REST).<br>
                &nbsp;&nbsp;&nbsp;• Automatización con Bash para reducir MTTR y migración de EDIController con clústeres redundantes (100% Uptime).</li>
                <li>3. <b>04/2016 - 06/2017:</b> Banesco Banco Universal C.A. — Analista Operación POS<br>
                &nbsp;&nbsp;&nbsp;• Soporte técnico regional, gestión, sustitución y retiro de dispositivos POS.<br>
                &nbsp;&nbsp;&nbsp;• Atención de requerimientos operacionales para aliados comerciales.</li>
                <li>4. <b>02/2014 - 09/2014:</b> Drivers, System & Parts C.A. — Soporte Técnico L1/L2 & Programador<br>
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
            // Navbar
            nav_runner: "[01] RUNNER",
            nav_skills: "[02] CYBERWARE SKILLS",
            nav_memorias: "[03] ENGRAMS",
            nav_arquitectura: "[04] CHASSIS",
            nav_contacto: "[06] NETLINK",
            
            // Hero
            hero_badge: "BIO-DATA LOADED // UPLINK COMPLETE",
            hero_subtitle: "Senior L3 Application Support Engineer | Linux & Middleware Specialist",
            hero_desc: "Specialized in managing and diagnosing high-availability environments, L3 incident resolution on SOAP/REST architectures, Linux automation via Bash, and operational continuity assurance across banking and telecom platforms.",
            metric_l3: "YEARS L3 SUPPORT",
            metric_uptime: "EDICONTROLLER UPTIME",
            metric_critical: "CRITICAL ENVIRONMENTS",
            metric_english: "TECHNICAL ENGLISH",
            
            // Botones Hero
            btn_contact: "⚡ START TRANSMISSION / CONTACT",
            btn_github: "📄 VIEW GITHUB (MD)",
            btn_cv_eng: "📄 DOWNLOAD CV ENG (PDF)",
            btn_cv_esp: "📄 DOWNLOAD CV ESP (PDF)",
            btn_cli: ">_ OPEN TERMINAL",
            
            // Secciones UI
            block02_title: "[02] NEURAL SKILLS MATRIX",
            tab_all: "ALL NODES",
            tab_sistemas: "LINUX & CORE",
            tab_middleware: "MIDDLEWARE & APIS",
            tab_devops: "DEVOPS & OBSERVABILITY",
            tab_backend: "DEVELOPMENT & DB",
            search_placeholder: "Search technology (e.g. Linux, Bash, Splunk)...",
            block03_title: "MEMORY SEQUENCE (PROFESSIONAL EXPERIENCE)",
            block04_title: "ARCHITECTURAL NODES (KEY PROJECTS)",
            block05_title: "CREDENTIALS AND PROTOCOLS",
            proto_edu: "🎓 ACADEMIC EDUCATION",
            proto_cert: "ORG KEY CERTIFICATIONS",
            proto_lang: "🗣️ LANGUAGES",
            block06_title: "SIGNAL TRANSMISSION & CONTACT",
            contact_whatsapp: "WHATSAPP / MOBILE",
            contact_email: "DIRECT EMAIL",
            contact_linkedin: "LINKEDIN PROFILE",
            contact_github: "GITHUB REPOSITORIES",
            
            // Terminal i18n
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
                <li>1. <b>2024 - Present:</b> Fenrirsoft Digital Agency — Founder & Lead Developer (CEO)<br>
                &nbsp;&nbsp;&nbsp;• Technical direction in web dev, IT consulting, and cloud solutions.<br>
                &nbsp;&nbsp;&nbsp;• Deployments on Cloudflare Pages, GitHub CI/CD pipelines, accessibility audits.</li>
                <li>2. <b>12/2017 - 01/2025:</b> Telecomunicaciones Movilnet C.A. — L3 Support Specialist (Apps & Services)<br>
                &nbsp;&nbsp;&nbsp;• L3 troubleshooting in high-availability Linux environments (SOAP/REST).<br>
                &nbsp;&nbsp;&nbsp;• Bash automation to reduce MTTR and EDIController migration with redundant clusters (100% Uptime).</li>
                <li>3. <b>04/2016 - 06/2017:</b> Banesco Banco Universal C.A. — POS Operations Analyst<br>
                &nbsp;&nbsp;&nbsp;• Regional tech support, management, replacement, and removal of POS terminals.<br>
                &nbsp;&nbsp;&nbsp;• Resolution of operational requirements for commercial partners.</li>
                <li>4. <b>02/2014 - 09/2014:</b> Drivers, System & Parts C.A. — L1/L2 Tech Support & Developer<br>
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
            // Navbar
            nav_runner: "[01] RUNNER",
            nav_skills: "[02] CYBERWARE SKILLS",
            nav_memorias: "[03] ENGRAMS",
            nav_arquitectura: "[04] CHASSIS",
            nav_contacto: "[06] NETLINK",
            
            // Hero
            hero_badge: "DATOS BIOLÓXICOS CARGADOS // ENLACE COMPLETO",
            hero_subtitle: "Engenheiro Senior de Soporte L3 | Especialista en Linux e Middleware",
            hero_desc: "Especializado na xestión e diagnóstico de contornos de alta dispoñibilidade, resolución de incidencias L3 en arquitecturas SOAP/REST, automatización de sistemas Linux mediante Bash e garantía de continuidade operativa en plataformas bancarias e telecomunicacións.",
            metric_l3: "ANOS SOPORTE L3",
            metric_uptime: "UPTIME EDICONTROLLER",
            metric_critical: "CONTORNOS CRÍTICOS",
            metric_english: "INGLÉS TÉCNICO",
            
            // Botones Hero
            btn_contact: "⚡ INICIAR TRANSMISIÓN / CONTACTO",
            btn_github: "📄 VER GITHUB (MD)",
            btn_cv_eng: "📄 DESCARGAR CV ENG (PDF)",
            btn_cv_esp: "📄 DESCARGAR CV ESP (PDF)",
            btn_cli: ">_ ABRIR TERMINAL",
            
            // Secciones UI
            block02_title: "[02] MATRIZ DE HABILIDADES NEURAIS",
            tab_all: "TODOS OS NODOS",
            tab_sistemas: "LINUX & CORE",
            tab_middleware: "MIDDLEWARE & APIS",
            tab_devops: "DEVOPS & OBSERVABILIDADE",
            tab_backend: "DESENVOLVEMENTO & BD",
            search_placeholder: "Buscar tecnoloxía (ex: Linux, Bash, Splunk)...",
            block03_title: "SECUENCIA DE MEMORIAS (EXPERIENCIA PROFESIONAL)",
            block04_title: "NODOS ARQUITECTÓNICOS (PROXECTOS CLAVE)",
            block05_title: "CREDENCIAS E PROTOCOLOS",
            proto_edu: "🎓 FORMACIÓN ACADÉMICA",
            proto_cert: "ORG CERTIFICACIÓNS DESTACADAS",
            proto_lang: "🗣️ IDIOMAS",
            block06_title: "TRANSMISIÓN DE SINAL E CONTACTO",
            contact_whatsapp: "WHATSAPP / MÓBIL",
            contact_email: "CORREO DIRECTO",
            contact_linkedin: "PERFIL LINKEDIN",
            contact_github: "REPOSITORIOS GITHUB",
            
            // Terminal i18n
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
                <li>1. <b>2024 - Presente:</b> Fenrirsoft Digital Agency — Fundador e Lead Developer (CEO)<br>
                &nbsp;&nbsp;&nbsp;• Dirección técnica en desenvolvemento web, consultoría IT e solucións cloud.<br>
                &nbsp;&nbsp;&nbsp;• Despregamentos en Cloudflare Pages, pipelines CI/CD en GitHub, auditorías de accesibilidade.</li>
                <li>2. <b>12/2017 - 01/2025:</b> Telecomunicaciones Movilnet C.A. — Especialista de Soporte L3 (Aplicacións e Servizos)<br>
                &nbsp;&nbsp;&nbsp;• Incidencias L3 en contornos Linux de alta dispoñibilidade (SOAP/REST).<br>
                &nbsp;&nbsp;&nbsp;• Automatización con Bash para reducir MTTR e migración de EDIController con clústeres redundantes (100% Uptime).</li>
                <li>3. <b>04/2016 - 06/2017:</b> Banesco Banco Universal C.A. — Analista Operación POS<br>
                &nbsp;&nbsp;&nbsp;• Soporte técnico rexional, xestión, substitución e retiro de dispositivos POS.<br>
                &nbsp;&nbsp;&nbsp;• Atención de requirimentos operacionais para aliados comerciais.</li>
                <li>4. <b>02/2014 - 09/2014:</b> Drivers, System & Parts C.A. — Soporte Técnico L1/L2 e Programador<br>
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
    // 2. CONMUTADOR DE IDIOMAS (RE-RENDER DOM)
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

        if (langBtn) langBtn.textContent = `[ 🌐 ${langCode} ]`;

        const terminalOutput = document.getElementById('terminal-output');
        if (terminalOutput && (terminalOutput.children.length === 0 || terminalOutput.children.length === 1)) {
            terminalOutput.innerHTML = `<div>${langData.term_welcome.replace(/\n/g, '<br>')}</div>`;
        }
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLangIndex = (currentLangIndex + 1) % languages.length;
            setLanguage(languages[currentLangIndex]);
            triggerAudio(1000, 'sine', 0.03);
        });
    }

    // ==========================================
    // 3. APERTURA Y CONTROL DE TERMINAL BASH
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
    // 4. AUDIO SFX, CAMBIO DE TEMA Y CANVAS
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

    // Feedback sonoro
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

// Canvas Background
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
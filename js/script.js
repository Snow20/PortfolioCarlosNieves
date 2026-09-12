document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación suave
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Control de SFX y Audio
    let audioActive = true;
    const audioBtn = document.getElementById('audio-btn');
    const themeBtn = document.getElementById('theme-btn');
    const cliBtn = document.getElementById('cli-btn');
    const openCliBtn = document.getElementById('open-cli');

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
        } catch (error) {
            // Audio bloqueado
        }
    }

    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            audioActive = !audioActive;
            audioBtn.textContent = audioActive ? '[ 🔊 SFX: ON ]' : '[ 🔇 SFX: OFF ]';
            triggerAudio(audioActive ? 1200 : 300, 'square', 0.05);
        });
    }

    // Cambios de tema
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            triggerAudio(600, 'triangle', 0.04);
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            themeBtn.textContent = isLight ? '[ ☀️ ANIMUS WHITE ]' : '[ 🌙 ARASAKA DARK ]';

            const flash = document.createElement('div');
            flash.className = 'theme-switch-flash';
            document.body.appendChild(flash);

            setTimeout(() => {
                flash.remove();
            }, 450);
        });
    }

    // 3. Ejecución de Terminal
    function executeTerminal() {
        triggerAudio(500, 'sawtooth', 0.08);
        alert(
            "ANIMUS SYSTEM TERMINAL v2.0\n" +
            "------------------------------------\n" +
            "OPERATOR: CARLOS NIEVES\n" +
            "ROLE: Senior L3 Application Support Engineer\n" +
            "STACK: Linux / Bash / SOAP & REST APIs / Splunk\n" +
            "LOCATION: A Coruña, Galicia\n" +
            "STATUS: OPERATIONAL"
        );
    }

    if (cliBtn) cliBtn.addEventListener('click', executeTerminal);
    if (openCliBtn) openCliBtn.addEventListener('click', executeTerminal);

    // 4. Lógica de Filtro y Búsqueda para las Habilidades
    const tabBtns = document.querySelectorAll('.tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    const searchInput = document.getElementById('skills-search-input');

    let currentCategory = 'all';

    function filterSkills() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

        skillCards.forEach(card => {
            const categoryMatch = (currentCategory === 'all') || (card.dataset.category === currentCategory);
            const textMatch = card.textContent.toLowerCase().includes(query);

            if (categoryMatch && textMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterSkills();
            triggerAudio(1000, 'sine', 0.02);
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterSkills);
    }

    // Feedback sonoro general
    const interactables = document.querySelectorAll('.btn, .nav-center a, .nav-btn, .tab-btn');
    interactables.forEach(item => {
        item.addEventListener('mouseenter', () => triggerAudio(1400, 'sine', 0.015));
        item.addEventListener('click', () => triggerAudio(900, 'square', 0.03));
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
// Lógica de filtrado y búsqueda en tiempo real para Matriz de Habilidades
const tabs = document.querySelectorAll('.cyber-tab');
const cards = document.querySelectorAll('.cyber-skill-card');
const searchInput = document.getElementById('cyber-search-input');

let activeCategory = 'all';

function updateSkillsFilter() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    cards.forEach(card => {
        const categoryMatches = (activeCategory === 'all') || (card.dataset.category === activeCategory);
        const textMatches = card.textContent.toLowerCase().includes(query);

        if (categoryMatches && textMatches) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
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

if (searchInput) {
    searchInput.addEventListener('input', updateSkillsFilter);
}
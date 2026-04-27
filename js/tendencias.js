
let currentChart = null;
let currentRadarChart = null;
let currentLang = 'es';

const translations = {
    es: {
        "nav-numeralia": "Numeralia", "nav-investigacion": "Investigación", "nav-tendencias": "Tendencias", "nav-btn-adquirir": "Adquirir",
        "ticker-1": "PISA 2022: Crisis en competencias matemáticas básicas", "ticker-2": "Gasto público educativo cayó al 2.96% del PIB", "ticker-3": "4.3 millones de menores en rezago educativo",
        "hero-title": "Del Gis al Clic, la educación en una nueva encrucijada",
        "hero-quote": "Del Gis al Clic es un viaje del 'deber ser' al 'ser', de la teoría a la realidad del aula. Es una invitación a dialogar, a comprender y a participar en la construcción de la educación que definirá el futuro de México.",
        "radar-desc": "Este explorador permite visualizar la brecha entre el 'deber ser' normativo y la realidad operativa de cada entidad federativa mediante un análisis multidimensional.",
        "sum-esc": "Escolaridad", "sum-ana": "Analfabetismo", "sum-rp": "Reprob. Pri", "sum-rs": "Reprob. Sec",
        "chart-source": "Fuente: SEP. Serie Histórica.", "hero-btn-adquirir": "Adquirir Ejemplar",
        "quote-mid": "La educación competitiva tiene como base irrenunciable el dominio de las ciencias duras y el pensamiento lógico; es el andamiaje sobre el cual se construye la soberanía intelectual.",
        "tendencias-title": "Tendencias Nacionales", "btn-abandono": "Abandono", "btn-cobertura": "Cobertura", "btn-eficiencia": "Eficiencia",
        "investigacion-title": "Investigación", "author-desc": "Especialista en modelos educativos y gestión pública.",
        "dim-1-title": "La Trampa de los Extremos", "dim-1-body": "La historia de la política educativa es un péndulo entre el 'Estado Pedagogo' y el 'Estado Gerente'.",
        "dim-2-title": "El Laberinto Docente", "dim-2-body": "Se le asigna al maestro una responsabilidad monumental mientras se le retiran las herramientas.",
        "dim-3-title": "La Síntesis del Futuro", "dim-3-body": "Romper el péndulo significa rescatar el rigor del 'gis' y el potencial del 'clic'.",
        "modal-title": "Adquirir la obra", "opt-buy-title": "Compra Directa", "opt-buy-text": "Adquiera su ejemplar físico con envío seguro a todo México.",
        "opt-contact-title": "Vínculo Académico", "opt-contact-text": "Para presentaciones, foros o pedidos institucionales.", "opt-contact-btn": "Contactar",
        "form-name": "Nombre completo*", "form-email": "Correo electrónico*", "form-subject": "Motivo", "form-btn": "Enviar solicitud", "modal-close": "Seguir explorando",
        "impact-label": "Impacto en la red:", "impact-unit": "Consultas académicas",
        "radar-labels": ['Analfabetismo (%)', 'Escolaridad (Años)', 'Reprob. Primaria (%)', 'Reprob. Secundaria (%)'],
        "chart-titles": { "Abandono": "Evolución del Abandono Escolar (%)", "Cobertura": "Tasa de Cobertura Nacional (%)", "Eficiencia": "Eficiencia Terminal por Nivel (%)" },
        "form-options": ["Información sobre ejemplar", "Presentaciones", "Vinculación Institucional", "Comentarios"],
        "form-placeholder": "Escribe aquí tu mensaje..."
    },
    en: {
        "nav-numeralia": "Data", "nav-investigacion": "Research", "nav-tendencias": "Trends", "nav-btn-adquirir": "Purchase",
        "ticker-1": "PISA 2022: Crisis in basic mathematical competencies", "ticker-2": "Public education spending dropped to 2.96% of GDP", "ticker-3": "4.3 million minors in severe educational lag",
        "hero-title": "From Chalk to Click, Education at a New Crossroads",
        "hero-quote": "From Chalk to Click is a journey from 'what should be' to 'what is', from theory to classroom reality. It is an invitation to dialogue, understand, and participate in building the education that will define Mexico's future.",
        "radar-desc": "This explorer visualizes the gap between normative 'ideals' and the operational reality of each state through multidimensional analysis.",
        "sum-esc": "Schooling", "sum-ana": "Illiteracy", "sum-rp": "Elem. Failure", "sum-rs": "Sec. Failure",
        "chart-source": "Source: SEP. Historical Series.", "hero-btn-adquirir": "Get Copy",
        "quote-mid": "Competitive education is irrevocably based on the mastery of hard sciences and logical thinking; it is the scaffolding upon which intellectual sovereignty is built.",
        "tendencias-title": "National Trends", "btn-abandono": "Dropout", "btn-cobertura": "Coverage", "btn-eficiencia": "Efficiency",
        "investigacion-title": "Research", "author-desc": "Specialist in educational models and public management.",
        "dim-1-title": "The Trap of Extremes", "dim-1-body": "The history of educational policy is a pendulum between the 'Pedagogue State' and the 'Manager State'.",
        "dim-2-title": "The Teacher's Labyrinth", "dim-2-body": "Teachers are assigned monumental responsibilities while their tools are being removed.",
        "dim-3-title": "Future Synthesis", "dim-3-body": "Breaking the pendulum means rescuing the rigor of 'chalk' and the potential of 'click'.",
        "modal-title": "Acquire the Work", "opt-buy-title": "Direct Purchase", "opt-buy-text": "Purchase your physical copy with secure shipping across Mexico.",
        "opt-contact-title": "Academic Link", "opt-contact-text": "For presentations, forums, or institutional orders.", "opt-contact-btn": "Contact",
        "form-name": "Full Name*", "form-email": "Email*", "form-subject": "Reason", "form-btn": "Send Request", "modal-close": "Keep exploring",
        "impact-label": "Network Impact:", "impact-unit": "Academic inquiries",
        "radar-labels": ['Illiteracy (%)', 'Schooling (Years)', 'Elem. Failure (%)', 'Sec. Failure (%)'],
        "chart-titles": { "Abandono": "Student Dropout Evolution (%)", "Cobertura": "National Coverage Rate (%)", "Eficiencia": "Graduation Efficiency by Level (%)" },
        "form-options": ["Information about copy", "Presentations", "Institutional Link", "Comments"],
        "form-placeholder": "Write your message here..."
    }
};

const stateProfiles = {
    "Aguascalientes": { analf: 1.8, escolaridad: 10.7, reprob_pri: 0.3, reprob_sec: 3.8 },
    "Baja California": { analf: 1.7, escolaridad: 10.5, reprob_pri: 0.9, reprob_sec: 1.8 },
    "Baja California Sur": { analf: 2.1, escolaridad: 10.6, reprob_pri: 1.1, reprob_sec: 0.0 },
    "Campeche": { analf: 5.3, escolaridad: 9.9, reprob_pri: 0.3, reprob_sec: 5.1 },
    "Coahuila": { analf: 1.3, escolaridad: 10.7, reprob_pri: 0.4, reprob_sec: 1.9 },
    "Colima": { analf: 3.0, escolaridad: 10.4, reprob_pri: 0.7, reprob_sec: 1.7 },
    "Chiapas": { analf: 11.8, escolaridad: 8.1, reprob_pri: 0.1, reprob_sec: 0.2 },
    "Chihuahua": { analf: 2.3, escolaridad: 10.3, reprob_pri: 0.7, reprob_sec: 0.0 },
    "Ciudad de México": { analf: 1.3, escolaridad: 11.7, reprob_pri: 4.3, reprob_sec: 0.3 },
    "Durango": { analf: 2.1, escolaridad: 10.1, reprob_pri: 0.1, reprob_sec: 2.0 },
    "Guanajuato": { analf: 4.7, escolaridad: 9.4, reprob_pri: 0.1, reprob_sec: 0.2 },
    "Guerrero": { analf: 10.9, escolaridad: 8.7, reprob_pri: 0.3, reprob_sec: 0.5 },
    "Hidalgo": { analf: 5.7, escolaridad: 9.8, reprob_pri: 0.0, reprob_sec: 1.0 },
    "Jalisco": { analf: 2.6, escolaridad: 10.3, reprob_pri: 0.1, reprob_sec: 0.1 },
    "México": { analf: 2.6, escolaridad: 10.4, reprob_pri: 0.0, reprob_sec: 0.1 },
    "Michoacán": { analf: 6.2, escolaridad: 9.0, reprob_pri: 1.6, reprob_sec: 1.8 },
    "Morelos": { analf: 4.0, escolaridad: 10.2, reprob_pri: 0.0, reprob_sec: 0.0 },
    "Nayarit": { analf: 3.9, escolaridad: 10.1, reprob_pri: 0.3, reprob_sec: 0.0 },
    "Nuevo León": { analf: 1.3, escolaridad: 11.0, reprob_pri: 0.3, reprob_sec: 1.5 },
    "Oaxaca": { analf: 10.3, escolaridad: 8.5, reprob_pri: 1.4, reprob_sec: 0.2 },
    "Puebla": { analf: 6.1, escolaridad: 9.6, reprob_pri: 0.0, reprob_sec: 0.3 },
    "Querétaro": { analf: 3.0, escolaridad: 11.0, reprob_pri: 0.1, reprob_sec: 0.4 },
    "Quintana Roo": { analf: 2.7, escolaridad: 10.6, reprob_pri: 1.0, reprob_sec: 0.0 },
    "San Luis Potosí": { analf: 4.1, escolaridad: 10.1, reprob_pri: 0.1, reprob_sec: 1.0 },
    "Sinaloa": { analf: 3.1, escolaridad: 10.6, reprob_pri: 0.9, reprob_sec: 1.4 },
    "Sonora": { analf: 1.5, escolaridad: 10.6, reprob_pri: 0.3, reprob_sec: 1.2 },
    "Tabasco": { analf: 4.3, escolaridad: 9.9, reprob_pri: 0.0, reprob_sec: 0.0 },
    "Tamaulipas": { analf: 2.3, escolaridad: 10.4, reprob_pri: 0.1, reprob_sec: 2.1 },
    "Tlaxcala": { analf: 3.0, escolaridad: 10.2, reprob_pri: 0.2, reprob_sec: 0.0 },
    "Veracruz": { analf: 7.7, escolaridad: 9.1, reprob_pri: 0.8, reprob_sec: 0.1 },
    "Yucatán": { analf: 5.4, escolaridad: 10.1, reprob_pri: 6.6, reprob_sec: 0.0 },
    "Zacatecas": { analf: 3.2, escolaridad: 9.6, reprob_pri: 0.1, reprob_sec: 0.0 }
};

const educationData = {
    "Abandono": { labels: ["1990", "1995", "2000", "2005", "2010", "2015", "2020", "2023"], datasets: [{ label: "Primaria", data: [4.6, 3.0, 1.9, 1.3, 0.7, 0.7, 0.4, 0.2], borderColor: "#c5a059", borderWidth: 4, tension: 0.4 }, { label: "Secundaria", data: [8.8, 8.7, 8.2, 7.7, 5.5, 4.4, 2.9, 2.7], borderColor: "#1a3a5a", borderWidth: 4, tension: 0.4 }, { label: "Media Superior", data: [18.7, 19.3, 17.5, 16.4, 14.9, 15.4, 11.6, 8.6], borderColor: "#a33b3b", borderWidth: 5, tension: 0.4 }] },
    "Cobertura": { labels: ["1990", "1995", "2000", "2005", "2010", "2015", "2020", "2023"], datasets: [{ label: "Preescolar", data: [40.2, 44.9, 49.8, 66.0, 68.6, 72.0, 65.9, 66.9], borderColor: "#c5a059", borderWidth: 4 }, { label: "Secundaria", data: [66.4, 70.2, 81.6, 89.2, 91.6, 102.0, 95.7, 93.5], borderColor: "#1a3a5a", borderWidth: 4 }, { label: "Media Superior", data: [35.0, 38.2, 47.0, 56.6, 62.5, 75.0, 74.6, 75.1], borderColor: "#a33b3b", borderWidth: 4 }] },
    "Eficiencia": { labels: ["1990", "1995", "2000", "2005", "2010", "2015", "2020", "2023"], datasets: [{ label: "Primaria", data: [70.1, 80.0, 84.7, 91.7, 94.9, 98.2, 96.0, 97.2], borderColor: "#c5a059", borderWidth: 4 }, { label: "Secundaria", data: [73.9, 75.8, 75.1, 78.2, 83.2, 87.7, 91.0, 90.9], borderColor: "#1a3a5a", borderWidth: 4 }, { label: "Media Superior", data: [55.2, 55.5, 55.6, 58.2, 62.2, 65.6, 64.9, 75.6], borderColor: "#a33b3b", borderWidth: 4 }] }
};

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    // Traducir textos con data-i18n
    Object.keys(translations[lang]).forEach(key => {
        const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
        elements.forEach(el => {
            if (key === "modal-close") el.innerText = translations[lang][key];
            else el.innerText = translations[lang][key];
        });
    });

    // Traducir Formulario
    const subjectSelect = document.getElementById('formSubject');
    subjectSelect.innerHTML = '';
    translations[lang]["form-options"].forEach(opt => {
        const o = document.createElement('option');
        o.value = opt; o.innerText = opt;
        subjectSelect.appendChild(o);
    });
    document.getElementById('formMessage').placeholder = translations[lang]["form-placeholder"];

    // Actualizar Gráficas
    updateStateProfile(document.getElementById('stateSelector').value);
    const activeType = document.querySelector('.selector-btn.active').id.replace('btn', '');
    updateChart(activeType);
}

function updateStateProfile(stateName) {
    const profile = stateProfiles[stateName];
    if (!profile) return;
    const lang = translations[currentLang];
    
    document.getElementById('sumEsc').innerText = profile.escolaridad + (currentLang === 'es' ? ' años' : ' yrs');
    document.getElementById('sumAna').innerText = profile.analf + '%';
    document.getElementById('sumRP').innerText = profile.reprob_pri + '%';
    document.getElementById('sumRS').innerText = profile.reprob_sec + '%';

    if (currentRadarChart) { currentRadarChart.destroy(); }
    const ctx = document.getElementById('radarChart').getContext('2d');
    currentRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: lang["radar-labels"],
            datasets: [{
                label: stateName, data: [profile.analf, profile.escolaridad, profile.reprob_pri, profile.reprob_sec],
                fill: true, backgroundColor: 'rgba(26, 58, 90, 0.05)', borderColor: '#1a3a5a', borderWidth: 2, pointBackgroundColor: '#c5a059'
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { r: { angleLines: { color: 'rgba(0,0,0,0.05)' }, grid: { color: 'rgba(0,0,0,0.05)' }, pointLabels: { color: '#1a3a5a', font: { family: "'EB Garamond', serif", size: 14, weight: 'bold' } }, ticks: { display: false, max: 15 } } },
            plugins: { legend: { display: false } }
        }
    });
}

function updateChart(type) {
    const data = JSON.parse(JSON.stringify(educationData[type]));
    const lang = translations[currentLang];
    
    document.getElementById('currentChartTitle').innerText = lang["chart-titles"][type];

    if (currentChart) { currentChart.destroy(); }
    const ctx = document.getElementById('mainChart').getContext('2d');
    currentChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#1a3a5a', font: { family: "'EB Garamond', serif", size: 14 }, padding: 20 } },
                tooltip: { backgroundColor: '#1a3a5a' }
            },
            scales: {
                y: { grid: { color: '#f5f5f5' }, ticks: { color: '#999', callback: v => v + '%' } },
                x: { grid: { display: false }, ticks: { color: '#1a3a5a', font: { weight: 'bold' } } }
            }
        }
    });
}

function initCounter() {
    const baseCount = 64; 
    const multiplier = 12;
    let currentDisplay = localStorage.getItem('researchVisitCount');
    if (!currentDisplay) currentDisplay = baseCount;
    else currentDisplay = parseInt(currentDisplay) + multiplier;
    localStorage.setItem('researchVisitCount', currentDisplay);
    document.getElementById('visitorCount').innerText = currentDisplay.toLocaleString();
}

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('stateSelector');
    selector.innerHTML = '';
    Object.keys(stateProfiles).sort().forEach(state => {
        const opt = document.createElement('option'); opt.value = state; opt.innerHTML = state; selector.appendChild(opt);
    });
    initCounter();
    changeLanguage('es');
});

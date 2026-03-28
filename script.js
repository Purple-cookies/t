// Данные мероприятий
const eventsData = [
    { 
        name: "Муниципальный этап Всероссийской командной инженерной олимпиады по 3D-технологиям", 
        month: "декабрь", 
        season: "Зима", 
        category: "3d", 
        categoryName: "3D-технологии", 
        description: "Муниципальный этап Всероссийской командной инженерной олимпиады по 3D-технологиям — это масштабное соревнование для школьников, увлекающихся 3D-моделированием и прототипированием. Участники работают в командах, решая реальные инженерные задачи. Возраст: 10-17 лет. Формат: командный."
    },
    { 
        name: "Региональный отборочный этап олимпиады «Инженеры будущего: 3D-технологии»", 
        month: "февраль", 
        season: "Зима", 
        category: "3d", 
        categoryName: "3D-технологии", 
        description: "Региональный отборочный этап олимпиады «Инженеры будущего: 3D-технологии» — престижное соревнование для лучших команд. Участники демонстрируют навыки 3D-проектирования. Возраст: 12-18 лет."
    },
    { 
        name: "Муниципальный этап конкурса «Молодой изобретатель»", 
        month: "сентябрь", 
        season: "Осень", 
        category: "innovation", 
        categoryName: "Инновации", 
        description: "Конкурс для юных изобретателей. Участники представляют свои проекты перед экспертным жюри. Номинации: техническое изобретение, ИТ-проект, экологическая разработка. Возраст: 7-18 лет."
    },
    { 
        name: "Открытые соревнования по радиоуправляемым моделям", 
        month: "сентябрь", 
        season: "Осень", 
        category: "robotics", 
        categoryName: "Робототехника", 
        description: "Соревнования по управлению радиоуправляемыми машинами, квадрокоптерами и авиамоделями. Гонки, слалом, фристайл. Возраст: 8-18 лет."
    },
    { 
        name: "«Наноград-Сургут»", 
        month: "осенние каникулы", 
        season: "Осень", 
        category: "innovation", 
        categoryName: "Инновации", 
        description: "Образовательная интенсив-программа: лекции, мастер-классы, проектная работа в сфере нанотехнологий. Возраст: 14-17 лет."
    },
    { 
        name: "Неделя высоких технологий и технопредпринимательства", 
        month: "март", 
        season: "Весна", 
        category: "it", 
        categoryName: "IT-направления", 
        description: "Фестиваль с хакатонами, лекциями от IT-лидеров, мастер-классами. Вход свободный."
    },
    { 
        name: "Чемпионат «Профессионалы» (категория «Юниоры»)", 
        month: "октябрь", 
        season: "Осень", 
        category: "robotics", 
        categoryName: "Робототехника", 
        description: "Соревнования по робототехнике, прототипированию, электронике. Возраст: 12-16 лет."
    },
    { 
        name: "Муниципальный этап соревнований по робототехнике", 
        month: "февраль", 
        season: "Зима", 
        category: "robotics", 
        categoryName: "Робототехника", 
        description: "Робототехнические поединки, кегельринг, сумо. Возраст: 7-17 лет."
    },
    { 
        name: "Соревнования по моделям метательных планеров «ТехноАвиа»", 
        month: "февраль", 
        season: "Зима", 
        category: "innovation", 
        categoryName: "Инновации", 
        description: "Конструирование и запуск планеров. Соревнования на дальность и точность. Возраст: 10-16 лет."
    },
    { 
        name: "Турнир по квантошахматам", 
        month: "декабрь", 
        season: "Зима", 
        category: "it", 
        categoryName: "IT-направления", 
        description: "Интеллектуальная игра, объединяющая шахматы и цифровые технологии. Возраст: 8-18 лет."
    },
    { 
        name: "IT-хакатон", 
        month: "апрель", 
        season: "Весна", 
        category: "it", 
        categoryName: "IT-направления", 
        description: "48-часовой марафон разработки. Веб-разработка, мобильные приложения, игры. Возраст: 12-18 лет."
    },
    { 
        name: "Открытый образовательный Хакатон «Про100Дизайн»",month: "март", 
        season: "Весна", 
        category: "3d", 
        categoryName: "3D-технологии", 
        description: "Соревнование для дизайнеров и 3D-моделлеров. UI/UX, 3D-моделирование, графический дизайн. Возраст: 12-18 лет."
    },
    { 
        name: "Медиа-хакатон", 
        month: "май", 
        season: "Весна", 
        category: "it", 
        categoryName: "IT-направления", 
        description: "Создание видеороликов, фоторепортажей, контента о технологиях. Возраст: 10-17 лет."
    }
];

// Сортировка месяцев
const monthOrder = {
    "сентябрь": 1, 
    "октябрь": 2, 
    "осенние каникулы": 2.5, 
    "ноябрь": 3,
    "декабрь": 4, 
    "январь": 5, 
    "февраль": 6, 
    "март": 7,
    "апрель": 8, 
    "май": 9
};

const sortedEvents = [...eventsData].sort((a, b) => {
    const orderA = monthOrder[a.month.toLowerCase()] || 99;
    const orderB = monthOrder[b.month.toLowerCase()] || 99;
    return orderA - orderB;
});

let currentFilter = "all";
let currentCategory = "all";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let archive = JSON.parse(localStorage.getItem('archive')) || [];

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
}

function saveArchive() {
    localStorage.setItem('archive', JSON.stringify(archive));
    updateArchiveBadge();
}

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesCount');
    if (badge) badge.textContent = favorites.length;
}

function updateArchiveBadge() {
    const badge = document.getElementById('archiveCount');
    if (badge) badge.textContent = archive.length;
}

function isFavorite(eventName) {
    return favorites.includes(eventName);
}

function isArchived(eventName) {
    return archive.includes(eventName);
}

function showToast(message) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function toggleFavorite(eventName) {
    const index = favorites.indexOf(eventName);
    if (index === -1) {
        favorites.push(eventName);
        showToast('❤️ Добавлено в избранное');
    } else {
        favorites.splice(index, 1);
        showToast('🤍 Удалено из избранного');
    }
    saveFavorites();
    renderEvents();
    renderFavorites();
}

function toggleArchive(eventName) {
    const index = archive.indexOf(eventName);
    if (index === -1) {
        archive.push(eventName);
        showToast('🗑️ Добавлено в архив');
    } else {
        archive.splice(index, 1);
        showToast('📦 Удалено из архива');
    }
    saveArchive();
    renderEvents();
    renderArchive();
}

function openModal(event) {
    const modal = document.getElementById("eventModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalMonth = document.getElementById("modalMonth");
    const modalSeason = document.getElementById("modalSeason");
    const modalCategory = document.getElementById("modalCategory");
    
    if (!modal || !event) return;
    
    modalTitle.textContent = event.name;
    modalDescription.textContent = event.description;
    modalMonth.innerHTML = '<i class="fas fa-calendar-alt"></i> ' + event.month.charAt(0).toUpperCase() + event.month.slice(1);
    
    let seasonEmoji = "";
    if (event.season === "Зима") seasonEmoji = "❄️";
    else if (event.season === "Весна") seasonEmoji = "🌸";
    else if (event.season === "Осень") seasonEmoji = "🍂";
    modalSeason.innerHTML = seasonEmoji + " " + event.season;
    
    let categoryEmoji = "";
    if (event.category === "robotics") categoryEmoji = "🤖";else if (event.category === "3d") categoryEmoji = "🎨";
    else if (event.category === "it") categoryEmoji = "💻";
    else if (event.category === "innovation") categoryEmoji = "💡";
    modalCategory.innerHTML = categoryEmoji + " " + event.categoryName;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModalWindow() {
    const modal = document.getElementById("eventModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function renderEvents() {
    const eventsGrid = document.getElementById("eventsGrid");
    const eventsCountSpan = document.getElementById("eventsCount");
    if (!eventsGrid) return;
    
    let filtered = sortedEvents.filter(event => {
        const seasonMatch = currentFilter === "all" || event.season === currentFilter;
        const categoryMatch = currentCategory === "all" || event.category === currentCategory;
        const notArchived = !isArchived(event.name);
        return seasonMatch && categoryMatch && notArchived;
    });
    
    if (eventsCountSpan) eventsCountSpan.textContent = filtered.length;
    
    if (filtered.length === 0) {
        eventsGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:2rem;">
            <i class="fas fa-calendar-alt" style="font-size:2.5rem; opacity:0.5;"></i>
            <p style="margin-top:0.8rem;">Мероприятий не найдено</p>
        </div>`;
        return;
    }
    
    eventsGrid.innerHTML = filtered.map(event => {
        let seasonClass = "";
        if (event.season === "Зима") seasonClass = "season-winter";
        else if (event.season === "Весна") seasonClass = "season-spring";
        else if (event.season === "Осень") seasonClass = "season-autumn";
        
        let monthIcon = "fa-calendar-alt";
        if (event.month.includes("декабрь") || event.month.includes("февраль")) monthIcon = "fa-snowflake";
        else if (event.month.includes("март") || event.month.includes("апрель")) monthIcon = "fa-seedling";
        else monthIcon = "fa-leaf";
        
        let categoryEmoji = "";
        if (event.category === "robotics") categoryEmoji = "🤖";
        else if (event.category === "3d") categoryEmoji = "🎨";
        else if (event.category === "it") categoryEmoji = "💻";
        else if (event.category === "innovation") categoryEmoji = "💡";
        
        const shortDesc = event.description.length > 100 ? event.description.substring(0, 100) + "..." : event.description;
        const isFav = isFavorite(event.name);
        
        return `
            <div class="event-card" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                <button class="archive-btn" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                    🗑️
                </button>
                <button class="favorite-btn" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                    ${isFav ? '❤️' : '🤍'}
                </button>
                <div class="event-badge">${event.season}</div>
                <div class="event-month">
                    <i class="fas ${monthIcon}"></i> ${event.month.charAt(0).toUpperCase() + event.month.slice(1)}
                    <span class="event-category">${categoryEmoji} ${event.categoryName}</span>
                </div>
                <h3 class="event-title">${event.name}</h3>
                <p class="event-short-desc">${shortDesc}</p>
                <div class="event-footer">
                    <span class="event-season ${seasonClass}">🏆 ${event.season}</span>
                </div>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll('#eventsGrid .favorite-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const eventName = btn.getAttribute('data-event-name');
            toggleFavorite(eventName);
        };
    });document.querySelectorAll('#eventsGrid .archive-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const eventName = btn.getAttribute('data-event-name');
            toggleArchive(eventName);
        };
    });
    
    document.querySelectorAll('#eventsGrid .event-card').forEach(card => {
        card.onclick = (e) => {
            if (e.target.classList.contains('favorite-btn') || e.target.closest('.favorite-btn')) return;
            if (e.target.classList.contains('archive-btn') || e.target.closest('.archive-btn')) return;
            const eventName = card.getAttribute('data-event-name');
            const event = filtered.find(e => e.name === eventName);
            if (event) openModal(event);
        };
    });
}

function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const emptyFavorites = document.getElementById('emptyFavorites');
    if (!favoritesGrid) return;
    
    const favoriteEvents = sortedEvents.filter(event => favorites.includes(event.name));
    
    if (favoriteEvents.length === 0) {
        if (emptyFavorites) emptyFavorites.style.display = 'block';
        favoritesGrid.innerHTML = '';
        return;
    }
    
    if (emptyFavorites) emptyFavorites.style.display = 'none';
    
    favoritesGrid.innerHTML = favoriteEvents.map(event => {
        let seasonClass = "";
        if (event.season === "Зима") seasonClass = "season-winter";
        else if (event.season === "Весна") seasonClass = "season-spring";
        else if (event.season === "Осень") seasonClass = "season-autumn";
        
        let monthIcon = "fa-calendar-alt";
        if (event.month.includes("декабрь") || event.month.includes("февраль")) monthIcon = "fa-snowflake";
        else if (event.month.includes("март") || event.month.includes("апрель")) monthIcon = "fa-seedling";
        else monthIcon = "fa-leaf";
        
        let categoryEmoji = "";
        if (event.category === "robotics") categoryEmoji = "🤖";
        else if (event.category === "3d") categoryEmoji = "🎨";
        else if (event.category === "it") categoryEmoji = "💻";
        else if (event.category === "innovation") categoryEmoji = "💡";
        
        const shortDesc = event.description.length > 100 ? event.description.substring(0, 100) + "..." : event.description;
        
        return `
            <div class="event-card" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                <button class="favorite-btn" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                    ❤️
                </button>
                <div class="event-badge">${event.season}</div>
                <div class="event-month">
                    <i class="fas ${monthIcon}"></i> ${event.month.charAt(0).toUpperCase() + event.month.slice(1)}
                    <span class="event-category">${categoryEmoji} ${event.categoryName}</span>
                </div>
                <h3 class="event-title">${event.name}</h3>
                <p class="event-short-desc">${shortDesc}</p>
                <div class="event-footer">
                    <span class="event-season ${seasonClass}">🏆 ${event.season}</span>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('#favoritesGrid .favorite-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const eventName = btn.getAttribute('data-event-name');
            toggleFavorite(eventName);
        };
    });
    
    document.querySelectorAll('#favoritesGrid .event-card').forEach(card => {
        card.onclick = (e) => {
            if (e.target.classList.contains('favorite-btn') || e.target.closest('.favorite-btn')) return;
            const eventName = card.getAttribute('data-event-name');
            const event = favoriteEvents.find(e => e.name === eventName);
            if (event) openModal(event);
        };
    });
}function renderArchive() {
    const archiveGrid = document.getElementById('archiveGrid');
    const emptyArchive = document.getElementById('emptyArchive');
    if (!archiveGrid) return;
    
    const archivedEvents = sortedEvents.filter(event => archive.includes(event.name));
    
    if (archivedEvents.length === 0) {
        if (emptyArchive) emptyArchive.style.display = 'block';
        archiveGrid.innerHTML = '';
        return;
    }
    
    if (emptyArchive) emptyArchive.style.display = 'none';
    
    archiveGrid.innerHTML = archivedEvents.map(event => {
        let seasonClass = "";
        if (event.season === "Зима") seasonClass = "season-winter";
        else if (event.season === "Весна") seasonClass = "season-spring";
        else if (event.season === "Осень") seasonClass = "season-autumn";
        
        let monthIcon = "fa-calendar-alt";
        if (event.month.includes("декабрь") || event.month.includes("февраль")) monthIcon = "fa-snowflake";
        else if (event.month.includes("март") || event.month.includes("апрель")) monthIcon = "fa-seedling";
        else monthIcon = "fa-leaf";
        
        let categoryEmoji = "";
        if (event.category === "robotics") categoryEmoji = "🤖";
        else if (event.category === "3d") categoryEmoji = "🎨";
        else if (event.category === "it") categoryEmoji = "💻";
        else if (event.category === "innovation") categoryEmoji = "💡";
        
        const shortDesc = event.description.length > 100 ? event.description.substring(0, 100) + "..." : event.description;
        
        return `
            <div class="event-card" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                <button class="archive-btn" data-event-name="${event.name.replace(/[&<>]/g, '')}">
                    🗑️
                </button>
                <div class="event-badge">${event.season}</div>
                <div class="event-month">
                    <i class="fas ${monthIcon}"></i> ${event.month.charAt(0).toUpperCase() + event.month.slice(1)}
                    <span class="event-category">${categoryEmoji} ${event.categoryName}</span>
                </div>
                <h3 class="event-title">${event.name}</h3>
                <p class="event-short-desc">${shortDesc}</p>
                <div class="event-footer">
                    <span class="event-season ${seasonClass}">🏆 ${event.season}</span>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('#archiveGrid .archive-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const eventName = btn.getAttribute('data-event-name');
            toggleArchive(eventName);
        };
    });
    
    document.querySelectorAll('#archiveGrid .event-card').forEach(card => {
        card.onclick = (e) => {
            if (e.target.classList.contains('archive-btn') || e.target.closest('.archive-btn')) return;
            const eventName = card.getAttribute('data-event-name');
            const event = archivedEvents.find(e => e.name === eventName);
            if (event) openModal(event);
        };
    });
}

function goToEventsWithCategory(category) {
    const aboutSection = document.getElementById("aboutSection");
    const benefitsSection = document.getElementById("benefitsSection");
    const eventsSection = document.getElementById("eventsSection");
    const teamSection = document.getElementById("teamSection");
    const favoritesSection = document.getElementById("favoritesSection");
    const archiveSection = document.getElementById("archiveSection");
    const navTabs = document.querySelectorAll(".nav-tab");
    
    navTabs.forEach(tab => {
        tab.classList.remove("active");
        if (tab.getAttribute("data-tab") === "events") tab.classList.add("active");
    });
    
    aboutSection.classList.remove("active");
    benefitsSection.classList.remove("active");eventsSection.classList.add("active");
    teamSection.classList.remove("active");
    favoritesSection.classList.remove("active");
    archiveSection.classList.remove("active");
    
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-category") === category) btn.classList.add("active");
    });
    currentCategory = category;
    
    currentFilter = "all";
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-filter") === "all") btn.classList.add("active");
    });
    renderEvents();
}

function switchTab(tabId) {
    const aboutSection = document.getElementById("aboutSection");
    const benefitsSection = document.getElementById("benefitsSection");
    const eventsSection = document.getElementById("eventsSection");
    const favoritesSection = document.getElementById("favoritesSection");
    const archiveSection = document.getElementById("archiveSection");
    const teamSection = document.getElementById("teamSection");
    const navTabs = document.querySelectorAll(".nav-tab");
    
    navTabs.forEach(tab => {
        tab.classList.remove("active");
        if (tab.getAttribute("data-tab") === tabId) tab.classList.add("active");
    });
    
    aboutSection.classList.remove("active");
    benefitsSection.classList.remove("active");
    eventsSection.classList.remove("active");
    favoritesSection.classList.remove("active");
    archiveSection.classList.remove("active");
    teamSection.classList.remove("active");
    
    if (tabId === "about") aboutSection.classList.add("active");
    else if (tabId === "benefits") benefitsSection.classList.add("active");
    else if (tabId === "events") {
        eventsSection.classList.add("active");
        renderEvents();
    } else if (tabId === "favorites") {
        favoritesSection.classList.add("active");
        renderFavorites();
    } else if (tabId === "archive") {
        archiveSection.classList.add("active");
        renderArchive();
    } else if (tabId === "team") {
        teamSection.classList.add("active");
    }
}

function setTheme(theme) {
    const themeIcon = document.getElementById("themeIcon");
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        if (themeIcon) themeIcon.textContent = "🌑";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        if (themeIcon) themeIcon.textContent = "☀️";
    }
}

// Тест для выбора мероприятия
const quizQuestions = [
    {
        question: "Что вам больше всего интересно?",
        options: [
            { text: "Собирать и программировать роботов", value: "robotics", emoji: "🤖" },
            { text: "Создавать 3D-модели и проектировать", value: "3d", emoji: "🎨" },
            { text: "Писать код и разрабатывать приложения", value: "it", emoji: "💻" },
            { text: "Придумывать новые изобретения", value: "innovation", emoji: "💡" }
        ]
    },
    {
        question: "Какой формат вам больше нравится?",
        options: [
            { text: "Соревнования и олимпиады", value: "competition", emoji: "🏆" },
            { text: "Творческие мастер-классы", value: "creative", emoji: "🎨" },
            { text: "Интенсивные хакатоны", value: "hackathon", emoji: "⚡" },
            { text: "Образовательные программы", value: "education", emoji: "📚" }
        ]
    },
    {
        question: "Сколько времени вы готовы уделить?",
        options: [
            { text: "Один день", value: "one_day", emoji: "☀️" },
            { text: "Несколько дней", value: "few_days", emoji: "📅" },
            { text: "Неделю или больше", value: "week", emoji: "🌟" }
        ]
    }
];

let currentQuestionIndex = 0;
let userAnswers = {
    category: null,
    format: null,duration: null
};

function renderQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    if (currentQuestionIndex < quizQuestions.length) {
        const question = quizQuestions[currentQuestionIndex];
        const questionEl = document.getElementById('quizQuestion');
        const optionsEl = document.getElementById('quizOptions');
        const resultEl = document.getElementById('quizResult');
        const resetBtn = document.getElementById('quizResetBtn');
        
        if (resultEl) resultEl.style.display = 'none';
        if (resetBtn) resetBtn.style.display = 'none';
        
        if (questionEl) questionEl.textContent = question.question;
        
        if (optionsEl) {
            optionsEl.innerHTML = question.options.map((opt, idx) => {
                const letters = ['А', 'Б', 'В', 'Г'];
                return `
                    <div class="quiz-option" data-value="${opt.value}">
                        <span class="quiz-option-letter">${letters[idx]}</span>
                        <span>${opt.emoji} ${opt.text}</span>
                    </div>
                `;
            }).join('');
            
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.onclick = () => {
                    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('active'));
                    opt.classList.add('active');
                    const value = opt.getAttribute('data-value');
                    
                    if (currentQuestionIndex === 0) userAnswers.category = value;
                    else if (currentQuestionIndex === 1) userAnswers.format = value;
                    else if (currentQuestionIndex === 2) userAnswers.duration = value;
                    
                    currentQuestionIndex++;
                    
                    if (currentQuestionIndex < quizQuestions.length) {
                        renderQuiz();
                    } else {
                        showQuizResult();
                    }
                };
            });
        }
    }
}

function showQuizResult() {
    const resultEl = document.getElementById('quizResult');
    const resetBtn = document.getElementById('quizResetBtn');
    const optionsEl = document.getElementById('quizOptions');
    const questionEl = document.getElementById('quizQuestion');
    
    if (optionsEl) optionsEl.innerHTML = '';
    if (questionEl) questionEl.textContent = '';
    
    let recommendation = '';
    let recommendedCategory = '';
    let categoryMap = {
        robotics: { name: "Робототехника", emoji: "🤖", events: ["Открытые соревнования по радиоуправляемым моделям", "Чемпионат «Профессионалы»", "Муниципальный этап соревнований по робототехнике"] },
        "3d": { name: "3D-технологии", emoji: "🎨", events: ["Муниципальный этап олимпиады по 3D-технологиям", "Региональный этап «Инженеры будущего»", "Хакатон «Про100Дизайн»"] },
        it: { name: "IT-направления", emoji: "💻", events: ["IT-хакатон", "Неделя высоких технологий", "Медиа-хакатон", "Турнир по квантошахматам"] },
        innovation: { name: "Инновации", emoji: "💡", events: ["Конкурс «Молодой изобретатель»", "«Наноград-Сургут»", "Соревнования «ТехноАвиа»"] }
    };
    
    if (userAnswers.category && categoryMap[userAnswers.category]) {
        recommendedCategory = categoryMap[userAnswers.category];
        recommendation = `
            <h4>🎯 Вам подойдут мероприятия по направлению: ${recommendedCategory.emoji} ${recommendedCategory.name}</h4>
            <p>Исходя из ваших ответов, мы рекомендуем обратить внимание на эти события:</p>
            <div class="recommended-events">
                ${recommendedCategory.events.map(e => `<span>⭐ ${e}</span><br>`).join('')}
            </div>
            <p style="margin-top: 0.8rem;">💡 <strong>Совет:</strong> Добавьте понравившиеся мероприятия в избранное, чтобы не потерять их!</p>`;
    } else {
        recommendation = `
            <h4>🎯 Вам подойдут разные мероприятия!</h4>
            <p>Попробуйте посмотреть все мероприятия в календаре. Возможно, вас заинтересуют:</p>
            <div class="recommended-events">
                ⭐ IT-хакатон<br>
                ⭐ Муниципальный этап соревнований по робототехнике<br>
                ⭐ Конкурс «Молодой изобретатель»<br>
                ⭐ Открытый образовательный Хакатон «Про100Дизайн»
            </div>
            <p style="margin-top: 0.8rem;">💡 Не забывайте добавлять понравившиеся мероприятия в избранное!</p>
        `;
    }
    
    if (resultEl) {
        resultEl.innerHTML = recommendation;
        resultEl.style.display = 'block';
    }
    
    if (resetBtn) resetBtn.style.display = 'inline-block';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {
        category: null,
        format: null,
        duration: null
    };
    renderQuiz();
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "light");
    
    document.getElementById("themeToggle").onclick = () => {
        const current = document.documentElement.getAttribute("data-theme");
        setTheme(current === "dark" ? "light" : "dark");
    };
    
    document.querySelectorAll(".nav-tab").forEach(tab => {
        tab.onclick = () => switchTab(tab.getAttribute("data-tab"));
    });
    
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderEvents();
        };
    });
    
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            renderEvents();
        };
    });
    
    document.querySelectorAll(".feature").forEach(feature => {
        feature.onclick = (e) => {
            if (e.target.classList.contains('feature-btn')) return;
            const type = feature.getAttribute("data-filter-type");
            if (type) goToEventsWithCategory(type);
        };
        const btn = feature.querySelector('.feature-btn');
        if (btn) {
            btn.onclick = (e) => {
                e.stopPropagation();
                const type = feature.getAttribute("data-filter-type");
                if (type) goToEventsWithCategory(type);
            };
        }
    });
    
    document.getElementById("goToEventsBtn")?.addEventListener("click", () => switchTab("events"));
    document.getElementById("goToEventsFromArchive")?.addEventListener("click", () => switchTab("events"));
    document.querySelector(".close-modal")?.addEventListener("click", closeModalWindow);
    window.onclick = (e) => { if (e.target === document.getElementById("eventModal")) closeModalWindow(); };
    
    // Инициализация теста
    renderQuiz();
    
    const resetBtn = document.getElementById('quizResetBtn');
    if (resetBtn) {
        resetBtn.onclick = resetQuiz;
    }
    
    updateFavoritesBadge();
    updateArchiveBadge();
    renderEvents();
    switchTab("about");
});
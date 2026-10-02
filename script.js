/* ═══════════════════════════════════════════════════════════════
   💕 Our Love Bucket List — JavaScript
   ═══════════════════════════════════════════════════════════════ */

// ─── Bucket List Data (26 Romantic Adventures) ───────────────────
const bucketListItems = [
    {
        id: 1,
        emoji: "🎬",
        title: "Movie Marathon Night",
        description: "Cozy blankets, popcorn, and our favorite movies — a perfect night in with you.",
        category: "chill",
        accent: "#ffd166"
    },
    {
        id: 2,
        emoji: "🍽️",
        title: "Candlelight Dinner Date",
        description: "Dress up fancy, dim the lights, and enjoy a beautiful dinner together at a dream restaurant.",
        category: "food",
        accent: "#ffb4a2"
    },
    {
        id: 3,
        emoji: "🌅",
        title: "Watch the Sunrise Together",
        description: "Wake up before the world does and watch the sky paint itself golden, hand in hand.",
        category: "romance",
        accent: "#e8567f"
    },
    {
        id: 4,
        emoji: "🚗",
        title: "Spontaneous Road Trip",
        description: "No plan, no map, just us and the open road. Adventure awaits wherever we go!",
        category: "adventure",
        accent: "#9381ff"
    },
    {
        id: 5,
        emoji: "👩‍🍳",
        title: "Cook a Meal Together",
        description: "Flour fights, taste testing, and creating something delicious — cooking is better with you.",
        category: "food",
        accent: "#ffb4a2"
    },
    {
        id: 6,
        emoji: "⭐",
        title: "Stargazing Night",
        description: "Lay on a blanket under the stars, find constellations, and make wishes on shooting stars.",
        category: "romance",
        accent: "#e8567f"
    },
    {
        id: 7,
        emoji: "🏖️",
        title: "Beach Day Escape",
        description: "Sandy toes, salty hair, and building sandcastles together by the ocean waves.",
        category: "adventure",
        accent: "#9381ff"
    },
    {
        id: 8,
        emoji: "🧺",
        title: "Picnic in the Park",
        description: "Pack our favorite snacks, find a shady spot, and spend a lazy afternoon together.",
        category: "food",
        accent: "#ffb4a2"
    },
    {
        id: 9,
        emoji: "🌧️",
        title: "Dance in the Rain",
        description: "When the rain comes, we won't run — we'll dance, laugh, and make the most magical memory.",
        category: "romance",
        accent: "#e8567f"
    },
    {
        id: 10,
        emoji: "✈️",
        title: "Travel Somewhere New",
        description: "Explore a new city or country together — new food, new culture, new memories with you.",
        category: "adventure",
        accent: "#9381ff"
    },
    {
        id: 11,
        emoji: "💌",
        title: "Write Love Letters",
        description: "Put our feelings into words — handwritten letters to read whenever we miss each other.",
        category: "romance",
        accent: "#e8567f"
    },
    {
        id: 12,
        emoji: "🌇",
        title: "Chase the Sunset",
        description: "Find the perfect spot to watch the sun set, painting the sky in shades of orange and pink.",
        category: "romance",
        accent: "#e8567f"
    },
    {
        id: 13,
        emoji: "💆",
        title: "Couple's Spa Day",
        description: "Relax, unwind, and pamper ourselves together — face masks, massages, and pure bliss.",
        category: "chill",
        accent: "#ffd166"
    },
    {
        id: 14,
        emoji: "🏰",
        title: "Build a Blanket Fort",
        description: "Pillows, fairy lights, and a blanket fortress — our own little world inside a fort!",
        category: "chill",
        accent: "#ffd166"
    },
    {
        id: 15,
        emoji: "📸",
        title: "Photoshoot Day",
        description: "Get dressed up and take beautiful photos together — memories we'll treasure forever.",
        category: "romance",
        accent: "#e8567f"
    },
    {
        id: 16,
        emoji: "🎵",
        title: "Concert or Live Music",
        description: "Feel the music together, sing along, and create unforgettable moments at a live show.",
        category: "adventure",
        accent: "#9381ff"
    },
    {
        id: 17,
        emoji: "🎮",
        title: "Gaming Night Together",
        description: "Pick up controllers, team up or compete — either way, we're having the time of our lives.",
        category: "chill",
        accent: "#ffd166"
    },
    {
        id: 18,
        emoji: "🎨",
        title: "Paint & Sip Night",
        description: "Grab some canvases, paint side by side, and see whose masterpiece wins — spoiler: it's yours!",
        category: "chill",
        accent: "#ffd166"
    },
    {
        id: 19,
        emoji: "🚴",
        title: "Bike Ride Adventure",
        description: "Pedal through scenic trails, explore new paths, and enjoy the breeze together.",
        category: "adventure",
        accent: "#9381ff"
    },
    {
        id: 20,
        emoji: "🍰",
        title: "Bake Something Sweet",
        description: "Cupcakes, brownies, or cookies — getting messy in the kitchen has never been this sweet.",
        category: "food",
        accent: "#ffb4a2"
    },
    {
        id: 21,
        emoji: "🫦",
        title: "The Slow Kiss Game",
        description: "We start at opposite ends of the room. I walk towards you — painfully slow. When I reach you, I kiss your forehead... your cheek... your jaw... your neck... each one slower and deeper than the last. You're not allowed to touch me until I say so. Let's see how long you last. 💋",
        category: "spicy",
        accent: "#ff4757"
    },
    {
        id: 22,
        emoji: "🕯️",
        title: "Candlelit Body Worship",
        description: "Tonight I'm laying you down, lighting every candle we own, and kissing every inch of your body like it's the first and last time. Your neck, your collarbone, your hips, your inner thighs — I want to memorize every curve with my lips. You just close your eyes and feel me. 🔥",
        category: "spicy",
        accent: "#ff4757"
    },
    {
        id: 23,
        emoji: "🪢",
        title: "Blindfold & Surrender",
        description: "Silk over your eyes. Hands tied with a scarf above your head. You can't see what's coming — my breath on your skin, my fingers tracing down your spine, my lips landing in places that make you gasp. Every touch is a surprise. Every whisper is a promise. You're mine tonight. 😮‍💨",
        category: "spicy",
        accent: "#ff4757"
    },
    {
        id: 24,
        emoji: "🏨",
        title: "Hotel Strangers Fantasy",
        description: "I book the room. You show up in something that barely leaves anything to the imagination. We pretend we've never met. You catch my eye at the bar. I buy you a drink. We flirt like strangers who know exactly where the night is going. Room 304. Don't be late. 🗝️",
        category: "spicy",
        accent: "#ff4757"
    },
    {
        id: 25,
        emoji: "🍯",
        title: "Taste Me Everywhere",
        description: "Warm honey drizzled on my neck. Chocolate melting on my stomach. Whipped cream where your mind is already going. Your only job tonight is to lick every drop off my body — slowly — while I try not to pull you closer. Dessert has never tasted this good. 👅🔥",
        category: "spicy",
        accent: "#ff4757"
    },
    {
        id: 26,
        emoji: "⛓️",
        title: "Whisper, Obey, Repeat",
        description: "One word from me and you do exactly what I say. 'Come here.' 'On your knees.' 'Slower.' 'Look at me.' Tonight there are no questions — only commands, heavy breathing, and the kind of tension that makes your whole body tremble before I even touch you. 👑🔥",
        category: "spicy",
        accent: "#ff4757"
    }
];

// ─── State ───────────────────────────────────────────────────────
// Keep IDs as strings in Set for reliable comparisons (numbers & string IDs)
let completedItems = new Set(
    (JSON.parse(localStorage.getItem('bucketCompleted') || '[]')).map(id => String(id))
);
let currentFilter = 'all';
let herWishes = [];
let selectedEmoji = '💭';

// ─── DOM Elements ────────────────────────────────────────────────
const heartsBg = document.getElementById('heartsBg');
const introSection = document.getElementById('introSection');
const envelope = document.getElementById('envelope');
const questionSection = document.getElementById('questionSection');
const typewriterContainer = document.getElementById('typewriterContainer');
const questionText = document.getElementById('questionText');
const cursor = document.getElementById('cursor');
const skipHint = document.getElementById('skipHint');
const answerReveal = document.getElementById('answerReveal');
const exploreBtn = document.getElementById('exploreBtn');
const bucketSection = document.getElementById('bucketSection');
const bucketGrid = document.getElementById('bucketGrid');
const progressFill = document.getElementById('progressFill');
const completedCount = document.getElementById('completedCount');
const totalCount = document.getElementById('totalCount');
const confettiCanvas = document.getElementById('confettiCanvas');
const filterBtns = document.querySelectorAll('.filter-btn');
const herWishesSection = document.getElementById('herWishesSection');
const herWishesGrid = document.getElementById('herWishesGrid');
const wishesEmpty = document.getElementById('wishesEmpty');
const fabAdd = document.getElementById('fabAdd');
const wishModal = document.getElementById('wishModal');
const modalClose = document.getElementById('modalClose');
const wishForm = document.getElementById('wishForm');
const wishTitle = document.getElementById('wishTitle');
const wishDescription = document.getElementById('wishDescription');
const wishCategory = document.getElementById('wishCategory');
const charCount = document.getElementById('charCount');
const emojiPicker = document.getElementById('emojiPicker');
const reopenIntroBtn = document.getElementById('reopenIntroBtn');

// ─── Floating Hearts ────────────────────────────────────────────
function createFloatingHearts() {
    const hearts = ['💕', '💗', '💖', '💝', '♥', '💘', '✨', '🌸'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.2 + 0.6) + 'rem';
        heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsBg.appendChild(heart);

        setTimeout(() => heart.remove(), 18000);
    }, 1200);
}

// ─── Envelope Click ──────────────────────────────────────────────
let envelopeClicked = false;

envelope.addEventListener('click', () => {
    if (envelopeClicked) return;
    envelopeClicked = true;

    envelope.classList.add('opened');

    setTimeout(() => {
        introSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        introSection.style.opacity = '0';
        introSection.style.transform = 'scale(0.95)';

        setTimeout(() => {
            introSection.classList.add('hidden');
            questionSection.classList.remove('hidden');
            startTypewriter();
        }, 800);
    }, 1200);
});

// ─── Typewriter Effect with Instant Skip ─────────────────────────
let typewriterStarted = false;
let typewriterDone = false;
let typewriterTimeout = null;
const fullQuestion = "Do you have wishes that aren't being fulfilled right now?";

function finishTypewriter() {
    if (typewriterDone) return;
    typewriterDone = true;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    questionText.textContent = fullQuestion;
    cursor.style.display = 'none';
    if (skipHint) skipHint.style.display = 'none';
    answerReveal.classList.remove('hidden');
}

function startTypewriter() {
    if (typewriterStarted) return;
    typewriterStarted = true;

    let i = 0;
    questionText.textContent = '';

    function type() {
        if (typewriterDone) return;
        if (i < fullQuestion.length) {
            questionText.textContent = fullQuestion.substring(0, i + 1);
            i++;
            typewriterTimeout = setTimeout(type, 50 + Math.random() * 35);
        } else {
            typewriterDone = true;
            cursor.style.display = 'none';
            if (skipHint) skipHint.style.display = 'none';
            setTimeout(() => {
                answerReveal.classList.remove('hidden');
            }, 600);
        }
    }

    typewriterTimeout = setTimeout(type, 500);
}

// Click to skip typewriter
if (typewriterContainer) {
    typewriterContainer.addEventListener('click', finishTypewriter);
}

// ─── Reopen Message Feature ──────────────────────────────────────
if (reopenIntroBtn) {
    reopenIntroBtn.addEventListener('click', () => {
        bucketSection.style.transition = 'opacity 0.5s ease';
        bucketSection.style.opacity = '0';

        setTimeout(() => {
            bucketSection.classList.add('hidden');
            questionSection.classList.remove('hidden');
            questionSection.style.opacity = '1';
            questionSection.style.transform = 'translateY(0)';
            finishTypewriter();
        }, 500);
    });
}

// ─── Explore Button ──────────────────────────────────────────────
exploreBtn.addEventListener('click', async () => {
    questionSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    questionSection.style.opacity = '0';
    questionSection.style.transform = 'translateY(-30px)';

    setTimeout(async () => {
        questionSection.classList.add('hidden');
        bucketSection.classList.remove('hidden');

        // Smooth entrance
        bucketSection.style.opacity = '0';
        bucketSection.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
            bucketSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            bucketSection.style.opacity = '1';
            bucketSection.style.transform = 'translateY(0)';
        });

        // Load data and render
        await Promise.all([loadCompletedItems(), loadHerWishes()]);
        renderAllContent(currentFilter);
        updateProgress();
    }, 800);
});

// ─── Data Loading & Backend Sync ─────────────────────────────────
async function loadCompletedItems() {
    try {
        const res = await fetch('/api/completed');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) {
                completedItems = new Set(data.map(id => String(id)));
                localStorage.setItem('bucketCompleted', JSON.stringify([...completedItems]));
                return;
            }
        }
    } catch (e) {
        // Offline / fallback to localStorage
    }
    completedItems = new Set(
        (JSON.parse(localStorage.getItem('bucketCompleted') || '[]')).map(id => String(id))
    );
}

async function loadHerWishes() {
    try {
        const res = await fetch('/api/wishes');
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) {
                herWishes = data;
                localStorage.setItem('herWishes', JSON.stringify(herWishes));
                return;
            }
        }
    } catch (e) {
        // Offline / fallback to localStorage
    }
    herWishes = JSON.parse(localStorage.getItem('herWishes') || '[]');
}

async function syncToggleComplete(id) {
    try {
        await fetch('/api/completed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
    } catch (e) {
        // Continue even if network fails
    }
}

// ─── Category Helpers ────────────────────────────────────────────
function getCategoryLabel(cat) {
    const labels = {
        romance: '💕 Romance',
        adventure: '🌍 Adventure',
        chill: '🍿 Chill',
        food: '🍽️ Foodie',
        spicy: '🔥 Spicy',
        'her-wish': '💭 Her Wish'
    };
    return labels[cat] || '💭 Special Wish';
}

// ─── Unified Rendering ───────────────────────────────────────────
function renderAllContent(filter = 'all') {
    bucketGrid.innerHTML = '';

    // 1. Render Main Bucket List
    if (filter === 'her-wish') {
        bucketGrid.style.display = 'none';
    } else {
        bucketGrid.style.display = 'grid';
        const items = filter === 'all'
            ? bucketListItems
            : bucketListItems.filter(item => item.category === filter);

        items.forEach((item, index) => {
            const strId = String(item.id);
            const isDone = completedItems.has(strId);
            const card = document.createElement('div');
            card.className = `bucket-card ${isDone ? 'completed' : ''}`;
            card.style.setProperty('--card-accent', item.accent);
            card.style.animationDelay = `${index * 0.04}s`;
            card.dataset.id = strId;

            card.innerHTML = `
                <div class="card-number">${String(item.id).padStart(2, '0')}</div>
                <span class="card-emoji">${item.emoji}</span>
                <span class="card-tag ${item.category}">${getCategoryLabel(item.category)}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-checkbox">
                    <div class="checkbox-custom">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6L9 17l-5-5"/>
                        </svg>
                    </div>
                    <span class="checkbox-label">${isDone ? 'We did this! 🎉' : 'Mark as done'}</span>
                </div>
            `;

            card.addEventListener('click', () => toggleComplete(item.id, card));
            bucketGrid.appendChild(card);
        });
    }

    // 2. Render Her Wishes
    renderHerWishes(filter);

    // 3. Update Progress Counters
    updateProgress();
}

function renderHerWishes(filter = currentFilter) {
    herWishesGrid.innerHTML = '';

    // Decide which wishes to show
    let visibleWishes = herWishes;
    if (filter !== 'all' && filter !== 'her-wish') {
        // If viewing e.g. "romance", show custom wishes that also have category "romance"
        visibleWishes = herWishes.filter(w => w.category === filter);
        if (visibleWishes.length === 0) {
            herWishesSection.style.display = 'none';
            return;
        }
    }

    herWishesSection.style.display = 'block';

    if (visibleWishes.length === 0) {
        wishesEmpty.style.display = 'block';
        return;
    }

    wishesEmpty.style.display = 'none';

    visibleWishes.forEach((wish, index) => {
        const strId = String(wish.id);
        const isDone = completedItems.has(strId);
        const card = document.createElement('div');
        card.className = `bucket-card ${isDone ? 'completed' : ''}`;
        card.style.setProperty('--card-accent', wish.accent || '#c8b6ff');
        card.style.animationDelay = `${index * 0.04}s`;
        card.dataset.id = strId;

        card.innerHTML = `
            <button class="card-delete" title="Delete wish">✕</button>
            <div class="card-number">💭</div>
            <span class="card-emoji">${wish.emoji}</span>
            <span class="card-tag ${wish.category || 'her-wish'}">${getCategoryLabel(wish.category || 'her-wish')}</span>
            <h3 class="card-title">${wish.title}</h3>
            <p class="card-description">${wish.description}</p>
            <div class="card-checkbox">
                <div class="checkbox-custom">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </div>
                <span class="checkbox-label">${isDone ? 'We did this! 🎉' : 'Mark as done'}</span>
            </div>
        `;

        // Delete button listener
        const deleteBtn = card.querySelector('.card-delete');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteWish(wish.id);
        });

        // Toggle complete listener
        card.addEventListener('click', () => toggleComplete(wish.id, card));
        herWishesGrid.appendChild(card);
    });
}

// ─── Toggle Complete ─────────────────────────────────────────────
function toggleComplete(id, card) {
    const strId = String(id);

    if (completedItems.has(strId)) {
        completedItems.delete(strId);
        card.classList.remove('completed');
        card.querySelector('.checkbox-label').textContent = 'Mark as done';
    } else {
        completedItems.add(strId);
        card.classList.add('completed');
        card.querySelector('.checkbox-label').textContent = 'We did this! 🎉';

        launchConfetti(18);
        checkMilestones();
    }

    // Save locally
    localStorage.setItem('bucketCompleted', JSON.stringify([...completedItems]));

    // Sync with backend
    syncToggleComplete(id);

    // Update progress
    updateProgress();
}

// ─── Progress Tracking (Single Source of Truth) ──────────────────
function updateProgress() {
    const total = bucketListItems.length + herWishes.length;

    // Build set of currently existing items to prevent ghost counts
    const existingIds = new Set([
        ...bucketListItems.map(i => String(i.id)),
        ...herWishes.map(w => String(w.id))
    ]);

    let validCompleted = 0;
    completedItems.forEach(id => {
        if (existingIds.has(String(id))) {
            validCompleted++;
        }
    });

    const percent = total > 0 ? (validCompleted / total) * 100 : 0;

    progressFill.style.width = Math.min(percent, 100) + '%';
    completedCount.textContent = validCompleted;
    totalCount.textContent = total;
}

// ─── Milestones Celebration ──────────────────────────────────────
function checkMilestones() {
    const total = bucketListItems.length + herWishes.length;
    const existingIds = new Set([
        ...bucketListItems.map(i => String(i.id)),
        ...herWishes.map(w => String(w.id))
    ]);

    let count = 0;
    completedItems.forEach(id => {
        if (existingIds.has(String(id))) count++;
    });

    if (count === 5) {
        showCelebration('🎊', 'Amazing Start!', "We've completed 5 adventures together! Here's to many more...");
        launchConfetti(60);
    } else if (count === 13) {
        showCelebration('🏆', 'Halfway There!', "13 done! We're just getting started baby... 💪");
        launchConfetti(80);
    } else if (count === 20) {
        showCelebration('🔥', 'Almost There!', "20 down — only the spiciest ones left... 😏");
        launchConfetti(100);
    } else if (total > 0 && count === total) {
        showCelebration('👑', 'We Are Legends!', "Every. Single. One. We're officially the most adventurous couple alive! 💕🔥");
        launchConfetti(250);
    }
}

function showCelebration(emoji, title, text) {
    const modal = document.createElement('div');
    modal.className = 'celebration-modal';
    modal.innerHTML = `
        <div class="celebration-content">
            <div class="celebration-emoji">${emoji}</div>
            <h3 class="celebration-title">${title}</h3>
            <p class="celebration-text">${text}</p>
            <button class="celebration-close" id="closeCelebration">Keep Going! 💕</button>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('#closeCelebration');
    closeBtn.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 400);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 400);
        }
    });
}

// ─── Filter Buttons (Single Event Listener) ──────────────────────
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderAllContent(currentFilter);
    });
});

// ─── Wish CRUD Operations ────────────────────────────────────────
async function saveWish(wish) {
    try {
        const res = await fetch('/api/wishes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(wish)
        });
        if (res.ok) {
            const saved = await res.json();
            herWishes.push(saved);
            localStorage.setItem('herWishes', JSON.stringify(herWishes));
            return saved;
        }
    } catch (err) {
        // Fallback: save locally
    }

    const localWish = {
        ...wish,
        id: 'wish-' + Date.now(),
        accent: '#c8b6ff',
        addedBy: 'her',
        createdAt: new Date().toISOString()
    };
    herWishes.push(localWish);
    localStorage.setItem('herWishes', JSON.stringify(herWishes));
    return localWish;
}

async function deleteWish(id) {
    const strId = String(id);

    try {
        await fetch(`/api/wishes/${id}`, { method: 'DELETE' });
    } catch (err) {
        // Continue even if network fails
    }

    // Clean up from wishes
    herWishes = herWishes.filter(w => String(w.id) !== strId);
    localStorage.setItem('herWishes', JSON.stringify(herWishes));

    // Also clean up completedItems so completed counter does not get corrupted!
    if (completedItems.has(strId)) {
        completedItems.delete(strId);
        localStorage.setItem('bucketCompleted', JSON.stringify([...completedItems]));
    }

    renderAllContent(currentFilter);
    updateProgress();
}

// ─── Modal Controls & Accessibility ──────────────────────────────
fabAdd.addEventListener('click', () => {
    wishModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    wishTitle.focus();
});

function closeModal() {
    wishModal.style.opacity = '0';
    setTimeout(() => {
        wishModal.classList.add('hidden');
        wishModal.style.opacity = '';
        document.body.style.overflow = '';
        wishForm.reset();
        charCount.textContent = '0';
        // Reset emoji picker
        document.querySelectorAll('.emoji-option').forEach(e => e.classList.remove('active'));
        const defaultEmoji = document.querySelector('.emoji-option[data-emoji="💭"]');
        if (defaultEmoji) defaultEmoji.classList.add('active');
        selectedEmoji = '💭';
    }, 300);
}

modalClose.addEventListener('click', closeModal);

wishModal.addEventListener('click', (e) => {
    if (e.target === wishModal) closeModal();
});

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !wishModal.classList.contains('hidden')) {
        closeModal();
    }
});

// Emoji Picker
emojiPicker.addEventListener('click', (e) => {
    const btn = e.target.closest('.emoji-option');
    if (!btn) return;

    document.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    selectedEmoji = btn.dataset.emoji;
});

// Character Counter
wishDescription.addEventListener('input', () => {
    charCount.textContent = wishDescription.value.length;
});

// Form Submit
wishForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = wishTitle.value.trim();
    const description = wishDescription.value.trim();
    const category = wishCategory ? wishCategory.value : 'her-wish';

    if (!title || !description) return;

    const wish = {
        emoji: selectedEmoji,
        title,
        description,
        category: category || 'her-wish'
    };

    await saveWish(wish);

    // If current filter is active and doesn't match the new wish, switch to 'all' or 'her-wish' so it's visible!
    if (currentFilter !== 'all' && currentFilter !== 'her-wish' && currentFilter !== category) {
        currentFilter = 'all';
        filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    }

    renderAllContent(currentFilter);
    updateProgress();
    launchConfetti(45);
    closeModal();
});

// ─── Confetti System ─────────────────────────────────────────────
const ctx = confettiCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimating = false;

function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function launchConfetti(count = 30) {
    const colors = ['#e8567f', '#f7a8c4', '#ffd166', '#c8b6ff', '#9381ff', '#ffb4a2', '#ff6b6b'];

    for (let i = 0; i < count; i++) {
        confettiParticles.push({
            x: Math.random() * confettiCanvas.width,
            y: -20,
            w: Math.random() * 8 + 4,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 6,
            vy: Math.random() * 4 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1,
            decay: 0.003 + Math.random() * 0.005
        });
    }

    if (!confettiAnimating) {
        confettiAnimating = true;
        animateConfetti();
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiParticles = confettiParticles.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // gravity
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0) return false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        return p.y < confettiCanvas.height + 50;
    });

    if (confettiParticles.length > 0) {
        requestAnimationFrame(animateConfetti);
    } else {
        confettiAnimating = false;
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}

// ─── Initialize ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    // Preload completed and wishes in background for snappy response
    loadCompletedItems();
    loadHerWishes();
});

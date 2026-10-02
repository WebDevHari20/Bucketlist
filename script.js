/* ═══════════════════════════════════════════════════════════════
   💕 Our Love Bucket List — JavaScript
   ═══════════════════════════════════════════════════════════════ */

// ─── Bucket List Data ────────────────────────────────────────────
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
let completedItems = new Set(JSON.parse(localStorage.getItem('bucketCompleted') || '[]'));
let currentFilter = 'all';
let herWishes = [];
let selectedEmoji = '💭';

// ─── DOM Elements ────────────────────────────────────────────────
const heartsBg = document.getElementById('heartsBg');
const introSection = document.getElementById('introSection');
const envelope = document.getElementById('envelope');
const questionSection = document.getElementById('questionSection');
const questionText = document.getElementById('questionText');
const cursor = document.getElementById('cursor');
const answerReveal = document.getElementById('answerReveal');
const exploreBtn = document.getElementById('exploreBtn');
const bucketSection = document.getElementById('bucketSection');
const bucketGrid = document.getElementById('bucketGrid');
const progressFill = document.getElementById('progressFill');
const completedCount = document.getElementById('completedCount');
const totalCount = document.getElementById('totalCount');
const confettiCanvas = document.getElementById('confettiCanvas');
const filterBtns = document.querySelectorAll('.filter-btn');
const herWishesGrid = document.getElementById('herWishesGrid');
const wishesEmpty = document.getElementById('wishesEmpty');
const fabAdd = document.getElementById('fabAdd');
const wishModal = document.getElementById('wishModal');
const modalClose = document.getElementById('modalClose');
const wishForm = document.getElementById('wishForm');
const wishTitle = document.getElementById('wishTitle');
const wishDescription = document.getElementById('wishDescription');
const charCount = document.getElementById('charCount');
const emojiPicker = document.getElementById('emojiPicker');

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
    if (envelopeClicked) return; // prevent double click
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

// ─── Typewriter Effect ──────────────────────────────────────────
let typewriterStarted = false;

function startTypewriter() {
    if (typewriterStarted) return; // extra safety guard
    typewriterStarted = true;

    const text = "Do you have wishes that aren't being fulfilled right now?";
    let i = 0;
    questionText.textContent = ''; // clear any previous text
    
    function type() {
        if (i < text.length) {
            questionText.textContent = text.substring(0, i + 1);
            i++;
            setTimeout(type, 55 + Math.random() * 40);
        } else {
            // Typing done — show answer after a pause
            cursor.style.display = 'none';
            setTimeout(() => {
                answerReveal.classList.remove('hidden');
            }, 800);
        }
    }
    
    setTimeout(type, 600);
}

// ─── Explore Button ──────────────────────────────────────────────
exploreBtn.addEventListener('click', () => {
    questionSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    questionSection.style.opacity = '0';
    questionSection.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        questionSection.classList.add('hidden');
        bucketSection.classList.remove('hidden');
        renderBucketList();
        updateProgress();
        
        // Smooth entrance
        bucketSection.style.opacity = '0';
        bucketSection.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
            bucketSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            bucketSection.style.opacity = '1';
            bucketSection.style.transform = 'translateY(0)';
        });
    }, 800);
});

// ─── Render Bucket List ──────────────────────────────────────────
function renderBucketList(filter = 'all') {
    bucketGrid.innerHTML = '';
    
    const items = filter === 'all'
        ? bucketListItems
        : bucketListItems.filter(item => item.category === filter);
    
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `bucket-card ${completedItems.has(item.id) ? 'completed' : ''}`;
        card.style.setProperty('--card-accent', item.accent);
        card.style.animationDelay = `${index * 0.05}s`;
        card.dataset.id = item.id;
        
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
                <span class="checkbox-label">${completedItems.has(item.id) ? 'We did this! 🎉' : 'Mark as done'}</span>
            </div>
        `;
        
        card.addEventListener('click', () => toggleComplete(item.id, card));
        bucketGrid.appendChild(card);
    });
    
    totalCount.textContent = bucketListItems.length;
}

function getCategoryLabel(cat) {
    const labels = {
        romance: '💕 Romance',
        adventure: '🌍 Adventure',
        chill: '🍿 Chill',
        food: '🍽️ Foodie',
        spicy: '🔥 Spicy',
        'her-wish': '💭 Her Wish'
    };
    return labels[cat] || cat;
}

// ─── Toggle Complete ─────────────────────────────────────────────
function toggleComplete(id, card) {
    if (completedItems.has(id)) {
        completedItems.delete(id);
        card.classList.remove('completed');
        card.querySelector('.checkbox-label').textContent = 'Mark as done';
    } else {
        completedItems.add(id);
        card.classList.add('completed');
        card.querySelector('.checkbox-label').textContent = 'We did this! 🎉';
        
        // Mini confetti burst
        launchConfetti(15);
        
        // Check for milestones
        checkMilestones();
    }
    
    // Save state
    localStorage.setItem('bucketCompleted', JSON.stringify([...completedItems]));
    updateProgress();
}

// ─── Update Progress ─────────────────────────────────────────────
function updateProgress() {
    const total = bucketListItems.length;
    const completed = completedItems.size;
    const percent = (completed / total) * 100;
    
    progressFill.style.width = percent + '%';
    completedCount.textContent = completed;
    totalCount.textContent = total;
}

// ─── Milestones ──────────────────────────────────────────────────
function checkMilestones() {
    const count = completedItems.size;
    const total = bucketListItems.length;
    
    if (count === 5) {
        showCelebration('🎊', 'Amazing Start!', "We've completed 5 adventures together! Here's to many more...");
        launchConfetti(60);
    } else if (count === 13) {
        showCelebration('🏆', 'Halfway There!', "13 done! We're just getting started baby... 💪");
        launchConfetti(80);
    } else if (count === 20) {
        showCelebration('🔥', 'Almost There!', "20 down — only the spiciest ones left... 😏");
        launchConfetti(100);
    } else if (count === total) {
        showCelebration('👑', 'We Are Legends!', "Every. Single. One. We\'re officially the most adventurous couple alive! 💕🔥");
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
    
    modal.querySelector('#closeCelebration').addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 500);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 500);
        }
    });
}

// ─── Filter Buttons ──────────────────────────────────────────────
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderBucketList(currentFilter);
    });
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
});

// ═══════════════════════════════════════════════════════════════
// HER WISHES — Modal, API, Rendering
// ═══════════════════════════════════════════════════════════════

// ─── Load Wishes from DB ─────────────────────────────────────────
async function loadHerWishes() {
    try {
        const res = await fetch('/api/wishes');
        herWishes = await res.json();
        renderHerWishes();
    } catch (err) {
        // Fallback to localStorage if server not available
        herWishes = JSON.parse(localStorage.getItem('herWishes') || '[]');
        renderHerWishes();
    }
}

// ─── Save Wish to DB ─────────────────────────────────────────────
async function saveWish(wish) {
    try {
        const res = await fetch('/api/wishes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(wish)
        });
        const saved = await res.json();
        herWishes.push(saved);
        // Also save to localStorage as backup
        localStorage.setItem('herWishes', JSON.stringify(herWishes));
        return saved;
    } catch (err) {
        // Fallback: save locally
        const localWish = { ...wish, id: 'wish-' + Date.now() };
        herWishes.push(localWish);
        localStorage.setItem('herWishes', JSON.stringify(herWishes));
        return localWish;
    }
}

// ─── Delete Wish from DB ─────────────────────────────────────────
async function deleteWish(id) {
    try {
        await fetch(`/api/wishes/${id}`, { method: 'DELETE' });
    } catch (err) {
        // Continue even if API fails
    }
    herWishes = herWishes.filter(w => w.id !== id);
    localStorage.setItem('herWishes', JSON.stringify(herWishes));
    renderHerWishes();
    updateProgress();
}

// ─── Render Her Wishes ───────────────────────────────────────────
function renderHerWishes() {
    herWishesGrid.innerHTML = '';

    if (herWishes.length === 0) {
        wishesEmpty.style.display = 'block';
        return;
    }

    wishesEmpty.style.display = 'none';

    herWishes.forEach((wish, index) => {
        const card = document.createElement('div');
        card.className = `bucket-card just-added ${completedItems.has(wish.id) ? 'completed' : ''}`;
        card.style.setProperty('--card-accent', '#c8b6ff');
        card.style.animationDelay = `${index * 0.05}s`;
        card.dataset.id = wish.id;

        card.innerHTML = `
            <button class="card-delete" onclick="event.stopPropagation(); deleteWish('${wish.id}')" title="Delete wish">✕</button>
            <div class="card-number">💭</div>
            <span class="card-emoji">${wish.emoji}</span>
            <span class="card-tag her-wish">💭 Her Wish</span>
            <h3 class="card-title">${wish.title}</h3>
            <p class="card-description">${wish.description}</p>
            <div class="card-checkbox">
                <div class="checkbox-custom">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </div>
                <span class="checkbox-label">${completedItems.has(wish.id) ? 'We did this! 🎉' : 'Mark as done'}</span>
            </div>
        `;

        card.addEventListener('click', () => toggleComplete(wish.id, card));
        herWishesGrid.appendChild(card);
    });
}

// ─── Modal Controls ──────────────────────────────────────────────
fabAdd.addEventListener('click', () => {
    wishModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
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
        document.querySelector('.emoji-option[data-emoji="💭"]').classList.add('active');
        selectedEmoji = '💭';
    }, 300);
}

modalClose.addEventListener('click', closeModal);

wishModal.addEventListener('click', (e) => {
    if (e.target === wishModal) closeModal();
});

// ─── Emoji Picker ────────────────────────────────────────────────
emojiPicker.addEventListener('click', (e) => {
    const btn = e.target.closest('.emoji-option');
    if (!btn) return;

    document.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    selectedEmoji = btn.dataset.emoji;
});

// ─── Character Counter ───────────────────────────────────────────
wishDescription.addEventListener('input', () => {
    charCount.textContent = wishDescription.value.length;
});

// ─── Form Submit ─────────────────────────────────────────────────
wishForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = wishTitle.value.trim();
    const description = wishDescription.value.trim();

    if (!title || !description) return;

    const wish = {
        emoji: selectedEmoji,
        title,
        description,
        category: 'her-wish'
    };

    await saveWish(wish);
    renderHerWishes();
    updateProgress();
    launchConfetti(40);
    closeModal();
});

// ─── Update renderBucketList to include her wishes when filtering ──
const originalRenderBucketList = renderBucketList;
// We override the filter logic to also handle her-wish filter
function renderAllContent(filter) {
    // Render the main bucket list
    bucketGrid.innerHTML = '';
    const herWishesSection = document.getElementById('herWishesSection');

    if (filter === 'her-wish') {
        // Show only her wishes
        herWishesSection.style.display = 'block';
        bucketGrid.style.display = 'none';
        renderHerWishes();
    } else {
        // Show bucket list + her wishes
        bucketGrid.style.display = 'grid';
        herWishesSection.style.display = 'block';

        const items = filter === 'all'
            ? bucketListItems
            : bucketListItems.filter(item => item.category === filter);

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = `bucket-card ${completedItems.has(item.id) ? 'completed' : ''}`;
            card.style.setProperty('--card-accent', item.accent);
            card.style.animationDelay = `${index * 0.05}s`;
            card.dataset.id = item.id;

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
                    <span class="checkbox-label">${completedItems.has(item.id) ? 'We did this! 🎉' : 'Mark as done'}</span>
                </div>
            `;

            card.addEventListener('click', () => toggleComplete(item.id, card));
            bucketGrid.appendChild(card);
        });

        // Also render her wishes if filter is 'all'
        if (filter === 'all') {
            renderHerWishes();
        } else {
            herWishesSection.style.display = 'none';
        }
    }

    totalCount.textContent = bucketListItems.length + herWishes.length;
}

// Override filter button handlers
filterBtns.forEach(btn => {
    btn.removeEventListener('click', btn._handler);
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderAllContent(currentFilter);
        updateProgress();
    });
});

// Override the explore button to also load wishes
const origExploreHandler = exploreBtn.onclick;
exploreBtn.addEventListener('click', () => {
    setTimeout(() => loadHerWishes(), 900);
});

// Update progress to include her wishes
const origUpdateProgress = updateProgress;
function updateProgressAll() {
    const total = bucketListItems.length + herWishes.length;
    const completed = completedItems.size;
    const percent = total > 0 ? (completed / total) * 100 : 0;

    progressFill.style.width = percent + '%';
    completedCount.textContent = completed;
    totalCount.textContent = total;
}

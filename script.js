/* ---- Bokeh trên splash ---- */
const bokehEl = document.getElementById('bokeh');
const rubyColors = ['rgba(155,27,48,0.5)', 'rgba(192,57,43,0.4)', 'rgba(255,71,87,0.35)', 'rgba(61,0,16,0.6)', 'rgba(120,10,30,0.45)'];
for (let i = 0; i < 22; i++) {
    const s = document.createElement('span');
    const size = 30 + Math.random() * 90;
    s.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}%;
    background:${rubyColors[Math.floor(Math.random() * rubyColors.length)]};
    animation-duration:${6 + Math.random() * 10}s;
    animation-delay:${Math.random() * 8}s;
  `;
    bokehEl.appendChild(s);
}

/* ---- Falling particles on main ---- */
const partEl = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 3 + Math.random() * 7;
    const colors = ['rgba(155,27,48,0.7)', 'rgba(255,71,87,0.6)', 'rgba(192,57,43,0.5)', 'rgba(255,255,255,0.15)'];
    p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}%;
    background:${colors[Math.floor(Math.random() * colors.length)]};
    filter: blur(${Math.random() * 1.5}px);
    animation-duration:${7 + Math.random() * 12}s;
    animation-delay:${Math.random() * 10}s;
  `;
    partEl.appendChild(p);
}

/* ---- Splash click → bật nhạc + hiện main ---- */
const splash = document.getElementById('splash');
const main = document.getElementById('main');
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let playing = false;

splash.addEventListener('click', () => {
    // phát nhạc
    music.play().catch(() => { });
    playing = true;
    musicBtn.classList.add('playing');

    // ẩn splash
    splash.classList.add('hide');
    setTimeout(() => { splash.style.display = 'none'; }, 950);

    // hiện main
    main.classList.add('show');

    // animate contact items
    setTimeout(() => {
        document.querySelectorAll('.contact-item').forEach((el, i) => {
            setTimeout(() => el.classList.add('show'), i * 130);
        });
    }, 500);
});

/* ---- Music toggle button ---- */
musicBtn.addEventListener('click', () => {
    if (!playing) {
        music.play();
        musicBtn.classList.add('playing');
        playing = true;
    } else {
        music.pause();
        musicBtn.classList.remove('playing');
        playing = false;
    }
});
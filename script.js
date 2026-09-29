/**
 * Yeongwol Travel Interactive Application Logic
 * Pure Vanilla JavaScript (No Frameworks, No Python dependencies)
 */

// 1. Data Structure for Attractions
const attractionsData = [
  {
    id: 'korean-peninsula',
    title: '선암마을 한반도지형',
    subtitle: '국가지정문화재 명승 제75호',
    category: 'nature',
    tags: ['국가지정명승', '서강', '침식지형', '사진명소'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: '서강의 맑은 물이 굽이치며 삼면이 바다로 둘러싸인 우리나라 지형을 쏙 빼닮은 절경입니다.',
    detail: '평창강 끝머리에 위치한 선암마을에는 한반도를 쏙 빼닮은 절벽과 굽이치는 물줄기가 자리잡고 있습니다. 동쪽은 급경사, 서쪽은 완만한 모래펄로 이루어져 동해안과 서해안의 실제 지리적 특성까지 완벽하게 재현된 천혜의 자연 예술입니다.',
    address: '강원특별자치도 영월군 한반도면 선암길 66-9',
    tip: '전망대까지 산책로 데크길(약 15~20분 소요)이 잘 조성되어 있어 사계절 언제나 편하게 관람할 수 있습니다.'
  },
  {
    id: 'byulmaro',
    title: '별마로 천문대',
    subtitle: '해발 799.8m 봉래산 정상의 별빛 성지',
    category: 'culture',
    tags: ['별빛투어', '국내최대천문대', '봉래산', '야경'],
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    description: '‘별을 보는 고요한 정상’이라는 뜻의 별마로천문대는 은하수와 별자리를 관측하는 대표 천문 랜드마크입니다.',
    detail: '지름 800mm 주망원경과 여러 보조망원경을 통해 성단, 성운, 행성을 생생하게 관측할 수 있습니다. 정상 활공장에서 내려다보는 영월 읍내의 야경 또한 잊을 수 없는 낭만을 선사합니다.',
    address: '강원특별자치도 영월군 영월읍 천문대길 397',
    tip: '인기 명소이므로 방문 전 온라인 사전 예약이 필수입니다. 산 정상이므로 겉옷을 챙기시면 좋습니다.'
  },
  {
    id: 'cheongryeongpo',
    title: '청령포 (단종 유배지)',
    subtitle: '삼면이 강으로 둘러싸인 천혜의 고립지',
    category: 'history',
    tags: ['조선역사', '단종', '소나무숲', '관음송'],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    description: '조선 제6대 왕 단종이 유배 생활을 했던 비운의 역사가 깃든 곳으로, 울창한 솔숲과 유유한 강물이 흐릅니다.',
    detail: '동서남 삼면이 강으로 둘러싸이고 뒤쪽은 험준한 암벽으로 가로막혀 나룻배를 타야만 건널 수 있는 유배지였습니다. 수령 600년이 넘은 천연기념물 관음송(觀音松)이 그날의 역사를 지켜보고 있습니다.',
    address: '강원특별자치도 영월군 영월읍 청령포로 133',
    tip: '매표 후 배를 타고 강을 건너는 이색적인 경험을 즐길 수 있습니다. 빽빽한 소나무 숲길 산책을 추천합니다.'
  },
  {
    id: 'jangneung',
    title: '장릉 (유네스코 세계문화유산)',
    subtitle: '영면의 숲에 잠든 단종의 능침',
    category: 'history',
    tags: ['세계문화유산', '조선왕릉', '사적제196호'],
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
    description: '유네스코 세계문화유산에 등재된 조선왕릉 중 하나로, 정조 때 충신들과 함께 배향되어 충절의 의미를 전합니다.',
    detail: '단종이 영월에서 승하한 후 엄흥도가 시신을 몰래 수습하여 장사지낸 묘역으로, 다른 조선 왕릉들과 달리 산세와 지형에 맞추어 독특하게 배치된 역사적 가치가 높은 사적지입니다.',
    address: '강원특별자치도 영월군 영월읍 단종로 190',
    tip: '단종역사관을 함께 둘러보시면 비운의 조선 왕실 역사를 더 깊이 이해할 수 있습니다.'
  },
  {
    id: 'donggang',
    title: '동강 어라연 & 래프팅',
    subtitle: '한국의 아마존, 굽이치는 사행천 비경',
    category: 'nature',
    tags: ['동강', '어라연', '래프팅', '비경', '생태보존'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: '물고기 비늘이 비단처럼 빛난다는 어라연 계곡과 천혜의 절벽을 따라 즐기는 수상 레포츠의 중심지입니다.',
    detail: '기암괴석과 희귀 동식물이 서식하는 생태계보전지역으로, 사계절 트레킹 코스와 여름철 시원한 동강 래프팅으로 전국적인 인기를 자랑합니다.',
    address: '강원특별자치도 영월군 영월읍 동강로 일원',
    tip: '잣봉 트레킹 코스에 오르면 어라연의 옥빛 물줄기가 한눈에 내려다보입니다.'
  },
  {
    id: 'youngwol-y-park',
    title: '젊은달와이파크 (Youngwol Y Park)',
    subtitle: '붉은 파빌리온이 돋보이는 복합 예술 공간',
    category: 'culture',
    tags: ['현대미술', '포토존', '붉은대나무', '감성스팟'],
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80',
    description: '강렬한 붉은색 파빌리온과 거대한 나무 예술품들이 펼쳐지는 영월 대표 현대 미술 복합 테마파크입니다.',
    detail: '조각가 최옥영의 공간 기획으로 술샘박물관을 재생하여 만든 문화예술공간으로, 붉은 대나무숲, 목성(Jupiter), 바람의 길 등 독창적인 예술 포토존이 가득합니다.',
    address: '강원특별자치도 영월군 주천면 송학주천로 1467-9',
    tip: 'SNS 인생샷 촬영지로 유명하며 카페와 전시를 함께 여유롭게 감상할 수 있습니다.'
  }
];

// 2. Render Attractions
function renderAttractions(filter = 'all') {
  const container = document.getElementById('attractions-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? attractionsData 
    : attractionsData.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => `
    <article class="place-card glass-card" data-id="${item.id}" tabindex="0">
      <div class="place-image-wrap">
        <span class="place-category-badge">${getCategoryName(item.category)}</span>
        <img class="place-image" src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="place-body">
        <h3 class="place-title">
          ${item.title}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
        </h3>
        <p class="place-subtitle">${item.subtitle}</p>
        <p class="place-desc">${item.description}</p>
        <div class="place-tags">
          ${item.tags.map(tag => `<span class="place-tag">#${tag}</span>`).join('')}
        </div>
        <div class="place-footer">
          <span>상세 정보 보기</span>
          <span>자세히 &rarr;</span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach card click handlers
  container.querySelectorAll('.place-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openModal(id);
    });
  });
}

function getCategoryName(cat) {
  switch (cat) {
    case 'nature': return '자연 비경';
    case 'history': return '역사 문화';
    case 'culture': return '예술 & 낭만';
    default: return '영월 명소';
  }
}

// 3. Interactive Modal Controls
function openModal(id) {
  const item = attractionsData.find(d => d.id === id);
  if (!item) return;

  const modal = document.getElementById('place-modal');
  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const tagline = document.getElementById('modal-tagline');
  const desc = document.getElementById('modal-desc');
  const address = document.getElementById('modal-address');
  const tip = document.getElementById('modal-tip');

  img.src = item.image;
  img.alt = item.title;
  title.textContent = item.title;
  tagline.textContent = item.subtitle;
  desc.textContent = item.detail;
  address.textContent = item.address;
  tip.textContent = item.tip;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('place-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// 4. Background Starfield Animation
function initStarCanvas() {
  const canvas = document.getElementById('star-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const stars = [];
  const starCount = Math.floor((width * height) / 3200);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005
    });
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
      star.alpha += Math.sin(Date.now() * star.speed) * 0.01;
      const alpha = Math.max(0.1, Math.min(1, star.alpha));
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// 5. Interactive Virtual Star Observatory Canvas
const constellations = [
  {
    name: '북두칠성 (Ursa Major)',
    desc: '영월 밤하늘에서 사계절 내내 북쪽 길잡이가 되어주는 국자 모양의 대표 별자리입니다.',
    points: [
      {x: 120, y: 180}, {x: 190, y: 175}, {x: 240, y: 150},
      {x: 290, y: 155}, {x: 350, y: 195}, {x: 340, y: 240},
      {x: 285, y: 235}
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,3]]
  },
  {
    name: '카시오페이아 (Cassiopeia)',
    desc: 'W자 형태로 빛나며 북극성을 찾는 데 중요한 지표가 되는 가을·겨울의 대표 별자리입니다.',
    points: [
      {x: 520, y: 100}, {x: 570, y: 140}, {x: 620, y: 110},
      {x: 670, y: 150}, {x: 720, y: 105}
    ],
    lines: [[0,1], [1,2], [2,3], [3,4]]
  },
  {
    name: '오리온자리 (Orion)',
    desc: '겨울철 영월의 맑은 하늘에서 가장 찬란하게 빛나는 삼태성과 사냥꾼 형상의 별자리입니다.',
    points: [
      {x: 240, y: 280}, {x: 360, y: 270}, {x: 290, y: 330},
      {x: 310, y: 330}, {x: 330, y: 330}, {x: 250, y: 390},
      {x: 370, y: 385}
    ],
    lines: [[0,2], [1,4], [2,3], [3,4], [2,5], [4,6], [0,1], [5,6]]
  }
];

function initObservatory() {
  const canvas = document.getElementById('observatory-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const infoTitle = document.getElementById('sky-target-name');
  const infoDesc = document.getElementById('sky-target-desc');

  let rect = canvas.getBoundingClientRect();
  let width = canvas.width = rect.width;
  let height = canvas.height = rect.height;

  // Background ambient stars inside observatory
  const bgStars = [];
  for (let i = 0; i < 150; i++) {
    bgStars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      twinkle: Math.random() * 0.05
    });
  }

  let mouse = { x: -100, y: -100 };
  let activeConstellation = constellations[0];

  function draw() {
    ctx.fillStyle = '#050814';
    ctx.fillRect(0, 0, width, height);

    // Draw ambient stars
    bgStars.forEach(s => {
      ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + Math.sin(Date.now() * s.twinkle) * 0.3})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Constellations
    constellations.forEach(c => {
      const isCurrent = (c === activeConstellation);

      // Lines
      ctx.strokeStyle = isCurrent ? 'rgba(56, 189, 248, 0.75)' : 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = isCurrent ? 2 : 1;
      c.lines.forEach(([startIdx, endIdx]) => {
        const p1 = c.points[startIdx];
        const p2 = c.points[endIdx];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Stars/Nodes
      c.points.forEach((p, idx) => {
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        const hovered = dist < 20;

        ctx.fillStyle = isCurrent ? '#38bdf8' : '#ffffff';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = isCurrent ? 12 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, hovered ? 6 : (isCurrent ? 4 : 2.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    });

    // Crosshair target cursor
    if (mouse.x > 0 && mouse.y > 0) {
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    requestAnimationFrame(draw);
  }

  canvas.addEventListener('mousemove', (e) => {
    rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;

    // Check hover proximity to constellation points
    constellations.forEach(c => {
      c.points.forEach(p => {
        if (Math.hypot(mouse.x - p.x, mouse.y - p.y) < 30) {
          activeConstellation = c;
          if (infoTitle && infoDesc) {
            infoTitle.textContent = c.name;
            infoDesc.textContent = c.desc;
          }
        }
      });
    });
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -100;
    mouse.y = -100;
  });

  window.addEventListener('resize', () => {
    rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
  });

  // Cycle constellations button
  const cycleBtn = document.getElementById('cycle-stars-btn');
  if (cycleBtn) {
    let currIdx = 0;
    cycleBtn.addEventListener('click', () => {
      currIdx = (currIdx + 1) % constellations.length;
      activeConstellation = constellations[currIdx];
      infoTitle.textContent = activeConstellation.name;
      infoDesc.textContent = activeConstellation.desc;
    });
  }

  draw();
}

// 6. Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Starfield
  initStarCanvas();

  // Initial attractions
  renderAttractions('all');

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAttractions(btn.getAttribute('data-filter'));
    });
  });

  // Observatory
  initObservatory();

  // Sticky Header scroll styling
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Modal Close
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('place-modal');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

const grid = document.getElementById('project-grid');
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.modal-close');

function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

function artFor(project){
  if(project.id==='car-classification') return `<div class="custom-art"><div class="scan-frame"></div><div class="scan-car">▰</div><div class="prediction-panel"><b>PREDICTION</b>CAR<div class="bar"><i></i></div><span>99% confidence</span><br><br>NOT CAR<div class="bar"><i style="width:1%"></i></div></div></div>`;
  if(project.id==='car-price') return `<div class="price-art"><div class="price-box"><small>PREDICTED PRICE</small><strong>SAR 72,000</strong></div><div class="price-chart"><div class="price-line"></div></div></div>`;
  return project.image ? `<img src="${project.image}" alt="${esc(project.title)} project preview" loading="lazy">` : '';
}

function render(){
  grid.innerHTML = projects.map(p=>`<article class="project-card" data-id="${p.id}">
    <div class="card-top">
      <div class="project-index">${p.number}</div>
      <h3>${esc(p.title)}</h3>
      <div class="project-category">${esc(p.category)}</div>
      <p class="project-desc">${esc(p.description)}</p>
      <a class="view-link" href="#${p.id}" data-open="${p.id}">VIEW PROJECT →</a>
    </div>
    <div class="project-art project-art-${p.id}">${artFor(p)}</div>
    <div class="card-tagline">${esc(p.tagline)}</div>
  </article>`).join('');

  grid.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openProject(a.dataset.open)}));
}

function openProject(id){
  const p=projects.find(x=>x.id===id); if(!p) return;
  const links=p.links.length ? `<div class="modal-links">${p.links.map(l=>`<a href="${l.url}" target="_blank" rel="noreferrer">${esc(l.label)} ↗</a>`).join('')}</div>` : '';
  const gallery=p.gallery.length ? `<div class="modal-gallery project-gallery">${p.gallery.map(item=>`<figure><img src="${item.src}" alt="${esc(item.label || p.title)}" loading="lazy"><figcaption>${esc(item.label || '')}</figcaption></figure>`).join('')}</div>` : `<div class="modal-gallery"><div class="custom-art" style="width:100%;height:420px"><div class="scan-frame"></div><div class="scan-car">▰</div><div class="prediction-panel"><b>PREDICTION</b>CAR<div class="bar"><i></i></div><span>99.97%</span></div></div></div>`;
  modalContent.innerHTML=`<div class="modal-eyebrow">${esc(p.category)}</div><h2 class="modal-title">${esc(p.title)}</h2><p class="modal-intro">${esc(p.description)}</p>${links}<div class="modal-body"><div>${gallery}</div><div><div class="modal-stats">${p.stats.map(s=>`<div class="stat"><b>${esc(s[0])}</b><strong>${esc(s[1])}</strong></div>`).join('')}</div><p class="modal-note">${esc(p.note)}</p></div></div>`;
  modal.showModal();
  document.body.style.overflow='hidden';
}

closeBtn.addEventListener('click',()=>modal.close());
modal.addEventListener('close',()=>document.body.style.overflow='');
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

document.addEventListener('mousemove',e=>{document.querySelector('.cursor-glow').style.left=e.clientX+'px';document.querySelector('.cursor-glow').style.top=e.clientY+'px'});

const navLinks=[...document.querySelectorAll('.nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-45% 0px -45% 0px'});
sections.forEach(s=>observer.observe(s));
render();

const root=document.documentElement;
const theme=document.querySelector('.theme');
function applyTheme(value){root.dataset.theme=value;theme.textContent=value==='dark'?'Light mode':'Dark mode';theme.setAttribute('aria-label','Switch to '+(value==='dark'?'light':'dark')+' theme');}
try{applyTheme(localStorage.getItem('portfolio-theme')==='light'?'light':'dark');}catch{applyTheme('dark');}
theme.addEventListener('click',()=>{const value=root.dataset.theme==='dark'?'light':'dark';applyTheme(value);try{localStorage.setItem('portfolio-theme',value);}catch{}});
const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const filters=document.querySelectorAll('[data-filter]');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.project').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;});}));
if('IntersectionObserver' in window){const links=[...nav.querySelectorAll('a')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));}

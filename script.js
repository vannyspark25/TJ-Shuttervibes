const m=document.querySelector('.menu'),l=document.querySelector('nav ul');
if(m)m.addEventListener('click',()=>{const o=l.classList.toggle('open');m.setAttribute('aria-expanded',o)});
const fb=document.querySelectorAll('.filters button');
fb.forEach(b=>b.addEventListener('click',()=>{fb.forEach(x=>x.setAttribute('aria-pressed',x===b));
document.querySelectorAll('.gallery [data-cat]').forEach(i=>i.style.display=(b.dataset.f==='all'||i.dataset.cat===b.dataset.f)?'':'none')}));
const f=document.querySelector('form');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const n=document.querySelector('.note');n.style.display='block';n.textContent='Thanks, '+f.name.value+'. We received your request and will reply within 24 hours.';f.reset()});

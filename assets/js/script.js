
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.querySelector('.nav ul');
  if(btn){
    btn.addEventListener('click', function(){
      if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
    });
  }
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});

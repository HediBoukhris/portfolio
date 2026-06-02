document.querySelectorAll('.card,.skillBox,.item,.heroCard').forEach(el=>{
  el.addEventListener('mousemove', e=>{
    const r=el.getBoundingClientRect();
    el.style.background=`radial-gradient(circle at ${e.clientX-r.left}px ${e.clientY-r.top}px, rgba(47,124,255,.18), rgba(10,18,38,.78) 45%, rgba(5,8,22,.76))`;
  });
  el.addEventListener('mouseleave',()=>el.style.background='');
});

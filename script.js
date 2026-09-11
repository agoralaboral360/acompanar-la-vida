const button=document.querySelector('.menu-btn');
const menu=document.querySelector('#menu');
if(button&&menu){
  button.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    button.setAttribute('aria-expanded','false');
  }));
}
const checkoutLinks={'2-3':'#','3-5':'#'};
document.querySelectorAll('[data-checkout]').forEach(button=>{
  button.addEventListener('click',event=>{
    const url=checkoutLinks[button.dataset.checkout];
    if(!url||url==='#'){
      event.preventDefault();
      alert('Falta conectar el enlace de pago de este producto.');
    }else{
      button.href=url;
    }
  });
});
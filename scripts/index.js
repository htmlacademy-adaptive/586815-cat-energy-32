var f=document.querySelector(".menu-toggle__button"),c=document.querySelector(".navigation"),d=document.querySelector(".menu-toggle");c.classList.remove("navigation--no-js");d.classList.remove("menu-toggle--no-js");f.addEventListener("click",()=>{d.classList.toggle("menu-toggle__button--active"),c.classList.toggle("navigation--show")});var t=document.querySelector(".example__button"),s=document.querySelector(".example__slider");t.addEventListener("mousedown",i=>{i.preventDefault();let r=i.clientX-t.getBoundingClientRect().left,o=s.getBoundingClientRect();function m(n){let e=n-r-o.left;e<0&&(e=0),e>o.width-t.offsetWidth&&(e=o.width-t.offsetWidth),t.style.setProperty("--button-left",`${e}px`);let g=e+t.offsetWidth/2;s.style.setProperty("--line-left",`${g}px`);let u=(e+t.offsetWidth/2)/o.width*100,a=100-u;s.style.gridTemplateColumns=`${u}% ${a}%`}function l(n){m(n.pageX)}document.addEventListener("mousemove",l),document.onmouseup=function(){document.removeEventListener("mousemove",l),document.onmouseup=null}});t.ondragstart=function(){return!1};
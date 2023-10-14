import{l as g,c as d,s as a}from"./utilidades-6105eef8.js";const r=g("carrinho")??{};function p(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function C(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function E(){Object.keys(r).length!==0&&(window.location.href="./checkout.html")}function y(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho"),n=document.getElementById("finalizar-compra");t.addEventListener("click",C),e.addEventListener("click",p),n.addEventListener("click",E)}function s(t){delete r[t],a("carrinho",r),i(),b()}function l(t){r[t]++,a("carrinho",r),i(),m(t)}function x(t){if(r[t]===1){s(t);return}r[t]--,a("carrinho",r),i(),m(t)}function m(t){document.getElementById(`quantidade-${t}`).innerText=r[t]}function u(t){const e=d.find(c=>c.id===t),n=document.getElementById("produtos-carrinho"),o=document.createElement("article"),h=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const c of h)o.classList.add(c);const f=`<button id="remover-item-${e.id}" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${e.imagem}"
      alt="Carrinho: ${e.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${e.nome}
      </p>
      <p class="text-green-700 text-lg">$${e.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${e.id}'>-</button>
        <p id='quantidade-${e.id}' class='ml-2'>${r[e.id]}</p>
        <button class='ml-2' id='incrementar-produto-${e.id}'>+</button>
    </div>`;o.innerHTML=f,n.appendChild(o),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>x(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>l(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>s(e.id))}function b(){const t=document.getElementById("produtos-carrinho");t.innerHTML="";for(const e in r)u(e)}function I(t){if(t in r){l(t);return}r[t]=1,a("carrinho",r),u(t),i()}function i(){const t=document.getElementById("preco-total");let e=0;for(const n in r)e+=d.find(o=>o.id===n).preco*r[n];t.innerText=`Total: $${e}`}export{I as a,i as b,y as i,b as r};

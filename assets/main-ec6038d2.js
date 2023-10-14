import{c as n}from"./utilidades-85c577d0.js";import{a as r,i as d,r as i,b as s}from"./menuCarrinho-3dec26cb.js";function c(){for(const o of n){const e=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${o.bebida?"bebida":"acompanhamento"}' id="card-produto-${o.id}">
        <img
        src="./assets/img/${o.imagem}"
        alt="Cafeteria"
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${o.nome}</p>
        <p class='text-sm'>$${o.preco}</p>
        <button id='adicionar-${o.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=e}for(const o of n)document.getElementById(`adicionar-${o.id}`).addEventListener("click",()=>r(o.id))}const t=document.getElementById("container-produto");function a(){const o=Array.from(t.getElementsByClassName("hidden"));for(const e of o)e.classList.remove("hidden")}function l(){a();const o=Array.from(t.getElementsByClassName("acompanhamento"));for(const e of o)e.classList.add("hidden")}function m(){a();const o=Array.from(t.getElementsByClassName("bebida"));for(const e of o)e.classList.add("hidden")}function u(){document.getElementById("exibir-todos").addEventListener("click",a),document.getElementById("exibir-acompanhamento").addEventListener("click",m),document.getElementById("exibir-bebida").addEventListener("click",l)}c();d();i();s();u();

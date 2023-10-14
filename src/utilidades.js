export const catalogo = [
    //cafe
    {
      id: "1",
      nome: "Cafe mocha",
      preco: 7,
      imagem: "cafe-1.jpg",
      bebida: false,
    },
    {
      id: "2",
      nome: "Cafe cappuccino",
      preco: 7,
      imagem: "cafe-2.jpg",
      bebida: false,
    },
    {
      id: "3",
      nome: "Cafe Expresso",
      preco: 7,
      imagem: "cafe-3.jpg",
      bebida: false,
    },
    {
      id: "4",
      nome: "Cafe macchiato",
      preco: 7,
      imagem: "cafe-4.jpg",
      bebida: false,
    },
    {
      id: "5",
      nome: "Cafe leite",
      preco: 7,
      imagem: "cafe-5.jpg",
      bebida: false,
    },
    {
      id: "6",
      nome: "Cafe duplo",
      preco: 7,
      imagem: "cafe-6.jpg",
      bebida: false,
    },
  //Salgado
  {
    id: "7",
    nome: "Pâo doce",
    preco: 5,
    imagem: "salgaldo-1.jpg",
    bebida: true,
  },
  {
    id: "8",
    nome: "Pão recheado",
    preco: 5,
    imagem: "salgaldo-2.jpg",
    bebida: true,
  },
  {
    id: "9",
    nome: "Coxinha frango",
    preco: 5,
    imagem: "salgaldo-3.jpg",
    bebida: true,
  },
  {
    id: "10",
    nome: "Beirute",
    preco: 5,
    imagem: "salgaldo-4.jpg",
    bebida: true,
  },
  {
    id: "11",
    nome: "pão cremoso",
    preco: 5,
    imagem: "salgaldo-6.jpg",
    bebida: true,
  },
  {
    id: "12",
    nome: "Pão doce leite",
    preco: 5,
    imagem: "salgaldo-6.jpg",
    bebida: true,
  },
  {
    id: "13",
    nome: "Pão de queijo",
    preco: 5,
    imagem: "salgaldo-7.jpg",
    bebida: true,
  },
  {
    id: "14",
    nome: "Pao de queijo recheado",
    preco: 5,
    imagem: "salgaldo-8.jpg",
    bebida: true,
  },
  {
    id: "15",
    nome: "x salada",
    preco: 5,
    imagem: "salgaldo-9.jpg",
    bebida: true,
  },
  {
    id: "16",
    nome: "Pao de frios",
    preco: 5,
    imagem: "salgaldo-10.jpg",
    bebida: true,
  },
  {
    id: "17",
    nome: "Empada",
    preco: 5,
    imagem: "salgaldo-11.jpg",
    bebida: true,
  },
  {
    id: "18",
    nome: "Pão mel",
    preco: 5,
    imagem: "salgaldo-12.jpg",
    bebida: true,
  },
  {
    id: "19",
    nome: "Pão mel recheado",
    preco: 5,
    imagem: "salgaldo-13.jpg",
    bebida: true,
  },
  
  //refrigerante
  {
    id: "20",
    nome: "fanta",
    preco: 7,
    imagem: "refri-1.jpg",
    bebida: false,
  },
  
  {
    id: "21",
    nome: "Schweppers",
    preco: 7,
    imagem: "refri-2.jpg",
    bebida: false,
  },
  {
    id: "22",
    nome: "Guarana",
    preco: 7,
    imagem: "refri-3.jpg",
    bebida: false,
  },
  {
    id: "23",
    nome: "Coca Cola",
    preco: 7,
    imagem: "refri-4.jpg",
    bebida: false,
  },
  
  //doce
    {
      id: "23",
      nome: "Rosca recheada",
      preco: 8,
      imagem: "doce-1.jpg",
      bebida: true,
    },
    {
      id: "24",
      nome: "Rancambole",
      preco: 8,
      imagem: "doce-2.jpg",
      bebida: true,
    },
    {
      id: "25",
      nome: "Bolo chocolate",
      preco: 8,
      imagem: "doce-3.jpg",
      bebida: true,
    },
    {
      id: "26",
      nome: "Docinhos recheados",
      preco: 8,
      imagem: "doce-4.jpg",
      bebida: true,
    },
    {
      id: "25",
      nome: "bolo abacaxi",
      preco: 8,
      imagem: "doce-5.jpg",
      bebida: true,
    },
    {
      id: "26",
      nome: "Bolo doce",
      preco: 8,
      imagem: "doce-6.jpg",
      bebida: true,
    },
  
    
  ];
  
  export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
  }
  
  export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }
  
  export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
  }
  
  export function desenharProdutoCarrinhoSimples(
    idProduto,
    idContainerHtml,
    quantidadeProduto
  ) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  
    const elementoArticle = document.createElement("article"); //<article></article>
    const articleClasses = [
      "flex",
      "bg-stone-200",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2",
      "w-96",
    ];
  
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
    //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>
  
    const cartaoProdutoCarrinho = `
      <img
        src="./assets/img/${produto.imagem}"
        alt="Carrinho: ${produto.nome}"
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${produto.nome}
        </p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
      </div>`;
    //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  }
  
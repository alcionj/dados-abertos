const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <style>
    header {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
	  color: black;
    }
  </style>
<!-- Grey with black text -->
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
		  <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
		   <a href="inicio.html">
		    <img class="bi me-2" width="40" height="32" src = "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="Dados Abertos"/>
			<span class="fs-4">Dados Abertos</span>
		   </a>
		  </div>
      <ul>
        <li><a href="inicio.html">Início</a></li>
        <li><a href="deputados.html">Deputados Federais</a></li>
        <li><a href="contato.html">Contato</a></li>
        <li><a href="sobre.html">Sobre</a></li>
      </ul>
    </header>
  </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
class productCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() { return ['img', 'titulo', 'price', 'description', 'collection']; }
  attributeChangedCallback(attr, oldValue, newVal) {
    if (attr === "img") {
        this.img = newVal;
      }
      if (attr === "titulo") {
        this.titulo = newVal;
      }
      if (attr === "price") {
        this.price = newVal;
      }
      if (attr === "description") {
        this.description = newVal;
      }
      if (attr === "collection") {
        this.collection = newVal;
      }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
            <main class="container">
                <section class="imgContainer">
                    <img src="${this.img}" alt="${this.titulo}"/>
                </section>
                <section class="details">
                    <div class="content">
                        <h2>${this.titulo} <span>${this.collection}</span></h2>
                        <p>${this.description}</p>
                        <h3>${this.price}</h3>
                        <button>Comprar</button>
                    </div>
                </section>
            </main>
            ${this.getStyles()}
        `;
    return template;
  }
  getStyles() {
    return `
            <style>
                :host {
                    --primary-background: #5a6cb2;
                    width: 80%;
                    max-width: 900px;
                    min-width: 280px;
                    margin: 0 auto;
                }
                .container {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    width: 900px;
                    height: 600px;
                    margin: 20px;
                    background-color: rgba( 0, 0, 0, 0.3 );
                    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                    backdrop-filter: blur( 3px );
                    -webkit-backdrop-filter: blur( 3px );
                    border: 1px solid rgba( 255, 255, 255, 0.18 );
                    border-radius: 10px;
                }
                .container .imgContainer {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    width: 50%;
                    height: 100%;
                    background-color: var(--primary-background);
                    border-radius: 10px;
                }
                .container .imgContainer:before {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    font-size: 8em;
                    font-weight: 800;
                    color: #000;
                    content: '${this.titulo}';
                    opacity: 0.1;
                }
                .container .imgContainer img {
                    position: relative;
                    top: 100px;
                    left: -50px;
                    width: 720px;
                    height: 480px;
                    transform: rotate(-30deg);
                }
                .container .details {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 40px;
          
                }
                .container .details h2 {
                    margin-bottom: 25px;
                    font-size: 2.5em;
                    line-height: 0.8em;
                    color: white;
                }
                .container .details h2 span {
                    font-size: 0.4em;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: white;
                }
                .container .details p {
                    max-width: 85%;
                    margin-left: 15%;
                    margin-bottom: 35px;
                    color: white;
                    font-size: 15px;
                }
                .container .details h3 {
                    float: left;
                    font-size: 2.5em;
                    color: white;
                }
                .container .details button {
                    margin-top: 35px;
                    float: right;
                    padding: 15px 20px;
                    font-size: 16px;
                    color: black;
                    letter-spacing: 1px;
                    font-weight: 600;
                    text-transform: uppercase;
                    border-radius: 40px;
                    background-color: white;
                    cursor: pointer;
                }
                @media (max-width: 1080px) {
                    .container {
                        height: auto;
                        width: auto;
                    }
                    .container .imgContainer {
                        padding: 40px;
                        width: 100%;
                        box-sizing: border-box;
                        height: auto;
                        text-align: center;
                    }
                    .container .imgContainer img {
                        left: initial;
                        width: 100%;
                        height: auto;
                        transform: rotate(0deg);
                    }
          
                    .container .details {
                        width: 100%;
                        height: auto;
                        padding: 20px;
                    }
          
                    .container .details p {
                        max-width: 100%;
                        margin-left: 0;
                    }
                }
            </style>
        `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("product-card", productCard);

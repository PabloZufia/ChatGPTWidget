(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<div>
        <input type="text" id="prompt">
        <button type="button" id="askBtn">Ask ChatGPT</button>
        <div id="answer"></div>
    </div>`;   
   
    class ChatGPTWidget extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._prompt = shadowRoot.querySelector("#prompt");
            this._answer = shadowRoot.querySelector("#answer");
            this._askBtn = shadowRoot.querySelector("#askBtn");
            this._askBtn.addEventListener("click", event => {
                this.ask();
            });           
        }

        get prompt() {
            return this.getAttribute("prompt");
        }

        set prompt(value) {
            this.setAttribute("prompt", value);
        }

        get model() {
            return this.getAttribute("model");
        }

       

class Tooltip extends HTMLElement {
    constructor() {
        super();  
        this._tooltipContainer;   
        this._tooltipText = 'Some dummy tooltip text';
    }
    
    connectedCallback() {
        if (this.hasAttribute('text')){
            this._tooltipText = this.getAttribute('text');
        }
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    //la idea de iniciar el nombre del metodo con _ es indicar que se debe usar solo dentro del componente
    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this._tooltipContainer.style.backgroundColor = 'black';
        this._tooltipContainer.style.color = 'white';
        this._tooltipContainer.style.position = 'absolute';
        this._tooltipContainer.style.zIndez = '10';
        this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.removeChild(this._tooltipContainer);
    }
}

//Recibe dos parametros 
//1 - String donde se define el HTML tag (tiene que tener al menos dos partes separadas por un -)
//2 - clase javascript que tiene la logia del elemento
customElements.define('magenta-tooltip', Tooltip);
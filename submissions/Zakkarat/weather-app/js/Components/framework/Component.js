export default class Component {
    constructor(host, props = {}) {
        this.host = host;
        this.props = props;
        this.componentWillMount();
        this.updateState();
        this._render();
    }
    componentWillMount(){};
    updateState(stateDelta) {
        this.state = Object.assign({},this.state, stateDelta);
        this._render();
    }
   _render() {
        this.host.innerHTML = "";

        const content = this.render();
        if (typeof content === 'string') {
            this.host.innerHTML = content;
        } else {
            content.map(item => this._vDomPrototypeElementToHtmlElement(item))
            .forEach(htmlElement => {
                this.host.appendChild(htmlElement);
            });
        }
    }
    /* @retunrs {strings|[*]} */
    render() {
        return ;
    }

    /*
    *
    *@param {string|HTMLElement|Object} element
    *@private
    * 
    */
    _vDomPrototypeElementToHtmlElement(element) {
        if (typeof element === 'string') {
            const htmlElement = document.createElement('div');
            htmlElement.innerHTML = element;
            return htmlElement;
        } else {
        if (element.tag) {
            if (typeof element.tag === 'function') {
                const container = document.createElement('div');
                new element.tag(container, element.props);
                return container
           } else {
               //string
                const container = document.createElement(element.tag);
                if (element.content) {
                    container.innerHTML = element.content;
                }
                ['classList', 'attributes'].forEach(item => {
                    if(!Array.isArray(element[item]) && element[item]) {
                        element[item] = [element[item]] 
                    }
                })
                if (element.classList) {
                    container.classList.add(...element.classList)
                }
                if (element.attributes) {
                    element.attributes.forEach(attributeSpec => {
                        container.setAttribute(attributeSpec.name, attributeSpec.value)
                    })
                }
                if (element.eventHandlers) {
                    element.eventHandlers.forEach(elem => {
                        container.addEventListener(elem.eventType, elem.handler)
                    });
                }
                if (element.children) {
                    element.children.forEach(el => {
                        const htmlElement =  this._vDomPrototypeElementToHtmlElement(el);
                        container.appendChild(htmlElement);
                    })
                }
                return container
           }
        }

        return element;
    }
}
}
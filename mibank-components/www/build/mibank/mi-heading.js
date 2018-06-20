/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiHeading {
    constructor() {
        this.type = "p";
    }
    render() {
        const TextElement = this.type;
        return (h(TextElement, null,
            h("slot", null)));
    }
    static get is() { return "mi-heading"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "text": {
            "type": String,
            "attr": "text"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return ""; }
}

export { MiHeading };

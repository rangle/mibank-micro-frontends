/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiSection {
    render() {
        return h("div", null, "Section");
    }
    static get is() { return "mi-section"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        }
    }; }
    static get style() { return ""; }
}

export { MiSection };

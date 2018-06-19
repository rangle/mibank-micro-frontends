/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiSection {
    render() {
        return (h("div", { class: "section" },
            h("slot", { name: "header" }),
            h("slot", null),
            h("slot", { name: "footer" })));
    }
    static get is() { return "mi-section"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ""; }
}

export { MiSection };

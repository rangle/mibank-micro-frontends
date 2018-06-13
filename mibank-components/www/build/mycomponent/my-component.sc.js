/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyComponent {
    render() {
        return (h("div", null,
            "Hello, World! I'm ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "my-component"; }
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

export { MyComponent };

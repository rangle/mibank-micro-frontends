/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiTable {
    constructor() {
        this.headings = [];
        this.data = [];
    }
    generateHeader() {
        const row = this.headings.map(item => h("th", null, item));
        return h("tr", null, row);
    }
    generateGrid() {
        const row = this.data.map(row => {
            const result = row.map(cell => h("td", null, cell));
            return h("tr", null, result);
        });
        return row;
    }
    render() {
        const header = this.generateHeader();
        const grid = this.generateGrid();
        return (h("table", null,
            header,
            grid));
    }
    static get is() { return "mi-table"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "headings": {
            "type": "Any",
            "attr": "headings"
        }
    }; }
    static get style() { return "table,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 15px;\n}\n\ntable tr:nth-child(even) {\n  background-color: #eee;\n}\ntable tr:nth-child(odd) {\n  background-color: #fff;\n}\ntable th {\n  color: white;\n  background-color: black;\n}"; }
}

export { MiTable };

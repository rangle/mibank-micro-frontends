/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiTable {
    constructor() {
        this.selectedRow = 0;
        this.headings = [];
        this.data = [];
    }
    selectRow(e) {
        this.selectedRow = e.currentTarget.rowIndex - 1;
        this.rowOnClick(e);
    }
    generateHeader() {
        const row = this.headings.map(item => h("th", null, item));
        return h("tr", null, row);
    }
    generateGrid() {
        const row = this.data.map((row, i) => {
            const result = row.map(cell => h("td", null, cell));
            return (h("tr", { class: this.selectedRow == i ? "selected" : "", onClick: e => this.selectRow(e) }, result));
        });
        return row;
    }
    render() {
        const header = this.generateHeader();
        const grid = this.generateGrid();
        return (h("table", null,
            h("slot", { name: "above" }),
            header,
            grid,
            h("slot", { name: "below" })));
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
        },
        "ref": {
            "type": "Any",
            "attr": "ref"
        },
        "rowOnClick": {
            "type": "Any",
            "attr": "row-on-click"
        },
        "selectedRow": {
            "state": true
        }
    }; }
    static get style() { return "table {\n  width: 100%;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 15px;\n}\n\ntable tr:nth-child(even) {\n  background-color: #eee;\n}\ntable tr:nth-child(odd) {\n  background-color: #fff;\n}\ntable th {\n  color: white;\n  background-color: black;\n}\n\ntr.selected {\n  border: red 3px solid;\n}"; }
}

export { MiTable };

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.table = React.createRef();
        _this.headings = props.headings;
        _this.data = props.data;
        _this.onRowSelect = props.onRowSelect;
        return _this;
    }
    Table.prototype.onClick = function (e) {
        this.onRowSelect(e.currentTarget.rowIndex);
    };
    Table.prototype.componentDidMount = function () {
        this.table.current.headings = this.headings;
        this.table.current.data = this.data;
        this.table.current.rowOnClick = this.onClick.bind(this);
    };
    Table.prototype.render = function () {
        return (React.createElement("mi-table", { ref: this.table, headings: this.headings, data: this.data }));
    };
    return Table;
}(React.Component));
exports["default"] = Table;

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
require("./App.css");
var pie_chart_1 = require("./components/pie-chart");
var table_1 = require("./components/table");
var components = require("mibank-components");
components.defineCustomElements(window);
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [[20, 40, 90], [10, 90, 40]];
        _this.backgroundColor = ["pink", "blue", "red"];
        _this.state = {
            selected: _this.data[0]
        };
        _this.updateSelected = _this.updateSelected.bind(_this);
        return _this;
    }
    App.prototype.lookupData = function (index) {
        return this.data[index - 1];
    };
    App.prototype.updateSelected = function (e) {
        this.setState({
            selected: this.lookupData(e)
        });
    };
    App.prototype.render = function () {
        var data = this.state.selected;
        var backgroundColor = this.backgroundColor;
        return (React.createElement("div", { className: "App" },
            React.createElement("mi-section", null,
                React.createElement("mi-heading", { type: "h1" }, "TEST"),
                React.createElement(table_1["default"], { headings: ["Pink", "Blue", "Red"], data: this.data, onRowSelect: this.updateSelected }),
                React.createElement(pie_chart_1["default"], { dataSet: [{ data: data, backgroundColor: backgroundColor }], labels: ["Pink", "Blue", "Red"] }))));
    };
    return App;
}(React.Component));
exports["default"] = App;

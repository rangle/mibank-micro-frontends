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
var PieChart = /** @class */ (function (_super) {
    __extends(PieChart, _super);
    function PieChart(props) {
        var _this = _super.call(this, props) || this;
        _this.pieGraph = React.createRef();
        _this.dataSet = props.dataSet;
        _this.labels = props.labels;
        return _this;
    }
    PieChart.prototype.componentDidUpdate = function () {
        this.pieGraph.current.updateChart({
            datasets: this.props.dataSet,
            labels: this.props.labels
        });
    };
    PieChart.prototype.componentDidMount = function () {
        this.pieGraph.current.data = {
            datasets: this.dataSet,
            labels: this.labels
        };
    };
    PieChart.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("mi-chart-js", { type: "pie", ref: this.pieGraph })));
    };
    return PieChart;
}(React.Component));
exports["default"] = PieChart;

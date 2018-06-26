'use strict';

var React = require('react');
var components = require('mibank-components');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
                React.createElement(Table, { headings: ["Pink", "Blue", "Red"], data: this.data, onRowSelect: this.updateSelected }),
                React.createElement(PieChart, { dataSet: [{ data: data, backgroundColor: backgroundColor }], labels: ["Pink", "Blue", "Red"] }))));
    };
    return App;
}(React.Component));

module.exports = App;

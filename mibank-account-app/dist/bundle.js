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
var AccountData = /** @class */ (function () {
    function AccountData() {
    }
    AccountData.prototype.generateTable = function () {
        var labels = ["Savings", "Taxes", "RRSP"];
        return this.data.map(function (d, i) { return [labels[i]].concat(d); });
    };
    AccountData.prototype.generateLabels = function (dataIndex) {
        var labels = this.spending.map(function (d, i) {
            return d.labels;
        });
        return labels[dataIndex];
    };
    AccountData.prototype.generateDataset = function (dataIndex) {
        var colours = [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)"
        ];
        var data = this.spending.map(function (d, i) {
            return d.amounts;
        });
        return [{ data: data[dataIndex], backgroundColor: colours }];
    };
    return AccountData;
}());
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.accountData = new AccountData();
        _this.accountData.headings = props.headings;
        _this.accountData.data = props.data;
        _this.accountData.spending = props.spending;
        _this.state = {
            selected: 0
        };
        _this.updateSelected = _this.updateSelected.bind(_this);
        return _this;
    }
    App.prototype.updateSelected = function (index) {
        this.setState({ selected: index - 1 });
    };
    App.prototype.render = function () {
        return (React.createElement("div", { className: "Account" },
            React.createElement("mi-section", null,
                React.createElement("mi-grid", null,
                    React.createElement("div", { slot: "header" },
                        React.createElement("mi-heading", { type: "h2" }, "Account Balances")),
                    React.createElement(Table, { headings: this.accountData.headings, data: this.accountData.generateTable(), onRowSelect: this.updateSelected }),
                    React.createElement("div", { slot: "sidebar" },
                        React.createElement(PieChart, { dataSet: this.accountData.generateDataset(this.state.selected), labels: this.accountData.generateLabels(this.state.selected) }))))));
    };
    return App;
}(React.Component));

module.exports = App;

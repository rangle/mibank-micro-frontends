import { Component, Prop, State } from "@stencil/core";

export interface HTMLTableElement extends HTMLElement {
  headings?: Array<string>;
  data?: Array<Array<any>>;
}

@Component({
  tag: "mi-table",
  styleUrl: "mi-table.css",
  shadow: true
})
export class MiTable {
  @State() selectedRow: number = 0;
  @Prop() headings: Array<string> = [];
  @Prop() data: Array<any> = [];
  @Prop() rowOnClick?: Function;
  @Prop() ref?: any;

  private selectRow(e) {
    this.selectedRow = e.currentTarget.rowIndex - 1;
    this.rowOnClick(e);
  }

  private generateHeader(): JSX.Element {
    const row = this.headings.map(item => <th>{item}</th>);
    return <tr>{row}</tr>;
  }

  private generateGrid(): JSX.Element {
    const row = this.data.map((row, i) => {
      const result = row.map(cell => <td>{cell}</td>);
      return (
        <tr
          class={this.selectedRow == i ? "selected" : ""}
          onClick={e => this.selectRow(e)}
        >
          {result}
        </tr>
      );
    });
    return row;
  }

  render() {
    const header = this.generateHeader();
    const grid = this.generateGrid();

    return (
      <table>
        <slot name="above" />
        {header}
        {grid}
        <slot name="below" />
      </table>
    );
  }
}

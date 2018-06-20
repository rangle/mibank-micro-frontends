import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-table",
  styleUrl: "mi-table.css",
  shadow: true
})
export class MiTable {
  @Prop() headings: Array<string> = [];
  @Prop() data: Array<any> = [];

  private generateHeader(): JSX.Element {
    const row = this.headings.map(item => <th>{item}</th>);
    return <tr>{row}</tr>;
  }

  private generateGrid(): JSX.Element {
    const row = this.data.map(row => {
      const result = row.map(cell => <td>{cell}</td>);
      return <tr>{result}</tr>;
    });
    return row;
  }

  render() {
    const header = this.generateHeader();
    const grid = this.generateGrid();

    return (
      <table>
        {header}
        {grid}
      </table>
    );
  }
}

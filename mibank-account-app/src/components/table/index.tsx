import * as React from "react";

class Table extends React.Component {
  private headings;
  private data;
  private table;
  constructor(props) {
    super(props);
    this.table = React.createRef();
    this.headings = ["Account Name", "Amount"];
    this.data = [
      ["Account 1", "$1000"],
      ["Account 2", "$2000"],
      ["Account 3", "$3000"]
    ];
  }
  public componentDidMount() {
    this.table.current.headings = this.headings;
    this.table.current.data = this.data;
  }
  public render() {
    return (
      <mi-table ref={this.table} headings={this.headings} data={this.data} />
    );
  }
}

export default Table;

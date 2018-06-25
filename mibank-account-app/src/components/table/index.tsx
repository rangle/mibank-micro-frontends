import * as React from "react";

export interface TableProps {
  data: Array<any>;
  headings: Array<string>;
}

class Table extends React.Component<TableProps> {
  private table;
  private headings;
  private data;
  constructor(props) {
    super(props);
    this.table = React.createRef();
    this.headings = props.headings;
    this.data = props.data;
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

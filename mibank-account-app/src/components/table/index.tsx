import * as React from "react";

export interface TableProps {
  data: Array<any>;
  headings: Array<string>;
  onRowSelect?: Function;
}

class Table extends React.Component<TableProps> {
  private table;
  private headings;
  private data;
  private onRowSelect;
  constructor(props) {
    super(props);
    this.table = React.createRef();
    this.headings = props.headings;
    this.data = props.data;
    this.onRowSelect = props.onRowSelect;
  }

  private onClick(e) {
    this.onRowSelect(e.currentTarget.rowIndex);
  }

  public componentDidMount() {
    this.table.current.headings = this.headings;
    this.table.current.data = this.data;
    this.table.current.rowOnClick = this.onClick.bind(this);
  }
  public render() {
    return (
      <mi-table ref={this.table} headings={this.headings} data={this.data} />
    );
  }
}

export default Table;

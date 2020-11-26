import React, { useState } from 'react';
import './invest-table.scss';
import { MDBDataTable } from 'mdbreact';

const InvestTable = ({title, data, columns}) => {
  React.useEffect(() => {
    tempData.rows = data;
    settableData(tempData)
  }, [data]);
  const [tableData, settableData] = useState({})
  const tempData = {
    columns: columns,
    rows: []
  };
  // settableData(tempData)
  return (
    <div className="invest-table">
      <p className="title">{title}</p>
      <MDBDataTable
        paging={false}
        data={tableData}
      />
    </div>)
}

export default InvestTable;
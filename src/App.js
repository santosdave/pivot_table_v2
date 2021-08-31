import React from 'react';
import './App.css';

import PivotTable from './components/PivotTable';
import data from '../src/data';
const columnDimensions=[
  { name: 'State', property: 'state' }
];
const rowDimensions=[
  { name: 'Category', property: 'category' },
  { name: 'Sub-Category', property: 'subCategory' }
];
const MainTitle = {
  column: 'States',
  row: 'Products'
};
const getColumnDimensionValues=()=>{
  columnDimensions.map(column=>{
    const { property } = column;
    const allValues = data.map((record) => record[property]);
    const values = Array.from(new Set(allValues));

    return { column, values };
  })
 
}
function App() {
  
  return (
    <div className="">
      <PivotTable Title={MainTitle} rowDimensions={rowDimensions} columnDimensions={columnDimensions} data={data}/>
    </div>
  );
}

export default App;

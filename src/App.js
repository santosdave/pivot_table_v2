import React from 'react';
import './App.css';

import PivotTable from './components/PivotTable';
import data from '../src/data';
const salesData=data.sort((a, b) => parseFloat(a.sales) - parseFloat(b.sales));
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
const metrics= "sales";
const fullValues = salesData.map(x=> x.state);
const values=Array.from(new Set(fullValues))
const columnDimensionValues= values;

function App() {
  
  return (
    <div className="">
      <PivotTable Title={MainTitle} rowDimensions={rowDimensions} columnValues={columnDimensionValues} metrics={metrics} columnDimensions={columnDimensions} data={data}/>
      
    </div>
  );
}


export default App;

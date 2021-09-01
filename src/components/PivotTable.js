import React  from 'react';
import Body from './Body/Body';
import Head from './Head/Head';
function PivotTable({Title,rowDimensions,columnDimensions,data,columnValues,metrics}) {
    return (
        <div>
            <Head Title={Title} columnDimensions={columnDimensions} columnValues={columnValues} rowDimensions={rowDimensions}/>
            <Body columnDimensions={columnDimensions} rowDimensions={rowDimensions} data={data} metrics={metrics}/>
        </div>
    )
}

export default PivotTable

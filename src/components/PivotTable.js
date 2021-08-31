import React  from 'react';
import Body from './Body/Body';
import Head from './Head/Head';
function PivotTable({Title,rowDimensions,columnDimensions,data}) {
    return (
        <div>
            <Head Title={Title} columnDimensions={columnDimensions} rowDimensions={rowDimensions}/>
            <Body columnDimensions={columnDimensions} rowDimensions={rowDimensions} data={data}/>
        </div>
    )
}

export default PivotTable

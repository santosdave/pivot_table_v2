import React from 'react';
import '../../styles/Head.css';
function Head({Title, rowDimensions, columnDimensions}) {
    
    return (
        <div className={'head'}>
            <tr className={'mainTitle'}>
                <th  colSpan={rowDimensions.length}>
                    {Title.row}
                </th>
                <th colSpan={columnDimensions.values.length}>
                     {Title.column}
                </th>
            </tr>
            <tr className={'subTitle'}>
                {rowDimensions.map((row)=>
                    <th className={'subTitle-row'} key={row.name}>{row.name}</th>
                )}
                 {columnDimensions.map((column)=>
                    <th className={'subTitle-row'} key={column.name}>{column.name}</th>
                )}
                
            </tr>
        </div>
    )
}

export default Head

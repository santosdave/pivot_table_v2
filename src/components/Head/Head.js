import React from 'react';
import '../../styles/Head.css';
function Head({Title, rowDimensions, columnDimensions,columnValues}) {
    
    return (
        <div className={'head'}>
            <tr className={'mainTitle'}>
                <th  colSpan={rowDimensions.length}>
                    {Title.row}
                </th>
                
                <th colSpan={columnValues.length}>
                     {Title.column}
                </th>
                
                
            </tr>
            <tr className={'subTitle'}>
                {rowDimensions.map((row)=>
                    <th className={'subTitle-row'} key={row.name}>{row.name}</th>
                )}
             
                {columnValues.map((column)=>
                    
                    <th className={'subTitle-column'} key={column}>{column}</th>
                )}
               
                 
                
            </tr>
        </div>
    )
}

export default Head

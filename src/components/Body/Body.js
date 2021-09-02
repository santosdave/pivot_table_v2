import React from 'react';
import "../../styles/Body.css"


function Body({rowDimensions,columnDimensions,data,metrics}) {
    
    const finalizeAggregate=(value)=>{
        const roundingOff = Math.round(value);
        const thousands = 3;
        const digits = String(roundingOff).split('');
        for (let i = digits.length - thousands; i > 0; i -= thousands) {
        digits.splice(i, 0, ',');
        }
        return digits.join('');
    }
    
    const Aggregate=()=>{
        const value=data.length > 0
        ?data
            .map(item=>item[metrics])
            .reduce( (previousValue, currentValue) =>
            previousValue + currentValue)
        : ''
        return finalizeAggregate(value)
    }
    console.log(Aggregate());
    const [firstDimension, ...remainingRows] = rowDimensions;
    return (
        <div className="body">
            
        </div>
    )
}

export default Body

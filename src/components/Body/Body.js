import React from 'react';
import "../../styles/Body.css"


function Body({rowDimensions,columnDimensions,data,metrics}) {
  /*   const aggregate={
        previousValue=data[metrics],
        currentValue=data[metrics],
        currentIndex=0,
        array=data[metrics],
    } */
    const finalizeAggregate=(value)=>{
        const roundingOff = Math.round(value);
        const thousands = 3;
        const digits = String(roundingOff).split('');
        for (let i = digits.length - thousands; i > 0; i -= thousands) {
        digits.splice(i, 0, ',');
        }
        return digits.join('');
    }
    console.log(finalizeAggregate())
    const [firstDimension, ...remainingRows] = rowDimensions;
    return (
        <div className="body">
            
        </div>
    )
}

export default Body

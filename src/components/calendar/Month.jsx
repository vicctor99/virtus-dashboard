import Day from "./Day";
import React from "react";


const Month = ({month}) => {
    return (
        <div className="flex-1 grid grid-cols-7 grid-rows-5 mb-5 border">
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i}/>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Month;
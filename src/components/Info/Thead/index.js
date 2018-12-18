import React from 'react'
import './style.scss'

function Thead(props) {

    const lables = props.currencyList.map((item,i) => <div key={item + "label"} className="thead__label">{item}</div>)

    return (
        <div className="thead">
            <div  className="thead__label">DATE</div>
            {lables}
        </div>
    )

}

export default Thead
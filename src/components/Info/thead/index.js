import React from 'react'
import style from 'style.module.css'

function Thead(props) {

    const tmp = props.currencyList.map((item,i) => <div key={item} className="thead__label">{item}</div>)

    return (
        <div className="thead">
            <div  className={style["thead__label"]}>DATE</div>
            {tmp}
        </div>
    )

}

export default Thead
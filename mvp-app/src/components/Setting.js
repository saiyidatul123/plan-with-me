import React from 'react'
import  './Setting.css';

function Setting(props) {
    return (props.trigger) ? (
        <div className="popup">
           <div className="inner-popup">
                <button className="close-button" onClick={()=>props.setTrigger(false)}>X</button>
                {props.children}
                <span className="setting-txt"><h5>TIMER SETTING </h5></span>
            </div>
            <div>
                
            </div>

        </div>
        ) : "";
}

export default Setting

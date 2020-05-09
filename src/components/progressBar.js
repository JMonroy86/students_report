import React from 'react';

const ProgressBar = (props) => {
    console.log(props.myprogress)
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: props.myprogress+"%" }} aria-valuenow={props.myprogress} aria-valuemin="0" aria-valuemax="100">{props.myprogress + "%"}</div>
        </div>
    )
}
export default ProgressBar;
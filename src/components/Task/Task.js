import React, { Fragment } from 'react'

function Task({ text, status, index, deleteFunction, changeStatus }) {
    return (
        <Fragment>
            <span className={status} onClick={() => changeStatus(index)}>{text}</span><i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteFunction(index)}></i>
        </Fragment>
    )
}

export default Task

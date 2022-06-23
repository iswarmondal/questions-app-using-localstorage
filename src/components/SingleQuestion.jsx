import React from 'react'
import { Link } from 'react-router-dom'

function SingleQuestion(props) {
    return (
        <>
            <div className='flex justify-between my-3'>
                <div className="select-none">
                    {props.question.question}
                </div>
                <div>
                    <Link className='text-violet-500 mx-1' to={{ pathname: `/edit?id=${props.index}`, query: { id: props.index } }}>Edit</Link>
                    <Link className='text-red-500 mx-1' to="/">Delete</Link>
                </div>
            </div>
            <hr />
        </>
    )
}

export default SingleQuestion
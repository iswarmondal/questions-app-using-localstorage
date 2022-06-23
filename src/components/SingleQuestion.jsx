import React from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContext } from '../utils/QuestionsContext';

function SingleQuestion(props) {
    const [, , handleDelete] = React.useContext(QuestionsContext);

    return (
        <>
            <div className='flex justify-between my-3'>
                <div className="select-none">
                    {props.question.question}
                </div>
                <div>
                    <Link className='text-violet-500 mx-1' to={{ pathname: `/edit/${props.index}`, query: { id: props.index } }}>Edit</Link>
                    <div className='text-red-500 mx-1 cursor-pointer hover:underline' onClick={() => { handleDelete(props.index) }}>Delete</div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default SingleQuestion
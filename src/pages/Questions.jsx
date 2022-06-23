import React from 'react'
import { Link } from 'react-router-dom'
import SingleQuestion from '../components/SingleQuestion'
import { QuestionsContext } from '../utils/QuestionsContext';

function Questions() {

    const [questionsData, ,] = React.useContext(QuestionsContext);

    return (
        <>
            <div className="w-full h-20 bg-zinc-800 flex justify-evenly items-center text-gray-200">
                <h1 className='text-xl font-semibold select-none'>Questions</h1>
                <Link to="add">
                    <p className='hover:underline hover:cursor-pointer'>+ add new</p>
                </Link>
            </div>
            <div className="w-full p-10">
                {questionsData?.map((question, index) => {
                    return <SingleQuestion question={question} index={index} key={index} />
                })}
            </div>
        </>
    )
}

export default Questions
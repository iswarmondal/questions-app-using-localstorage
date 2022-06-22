import React from 'react'
import SingleQuestion from '../components/SingleQuestion'
import { data } from '../store/data'

function Questions() {
    return (
        <>
            <div className="w-full h-20 bg-zinc-800 flex justify-evenly items-center text-gray-200">
                <h1 className='text-xl font-semibold select-none'>Questions</h1>
                <p className='hover:underline hover:cursor-pointer'>+ add new</p>
            </div>
            <div className="w-full p-10">
                {data.map((question, index) => {
                    return <SingleQuestion question={question} index={index} key={index} />
                })}
            </div>
        </>
    )
}

export default Questions
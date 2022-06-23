import React from 'react'
import { QuestionsContext } from '../utils/QuestionsContext';

function AddQuestion() {
    const [question, setQuestion] = React.useState('')
    const [options, setOptions] = React.useState([{ "option": "" }, { "option": "" }])

    const [questionsData, handleAddition] = React.useContext(QuestionsContext);

    const handleAddOption = (e) => {
        e.preventDefault()
        setOptions([...options, { "option": "" }])
    }

    const handleDeleteOption = (i) => {
        const list = [...options];
        list.splice(i, 1);
        setOptions(list);
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...options];
        list[index][name] = value;
        setOptions(list);
    }

    const handleSubmit = () => {
        console.log(typeof questionsData);
        handleAddition([...questionsData, { question, options }]);
    }

    return (
        <>
            <div className='w-full h-14 flex items-center justify-around bg-slate-800 text-white'>
                <h2 className='font-semibold text-xl select-none'>
                    Add a New Question
                </h2>
                <div className='flex'>
                    <button className=' mr-5 font-medium text-base hover:cursor-pointer hover:underline'>
                        Cancel
                    </button>
                    <button
                        className='py-2 px-5 rounded bg-slate-600 hover:bg-slate-700 text-white'
                        onClick={(e) => { handleSubmit(e) }}
                    >
                        Save
                    </button>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-center items-center mt-7'>
                <form className='w-[70vw] flex flex-col items-center'>
                    <div className='w-full mt-[5vh]'>
                        <label htmlFor="title" className='text-2xl font-semibold'>Question Title</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full border-4 border-slate-500 p-2"
                            onChange={(e) => { setQuestion(e.target.value) }}
                        />
                    </div>
                    <div className='w-full mt-[25vh]'>
                        <label htmlFor="options" className='text-xl font-semibold'>
                            Options
                        </label>

                        {options.map((opt, index) => {
                            return (
                                <div className='flex' key={index}>
                                    <input
                                        type="text"
                                        id="options"
                                        className="w-full my-1 p-2 border-4 border-slate-500"
                                        placeholder='option...'
                                        value={opt.option}
                                        name='option'
                                        onChange={(e) => { handleChange(e, index) }}
                                    />
                                    {
                                        options.length > 1
                                        &&
                                        <div className='ml-3 flex items-center cursor-pointer text-yellow-600' onClick={() => handleDeleteOption(index)}>Delete</div>
                                    }
                                </div>
                            )
                        })}
                    </div>

                    {options.length < 6 && (
                        <button className='w-full mt-[4vh] py-2 px-5 rounded text-blue-500' onClick={handleAddOption}>
                            + Add Option
                        </button>
                    )}

                </form>
            </div>
        </>
    )
}

export default AddQuestion
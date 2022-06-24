import React from 'react'

export const QuestionsContext = React.createContext();

export const QuestionsProvider = ({ children }) => {
    const [questionsData, setQuestionsData] = React.useState([]);

    // get the data from localstorage
    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('questionData')) || [];
        setQuestionsData(data);
    }, [])

    // save the data to localstorage
    const handleAddition = (payload) => {
        console.log(payload);
        localStorage.setItem("questionData", JSON.stringify(payload));
        setQuestionsData(payload)
    }

    // delete the data from localstorage
    const handleDelete = (index) => {
        const list = [...questionsData];
        list.splice(index, 1);
        setQuestionsData(list);
        localStorage.setItem("questionData", JSON.stringify(list));
    }

    // edit the data from localstorage
    const handleEdit = (index, payload) => {
        const list = [...questionsData];
        list[index] = payload;
        setQuestionsData(list);
    }

    return (
        <QuestionsContext.Provider value={[questionsData, handleAddition, handleDelete, handleEdit]}>
            {children}
        </QuestionsContext.Provider>
    )

}
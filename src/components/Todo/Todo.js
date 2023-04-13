import { useState } from 'react';
import './Todo.css';

function Todo({ tarefas, updateTarefas }) {

    const [inputValue, setInputValue] = useState("");
    const [emptyInput, setEmptyInput] = useState("");

    const createTodo = () => {

        if ( inputValue === "" ) { // Verifica se algo foi digitado no input de adição.
            console.log("Nada foi digitado");
            setEmptyInput("emptyInput");
        } else {
            tarefas = [...tarefas, { id_tarefa: 123, descricao: inputValue, data_realizado: null }];
            updateTarefas(tarefas);
            setInputValue("");
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setEmptyInput("");
    }

    const handlePressEnter = (event) => {
        if (event.keyCode === 13) {
            createTodo();
        }
    }

    return (

        <div className={`todo ${emptyInput}`}>

            <input  type='text'
                    placeholder='Adicione uma tarefa...'
                    className='todo-input'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handlePressEnter}
            />

            <div    className='todoClose' onClick={createTodo}/>

        </div>

    );
}

export default Todo;
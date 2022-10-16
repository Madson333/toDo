import { useState } from "react"
import { WrapSearch } from "./styles";
import { PlusCircle } from "phosphor-react"
import { ITask } from "..";

interface task {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}


export function Search({ tasks, setTasks }: task) {

  const [title, setTitle] = useState('')



  function handleChangeTitle(text: string) {
    setTitle(text)
  }

  function handleNewTask() {
    const newTask = {
      id: Math.random(),
      title,
      checked: false
    }

    const taskList = [...tasks, newTask]
    setTasks(taskList)
    setTitle('')
    localStorage.setItem('@ToDoList', JSON.stringify(taskList))
  }


  return (
    <WrapSearch>
      <input
        type="text"
        value={title}
        onChange={(event) => handleChangeTitle(event.target.value)} placeholder="Adicione uma nova tarefa"
      />
      <button onClick={handleNewTask} disabled={!title}>
        Criar
        {<PlusCircle size={16} />}
      </button>
    </WrapSearch>

  )
}
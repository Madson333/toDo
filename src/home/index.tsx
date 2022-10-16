import { HomeContainer } from "./styles";
import { useEffect, useState } from "react";

import { Tasks } from "./Tasks";
import { Search } from "./Search";

export interface ITask {
  id: number,
  title: string,
  checked: boolean
}

export function Home() {

  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    getListTasks()
  }, [])

  function getListTasks() {
    const storageList = localStorage.getItem('@ToDoList')

    if (storageList) {
      setTasks(JSON.parse(storageList))
    }
  }



  return (
    <HomeContainer>

      <Search tasks={tasks} setTasks={setTasks} />

      <Tasks tasks={tasks} setTasks={setTasks} />


    </HomeContainer >
  )
}
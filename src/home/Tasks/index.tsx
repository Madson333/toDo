import {
  WrapList,
  WrapInfo,
  Info,
  List,
  Task,
  Title,
  Initial,
  Completed,
} from "./styles";
import Clipboard from "../../assets/clipboard.svg"
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Trash } from "phosphor-react"
import { useState } from "react";
import { ITask } from "..";


interface task {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}


export function Tasks({ tasks, setTasks }: task) {

  const [showError, setShowError] = useState(false)


  function hangeChangeTask(taskId: number) {
    const newTasks =
      tasks.map(task =>
        task.id === taskId ?
          { ...task, checked: !task.checked }
          :
          { ...task }
      )

    setTasks(newTasks)
    localStorage.setItem('@ToDoList', JSON.stringify(newTasks))
  }


  function hangeDeleteTask(taskId: number) {
    if (tasks.find(task => task.id === taskId)?.checked) return setShowError(true)

    if (!confirm('Você tem certeza que deseja excluir?')) return

    const newTasks =
      tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
    localStorage.setItem('@ToDoList', JSON.stringify(newTasks))
  }




  return (

    <>

      <WrapList>
        <WrapInfo>
          <Info>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </Info>
          <Completed>
            <strong>Concluídas</strong>
            <span>{tasks.filter(task => task.checked).length} de {tasks.length}</span>
          </Completed>
        </WrapInfo>

        <List>
          {tasks.length > 0 ? tasks.map(task => (
            <Task key={task.id}>
              <div>
                <Checkbox
                  color="secondary"
                  checked={task.checked}
                  onClick={() => hangeChangeTask(task.id)}
                />
              </div>
              <Title checked={task.checked}>{task.title}</Title>
              <div onClick={() => hangeDeleteTask(task.id)}>
                <Trash />
              </div>
            </Task>
          )) : <Initial>
            <img src={Clipboard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </Initial>}
        </List>
      </WrapList>

      <Snackbar
        open={showError}
        autoHideDuration={2000}
        onClose={() => setShowError(false)}
        message="Você não pode excluir uma tarefa concluida"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          Você não pode excluir uma tarefa concluida
        </Alert>
      </Snackbar>

    </>
  )

}
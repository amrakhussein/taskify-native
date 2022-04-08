import { useState } from 'react'
import TaskifyHome from '../screens/TaskifyHome'
// import { SafeAreaView } from 'react-native-web'
// import colors from './styles/colors'
import todos from '../tasksData'
import TheLayout from './AppLayout/TheLayout'

export default function App() {
  // const initialized = tasks

  const [task, setTask] = useState(todos)

  console.log('tasks: ', task)
  const { length: NumberOfTasks } = task
  console.log('NumberOfTasks: ', NumberOfTasks)

  const addTask = (e) => {
    console.log('e: ', e)
  }

  return (
    <TheLayout count={4}>
      <TaskifyHome />
    </TheLayout>
  )
}

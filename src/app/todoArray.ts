export interface Task {
  title: string
  text: string
  deadline: string
  done: boolean
}

export interface ToDo {
  Id: number
  active: boolean
  name: string
  task: Task[]
}
  
export const ADD = 'todo/ADD'
export const DELETE = 'todo/DELETE'
export const TOGGLE_COMPLETED = 'todo/TOGGLE_COMPLETED'

export const createActionAdd = (text) => ({
  type: ADD,
  payload: { text }
})
export const createActionDelete = (taskId) => ({
  type: DELETE,
  payload: { taskId }
})
export const createActionToggleCompleted = (taskId) => ({
  type: TOGGLE_COMPLETED,
  payload: { taskId }
})

const initialState = {
  newTaskId: 0,
  tasks: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        newTaskId: state.newTaskId + 1,
        tasks: state.tasks.concat({
          id: state.newTaskId,
          text: action.payload.text,
          isCompleted: false
        })
      }
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId)
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.taskId) return task
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        })
      }
    default:
      return state
  }
}

export default reducer

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { createActionAdd, createActionDelete, createActionToggleCompleted } from './state/todo'

export const ToDo = () => {
  const [newTaskText, setNewTaskText] = React.useState('')

  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.todo.tasks)

  const addTaskHandler = React.useCallback((e) => {
    e.preventDefault()
    if (newTaskText === '') return
    dispatch(createActionAdd(newTaskText))
    setNewTaskText('')
  }, [dispatch, newTaskText])

  const deleteTaskHandler = React.useCallback((taskId) => {
    dispatch(createActionDelete(taskId))
  }, [dispatch])

  const toggleCompletedHandler = React.useCallback((taskId) => {
    dispatch(createActionToggleCompleted(taskId))
  }, [dispatch])

  return (
    <div
      style={{
        width: 320,
        margin: '0 auto'
      }}
    >
      <form
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
        onSubmit={addTaskHandler}
      >
        <input
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder={'Type new to do item...'}
        />
        <button>
          ADD
        </button>
      </form>
      <ol>
        {
          tasks && tasks.map((task) => {
            return (
              <li
                key={task.id}
              >
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      textDecoration: task.isCompleted ? 'line-through' : 'none'
                    }}
                    onClick={() => toggleCompletedHandler(task.id)}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={() => deleteTaskHandler(task.id)}
                  >
                    DELETE
                  </button>
                </div>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default ToDo

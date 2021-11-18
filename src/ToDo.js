import React from 'react'

export const ToDo = () => {
  const tasks = [
    {
      id: 0,
      text: 'Wynieś śmieci',
      isCompleted: false
    },
    {
      id: 1,
      text: 'Zmyj naczynia',
      isCompleted: true
    }
  ]

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
      >
        <input
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
                  >
                    {task.text}
                  </span>
                  <button>
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

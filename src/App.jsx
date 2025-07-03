import { useState } from 'react'
import './App.css'

// Create, Read, Update, Delete

function App() {
  const [todoList, setTodoList] = useState([
    {id: 0, contents: '밥 먹기'},
    {id: 1, contents: '코딩 공부하기'},
    {id: 2, contents: '잠 자기'}
  ])

  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

function TodoInput({todoList, setTodoList}) {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={()=>{
        const newTodo = {id: Number(new Date()), contents: inputValue}

        const newTodoList = [...todoList, newTodo]
        setTodoList(newTodoList)
        setInputValue('')
      }}
      >추가하기</button>
    </>
  )
}

// 키 속성은 맵 안에 들어가야함.
function TodoList({todoList, setTodoList}) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>
      ))}
    </ul>
  )
}

function Todo ({todo, setTodoList}) {
  const [inputValue, setInputValue] = useState('')
  console.log(todo.contents, inputValue)
  return (
    <li>
      {todo.contents}
      <input 
        value={inputValue} 
        onChange={(event) => setInputValue(event.target.value)} 
      />
      <button onClick={() => {
        setTodoList((prev) => prev.map((el) => el.id === todo.id ? {...el, contents:inputValue} : el))
      }}>수정</button>
      <button 
        onClick={()=>{
        setTodoList(prev => {
          return prev.filter((el) => el.id !== todo.id)
        })
      }}
    >
      삭제
    </button>
  </li>
  )
}

export default App

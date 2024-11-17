import {  useState } from "react";


export default function Todo() {
  const [items,setItems] = useState([])
  const [filtered,setFiltered] = useState("all")
  const [todoItem ,setTodoItem] = useState("")
  
console.log(items)
  function handleFormSubmit(e){
    e.preventDefault()
    setItems([...items,{name:todoItem,id:Date. now() + Math.random(),status:false}])
    setTodoItem("")
  }
  function handleDoneItem(itemDone){
    setItems(item => item.map(item => item.id === itemDone.id ? { ...item, status: !item.status } : item ))
    
  }
  function handleDeleteItem(id){
    setItems(item => item.filter(item => item.id !== id))
  }

  const filteredItems = items.filter(item =>{
    if(filtered === "done") return item.status === true
    if(filtered === "active") return item.status === false
    return true
  })


  return (
    <div className="min-h-screen  p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mb-6">
        <h1 className="text-2xl font-semibold text-center mb-4">Our Todo</h1>
        <form onSubmit={handleFormSubmit} className="flex gap-2">
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-red-300 text-white p-2 rounded "
          >
            Add
          </button>
        </form>
      </div>
  
      <div className="mb-6">
        <ul className="space-y-4">
          {items &&
            filteredItems.map((item) => (
              <li
                key={item.id}
                className={`flex justify-between items-center p-4 rounded-lg shadow-md border ${
                  item.status
                    ? 'bg-green-100 line-through text-gray-600'
                    : 'bg-white text-gray-800'
                }`}
              >
                <button
                  className="flex-1 text-left"
                  onClick={() => handleDoneItem(item)}
                >
                  {item.name}
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded ml-2 hover:bg-red-600"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
  
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setFiltered('all')}
          className="px-4 py-2 border rounded-md hover:bg-gray-200"
        >
          All
        </button>
        <button
          onClick={() => setFiltered('active')}
          className="px-4 py-2 border rounded-md hover:bg-gray-200"
        >
          Active
        </button>
        <button
          onClick={() => setFiltered('done')}
          className="px-4 py-2 border rounded-md hover:bg-gray-200"
        >
          Done
        </button>
      </div>
    </div>
  );
}

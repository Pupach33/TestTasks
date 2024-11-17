import { useEffect, useState } from "react"

export default function FetchFunc(){
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=>{
        (async () => {
            try{
            const response = await fetch("https://randomuser.me/api/?results=10")
            const data = await response.json()
            setUsers(data.results)
            }catch(error){
                setError(true)
            }finally{
                setLoad(false)
            }
         
            
        })()
    },[])
    if (load) {
        return <h1 className="text-center text-xl mt-8">Загружаем данные...</h1>;
      }
    
      if (error) {
        return <h1 className="text-center text-xl mt-8 ">Ошибка загрузки</h1>;
      }
    return (
        <div className="min-h-screen flex flex-col items-center py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Список пользователей</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl">
            {users.map((user) => (
              <div
                key={user.login.uuid}
                className="bg-white rounded-lg shadow-md overflow-hidden "
              >
                <img
                  src={user.picture.large}
                  alt={user.name.first}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {user.name.first} {user.name.last}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
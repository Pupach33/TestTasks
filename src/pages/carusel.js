import { useEffect, useState } from "react"

export default function Carusel(){
    const caruselArray = ["cat1.jpg","cat2.jpg","cat3.jpeg","cat4.jpeg"]
    const [caruselValue ,setCaruselValue] = useState(0)

    useEffect(()=>{
        let intervalId = setInterval(nextImage,3000)
        return() =>  clearInterval(intervalId)

    },[])


    function nextImage(){
        setCaruselValue(value => {
            if(value === caruselArray.length - 1){
                return 0
            }else {
                return value + 1
            }
        })
    }
    function prevImage(){
        setCaruselValue(value =>{
            if(value === 0){
                return caruselArray.length - 1
            }else {
                return value - 1
            }
        })
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="mb-4 text-lg font-bold">Это карусель</h1>
          <div className="flex items-center space-x-4">
            <button onClick={prevImage} className="px-3 py-1 bg-red-300 text-white rounded">
              Назад
            </button>
            <img src={caruselArray[caruselValue]}className="w-64 h-64 object-cover rounded" />
            <button onClick={nextImage}className="px-3 py-1 bg-red-300 text-white rounded">
              Вперед
            </button>
          </div>
        </div>
      );
}
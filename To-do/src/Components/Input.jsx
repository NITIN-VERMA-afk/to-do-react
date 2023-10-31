import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Input = () => {
  
  const [taskData,setTaskData]=useState('')
  const [listData,setListData]=useState('')
  
  const AddTask=(e)=>{

    setListData(taskData)
    

    e.preventDefault();
    
    

  }
  const ClearTask=()=>{
    setListData("")
  }

  return (
    <>
      <div className="mb-6 ">
        <form  onSubmit={AddTask}>
          <div className="flex justify-center items-center gap-2">
          <label
            htmlFor="default-input"
            className="block mb-2  mr-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ADD NEW TASK
          </label>
          <input onChange={(e)=>{setTaskData(e.target.value)}}
            type="text"
            id="default-input"
            className=" text-sm rounded-lg  block w-half p-2.5 "
          />
          <button onClick={AddTask}
            type="button"
            className=" flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
           
            ADD
            <AiFillCloseCircle />
          </button>

          </div>
         
          <div>
            <ul className="flex items-center justify-center  gap-12 ">
              <input type="checkbox" name="" id="" />
              <li>{listData}</li>
              <button onClick={ClearTask}
            type="button"
            className=" flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
           
            Remove task
            
          </button>
              
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;



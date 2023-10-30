import {AiFillCloseCircle } from "react-icons/ai";


const Input = () => {
  return (
    <>
      
      <div className="mb-6 flex justify-center items-center gap-2"> 
       <form>
       <label htmlFor="default-input" className="block mb-2  mr-2 text-sm font-medium text-gray-900 dark:text-white">ADD NEW TASK </label>
<input type="text" id="default-input" className=" text-sm rounded-lg  block w-half p-2.5 "/>
<button type="button" class=" flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">                  ADD<AiFillCloseCircle/></button>
         </form>
      
      </div>


      
      
    </>
  )
}

export default Input

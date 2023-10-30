import Input from "../Components/Input";
import Button from "../Components/Button"


const Card = () => {
  return (
    <>
      <div className="bg-sky-800 h-96 w-3/5 mx-96 ">
        <h1 className="text-lg text-white">To-do list</h1>
        <div>
          <div className="d-flex  ">
            <Input />
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import { useSelector } from "react-redux"
import { useState } from "react";
import CardList from "./CardList";

const TasksList = ({ el }) => {
  const tasks = useSelector((state) => state.tasks);
  const [filterv1, setFilterv1] = useState('All');

 
  return (
    <>
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={() => setFilterv1("All")}
      >
        All
      </button>
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={() => setFilterv1("Done")}
      >
        Done
      </button>
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={() => setFilterv1("Undone")}
      >
        Undone
      </button>
     {
      filterv1==='All'?
      tasks.map(el=><CardList el={el}/>) :
      filterv1==='Done' ?
      tasks.filter(el=>el.isDone===false).map(el=><CardList el={el}/>):
      tasks.filter(el=>el.isDone===true).map(el=><CardList el={el}/>)
     }
      
    </>
  );
};

export default TasksList;

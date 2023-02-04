import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handledelete, handledone } from "../Redux/Actions";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();
  return (
    <>
      <div className="list-wrapper">
        <ul className="d-flex flex-column-reverse todo-list">
          {tasks.map((task) => (
            <li>
              <div className="form-check">
                <label className="form-check-label">
                  <p className={task.isDone ? "checkbox line" : ""}>
                    {task.text}
                  </p>
                  <i className="input-helper"></i>
                </label>
              </div>
              <Button
                variant="warning"
                onClick={() => dispatch(handledone(task.id))}
              >
                {task.isDone ? "Undone" : "Done"}
              </Button>
              <Button
                variant="danger"
                onClick={() => dispatch(handledelete(task.id))}
              >
                delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TasksList;

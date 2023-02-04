import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleadd } from "../Redux/Actions";

const AddList = () => {
  const dispatch = useDispatch();
  const [textP, setTextP] = useState();
  return (
    <>
      <div className="add-items d-flex">
        <input
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
          onChange={(e) => setTextP(e.target.value)}
        />
        <button
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
          onClick={() =>
            dispatch(handleadd({ text: textP, id: Math.random(), isDone: false }))
          }
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddList;

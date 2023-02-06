import { Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { handledelete, handledone } from "../Redux/Actions";

const CardList = ({el}) => {
    const dispatch = useDispatch();
  return (
    <>
      <div className="list-wrapper">
        <ul className="d-flex flex-column-reverse todo-list">
          
            <li>
              <div className="form-check">
                <label className="form-check-label">
                  <p className={el.isDone ? "checkbox line" : ""}>
                    {el.text}
                  </p>
                  <i className="input-helper"></i>
                </label>
              </div>
              <Button
                variant="warning"
                onClick={() => dispatch(handledone(el.id))}
              >
                {el.isDone ? "Undone" : "Done"}
              </Button>
              <Button
                variant="danger"
                onClick={() => dispatch(handledelete(el.id))}
              >
                delete
              </Button>
            </li>
          
        </ul>
      </div>
    </>
  );
};

export default CardList;

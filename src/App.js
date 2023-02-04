import "./App.css";
import AddList from "./Components/AddList";
import TasksList from "./Components/TasksList";

function App() {
  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Todo list</h4>
                  <AddList />
                  <TasksList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

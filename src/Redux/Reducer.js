import { HADNLEDONE, HANDLEADD, HANDLEDELETE } from "./ActionsType";

const initialState = {
  tasks: [
    { text: "Workout", id: Math.random(), isDone: false },
    { text: "got work", id: Math.random(), isDone: false },
    { text: "do meeting", id: Math.random(), isDone: false },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLEADD: return { ...state, tasks: [...state.tasks, action.payload] };
    case HANDLEDELETE: return {...state, tasks: state.tasks.filter(el=>el.id !== action.payload)}
    case HADNLEDONE: return {...state,tasks: state.tasks.map(el=>el.id === action.payload ? {...el, isDone :! el.isDone}: el)}
    default:
      return state;
  }
};

export default Reducer;

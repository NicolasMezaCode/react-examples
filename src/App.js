import { Provider } from 'react-redux';
import './App.css';
// import Reducer from './Components/Reducer/Reducer';
// import CustomHook from './Components/CustomHook/CustomHook';
// import Quiz from './Components/Quiz/Quiz';

// import Class from './Components/Class/Class';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
// import CartExercise from './Components/CartExercise/CartExercise';
// import Redux from './Components/Redux/Redux';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
// import Reducer from './Components/Reducer/Reducer';
// import store from './Components/Redux/store';
import TodoRedux from './Components/ToDoRedux/TodoRedux';
import store from './Components/ToDoRedux/store';
function App() {
  return (
    <div className='App'>
      {/* <Context /> */}
      {/* <CartExercise /> */}
      {/* <Buttons /> */}
      {/* <FifaTourney /> */}
      {/* <Class /> */}
      {/* <CartClassExercise /> */}
      {/* <Reducer /> */}
      {/* <Quiz /> */}
      {/* <CustomHook /> */}
      {/* <Provider store={store}>
        <Redux />
      </Provider> */}
      <Provider store={store}>
      <TodoRedux/>
      </Provider>
    </div>
  );
}

export default App;

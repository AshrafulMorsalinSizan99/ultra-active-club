import logo from './logo.svg';
import './App.css';
import Work from './components/Work/Work';


function App() {
  return (
    <div className="App">
      <div>
        {/* <h1>Daily Activities</h1> */}
        <Work></Work>
        {/* <h1>Ques-Answer</h1>
        <h3>How does react work?</h3>
        <p>Ans: React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
          Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
        <h3>What are the differences between props and state?</h3>
        <p>Ans: In props,data is passed from one component to another whereas in state,data is passed within the component only.
          Props is immutable but state is mutable.Props are read-only but State is both read and write.Props can be used with state and functional components whereas State can be used only with the state components/class component (Before 16.0).
        </p>
        <h3>Where does useEffect be used except loading data from api?</h3>
        <p>Ans: The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website. The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting. It is also used indirectly updating the dom and timers.</p> */}
      </div>
    </div>
  );
}

export default App;

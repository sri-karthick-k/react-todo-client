import './App.css';

// Components:
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

// import config from './config';

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(`/test`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
  return (
    <div className="App">
      <InputTodo />
      <ListTodo />
    </div>
  );
}

export default App;


import './App.css';
import Header from './Components/Header'
import NotesListPage from './Pages/NotesListPage'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import NotePage from './Pages/NotePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route path="/" exact component={NotesListPage} />
      <Route path="/note/:id" component={NotePage}/>
    </div>
    </Router>
  );
}

export default App;

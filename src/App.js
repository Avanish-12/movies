
import './App.css';
import Header from './component/Header';
import Movie from './component/Movie';
import movies from './movie.json';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
         {
          movies.map((element) =>{
               return( 
             <Movie
              title={element.Title} 
             year={element.Year}
             img={element.Poster}
             link={element.Link}

             
             />
             )

          })
            

         }
        
      </div>
    </div>
  );
}

export default App;



/*import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

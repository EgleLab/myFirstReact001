
import './App.css';

import {Link, Outlet} from "react-router-dom";


function App() {
   return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Characters">Characters</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
     <main>
      <Outlet/>
     </main>
    </>
  );
}

export default App;

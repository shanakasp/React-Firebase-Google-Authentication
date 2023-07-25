
import './App.css';

import { signInWithGoogle } from './firebase-config';


function App() {
  return (
    <div className="App">
   <button onClick={signInWithGoogle}>Sign In With Google</button>
   <h1></h1>
    </div>
  );
}

export default App;

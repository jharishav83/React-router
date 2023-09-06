import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
function App() {
  return (
  <>
<BrowserRouter basename={process.env.PUBLIC_URL}>
<Routes>
  <Route path="/React-router" element={<Home />}>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="*" element={<Error/>}/>
  </Route>
  {/* <Route path="/login" element={<Login/>}/> */}
</Routes>
</BrowserRouter>

  </>
  );
}

export default App;

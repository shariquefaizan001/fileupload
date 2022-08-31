import Upload from "./Components/Upload";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>

          <Route path='/' element={<Upload />} />
          {/* <Route path='/register' element={<Register />} />/ */}
          {/* <Route path='/home' element={<Protected Component={Home} />} /> */}
          {/* <Route path='/edit/:id' element={<Edit />} /> */}
          {/* <Route path='/view/:id' element={<Details />} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

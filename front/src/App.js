import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './admin/Sidebar';


import Header from './Header'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Header />} />
      <Route path='/admin/*' element={<Sidebar />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

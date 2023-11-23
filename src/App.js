import React from 'react'
import Table from './Components/Table/Table'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import ExcelFilePage from './Pages/ExcelFilePage'

const App = () => {
  return (
   <BrowserRouter>
   <NavLink to="/excel-file"> Excel </NavLink> &nbsp;&nbsp;&nbsp;
   <NavLink to="/"> Table </NavLink>

     <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/excel-file" element={<ExcelFilePage />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App
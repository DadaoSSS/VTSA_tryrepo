import { useState } from 'react'
import MenuBar from './components/MenuBar'
import NavBar from './components/NavBar'
import useToggle from './hooks/useToggle'
import Dashboard from './pages/Dashboard'
import BabyBook from './pages/BabyBook'
import Technician from './pages/Technician'
import Projects from './pages/Projects'
import ViewTeams from './pages/ViewTeams'
import Pms from './pages/Pms'
import { useNavigate, Routes, Route } from 'react-router-dom';


function App() {
  const [menuToggle, invertMenuToggle] = useToggle()
  const navigate = useNavigate();

  return (
    <>
      <div>
        <NavBar invertMenuToggle={invertMenuToggle}/>
        <section>
          <MenuBar menuToggle={menuToggle} navigate={navigate}/>
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/technician" element={<Technician />} />

                <Route path="/pms" element={<Pms />} />

                <Route path="/projects" element={<Projects />} />

                <Route path="/viewteams" element={<ViewTeams />} />

                <Route path="/babybook" element={<BabyBook />} />
              </Routes>
            </div>
        </section>
      </div>
    </>
  )
}

export default App

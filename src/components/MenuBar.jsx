import { MdDashboard } from "react-icons/md"
import { MdHomeRepairService } from "react-icons/md"
import { IoPerson } from "react-icons/io5"
import { RiTeamFill } from "react-icons/ri"
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";

const MenuBar = ({menuToggle}) => {
  const navigate = useNavigate();
  return (
    <div className={`Menu${menuToggle ? '' : ' Hidden'}`}>
        <ul>
            <li>
              <MdDashboard style={{ color: 'white' }}/>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate('/dashboard');
                }}>Dashboard</a>
            </li>
            <li>
              <IoPerson style={{ color: 'white' }}/>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate('/technician');
                }}>Technician</a>
            </li>
            <li>
              <MdHomeRepairService style={{ color: 'white' }}/>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate('/pms');
                }}>PMS</a>
            </li>
            <li>
              <GoProjectRoadmap style={{ color: 'white' }}/>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate('/projects');
                }}>Projects</a>
            </li>
            <li>
              <RiTeamFill style={{ color: 'white' }}/>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate('/viewteams');
                }}>ViewTeams</a>
            </li>
            <li>
              <IoIosDocument style={{ color: 'white' }}/>
              <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate('/babybook');
                }}>BabyBook</a>
            </li>
        </ul>
    </div>
  )
}

export default MenuBar
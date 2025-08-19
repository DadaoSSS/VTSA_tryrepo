import { MdDashboard } from "react-icons/md"
import { MdHomeRepairService } from "react-icons/md"
import { IoPerson } from "react-icons/io5"
import { RiTeamFill } from "react-icons/ri"
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { FaChartBar } from "react-icons/fa6";

import { useNavigate, NavLink } from 'react-router-dom';

const MenuBar = ({menuToggle}) => {
  const navigate = useNavigate();
  return (
    <div className={`Menu${menuToggle ? '' : ' Hidden'}`}>
        <ul>
            <li>
              <MdDashboard style={{ color: 'white' }}/>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <IoPerson style={{ color: 'white' }}/>
              <NavLink to="/technician">Technician</NavLink>
            </li>
            <li>
              <MdHomeRepairService style={{ color: 'white' }}/>
              <NavLink to="/pms">PMS</NavLink>
            </li>
            <li>
              <GoProjectRoadmap style={{ color: 'white' }}/>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <RiTeamFill style={{ color: 'white' }}/>
              <NavLink to="/viewteams">ViewTeams</NavLink>
            </li>
            <li>
              <IoIosDocument style={{ color: 'white' }}/>
              <NavLink to="/babybook">BabyBook</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default MenuBar
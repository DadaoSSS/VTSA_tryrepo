import { useState } from "react"

const Projects = () => {
  const [activeTab, setActiveTab] = useState('punchList');
  const [project, setProject] = useState('');
  const emptyRows = Array(8).fill(null);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="projects-container">
        <div className="projects-tab-header">
          <input
            id="project-input"
            type="text"
            className="text-input"
            placeholder="Search Project"
            list="projects"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
          <button 
            className={activeTab === 'punchList' ? 'active' : ''}
            onClick={() => handleTabClick('punchList')}
            >PUNCH LIST</button>
          <button
            className={activeTab === 'accomplishmentRep' ? 'active' : ''}
            onClick={() => handleTabClick('accomplishmentRep')}
            >ACCOMPLISHMENT REPORT</button>
          <button
            className={activeTab === 'communicationLog' ? 'active' : ''}
            onClick={() => handleTabClick('communicationLog')}
            >COMMUNICATION LOG</button>
        </div>

        <div className={`projects-tab-content ${activeTab === 'punchList' ? 'active' : ''}`} id="punchList">
          <div className="punchlist-table-container">
            <table className="punch-list-table">
              <thead>
                <tr>
                  <th rowSpan="2">Date</th>
                  <th rowSpan="2">Item No.</th>
                  <th rowSpan="2">Description</th>
                  <th rowSpan="2">Section</th>
                  <th rowSpan="2">Follow-Up Checking</th>
                  <th rowSpan="2">Remarks</th>
                </tr>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 18 }).map((_, rowIndex) => (
                <tr key={`empty-row-${rowIndex}`}>
                  {Array.from({ length: 8 }).map((_, colIndex) => (
                    <td key={`empty-col-${rowIndex}-${colIndex}`}></td>
                  ))}
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`projects-tab-content ${activeTab === 'accomplishmentRep' ? 'active' : ''}`} id="accomplishmentRep">
          <table className="accomplishment-rep-table">
            <thead>
              <tr>
                <th>Item No.</th>
                <th>Description</th>
                <th>QTY</th>
                <th>UNIT</th>
                <th>Contract Amount</th>
                <th>% WT</th>
                <th>% ACC</th>
                <th>Amount</th>
                <th>% ACC</th>
                <th>Amount</th>
                <th>% ACC</th>
                <th>% WT. ACC</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 20 }).map((_, rowIndex) => (
                <tr key={`empty-row-${rowIndex}`}>
                  {Array.from({ length: 13 }).map((_, colIndex) => (
                    <td key={`empty-col-${rowIndex}-${colIndex}`}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`projects-tab-content ${activeTab === 'communicationLog' ? 'active' : ''}`} id="communicationLog">
          <div className="comm-log-filter">
            <input type="text" placeholder="Search by participant" />
            <input type="date" placeholder="From" />
            <input type="date" placeholder="To" />
            <table className="communications-log-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>From</th>
                <th>Message</th>
                <th>Type of report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>June 12, 2025</td>
                <td>10:00 AM</td>
                <td>Justine Atienza</td>
                <td>Message.....</td>
                <td>PMS</td>
              </tr>
            </tbody>
          </table>
          </div>
          
          <div className="communications-log-form">
            <label>Date:</label>
            <input className="date-input" type="date" />
            <label>Time:</label>
            <input className="time-input" type="time" />
            <label>Participants:</label>
            <input className="text-input" type="text" />
            <label>Type of Report:</label>
            <input className="text-input" type="text" />
            <label>Summary:</label>
            <textarea> </textarea>
            <button className="communication-log-button">Add Attachments</button>
            <button className="communication-log-button submit-communication-form">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
function Pms () {
  return (
    <div className="pms-container">
      <input
        id="search-client-input"
        type="text"
        className="text-input"
        placeholder="Search Client"
        list="projects"
      />

      <button className="add-client-button">Add Client</button>

      <div className="maintenance-schedule-container">
        <table className="maintenance-sched-table"> 
          <tr>
            <th>Maintenance Schedule</th>
          </tr>
          <tr>
            <th>Client</th>
            <th>Assigned Technician</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Pms;
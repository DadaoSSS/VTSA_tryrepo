import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="left-panel">
          <div className="gantt-chart-container">
            <h3 className="box-header">Ongoing Project/s:</h3>
            <div className="gantt-inner-container">
            </div>
          </div>

          <div className="pms-sched-container">
            <h3 className="box-header">Scheduled for maintenance</h3>
            <div className="card">
              <h4>Client 1</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem, alias sapiente fugiat quisquam quae itaque quaerat repudiandae rerum nobis odio quos pariatur quasi. Accusantium aperiam culpa magnam adipisci pariatur.
              </p>
              <button className="card-button">View Details</button>
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="messages-container">
            <h3 className="box-header">Messages</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, inventore tempora? Officiis praesentium pariatur dolore quidem? Dicta excepturi dolorum autem quae, obcaecati cupiditate impedit beatae optio, culpa ad exercitationem vitae?</p>
          </div>
          <button className="new-project-button">New Project +</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
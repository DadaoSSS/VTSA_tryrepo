const Technician = () => {

 const technicians = [
    { employeeName: 'Miguel Santos', jobDescription: 'Technician', operatingRegion: 'NCR', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Angela Ramirez', jobDescription: 'Technician', operatingRegion: 'Central Luzon', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Daryl Villanueva', jobDescription: 'Technician', operatingRegion: 'Mindanao', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Jasmine Tolentino', jobDescription: 'Technician', operatingRegion: 'Visayas', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Leo Fernandez', jobDescription: 'Technician', operatingRegion: 'NCR', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Kristine Navarro', jobDescription: 'Technician', operatingRegion: 'Central Luzon', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Nathan dela Cruz', jobDescription: 'Technician', operatingRegion: 'Mindanao', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Bianca Mendoza', jobDescription: 'Technician', operatingRegion: 'Visayas', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Joshua Alvarado', jobDescription: 'Technician', operatingRegion: 'NCR', availability: 'Available', typeOfEmployment: 'Contractual'},
    { employeeName: 'Camille Reyes', jobDescription: 'Technician', operatingRegion: 'Central Luzon', availability: 'Available', typeOfEmployment: 'Contractual'},
  ];

   return (
    <div className='technician-container'>
      <div className='technician-list-container'>
        <div className='technician-list-header'>
          <h2>Technicians</h2>
          <div>Showing ({technicians.length}) technicians</div>
        </div>
        
        <div className='technician-info-containers'>
          {technicians.map((tech, index) => (
            <div key={index} className='technician-info-container'>
              <div>
                <h3 className='employee-name'>{tech.employeeName}</h3>
                <span className={`availability-badge ${tech.availability.toLowerCase()}`}>
                  {tech.availability}
                </span>
              </div>
              
              <div>
                <div>
                  <span>Position:</span>
                  <span>{tech.jobDescription}</span>
                </div>
                <div >
                  <span>Region:</span>
                  <span>{tech.operatingRegion}</span>
                </div>
                <div>
                  <span>Employment Type:</span>
                  <span>{tech.typeOfEmployment}</span>
                </div>
              </div>
              
              <div>
                <button>Shift Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technician
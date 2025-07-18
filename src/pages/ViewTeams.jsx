import React, { useState } from 'react';

const ViewTeams = () => {
  const [region, setRegion] = useState('');

  const teams = [
    { name: 'Team A', region: 'NCR', foreman: 'Juan Carlos Dela Cruz' },
    { name: 'Team B', region: 'NCR', foreman: 'Miguel Antonio Reyes' },
    { name: 'Team C', region: 'Central Luzon', foreman: 'Gabriel Lorenzo Santiago' },
    { name: 'Team D', region: 'Central Luzon', foreman: 'Jose Rizal Mendoza' },
    { name: 'Team E', region: 'Visayas', foreman: 'Andres Felipe Bautista' },
    { name: 'Team F', region: 'Visayas', foreman: 'Rafael Isidro Tolentino' },
    { name: 'Team G', region: 'Mindanao', foreman: 'Eduardo Mateo Villanueva' },
    { name: 'Team H', region: 'Mindanao', foreman: 'Daniel Alfonso Navarro' },
  ];

  return (
    <div>
      <label htmlFor="region-input" className="input-label">
          Region
      </label>
        <input
          id="region-input"
          type="text"
          className="text-input"
          placeholder="Select Region"
          list="regions"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      <datalist id="regions">
        <option value="NCR" />
        <option value="Central Luzon" />
        <option value="Visayas" />
        <option value="Mindanao" />
      </datalist>

      <table className="teams-table">
        <thead>
          <tr>
            <th>Select Team</th>
            <th>Operating Region</th>
            <th>Person-in-Charge/Foreman</th>
          </tr>
        </thead>
        <tbody>
          {teams
            .filter(team =>
              region.trim() === '' ? true : team.region.toLowerCase().includes(region.toLowerCase())
            )
             .map((team, index) => (
              <tr key={index}>
                <td>{team.name}</td>
                <td>{team.region}</td>
                <td>{team.foreman}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTeams;
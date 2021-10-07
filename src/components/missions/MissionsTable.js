import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import MissionRowTable from './MissionRowTable';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions.data);

  return (
    <div>
      <table className="table table-striped table-hover table-bordered">
        <tr className="fs-5">
          <th className="p-2">Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        <tbody>
          {
            missions.map((mission) => (
              <MissionRowTable
                key={uuidv4()}
                missionName={mission.mission_name}
                description={mission.description}
                missionId={mission.mission_id}
                reserved={mission.reserved}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MissionsTable;

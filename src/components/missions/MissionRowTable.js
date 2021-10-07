import { PropTypes } from 'prop-types';
import { removeMission } from '../../redux/missions/missionsSlice';
import store from '../../redux/configureStore';

const MissionRowTable = (props) => {
  const {
    missionName, description, missionId, reserved,
  } = props;

  return (
    <tr>
      <td className="fs-5 fw-bold">{missionName}</td>
      <td className="p-2">{description}</td>
      {reserved ? <td className="badge rounded-pill bg-primary text-light m-2">MEMBER</td> : <td className="badge rounded-pill bg-secondary text-light m-2">NOT A MEMBER</td>}
      <td><button className={(reserved) ? 'btn btn-outline-danger m-2' : 'btn btn-outline-secondary m-2'} type="button" onClick={() => store.dispatch(removeMission(missionId))}>{(reserved) ? 'Leave Mission' : 'Join Mission'}</button></td>
    </tr>
  );
};

MissionRowTable.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionRowTable;

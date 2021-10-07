import { PropTypes } from 'prop-types';
import ReservedMissionsStyle from './ReservedMissions.module.css';
import store from '../../redux/configureStore';
import { removeMission } from '../../redux/missions/missionsSlice';

const ReservedMissions = (props) => {
  const { missionName, missionId, wikipedia } = props;
  return (
    <tr>
      <td className="p-3 pb-4">
        {missionName}
        <button type="button" className={ReservedMissionsStyle.cancelReservationButton} onClick={() => store.dispatch(removeMission(missionId))}>Leave Mission</button>
        <button type="button" className={ReservedMissionsStyle.reserveButton} onClick={() => window.open(wikipedia)}>Read More</button>
      </td>
    </tr>
  );
};

ReservedMissions.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default ReservedMissions;

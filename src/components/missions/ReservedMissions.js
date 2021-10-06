import { PropTypes } from 'prop-types';

const MissionReserved = (props) => {
  const { missionName } = props;
  return (
    <tr>
      <td className="p-3 pb-4">{missionName}</td>
    </tr>
  );
};

MissionReserved.propTypes = {
  missionName: PropTypes.string.isRequired,
};

export default MissionReserved;

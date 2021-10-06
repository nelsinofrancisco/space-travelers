import { PropTypes } from 'prop-types';

const ReservedMissions = (props) => {
  const { missionName } = props;
  return (
    <tr>
      <td className="p-3 pb-4">{missionName}</td>
    </tr>
  );
};

ReservedMissions.propTypes = {
  missionName: PropTypes.string.isRequired,
};

export default ReservedMissions;

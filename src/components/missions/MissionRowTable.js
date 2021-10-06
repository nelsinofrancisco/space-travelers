import { PropTypes } from 'prop-types';

const MissionRowTable = (props) => {
  const {
    missionName, description,
  } = props;

  return (
    <tr>
      <td className="fs-5 fw-bold">{missionName}</td>
      <td>{description}</td>
      <td className="badge rounded-pill bg-secondary text-light">NOT A MEMBER</td>
      <td><button className="btn btn-outline-secondary" type="button">Join Mission</button></td>
    </tr>
  );
};

MissionRowTable.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionRowTable;

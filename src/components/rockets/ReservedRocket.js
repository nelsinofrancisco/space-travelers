/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import ReservedRocketStyle from './ReservedRocket.module.css';

const ReservedRocket = (props) => {
  const { rocket_name } = props;
  return (
    <div className={ReservedRocketStyle.container}>
      <p className={ReservedRocketStyle.rocketItem}>{rocket_name}</p>
    </div>
  );
};

ReservedRocket.propTypes = {
  rocket_name: PropTypes.string.isRequired,
};

export default ReservedRocket;

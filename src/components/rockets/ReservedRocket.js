/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import ReservedRocketStyle from './ReservedRocket.module.css';
import store from '../../redux/configureStore';
import { removeRocket } from '../../redux/rockets/rocketsSlice';

const ReservedRocket = (props) => {
  const { rocket_name, rocket_id, wikipedia } = props;
  return (
    <div className={ReservedRocketStyle.container}>
      <p className={ReservedRocketStyle.rocketItem}>
        {rocket_name}
        <button className={ReservedRocketStyle.cancelReservationButton} type="button" onClick={() => store.dispatch(removeRocket(rocket_id))}>Cancel Reservation</button>
        <button type="button" className={ReservedRocketStyle.reserveButton} onClick={() => window.open(wikipedia)}>Cancel Reservation</button>
      </p>
    </div>
  );
};

ReservedRocket.propTypes = {
  rocket_name: PropTypes.string.isRequired,
  rocket_id: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default ReservedRocket;

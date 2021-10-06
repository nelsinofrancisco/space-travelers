/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import { removeRocket } from '../../redux/rockets/rocketsSlice';
import RocketCardStyle from './RocketCard.module.css';
import store from '../../redux/configureStore';

const RocketCard = (props) => {
  const {
    rocket_name, description, flickr_images, rocket_id, reserved,
  } = props;

  return (
    <div className={RocketCardStyle.cardContainer}>
      <div>
        <img className={RocketCardStyle.rocketImage} src={flickr_images[0]} alt="" />
      </div>
      <div className={RocketCardStyle.infoContainer}>
        <div>
          <p className={RocketCardStyle.rocketName}>{rocket_name}</p>
          <div className={RocketCardStyle.descriptionContainer}>
            <p className={RocketCardStyle.rocketDescription}>
              {reserved && (<span className={RocketCardStyle.reservedTag}>Reserved</span>)}
              {description}
            </p>
          </div>
        </div>
        <div>
          <button className={(reserved) ? RocketCardStyle.cancelReservationButton : RocketCardStyle.reserveButton} type="button" onClick={() => store.dispatch(removeRocket(rocket_id))}>{(reserved) ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  reserved: PropTypes.bool.isRequired,
  rocket_id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.instanceOf(Array).isRequired,
};
export default RocketCard;

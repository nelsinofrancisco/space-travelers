/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import RocketCardStyle from './RocketCard.module.css';

const RocketCard = (props) => {
  const {
    rocket_name, description, flickr_images,
  } = props;

  return (
    <div className={RocketCardStyle.cardContainer}>
      <div>
        <img className={RocketCardStyle.rocketImage} src={flickr_images[0]} alt="" />
      </div>
      <div className={RocketCardStyle.infoContainer}>
        <div>
          <p className={RocketCardStyle.rocketName}>{rocket_name}</p>
          <p className={RocketCardStyle.rocketDescription}>{description}</p>
        </div>
        <div>
          <button className={RocketCardStyle.reserveButton} type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.instanceOf(Array).isRequired,
};
export default RocketCard;

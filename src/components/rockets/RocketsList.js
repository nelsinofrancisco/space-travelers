import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';
import RocketsListStyle from './RocketsList.module.css';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rockets.data);

  return (
    <div className={RocketsListStyle.RocketsCardsContainer}>
      {
        rockets.map((obj) => (
          <RocketCard
            key={uuidv4()}
            rocket_name={obj.rocket_name}
            description={obj.description}
            flickr_images={obj.flickr_images}
          />
        ))

      }
    </div>
  );
};

export default RocketsList;

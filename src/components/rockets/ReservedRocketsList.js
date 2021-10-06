import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ReservedRocketsListStyle from './ReservedRocketsListStyle.module.css';
import ReservedRocket from './ReservedRocket';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const reserved = rockets.data.filter((rockets) => rockets.reserved);

  return (
    <div className={(reserved.length > 0) ? ReservedRocketsListStyle.listContainer : ''}>
      {
      reserved.map((rocket) => (
        <ReservedRocket key={uuidv4()} rocket_name={rocket.rocket_name} />
      ))
    }
    </div>
  );
};

export default ReservedRockets;

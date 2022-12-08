import Bath from './Bath';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';

const Floorplan = () => {
  return ( 
    <>
      <Bedroom bedNum={1} id="bed1" />
      <Bath bathSize={'Full-Bath'} bath={'Bath 1'} id="fullbath" />
      <LivingRoom id="livroom" />
      <Kitchen id="kitchen" />
      <Bedroom bedNum={2} id="bed2" />
      <Bath bathSize={'Half-Bath'} bath={'Bath 2'} id="halfbath" />
      <Bedroom bedNum={3} id="bed3" />
    </>
  );
}

export default Floorplan;
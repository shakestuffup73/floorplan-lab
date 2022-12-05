import Bath from './Bath';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';

const Floorplan = () => {
  return ( 
    <>
      <Bedroom bedNum={1}/>
      <Bath bathSize={'Full-Bath'} bathFloor={'First Floor Bath 1'}/>
      <LivingRoom />
      <Kitchen />
      <Bedroom bedNum={2}/>
      <Bath bathSize={'Half-Bath'} bathFloor={'First Floor Bath 2'}/>
      <Bedroom bedNum={3}/>
    </>
  );
}

export default Floorplan;
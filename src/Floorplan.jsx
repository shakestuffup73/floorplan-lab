import Bath from './Bath';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';

const Floorplan = () => {
  return ( 
    <>
      <div id="left">
        <Bedroom bedNum={1} />
        <Bath bathSize={'Full-Bath'} bath={'Bath 1'} />
      </div>
      <div id="livroom">
        <LivingRoom />
      </div>
        <Kitchen />
      <div id="bottom">
        <Bedroom bedNum={2} />
        <Bath bathSize={'Half-Bath'} bath={'Bath 2'} />
        <Bedroom bedNum={3} />
      </div>
    </>
  );
}

export default Floorplan;
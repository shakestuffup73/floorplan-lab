import './App.css';
import Bath from './Bath';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';

function App() {
  return (
    <>
      <Bath bathSize={'Half-Bath'} bathFloor={'First Floor Bath'}/>
      <Bath bathSize={'Full-Bath'} bathFloor={'Second Floor Bath'}/>
      <Kitchen />
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
      <LivingRoom />
    </>
  );
}

export default App;

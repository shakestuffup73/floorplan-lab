import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <>
    <div id="kitchen">
      <p>Kitchen</p>
      <Oven />
      <Sink />
    </div>
    </>
  );
}

export default Kitchen;

// Renders the text "Kitchen" and the following components:
  // Oven component
  // Sink component
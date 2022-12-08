import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <>
      <div id="right">
        <div id="ovensink">
          <Oven />
          <Sink />
        </div>
        <div id="kitchen">
          <p>Kitchen</p>
        </div>
      </div>
    </>
  );
}

export default Kitchen;

// Renders the text "Kitchen" and the following components:
  // Oven component
  // Sink component
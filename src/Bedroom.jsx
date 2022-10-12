const Bedroom = (props) => {
  return ( 
    <>
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      <p>This is Bedroom {props.bedNum}</p>
    </div>
    </>
  );
}

export default Bedroom;

// Accepts a bedNum prop and renders the text "Bedroom[bedNum]"...substituting the value of the bedNum prop
const Bath = (props) => {
  return ( 
    <>
    <div className="bathroom" id={`bath-${props.bathSize}`}>
      <p> This is the {props.bathSize}</p>
      <p> This is the {props.bathFloor}</p>
    </div>
    </>
  );
}

export default Bath;

// Accepts a size prop and renders the text [size] Bath"...i.e. "Half Bath" or "Full Bath"
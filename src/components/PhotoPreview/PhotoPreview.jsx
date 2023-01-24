import { Link } from "react-router-dom";

const PhotoPreview = (props) => {
  return ( 
    <div>
      <img 
        src={props.image}
        alt='Corey and Anna'
      />
    </div>
  );
}

export default PhotoPreview;
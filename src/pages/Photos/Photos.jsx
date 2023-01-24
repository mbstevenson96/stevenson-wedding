import photos from '../../data/photos'
import PhotoList from "../../components/PhotoList/PhotoList";

const Photos = (props) => {
  return ( 
    <>
      <PhotoList photos={photos} />
    </>
  );
}

export default Photos;
import photos from '../../data/photos'
import PhotoList from "../../components/PhotoList/PhotoList";
import styles from './Photos.module.css'

const Photos = () => {
  return ( 
    <>
      <PhotoList photos={photos} />
    </>
  );
}

export default Photos;
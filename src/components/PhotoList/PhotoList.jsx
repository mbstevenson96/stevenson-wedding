import PhotoPreview from "../PhotoPreview/PhotoPreview";

const PhotoList = (props) => {
  return ( 
    <>
      {props.photos?.map((photo, idx) =>
          <li key='idx'>
            <PhotoPreview image={photo.image} />
          </li>
        )}
    </>
  );
}

export default PhotoList;
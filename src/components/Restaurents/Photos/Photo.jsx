import React,{useState,useEffect} from 'react'
import ImageViewer from "react-simple-image-viewer";

import PhotoCollection from "./PhotoCollection";




import { useDispatch,useSelector } from 'react-redux';
import { getimage } from '../../../Redux/Reducer/Images/Images.action';

function Photo() {
    const [photos, setPhotos] = useState([ ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);


    const dispatch=useDispatch();
    const reduxState=useSelector((globalState)=>globalState.restaurentReducer.selectedRestaurant.restaurant);

    useEffect(()=>
    {
      if(reduxState)
      {
        dispatch(getimage(reduxState?.photos)).then((data)=>
        {
          const images=[];
          data.payload.images.map(({location})=>images.push(location));
          setPhotos(images);
        })
      }
    },[reduxState])
    return (
        <>
        {isMenuOpen && (
          <ImageViewer
            src={photos}
            currentIndex={currentImage}
            disableScroll={false}
            onClose={closeViewer}
          />
        )}
  
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {photos.map((photo, index) => (
            <PhotoCollection
              key={index}
              openViewer={openViewer}
              index={index}
              image={photo}
              setCurrentImage={setCurrentImage}
            />
          ))}
        </div>
      </>
  )
}

export default Photo

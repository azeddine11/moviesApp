import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Slider() {
  return (

    
        <Splide aria-label="My Favorite Images" options={{ autoplay: true,interval: 3000, rewind: true, }}>
      
            <SplideSlide>
                <img className='carouselimages' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-years-movies-1576786807.jpg" alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
                <img className='carouselimages' src="https://themoviemensch.com/wp-content/uploads/2021/12/twows-ff-003_0.jpg" alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
                <img className='carouselimages' src="https://images6.alphacoders.com/691/thumb-1920-691278.jpg" alt="Image 1"/>
            </SplideSlide>
           
        
        </Splide>

  );
}

export default Slider;

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '../../../../public/Image/baner01.png',
    titleh2: 'ENJOI WINTER TRENDS',
    titleh1: 'SALE UPTO 80% OFF',
  },
  {
    url: '../../../../public/Image/baner02.png',
    titleh2: 'WINTER SALE IS HERE',
    titleh1: 'SALE UPTO 75% OFF',
  },
  {
    url: '../../../../public/Image/baner01.png',
    titleh2: 'ENJOI WINTER TRENDS',
    titleh1: 'SALE UPTO 80% OFF',
  },
];

 const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <div className='side'>
                <div className='side_text'>
                    <div className='side_center'>
                        <h2>Christmas Sale 2022</h2>
                        <h1>{fadeImage.titleh2}
                            <br />
                            <span>{fadeImage.titleh1}</span>
                        </h1>
                        <p>
                            Taking your viewing experience to next level. All super sale are our newest arrivals 
                            <br />
                            plus Free Shipping on your first order discover your style now.
                        </p>
                        <a href="">Shop Now</a>
                    </div>
                {/* <h2  >{fadeImage.caption}</h2> */}
                </div>
                <div className='side_img'>
                <img src={fadeImage.url} />
                </div>
            
            </div>
       
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow
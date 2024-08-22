import BannerShoe from './Banner/BannerShoe';
import BannerTech from './Banner/BannerTech';
import Categories from './Categories/Categories';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Slider from './Slider';


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className='pb-20'>
      <Categories />
      </div>
      <div className='pb-32'>
      <BannerShoe />
      </div>
      <div className='pb-32'>
      <BannerTech />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default Homepage
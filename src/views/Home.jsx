import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Home = () => {
    return(
        <>
            <div className='bg-black'>
                <Navbar />
                <Carousel/>
                <Footer/>
            </div>
        </>
    )
};

export default Home
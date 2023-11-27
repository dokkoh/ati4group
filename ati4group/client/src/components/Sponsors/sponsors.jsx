import Slider from 'react-infinite-logo-slider';
import Logoipsum1 from '../../assets/images/sponsors/logoipsum-218.png';
import Logoipsum2 from '../../assets/images/sponsors/logoipsum-220.png';
import Logoipsum3 from '../../assets/images/sponsors/logoipsum-227.png';
import Logoipsum4 from '../../assets/images/sponsors/logoipsum-263.png';
import Logoipsum5 from '../../assets/images/sponsors/logoipsum-264.png';
import Logoipsum6 from '../../assets/images/sponsors/logoipsum-286.png';
import Logoipsum7 from '../../assets/images/sponsors/logoipsum-297.png';

export default function Sponsors() {
    return (
        <div className="bg-background-grey py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-primary-gray">
                    Sponsorisé par les entreprises les plus innovantes dans le domaine du développement web
                </h2>
                <div className="mt-10">
                    <Slider
                        width="250px"
                        duration={40}
                        pauseOnHover={true}
                        blurBorders={true}
                        blurBoderColor={false}
                    >
                        <Slider.Slide className="mx-4">
                            <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Logoipsum1} alt="image1"/>
                            </a>
                        </Slider.Slide>
                        <Slider.Slide className="mx-4">
                            <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Logoipsum2} alt="image2"/>
                            </a>
                        </Slider.Slide>
                        <Slider.Slide className="mx-4">
                            <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Logoipsum3} alt="image3"/>
                            </a>
                        </Slider.Slide>
                        <Slider.Slide className="mx-4">
                            <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Logoipsum4} alt="image4"/>
                            </a>
                        </Slider.Slide>
                        <Slider.Slide className="mx-4">
                            <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Logoipsum5} alt="image5"/>
                            </a>
                        </Slider.Slide>
                        <Slider.Slide className="mx-4">
                            <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Logoipsum6} alt="image6"/>
                            </a>
                        </Slider.Slide>
                        <Slider.Slide className="mx-4">
                            <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Logoipsum7} alt="image7"/>
                            </a>
                        </Slider.Slide>
                    </Slider>
                </div>
            </div>
        </div>
    )
}


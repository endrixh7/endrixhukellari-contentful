// import heroImg from '.assets/hero.svg';
import heroImg from '../assets/hero1.svg';

const Hero = () => {
  return <section className="hero"> 
    <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
            Contentful is a content management system (CMS) that enables users to manage and deliver digital content across various channels and platforms. It is a headless CMS, meaning it separates the content creation and storage from the presentation layer, allowing for greater flexibility and adaptability in delivering content to different devices and channels.
            </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Endri Xhukellari Contentful CMS" className='img' />
        </div>
    </div>
  </section>

}
export default Hero
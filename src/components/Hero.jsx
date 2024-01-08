// import heroImg from '.assets/hero.svg';
import heroImg from '../assets/hero1.svg';

const Hero = () => {
  return <section className="hero"> 
    <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo dicta obcaecati voluptate expedita aliquam eligendi inventore, quis doloremque. Ratione, nisi. Blanditiis explicabo voluptas numquam consectetur velit iure minus. Modi.
            </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Endri Xhukellari Contentful CMS" className='img' />
        </div>
    </div>
  </section>

}
export default Hero
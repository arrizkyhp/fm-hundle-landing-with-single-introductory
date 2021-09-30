import Illustration from 'assets/images/illustration-mockups.svg';
import Button from 'components/Button';

const Hero = () => {
    return (
      <div className="hero">
        <img src={Illustration} alt="hero" className="hero__image" />
        <div className="hero__content">
          <h1 className="hero__content__title text-white">Build The Community Your Fans Will Love</h1>
          <p className="hero__content__desc text-white">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
          <Button>Register</Button>
        </div>
      </div>
    );
}

export default Hero;
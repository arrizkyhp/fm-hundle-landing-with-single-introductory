import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Social = () => {
    return (
      <div className="social">
        <div className="social__group text-white">
          <a href="https://www.facebook.com/" className="fa" target="_blank" rel="noreferrer">
            <span className="visually-hidden">Facebook</span>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/home" className="fa" target="_blank" rel="noreferrer">
            <span className="visually-hidden">Twitter</span>
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" className="fa" target="_blank" rel="noreferrer">
            <span className="visually-hidden">Instagram</span>
            <FaInstagram />
          </a>
        </div>
      </div>
    );
}

export default Social;
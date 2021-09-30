import Logo from 'assets/images/logo.svg'
import Footer from 'layouts/Footer';
import Hero from 'layouts/Hero';
import Social from 'layouts/Social';

export default function Home() {
  return (
    <main className="container">
      <img src={Logo} alt="Huddle" className="logo" />
      <Hero />
      <Social />
      <Footer />
    </main>
  );
}

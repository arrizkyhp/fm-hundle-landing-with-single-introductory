import Logo from 'assets/images/logo.svg'
import Hero from 'layouts/Hero';
import Social from 'layouts/Social';

export default function Home() {
  return (
    <main className="container">
      <img src={Logo} alt="Huddle" className="logo" />
      <Hero />
      <Social />
    </main>
  );
}

import HeroSection from '../../components/HeroSection/HeroSection.component';
import ServicesSection from '../../components/ServicesSection/ServicesSection.module';

const Home = () => {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <ServicesSection />
      </section>
    </div>
  );
};

export default Home;

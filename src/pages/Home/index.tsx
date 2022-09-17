import HeroSection from '../../components/HeroSection/HeroSection.component';
import ServicesSection from '../../components/ServicesSection/ServicesSection.module';
import CustomerSection from '../../components/CustomerSection/CustomerSection.component';

const Home = () => {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <ServicesSection />
      </section>

      <section>
        <CustomerSection />
      </section>
    </div>
  );
};

export default Home;

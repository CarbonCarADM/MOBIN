import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Brands from '@/components/Brands/Brands';
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <FeaturedSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}

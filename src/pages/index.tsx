import About from "@/ui/components/About";
import Footer from "@/ui/components/Footer";
import Header from "@/ui/components/Header";
import Hero from "@/ui/components/Hero";
import Products from "@/ui/components/Products";

const Home: React.FC = () => {
  return (
    <div className='w-full'>
      <Header />
      <Hero />
      <About />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;

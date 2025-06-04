import { BackgroundBeamsWithCollision } from '@/components/ui/BackgroundBeamsWithCollision ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';


export default function Home() {
  return (
   <div className="relative bg-black flex justify-center items-center flex-col mx-auto  overflow-hidden">
      <Hero />
        <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 py-16">
      <BackgroundBeamsWithCollision>
          <Services/>
      </BackgroundBeamsWithCollision>
        </div>
      <Footer/>
    </div>
  );
}

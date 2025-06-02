import Hero from './components/Hero';


export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto  overflow-hidden">
      <div className="w-full">
        <Hero />
      </div>
    </div>
  );
}

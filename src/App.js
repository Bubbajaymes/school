import { useState } from "react";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs";
import Testimonials from "./Components/Testimonials";
import Title from "./Components/Title";
import VideoPlayer from "./Components/VideoPlayer";


function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What we offer.'/>
        <Programs />
        
      </div>
      
      <About setPlayState={setPlayState} />
      <div className="container">
        <Title subTitle='Gallery' title='Campus Photos.'/>
        <Campus />
        <Title subTitle='Testimonials' title='What Students Say.'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get In Touch.'/>
        <Contact />
        <Footer />

      </div>
      <VideoPlayer  playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;

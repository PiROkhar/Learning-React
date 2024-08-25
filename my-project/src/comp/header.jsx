import React, { useEffect, useState } from 'react'
import image from '../assets/down-arrow.png'
import bg from '../assets/header-background.jpg'
import intro from '../assets/intro-office.jpg'
const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition)
  }, [scrollPosition])

  return (
    <div>
      <nav className='flex items-center py-5 flex-col justify-between text-xl font-mono relative h-screen bg-no-repeat bg-center bg-cover' style={{
        backgroundImage: `url(${bg})`
      }}>
        {/* navbar */}
        <div className={`sticky top-0 p-5 px-10 w-full transition-all flex justify-center duration-500 mt-6 z-20 text-white ${scrollPosition >= 25 ? 'bg-[#095358] shadow-xl' : 'bg-transparent'}`}>
          <div className={`flex justify-between transition-all duration-500 w-full ${scrollPosition >= 25 ? 'w-full' : 'w-11/12'}`}>
            <div className='flex space-x-2'>
              <img src={image} className='w-[35px]'></img>
              <p>Aria</p>
            </div>
            <ul className='uppercase space-x-5 hidden lg:flex'>
              <li className='cursor-pointer hover:text-[#99ffa3]'>home</li>
              <li className='cursor-pointer hover:text-[#99ffa3]'>info</li>
              <li className='cursor-pointer hover:text-[#99ffa3]'>service</li>
              <li className='cursor-pointer hover:text-[#99ffa3]'>call me</li>
              <li className='cursor-pointer hover:text-[#99ffa3]'>About</li>
            </ul>
          </div>
        </div>
        {/* hero */}
        <div className='absolute flex flex-col items-center mt-[30vh] backdrop-blur-sm p-10 w-[50%] text-center'>
          <p className='bold uppercase text-7xl text-white'>business solution</p>
          <p className='text-gray-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,consectetur adipisicing elit.</p>
          <button className='p-2 pl-5 pr-5 bg-[#49bc92] rounded-md mt-5 uppercase text-white hover:border-[#49bc92] hover:border-2 hover:bg-transparent '>discover</button>

        </div>
      </nav>
      <div className='intro flex justify-around p-[10%]'>
        <div className='w-[30%]'>
          <p>INTRO</p>
          <p>We Offer Some Of The Best Business Growth Services In Town</p>
          <p className=''>Launching a new company or developing the market position of an existing one can be quite an overwhelming processs at times.</p>
          <p>"Our mission here at Aira is to get you through those tough moments relying on our team's expertise in starting and growing companies."</p>
          <p>Prakhar - Creator</p>
        </div>
        <div>
          <img src={intro}></img>
        </div>
      </div>
    </div>
  )
}

export default Header
import React, { useEffect,useState } from 'react';
// import netflixLogo from '';

function Nav() {
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        });
        return () => { window.removeEventListener('scroll') }
    },[])
    return (
        <nav className={`p-4 fixed top-0 left-0 flex justify-between w-full z-10 ${navBg&&'bg-black'}`}>
            <a className='h-12 w-12' href="https://netflix.com"><img className='w-full' src='.//images/netflix_96px.svg' alt="netflix logo" /></a>
            <img className='h-12 w-12' src={'./images/play_512px.svg'} alt="" />
        </nav>
    )
}

export default Nav

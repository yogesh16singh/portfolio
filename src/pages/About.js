import React from 'react'
import Header from '../components/Header'
import About1 from '../img/about1.webp'
const About = () => {
    return (
        <>
            <Header></Header>
            <section className='about'>
                <div className='about_div_left'>
                    <img src={About1} alt='about' className='about_img1'></img>
                </div>
                <div className='about_div_left'>
                    <h3 className='about_div_left_h3'>ABOUT ME</h3>
                    <h1 className='about_div_left_h1'>A dedicated Front-end Developer
                        based in Beawar , Rajasthan
                    </h1>

                    <p className='about_div_left_p'>As a Junior Front-End Developer,
                        I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and Tailwind.
                        I excel in designing and maintaining responsive websites that offer a smooth user experience.
                        My expertise lies in crafting dynamic, engaging interfaces through writing clean
                        and optimized code and utilizing cutting-edge development tools and techniques.
                        I am also a team player who thrives in collaborating with cross-functional teams
                        to produce outstanding web applications.</p>
                </div>
            </section>
        </>
    )
}

export default About
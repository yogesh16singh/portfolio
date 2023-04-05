import React from 'react'
import bg from '../img/bg.jpg'
import TechStack from './TechStack'
const HomeMain = () => {
    return (
        <>
            <main className='home_main'>
                <div className='main_top' >
                    <section className='section_left'>
                        <h1> Front-End React <br></br>Developer  <h1>✔</h1></h1>
                        <p className='section_left_p'>Hi, I'm Yogesh Singh😎. A passionate Front-end React Developer based in Beawar , Rajasthan 🏡.</p>
                        <div className='section_left_div'>
                            <a href='#linkedln'> <i class="fa-brands fa-linkedin section_left_i"></i></a>
                            <a href='#github'>  <i class="fa-brands fa-github section_left_i"></i></a>
                        </div>
                    </section>
                    <section className='section_right'>
                        <div>
                            <img src={bg} width={400} alt='yogesh'></img>
                        </div>
                    </section>
                </div>
                <TechStack > </TechStack>
            </main >

        </>
    )
}

export default HomeMain
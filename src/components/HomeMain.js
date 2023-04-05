import React from 'react'
import bg from '../bg.jpg'
const HomeMain = () => {
    return (
        <>
            <main className='home_main'>
                <div className='main_top' >
                    <section className='section_left'>
                        <h1> Front-End React <br></br>Developer</h1>
                        <p className='section_left_p'>Hi, I'm Yogesh Singh. A passionate Front-end React Developer based in Beawar , Rajasthan .</p>
                        <div className='section_left_div'>
                            <a href='#'> <i class="fa-brands fa-linkedin section_left_i"></i></a>
                            <a href='#'>  <i class="fa-brands fa-github section_left_i"></i></a>
                        </div>
                    </section>
                    <section className='section_right'>
                        <div>
                            <img src={bg} width={400}></img>
                        </div>
                    </section>


                </div>
                <div className='main_bottom' >b</div>
            </main >
        </>
    )
}

export default HomeMain
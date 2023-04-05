import React from 'react'
import html from '../img/html.svg'
import css from '../img/css.svg'
import JS from '../img/JS.svg'
import ReactJS from '../img/React.svg'
import Tailwind from '../img/Tailwind.svg'
const TechStack = () => {
    return (
        <>
            <div className='main_bottom' >
                <p className='main_bottom_p'>Tech Stack</p>
                <div>
                    <div className='image_container'><img src={html} alt='' className='main_bottom_img'></img></div>
                    <div className='image_container'><img src={css} alt='' className='main_bottom_img'></img></div>
                    <div className='image_container'><img src={JS} alt='' className='main_bottom_img'></img></div>
                    <div className='image_container'><img src={ReactJS} alt='' className='main_bottom_img'></img></div>
                    <div className='image_container'><img src={Tailwind} alt='' className='main_bottom_img'></img></div>
                </div>
            </div >
        </>
    )
}

export default TechStack
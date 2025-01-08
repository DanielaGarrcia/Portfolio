import React from 'react'

// =============== STYLE ===============
import '../styles/Skills.css'

// =============== ASSETS ===============
import unity_logo from '../assets/images/unity-logo.png'
import swiftui_logo from '../assets/images/swiftui-logo.png'
import coreml_logo from '../assets/images/coreml-logo.png'
import arkit_logo from '../assets/images/arkit-logo.webp'

import html_logo from '../assets/images/html_logo.png'
import css_logo from '../assets/images/css_logo.png'
import JavaScript_logo from '../assets/images/JavaScript_logo.png'
import php_logo from '../assets/images/php_logo.png'
import django_logo from '../assets/images/django_logo.jpg'
import xampp_logo from '../assets/images/xampp_logo.png'
import react_logo from '../assets/images/react_logo.png'
import bootstrap_logo from '../assets/images/bootstrap_logo.png'

import phone from '../assets/images/phone.png'
import laptop from '../assets/images/laptop.png'

function Skills() {
  return (
    <section className='screen_size center' style={{alignItems:'flex-start', minHeight:'110vh'}}>
      <div className="skills_page column">

        <p className="page_name">Skills</p>
        <div className="row_responsive">
            <div className="skills_L ">
                <p className="skill_topic gradient_text">Mobile Development</p>
                <div className="dev_skills ">
                    <div className="device">
                        <img src={phone} alt="" />
                    </div>
                    <div className="circle">
                        <div className="circle-img-container">
                            <img src={unity_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={swiftui_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={coreml_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={arkit_logo} alt="" className="circle-img"/>
                        </div>
                    </div>
                </div>
                <div className="blob-phone-blur">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                        <path fill="#0099DB" transform="translate(100 100)">
                            <animate attributeName="d" dur="15000ms" repeatCount="indefinite"
                                values="M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z;
                                        M51.7,-34.6C59.5,-16.3,53.2,5.4,42.3,26.9C31.3,48.4,15.6,69.8,-3.6,71.9C-22.9,74,-45.8,56.8,-57.7,34.7C-69.6,12.7,-70.6,-14.3,-59.1,-34.7C-47.7,-55,-23.9,-68.8,-1,-68.2C21.9,-67.7,43.9,-52.8,51.7,-34.6Z;
                                        M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z;
                                        M42.2,-20.8C55.2,-1.8,66.8,21.7,59.5,35.9C52.2,50.1,26.1,55.1,-1,55.7C-28.2,56.3,-56.3,52.5,-65,37.5C-73.6,22.5,-62.7,-3.7,-48.6,-23.3C-34.5,-42.8,-17.3,-55.8,-1.3,-55C14.6,-54.2,29.2,-39.7,42.2,-20.8Z;
                                        M42.5,-22.4C52.3,-7.5,55.6,13.3,47.5,27.4C39.3,41.6,19.7,49.1,-0.9,49.6C-21.6,50.2,-43.1,43.8,-51.1,29.7C-59.1,15.7,-53.5,-6,-42.7,-21.5C-31.9,-36.9,-16,-46.2,0.2,-46.3C16.3,-46.4,32.7,-37.4,42.5,-22.4Z;
                                        M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z">
                            </animate>
                        </path>
                    </svg>
                </div>
                <div className="blob-phone">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                        <path fill="#0099DB" transform="translate(100 100)">
                            <animate attributeName="d" dur="15000ms" repeatCount="indefinite"
                                values="M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z;
                                        M51.7,-34.6C59.5,-16.3,53.2,5.4,42.3,26.9C31.3,48.4,15.6,69.8,-3.6,71.9C-22.9,74,-45.8,56.8,-57.7,34.7C-69.6,12.7,-70.6,-14.3,-59.1,-34.7C-47.7,-55,-23.9,-68.8,-1,-68.2C21.9,-67.7,43.9,-52.8,51.7,-34.6Z;
                                        M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z;
                                        M42.2,-20.8C55.2,-1.8,66.8,21.7,59.5,35.9C52.2,50.1,26.1,55.1,-1,55.7C-28.2,56.3,-56.3,52.5,-65,37.5C-73.6,22.5,-62.7,-3.7,-48.6,-23.3C-34.5,-42.8,-17.3,-55.8,-1.3,-55C14.6,-54.2,29.2,-39.7,42.2,-20.8Z;
                                        M42.5,-22.4C52.3,-7.5,55.6,13.3,47.5,27.4C39.3,41.6,19.7,49.1,-0.9,49.6C-21.6,50.2,-43.1,43.8,-51.1,29.7C-59.1,15.7,-53.5,-6,-42.7,-21.5C-31.9,-36.9,-16,-46.2,0.2,-46.3C16.3,-46.4,32.7,-37.4,42.5,-22.4Z;
                                        M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z">
                            </animate>
                        </path>
                    </svg>
                </div>
            </div>
            <div className="skills_R ">
                <p className="skill_topic gradient_text">Web Development</p>
                <div className="dev_skills ">
                    <div className="device ">
                        <img src={laptop} alt="Laptop" />
                    </div>
                    <div className="circle ">
                        <div className="circle-img-container ">
                            <img src={html_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={css_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={php_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={JavaScript_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={django_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={xampp_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={react_logo} alt="" className="circle-img"/>
                        </div>
                        <div className="circle-img-container">
                            <img src={bootstrap_logo} alt="" className="circle-img"/>
                        </div>
                    </div>
                </div>

                <div className="blob-laptop">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                        <path fill="#0099DB" transform="translate(100 100)">
                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                                values="M58.4,-28.5C70.9,-12.2,72.8,15.5,61.3,36.4C49.8,57.3,24.9,71.4,1,70.8C-22.8,70.2,-45.6,54.9,-56.2,34.5C-66.7,14.2,-65,-11.2,-53.6,-26.9C-42.2,-42.6,-21.1,-48.7,1,-49.3C23,-49.8,46,-44.8,58.4,-28.5Z;
                                        M51.7,-34.6C59.5,-16.3,53.2,5.4,42.3,26.9C31.3,48.4,15.6,69.8,-3.6,71.9C-22.9,74,-45.8,56.8,-57.7,34.7C-69.6,12.7,-70.6,-14.3,-59.1,-34.7C-47.7,-55,-23.9,-68.8,-1,-68.2C21.9,-67.7,43.9,-52.8,51.7,-34.6Z;
                                        M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z;
                                        M42.2,-20.8C55.2,-1.8,66.8,21.7,59.5,35.9C52.2,50.1,26.1,55.1,-1,55.7C-28.2,56.3,-56.3,52.5,-65,37.5C-73.6,22.5,-62.7,-3.7,-48.6,-23.3C-34.5,-42.8,-17.3,-55.8,-1.3,-55C14.6,-54.2,29.2,-39.7,42.2,-20.8Z;
                                        M42.5,-22.4C52.3,-7.5,55.6,13.3,47.5,27.4C39.3,41.6,19.7,49.1,-0.9,49.6C-21.6,50.2,-43.1,43.8,-51.1,29.7C-59.1,15.7,-53.5,-6,-42.7,-21.5C-31.9,-36.9,-16,-46.2,0.2,-46.3C16.3,-46.4,32.7,-37.4,42.5,-22.4Z;
                                        M58.4,-28.5C70.9,-12.2,72.8,15.5,61.3,36.4C49.8,57.3,24.9,71.4,1,70.8C-22.8,70.2,-45.6,54.9,-56.2,34.5C-66.7,14.2,-65,-11.2,-53.6,-26.9C-42.2,-42.6,-21.1,-48.7,1,-49.3C23,-49.8,46,-44.8,58.4,-28.5Z">
                            </animate>
                        </path>
                    </svg>
                </div>
                <div className="blob-laptop-blur">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                        <path fill="#0099DB" transform="translate(100 100)">
                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                                values="M58.4,-28.5C70.9,-12.2,72.8,15.5,61.3,36.4C49.8,57.3,24.9,71.4,1,70.8C-22.8,70.2,-45.6,54.9,-56.2,34.5C-66.7,14.2,-65,-11.2,-53.6,-26.9C-42.2,-42.6,-21.1,-48.7,1,-49.3C23,-49.8,46,-44.8,58.4,-28.5Z;
                                        M51.7,-34.6C59.5,-16.3,53.2,5.4,42.3,26.9C31.3,48.4,15.6,69.8,-3.6,71.9C-22.9,74,-45.8,56.8,-57.7,34.7C-69.6,12.7,-70.6,-14.3,-59.1,-34.7C-47.7,-55,-23.9,-68.8,-1,-68.2C21.9,-67.7,43.9,-52.8,51.7,-34.6Z;
                                        M46.5,-30.1C55.5,-11.1,55,10.2,45.7,31.2C36.3,52.2,18.2,72.9,1.2,72.2C-15.8,71.5,-31.6,49.4,-45.6,25.7C-59.6,2.1,-71.9,-23.3,-64,-41.6C-56.1,-60,-28,-71.4,-4.7,-68.7C18.7,-66,37.4,-49.2,46.5,-30.1Z;
                                        M42.2,-20.8C55.2,-1.8,66.8,21.7,59.5,35.9C52.2,50.1,26.1,55.1,-1,55.7C-28.2,56.3,-56.3,52.5,-65,37.5C-73.6,22.5,-62.7,-3.7,-48.6,-23.3C-34.5,-42.8,-17.3,-55.8,-1.3,-55C14.6,-54.2,29.2,-39.7,42.2,-20.8Z;
                                        M42.5,-22.4C52.3,-7.5,55.6,13.3,47.5,27.4C39.3,41.6,19.7,49.1,-0.9,49.6C-21.6,50.2,-43.1,43.8,-51.1,29.7C-59.1,15.7,-53.5,-6,-42.7,-21.5C-31.9,-36.9,-16,-46.2,0.2,-46.3C16.3,-46.4,32.7,-37.4,42.5,-22.4Z;
                                        M58.4,-28.5C70.9,-12.2,72.8,15.5,61.3,36.4C49.8,57.3,24.9,71.4,1,70.8C-22.8,70.2,-45.6,54.9,-56.2,34.5C-66.7,14.2,-65,-11.2,-53.6,-26.9C-42.2,-42.6,-21.1,-48.7,1,-49.3C23,-49.8,46,-44.8,58.4,-28.5Z">
                            </animate>
                        </path>
                    </svg>
                </div>
            </div>
        </div>


      </div>
    </section>
  )
}

export default Skills
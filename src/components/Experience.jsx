import React, {useEffect} from 'react';
import {Reveal} from './utils/Reveal';
import { useRef } from "react";
import { motion, useInView, useAnimation, useTransform, useScroll } from 'framer-motion';

// =============== STYLE ===============
import '../styles/Experience.css'
import userEvent from '@testing-library/user-event';

function Experience() {
  const refExp1 = useRef(null)
  const refExp2 = useRef(null)
  const refExp3 = useRef(null)
  const point1 = useRef(null)
  const point2 = useRef(null)
  const point3 = useRef(null)

  const isInView1 = useInView(refExp1, {amount: 1});
  const isInView2 = useInView(refExp2, {amount: 1});
  const isInView3 = useInView(refExp3, {amount: 1});

  const mainControls = useAnimation();
  const point1Controls = useAnimation();
  const point2Controls = useAnimation();
  const point3Controls = useAnimation();

  useEffect(() => {
    if (isInView1){
      mainControls.start({ height: '25%' });
      point1Controls.start({opacity: 1})
    }
    if (isInView2){
      mainControls.start({ height: '55%' });
      point2Controls.start({opacity: 1})
    }
    if (isInView3){
      mainControls.start({ height: '80%' });
      point3Controls.start({opacity: 1})
    }
  }, [isInView1, isInView2, isInView3]);

  return (
    <section className='screen_size center'>
        <div className='experience_page overflow_phone' style={{ marginBottom: '100px'}}>
            <div className="blob-leftE-blur">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                    <path fill="#0099DB" transform="translate(100 100)">
                        <animate attributeName="d" dur="12000ms" repeatCount="indefinite"
                            values="M32.4,-47.5C46.4,-48.1,65.2,-48.3,70.3,-40.3C75.4,-32.4,66.7,-16.2,60.4,-3.6C54.2,9,50.5,18,45.3,25.8C40.1,33.5,33.5,40,25.7,42.6C17.9,45.3,8.9,44.2,-3.6,50.5C-16.2,56.8,-32.4,70.5,-45.4,70.8C-58.4,71.1,-68.1,58,-73.2,44C-78.2,30,-78.6,15,-80,-0.8C-81.4,-16.6,-83.8,-33.2,-77.5,-45C-71.1,-56.8,-56,-63.8,-41.6,-62.9C-27.2,-62.1,-13.6,-53.5,-2.2,-49.7C9.2,-45.9,18.4,-46.9,32.4,-47.5Z;
                                    M37.9,-62.5C48.5,-59.6,56,-48.1,60.2,-36.3C64.5,-24.4,65.6,-12.2,62.9,-1.6C60.1,9.1,53.6,18.1,49,29.4C44.4,40.6,41.7,54,33.8,58.9C26,63.7,13,59.9,-1.1,61.8C-15.1,63.6,-30.3,71.1,-35.8,65C-41.3,58.8,-37.3,39,-39.9,25.9C-42.6,12.8,-52,6.4,-56.9,-2.9C-61.9,-12.1,-62.5,-24.3,-57.1,-32.6C-51.6,-40.9,-40.2,-45.4,-29.7,-48.4C-19.2,-51.4,-9.6,-52.9,2,-56.4C13.7,-59.9,27.3,-65.5,37.9,-62.5Z;
                                    M43.4,-75.7C54.4,-68.8,60.2,-53.5,61.5,-39.4C62.8,-25.4,59.7,-12.7,55,-2.7C50.3,7.3,44.2,14.6,38.2,20.6C32.2,26.6,26.5,31.4,20.2,41.7C13.9,52.1,6.9,68.1,-3.4,74C-13.7,79.8,-27.4,75.4,-35.8,66.3C-44.2,57.1,-47.4,43.1,-53.1,31.3C-58.8,19.4,-67.2,9.7,-67.7,-0.3C-68.2,-10.3,-60.9,-20.7,-55.9,-33.7C-50.9,-46.8,-48.1,-62.7,-39.2,-70.7C-30.2,-78.7,-15.1,-78.9,0.5,-79.9C16.2,-80.8,32.4,-82.5,43.4,-75.7Z;
                                    M28.4,-51.4C34.6,-45.6,36.1,-33.6,42,-24C48,-14.4,58.6,-7.2,59.8,0.7C61,8.7,53,17.3,45.3,23.9C37.5,30.4,30.1,34.8,22.6,44C15.1,53.2,7.6,67.1,-3.3,72.7C-14.1,78.4,-28.2,75.8,-35.6,66.6C-43,57.4,-43.7,41.5,-44.4,29.3C-45,17.1,-45.7,8.5,-47.5,-1.1C-49.4,-10.7,-52.6,-21.5,-53.2,-35.8C-53.8,-50.2,-51.7,-68.2,-42.5,-72.2C-33.2,-76.3,-16.6,-66.5,-2.8,-61.7C11.1,-56.9,22.2,-57.2,28.4,-51.4Z;
                                    M27.4,-41C40.7,-39.8,60.1,-42.9,65.5,-36.7C70.9,-30.6,62.3,-15.3,62.8,0.3C63.2,15.9,72.8,31.7,70.1,42.5C67.4,53.3,52.4,59.1,38.7,64.8C25,70.5,12.5,76.1,-0.1,76.3C-12.7,76.4,-25.3,71.1,-34.9,63C-44.6,55,-51.2,44.2,-57.3,33.2C-63.4,22.3,-69,11.1,-67.8,0.7C-66.7,-9.8,-58.8,-19.6,-53.5,-32C-48.3,-44.5,-45.7,-59.6,-37.2,-63.5C-28.7,-67.5,-14.4,-60.3,-3.7,-54C7.1,-47.7,14.1,-42.2,27.4,-41Z;
                                    M32.4,-47.5C46.4,-48.1,65.2,-48.3,70.3,-40.3C75.4,-32.4,66.7,-16.2,60.4,-3.6C54.2,9,50.5,18,45.3,25.8C40.1,33.5,33.5,40,25.7,42.6C17.9,45.3,8.9,44.2,-3.6,50.5C-16.2,56.8,-32.4,70.5,-45.4,70.8C-58.4,71.1,-68.1,58,-73.2,44C-78.2,30,-78.6,15,-80,-0.8C-81.4,-16.6,-83.8,-33.2,-77.5,-45C-71.1,-56.8,-56,-63.8,-41.6,-62.9C-27.2,-62.1,-13.6,-53.5,-2.2,-49.7C9.2,-45.9,18.4,-46.9,32.4,-47.5Z">
                        </animate>
                    </path>
                </svg>
            </div>
            <div className="blob-leftE">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                    <path fill="#0099DB" transform="translate(100 100)">
                        <animate attributeName="d" dur="12000ms" repeatCount="indefinite"
                            values="M32.4,-47.5C46.4,-48.1,65.2,-48.3,70.3,-40.3C75.4,-32.4,66.7,-16.2,60.4,-3.6C54.2,9,50.5,18,45.3,25.8C40.1,33.5,33.5,40,25.7,42.6C17.9,45.3,8.9,44.2,-3.6,50.5C-16.2,56.8,-32.4,70.5,-45.4,70.8C-58.4,71.1,-68.1,58,-73.2,44C-78.2,30,-78.6,15,-80,-0.8C-81.4,-16.6,-83.8,-33.2,-77.5,-45C-71.1,-56.8,-56,-63.8,-41.6,-62.9C-27.2,-62.1,-13.6,-53.5,-2.2,-49.7C9.2,-45.9,18.4,-46.9,32.4,-47.5Z;
                                    M37.9,-62.5C48.5,-59.6,56,-48.1,60.2,-36.3C64.5,-24.4,65.6,-12.2,62.9,-1.6C60.1,9.1,53.6,18.1,49,29.4C44.4,40.6,41.7,54,33.8,58.9C26,63.7,13,59.9,-1.1,61.8C-15.1,63.6,-30.3,71.1,-35.8,65C-41.3,58.8,-37.3,39,-39.9,25.9C-42.6,12.8,-52,6.4,-56.9,-2.9C-61.9,-12.1,-62.5,-24.3,-57.1,-32.6C-51.6,-40.9,-40.2,-45.4,-29.7,-48.4C-19.2,-51.4,-9.6,-52.9,2,-56.4C13.7,-59.9,27.3,-65.5,37.9,-62.5Z;
                                    M43.4,-75.7C54.4,-68.8,60.2,-53.5,61.5,-39.4C62.8,-25.4,59.7,-12.7,55,-2.7C50.3,7.3,44.2,14.6,38.2,20.6C32.2,26.6,26.5,31.4,20.2,41.7C13.9,52.1,6.9,68.1,-3.4,74C-13.7,79.8,-27.4,75.4,-35.8,66.3C-44.2,57.1,-47.4,43.1,-53.1,31.3C-58.8,19.4,-67.2,9.7,-67.7,-0.3C-68.2,-10.3,-60.9,-20.7,-55.9,-33.7C-50.9,-46.8,-48.1,-62.7,-39.2,-70.7C-30.2,-78.7,-15.1,-78.9,0.5,-79.9C16.2,-80.8,32.4,-82.5,43.4,-75.7Z;
                                    M28.4,-51.4C34.6,-45.6,36.1,-33.6,42,-24C48,-14.4,58.6,-7.2,59.8,0.7C61,8.7,53,17.3,45.3,23.9C37.5,30.4,30.1,34.8,22.6,44C15.1,53.2,7.6,67.1,-3.3,72.7C-14.1,78.4,-28.2,75.8,-35.6,66.6C-43,57.4,-43.7,41.5,-44.4,29.3C-45,17.1,-45.7,8.5,-47.5,-1.1C-49.4,-10.7,-52.6,-21.5,-53.2,-35.8C-53.8,-50.2,-51.7,-68.2,-42.5,-72.2C-33.2,-76.3,-16.6,-66.5,-2.8,-61.7C11.1,-56.9,22.2,-57.2,28.4,-51.4Z;
                                    M27.4,-41C40.7,-39.8,60.1,-42.9,65.5,-36.7C70.9,-30.6,62.3,-15.3,62.8,0.3C63.2,15.9,72.8,31.7,70.1,42.5C67.4,53.3,52.4,59.1,38.7,64.8C25,70.5,12.5,76.1,-0.1,76.3C-12.7,76.4,-25.3,71.1,-34.9,63C-44.6,55,-51.2,44.2,-57.3,33.2C-63.4,22.3,-69,11.1,-67.8,0.7C-66.7,-9.8,-58.8,-19.6,-53.5,-32C-48.3,-44.5,-45.7,-59.6,-37.2,-63.5C-28.7,-67.5,-14.4,-60.3,-3.7,-54C7.1,-47.7,14.1,-42.2,27.4,-41Z;
                                    M32.4,-47.5C46.4,-48.1,65.2,-48.3,70.3,-40.3C75.4,-32.4,66.7,-16.2,60.4,-3.6C54.2,9,50.5,18,45.3,25.8C40.1,33.5,33.5,40,25.7,42.6C17.9,45.3,8.9,44.2,-3.6,50.5C-16.2,56.8,-32.4,70.5,-45.4,70.8C-58.4,71.1,-68.1,58,-73.2,44C-78.2,30,-78.6,15,-80,-0.8C-81.4,-16.6,-83.8,-33.2,-77.5,-45C-71.1,-56.8,-56,-63.8,-41.6,-62.9C-27.2,-62.1,-13.6,-53.5,-2.2,-49.7C9.2,-45.9,18.4,-46.9,32.4,-47.5Z">
                        </animate>
                    </path>
                </svg>
            </div>
            <Reveal>
              <p className='page_name'>Experience</p>
            </Reveal>
            <div className="row alignment_right">
                <Reveal>
                  <div className='experience alignment_left' ref={refExp1}>
                      <div className="up_mark">
                          <p className="rol_time">Free time / Vacations</p>
                      </div>
                      <div className="card shadow">
                          <p className="title">Freelancer</p>
                          <div className="flex margin">
                              <p className="rol">Web Developer / Dessigner</p>
                          </div>
                          <p className="description">I have created visually appealing and functional websites tailored to the specific needs of various clients, working on a project basis. In my free time, I have pursued my passion for Graphic Design.</p>
                      </div>
                  </div>
                </Reveal>
            </div>
            <div className="row alignment_left">
                <Reveal>
                  <div className='experience' style={{ alignItems: 'flex-end'}} ref={refExp2}>
                      <div className="up_mark">
                          <p className="rol_time">Jan 2024 - Currently</p>
                      </div>
                      <div className="card shadow">
                          <p className="title">LEAP INTERACTIVE LLC,</p>
                          <div className="flex margin">
                              <p className="rol">Developer</p>
                              <p className='job'>Full Stack</p>
                          </div>
                          <p className="description">As a full-stack developer, I am responsible for designing, developing, and maintaining both the front-end and back-end components of web applications. My role involves working with databases, servers, and APIs, as well as creating responsive and user-friendly interfaces. I specialize in using technologies such as Node.js, Vue, Angular, React, Laravel, and WordPress to deliver robust and scalable solutions.</p>
                      </div>
                  </div>
                </Reveal>
            </div>
            <div className="row alignment_right">
                <Reveal>
                  <div className='experience' ref={refExp3}>
                      <div className="up_mark">
                          <p className="rol_time">June 2022 - 2023</p>
                      </div>
                      <div className="card shadow">
                          <p className="title">Sanmina SCI</p>
                          <div className="flex margin">
                              <p className="rol">IT Technician</p>
                              <p className="job">Intern</p>
                          </div>
                          <p className="description">Organize and document user and password assignment processes using tools like AD and Google Workspace to optimize and manage new user accounts. Monitor the partial deactivation of accounts for offboarding users, assist with ticket resolution, and perform preventive and corrective maintenance on computers running Windows, Linux, and ChromeOS. Additionally, support periodic plant audits as required.</p>
                      </div>
                  </div>
                </Reveal>
            </div>
            <div className="row alignment_left">
                <Reveal>
                  <div className='experience' ref={refExp4}>
                      <div className="up_mark">
                          <p className="rol_time">Free Time / Vacations</p>
                      </div>
                      <div className="card shadow">
                          <p className="title">Freelancer</p>
                          <div className="flex margin">
                              <p className="job">Hardware diagnostics and repair</p>
                          </div>
                          <p className="description">In my free time, I perform preventive and corrective maintenance on computers, printers, and mobile phones, as well as provide remote support and consulting services.</p>
                      </div>
                  </div>
                </Reveal>
            </div>
            <motion.div 
              className="line"
              animate={mainControls}
              transition={{ duration: 2, delay:0.5 }}
              ></motion.div>

            <motion.div className="point_1"
              ref={point1}
              animate={point1Controls}
              initial={{ opacity: 0 }}
              variants={{
                  visible: { opacity: 1 }
              }}
              transition={{ duration: 2, delay: 1 }}
            ></motion.div>
            <motion.div className="point_2"
              ref={point2}
              animate={point2Controls}
              initial={{ opacity: 0 }}
              variants={{
                  visible: { opacity: 1 }
              }}
              transition={{ duration: 2, delay: 1 }}
            ></motion.div>
            <motion.div className="point_3"
              ref={point3}
              animate={point3Controls}
              initial={{ opacity: 0 }}
              variants={{
                  visible: { opacity: 1 }
              }}
              transition={{ duration: 1, delay: 1 }}
            ></motion.div>

            <div className="blob-rightE">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                    <path fill="#0099DB" transform="translate(100 100)">
                        <animate attributeName="d" dur="14000ms" repeatCount="indefinite"
                            values="M39.3,-61.1C52.1,-60.6,64.6,-52.5,67.6,-41.1C70.6,-29.6,64.2,-14.8,63.9,-0.2C63.6,14.5,69.5,29,66.2,40C63,51.1,50.6,58.7,38.1,60.8C25.5,62.8,12.8,59.3,0.1,59.2C-12.6,59.1,-25.2,62.3,-31.8,56.8C-38.4,51.3,-38.9,37,-44.6,26.1C-50.3,15.2,-61.1,7.6,-67.9,-3.9C-74.7,-15.4,-77.3,-30.8,-70.5,-39.8C-63.7,-48.8,-47.5,-51.4,-34.1,-51.6C-20.8,-51.9,-10.4,-49.8,1.4,-52.2C13.2,-54.7,26.4,-61.7,39.3,-61.1Z;
                                    M24.4,-44.5C30,-39.1,31.8,-29.2,37.7,-21.1C43.7,-12.9,53.9,-6.5,59.2,3.1C64.6,12.6,65,25.2,62,38.5C59,51.8,52.6,65.9,41.7,66.1C30.8,66.3,15.4,52.8,3.5,46.8C-8.5,40.9,-16.9,42.4,-26.3,41.3C-35.7,40.2,-45.9,36.3,-48.1,29C-50.4,21.6,-44.6,10.8,-45.9,-0.8C-47.3,-12.4,-55.7,-24.7,-57.5,-39C-59.3,-53.3,-54.4,-69.5,-43.7,-72.1C-33,-74.6,-16.5,-63.5,-3.5,-57.3C9.4,-51.2,18.8,-50,24.4,-44.5Z;
                                    M28.8,-47.5C43.2,-41.6,64.8,-45.7,72.6,-39.5C80.5,-33.2,74.6,-16.6,71,-2C67.5,12.5,66.3,25,60.5,34.8C54.7,44.6,44.2,51.6,33.4,55.7C22.6,59.9,11.3,61.2,0.7,60C-9.9,58.8,-19.9,55.2,-34,52.9C-48.1,50.7,-66.4,49.8,-77.6,41.2C-88.7,32.6,-92.7,16.3,-84.3,4.8C-76,-6.7,-55.5,-13.4,-46.3,-25.5C-37.2,-37.6,-39.5,-55,-33.7,-65.9C-27.9,-76.8,-13.9,-81.1,-3.4,-75.3C7.2,-69.5,14.4,-53.5,28.8,-47.5Z;
                                    M31.1,-59.6C38.5,-49.7,41.2,-37.6,49.5,-27.2C57.8,-16.9,71.6,-8.5,77.8,3.6C84,15.6,82.6,31.2,75.6,43.8C68.6,56.4,56.1,65.9,42.5,68.7C29,71.6,14.5,67.8,-0.9,69.3C-16.2,70.8,-32.5,77.6,-41.3,72C-50.2,66.4,-51.6,48.5,-51.1,34.5C-50.5,20.4,-48,10.2,-45.8,1.3C-43.5,-7.7,-41.6,-15.3,-42.4,-29.7C-43.1,-44,-46.4,-65.1,-39.8,-75.4C-33.2,-85.6,-16.6,-85.1,-2.3,-81C11.9,-77,23.8,-69.4,31.1,-59.6Z;
                                    M34.8,-55.2C49,-52.1,67.1,-50.6,72.2,-41.7C77.3,-32.8,69.3,-16.4,66,-1.9C62.6,12.5,63.8,25,61,38C58.3,50.9,51.6,64.4,40.8,70.4C29.9,76.5,15,75.3,1.4,73C-12.2,70.6,-24.5,67.1,-32.2,59.2C-39.9,51.3,-43.1,39,-53.2,28.4C-63.3,17.8,-80.3,8.9,-83.9,-2.1C-87.6,-13.1,-77.7,-26.1,-65.2,-32.6C-52.7,-39.1,-37.6,-38.9,-26.3,-43.7C-14.9,-48.4,-7.5,-58.1,1.4,-60.5C10.3,-63,20.6,-58.3,34.8,-55.2Z;
                                    M39.3,-61.1C52.1,-60.6,64.6,-52.5,67.6,-41.1C70.6,-29.6,64.2,-14.8,63.9,-0.2C63.6,14.5,69.5,29,66.2,40C63,51.1,50.6,58.7,38.1,60.8C25.5,62.8,12.8,59.3,0.1,59.2C-12.6,59.1,-25.2,62.3,-31.8,56.8C-38.4,51.3,-38.9,37,-44.6,26.1C-50.3,15.2,-61.1,7.6,-67.9,-3.9C-74.7,-15.4,-77.3,-30.8,-70.5,-39.8C-63.7,-48.8,-47.5,-51.4,-34.1,-51.6C-20.8,-51.9,-10.4,-49.8,1.4,-52.2C13.2,-54.7,26.4,-61.7,39.3,-61.1Z">
                        </animate>
                    </path>
                </svg>
            </div>
            <div className="blob-rightE-blur">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                    <path fill="#0099DB" transform="translate(100 100)">
                        <animate attributeName="d" dur="14000ms" repeatCount="indefinite"
                            values="M39.3,-61.1C52.1,-60.6,64.6,-52.5,67.6,-41.1C70.6,-29.6,64.2,-14.8,63.9,-0.2C63.6,14.5,69.5,29,66.2,40C63,51.1,50.6,58.7,38.1,60.8C25.5,62.8,12.8,59.3,0.1,59.2C-12.6,59.1,-25.2,62.3,-31.8,56.8C-38.4,51.3,-38.9,37,-44.6,26.1C-50.3,15.2,-61.1,7.6,-67.9,-3.9C-74.7,-15.4,-77.3,-30.8,-70.5,-39.8C-63.7,-48.8,-47.5,-51.4,-34.1,-51.6C-20.8,-51.9,-10.4,-49.8,1.4,-52.2C13.2,-54.7,26.4,-61.7,39.3,-61.1Z;
                                    M24.4,-44.5C30,-39.1,31.8,-29.2,37.7,-21.1C43.7,-12.9,53.9,-6.5,59.2,3.1C64.6,12.6,65,25.2,62,38.5C59,51.8,52.6,65.9,41.7,66.1C30.8,66.3,15.4,52.8,3.5,46.8C-8.5,40.9,-16.9,42.4,-26.3,41.3C-35.7,40.2,-45.9,36.3,-48.1,29C-50.4,21.6,-44.6,10.8,-45.9,-0.8C-47.3,-12.4,-55.7,-24.7,-57.5,-39C-59.3,-53.3,-54.4,-69.5,-43.7,-72.1C-33,-74.6,-16.5,-63.5,-3.5,-57.3C9.4,-51.2,18.8,-50,24.4,-44.5Z;
                                    M28.8,-47.5C43.2,-41.6,64.8,-45.7,72.6,-39.5C80.5,-33.2,74.6,-16.6,71,-2C67.5,12.5,66.3,25,60.5,34.8C54.7,44.6,44.2,51.6,33.4,55.7C22.6,59.9,11.3,61.2,0.7,60C-9.9,58.8,-19.9,55.2,-34,52.9C-48.1,50.7,-66.4,49.8,-77.6,41.2C-88.7,32.6,-92.7,16.3,-84.3,4.8C-76,-6.7,-55.5,-13.4,-46.3,-25.5C-37.2,-37.6,-39.5,-55,-33.7,-65.9C-27.9,-76.8,-13.9,-81.1,-3.4,-75.3C7.2,-69.5,14.4,-53.5,28.8,-47.5Z;
                                    M31.1,-59.6C38.5,-49.7,41.2,-37.6,49.5,-27.2C57.8,-16.9,71.6,-8.5,77.8,3.6C84,15.6,82.6,31.2,75.6,43.8C68.6,56.4,56.1,65.9,42.5,68.7C29,71.6,14.5,67.8,-0.9,69.3C-16.2,70.8,-32.5,77.6,-41.3,72C-50.2,66.4,-51.6,48.5,-51.1,34.5C-50.5,20.4,-48,10.2,-45.8,1.3C-43.5,-7.7,-41.6,-15.3,-42.4,-29.7C-43.1,-44,-46.4,-65.1,-39.8,-75.4C-33.2,-85.6,-16.6,-85.1,-2.3,-81C11.9,-77,23.8,-69.4,31.1,-59.6Z;
                                    M34.8,-55.2C49,-52.1,67.1,-50.6,72.2,-41.7C77.3,-32.8,69.3,-16.4,66,-1.9C62.6,12.5,63.8,25,61,38C58.3,50.9,51.6,64.4,40.8,70.4C29.9,76.5,15,75.3,1.4,73C-12.2,70.6,-24.5,67.1,-32.2,59.2C-39.9,51.3,-43.1,39,-53.2,28.4C-63.3,17.8,-80.3,8.9,-83.9,-2.1C-87.6,-13.1,-77.7,-26.1,-65.2,-32.6C-52.7,-39.1,-37.6,-38.9,-26.3,-43.7C-14.9,-48.4,-7.5,-58.1,1.4,-60.5C10.3,-63,20.6,-58.3,34.8,-55.2Z;
                                    M39.3,-61.1C52.1,-60.6,64.6,-52.5,67.6,-41.1C70.6,-29.6,64.2,-14.8,63.9,-0.2C63.6,14.5,69.5,29,66.2,40C63,51.1,50.6,58.7,38.1,60.8C25.5,62.8,12.8,59.3,0.1,59.2C-12.6,59.1,-25.2,62.3,-31.8,56.8C-38.4,51.3,-38.9,37,-44.6,26.1C-50.3,15.2,-61.1,7.6,-67.9,-3.9C-74.7,-15.4,-77.3,-30.8,-70.5,-39.8C-63.7,-48.8,-47.5,-51.4,-34.1,-51.6C-20.8,-51.9,-10.4,-49.8,1.4,-52.2C13.2,-54.7,26.4,-61.7,39.3,-61.1Z">
                        </animate>
                    </path>
                </svg>
            </div>
        </div>
    </section>
  )
}

export default Experience
import { Typography, Box, Avatar, useMediaQuery } from '@mui/material';
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { React, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ProfilePicture from '../../assets/ruben.jpg'
import { useBounceInterval, useRotateYInterval } from '../VisualEffects/Animations';
import { mobileOnlyPadding } from '../theme/utils';
import SocialMedia from '../Common/SocialMedia';
import BarrioUnido from '../../assets/barrio_unido_logo.png'
import WavingFlag from './WavingFlag';
import HomeTitle from './SsTitle';
import HomeSsText from './SsText';

const Home = () => {

  const containerRef = useRef(null);
  const controls = useAnimation();
  const controlsY= useAnimation();

  const isTablet = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:600px)");

  const flagWidth = isMobile ? 285 : isTablet ? 550 : 1000;
  const flagHeight = isMobile ? 260 : isTablet ? 495 : 600;

  useBounceInterval(controls, 5, 40);
  useRotateYInterval(controlsY, 8.5);

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    });
  }, [controls]);


  useEffect(() => {
    controlsY.start({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  });
  }, [controlsY]);

  useEffect(() => {
    let timeoutId;
  
    const runAnimation = () => {
      if (!containerRef.current) return;
  
      containerRef.current.style.visibility = "visible";
  
      const { words } = splitText(containerRef.current, { by: "words" });
  
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
  
      timeoutId = setTimeout(runAnimation, 10000);
    };
  
    document.fonts.ready.then(runAnimation);
  
    return () => clearTimeout(timeoutId); // Limpia si el componente se desmonta
  }, []);

  return (
    <Box sx={{...mobileOnlyPadding("1rem")}}>
      <Box className='home-fs'>
      <motion.div
        initial={{ opacity: 0, x: 250 }}
        animate={controlsY}
        transition={{
          duration: 1,        
          ease: "easeOut",    
          opacity: { duration: 3.5 }, 
        }}
        >
        <div className='home-fs-title'>
          Educación Física 
        </div>
        </motion.div>

        <motion.div
          className='title-animate'    
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}>  
          <Typography variant="body2" color="rgb(65, 62, 58)" sx={{ fontWeight: '700', pl: 0.5, fontSize: '20px',}}>
              Santiago CL.
          </Typography>
        </motion.div>

        <Box className='home-fs-description'>
          <Box className='avatar-box'>
          <Avatar
            src={ProfilePicture}
            alt="Foto"
            sx={{
              width: 320,
              height: 320,
              border: '4px solid white', // ← Aquí el borde blanco
              marginRight: {
                xs: 0,   
                sm: 0,   
                md: 8    
              }
            }}
          />
          </Box>
          <Typography variant="body1" color="rgb(28, 28, 28)" ref={containerRef} sx={{ visibility: 'hidden', fontSize: '18px' }}>
            Mi nombre es Rubén Santibañez, tengo 25 años, soy titulado en Pedagogía en Educacion Física,
            Deportes y Recreación para educacion basica y media, cuento con experiencia tanto en el ámbito
            escolar como en actividades deportivas extracurriculares.
          </Typography>
        </Box>

        <SocialMedia />
      </Box>

      <Box className='home-ss' sx={{ textAlign: 'center' }}>
        <HomeTitle />
        <div className='home-ss-description'>
          <HomeSsText />
          <WavingFlag src={BarrioUnido} width={flagWidth} height={flagHeight} />
        </div>
      </Box>
    </Box>
  );
}

export default Home;
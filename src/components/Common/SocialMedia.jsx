import { Box, Stack, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from '@mui/icons-material/Email';

const icons = [
  <EmailIcon sx={{
    fontSize: {
      xs: "2rem",   
      sm: "2.5rem",    
      md: "2.5rem",  
    },
    color: "rgb(240, 56, 56)"
  }}/>,
  <FacebookIcon sx={{
    fontSize: {
      xs: "2rem",   
      sm: "2.5rem",    
      md: "2.5rem",  
    },
    color: "#1877F2"
  }} />,
  <InstagramIcon sx={{
    fontSize: {
      xs: "2rem",   
      sm: "2.5rem",    
      md: "2.5rem",  
    },
    color: "#E4405F"
  }} />,
  <PinterestIcon sx={{
    fontSize: {
      xs: "2rem",   
      sm: "2.5rem",    
      md: "2.5rem",  
    },
    color: "#E60023"
  }} />,
  <YouTubeIcon sx={{
    fontSize: {
      xs: "2rem",   
      sm: "2.5rem",    
      md: "2.5rem",  
    },
    color: "#FF0000"
  }} />,
];

export default function SocialMedia() {
  const [rotatingIndex, setRotatingIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * icons.length);
      setRotatingIndex(randomIndex);

      
      setTimeout(() => setRotatingIndex(null), 1200);
    }, 4000); // cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Divider sx={{ width: "90%", mb: 2 }} />
      <Stack direction="row" spacing={4} justifyContent="center">
        {icons.map((icon, index) => {
          const isRotating = rotatingIndex === index;

          return (
            <motion.div
              key={index}
              whileHover={{
                rotate: Math.random() * 360, // giro leve aleatorio en hover
                transition: { type: "spring", stiffness: 100, damping: 8 },
              }}
              animate={isRotating ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 1.2 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              {icon}
            </motion.div>
          );
        })}
      </Stack>
      <Divider sx={{ width: "90%", mt: 2 }} />
    </Box>
  );
}

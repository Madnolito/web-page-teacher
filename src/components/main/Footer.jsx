import { Box, Container, Grid, Typography, Button, Stack, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/MusicNote'; // No hay ícono oficial de TikTok, usamos uno similar

export default function Footer() {
const MotionBox = motion(Box);
  return (
    <MotionBox
      component="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, backgroundColor: 'rgb(44, 44, 44)' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        backgroundColor: 'rgb(44, 44, 44)',
        color: '#ffffff',
        py: 5,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}
        sx={{
            flexWrap: 'unset',
            display: {
                xs: 'grid',    
                sm: 'flex'     
            },
            }}>
          {/* Columna izquierda */}
            <Grid item xs={12} md={6}
            sx={{
                pr: {
                    xs: 0,      
                    sm: '8rem'  
                }
            }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              ¿Hablamos?
            </Typography>
            <Typography variant="body1" color="rgba(255,255,255,0.8)" mb={3} textAlign="justify">
                Como profesor de Educación Física, me enfoco en el desarrollo educativo y formativo mediante la actividad física.
                Si trabajas en una institución, colegio o proyecto enfocado en la formación integral de niños,
                niñas o jóvenes, estaré encantado de colaborar contigo para potenciar el aprendizaje a través de la actividad física.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgb(30, 85, 87)',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: 'rgb(33, 104, 105)' },
              }}
            >
              Cuéntame tu objetivo
            </Button>
            </motion.div>
          </Grid>

          {/* Columna derecha */}
        <Grid item xs={12} md={6}>
            <Box
            sx={{
                display: {
                xs: 'grid',    
                sm: 'flex'     
                },
                flexDirection: 'column',
                justifyContent: {
                xs: 'unset',    
                sm: 'space-between'
                },                       
                height: '100%',
            }}
            >
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <Stack pt="1rem"
                sx={{
                    minWidth: { xs: '100%', sm: '350px', md: '400px' },
                    maxWidth: '500px',
                }}>
                <Typography variant="body1">
                    <strong>Correo</strong> <br/>
                    <Link href="mailto:hello@buuuk.com" underline="hover" fontWeight="bold" color="#00aaff">
                    ruben@gmail.com
                    </Link>
                </Typography>
                <Typography variant="body1">
                    <strong>Teléfono</strong> <br/>
                    <Link href="tel:+6598735984" underline="hover" fontWeight="bold" color="#00aaff">
                    (56) 9 52055521
                    </Link>
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                    <strong>Dirección</strong> <br/>
                    <Link
                    href="https://goo.gl/maps/..."
                    underline="hover"
                    color="#00aaff"
                    target="_blank"
                    rel="noopener"
                    >
                    Psj Marte - Santiago, La florida
                    </Link>
                </Typography>
                </Stack>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {/* Redes sociales alineadas a la derecha */}
                    <Box display="flex" justifyContent="center" mt={4}>
                    <Stack direction="row" spacing={2}>
                        <IconButton href="#" target="_blank" sx={{ color: '#fff' }}>
                        <LinkedInIcon />
                        </IconButton>
                        <IconButton href="#" target="_blank" sx={{ color: '#fff' }}>
                        <InstagramIcon />
                        </IconButton>
                        <IconButton href="#" target="_blank" sx={{ color: '#fff' }}>
                        <TikTokIcon />
                        </IconButton>
                    </Stack>
                    </Box>
                </motion.div>
            </Box>
        </Grid>

        </Grid>
        <Typography variant="body2" color="white" paddingTop="2rem">
            © {new Date().getFullYear()} By Emanuel Tapia.
        </Typography>
      </Container>
    </MotionBox>
  );
}

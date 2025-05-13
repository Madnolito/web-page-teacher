import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/main/Navbar';
import BackgroundWrapper from './components/main/BackgroundWrapper';
import ScrollProgressBar from './components/VisualEffects/ScrollProgressBar';

import Router from './router/Router';
import Footer from './components/main/Footer';

function App() {
  return (
    <BackgroundWrapper>
      <ScrollProgressBar />
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, width: "100%", overflow: 'hidden' }}>
          <div className='main-container'>
            <Router />
          </div>
          </Box>
          <Footer />
    </BackgroundWrapper>

  );
}

export default App;

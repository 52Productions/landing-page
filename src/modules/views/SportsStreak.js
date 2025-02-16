import React from 'react';
import { Box, Container as MuiContainer, Link, Grid as MuiGrid } from '@mui/material';
import { styled } from '@mui/material/styles';
import googlePlay from '../../assets/google_play.png';
import appStore from '../../assets/apple_appstore.svg';
import announcing from '../../assets/announcing3.webp';


const StyledBox = styled(Box)({
  backgroundColor: '#000000',
  padding: '1px 0 50px 0',
  marginBotton: '100px',
  width: '100%',
  overflow: 'visible',
  backfaceVisibility: 'hidden',
  transform: 'translateZ(0)', // Hardware acceleration
  willChange: 'transform' // Hint to browser for optimization


});

const StyledContainer = styled(MuiContainer)({
  overflow: 'visible',
  padding: '20px',
  maxWidth: '1400px !important',
  margin: '0 auto',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden'
});

const StyledGrid = styled(MuiGrid)({
  overflow: 'visible',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0rem',
  width: '100%'
});


const ScreenshotImage = styled('img')(({ theme, delay = 0 }) => ({
  height: '300px',
  width: 'auto',
  borderRadius: '12px',
  objectFit: 'contain',
  transition: 'transform 0.2s ease-out',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
  position: 'relative',
  zIndex: 1,

  boxShadow: `
  0 0 5px #fff,
  0 0 55px #0af,
  0 0px 75px #0af
`,

  '&:hover': {
    transform: 'scale(1.4) translateY(-10%)',
    zIndex: 999,
    //boxShadow: '0 0 20px rgba(0, 170, 255, 0.8)'
    boxShadow: `
    0 0 15px #fff,
    0 0 55px #0af,
    0 0px 175px #0af
  `,
  
  },

  [theme.breakpoints.down('md')]: {
    height: '250px',
    maxWidth: '400px',
    '&:hover': {
      transform: 'scale(1.2)',
    }
  },

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    width: '95%',
    maxWidth: '300px',
    margin: '0 auto',
    '&:hover': {
      transform: 'none'
    }
  }
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '1rem', 
  backgroundColor: '#000',
  position: 'relative',
  paddingBottom: '20px'
}));


const StoreLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  position: 'absolute',
  bottom: '75px', 
  right: '15%',
  zIndex: 2,
  [theme.breakpoints.up('xl')]: {
    right: '35%' // Move links more towards center on very wide screens
  },
  [theme.breakpoints.down('md')]: {
    position: 'static',
    justifyContent: 'center',
    padding: '10px 0', 
    width: '100%',
    right: 'auto'
  }
}));

const AnnouncementImage = styled('img')({
  width: '100%',  
  maxWidth: '1800px',  // Prevent it from getting too wide
  maxHeight: '800px',  // Prevent it from getting too tall
  objectFit: 'contain',
  objectPosition: 'center',
  filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))'
});



const StoreIcon = styled('img')(({ theme }) => ({
  height: '60px',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)'
  },
  [theme.breakpoints.down('md')]: {
    height: '45px'
  },
  [theme.breakpoints.down('sm')]: {
    height: '40px'
  }
}));

function SportsStreak() {
  // Just get the first 3 screenshots
  const screenshots = Array.from({ length: 4 }, (_, i) => {
    try {
      return require(`../../assets/ss${i + 1}.webp`);
    } catch {
      return null;
    }
  }).filter(Boolean);

  return (
    <section>
    <StyledBox>
           <HeaderSection>
      <AnnouncementImage
          src={announcing}
          alt="Announcing Sports Streak!"
        />
            <StoreLinks>
          <Link 
            href="https://play.google.com/store/apps/details?id=com.FiftyTwoProductions.SportsStreak" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <StoreIcon src={googlePlay} alt="Get it on Google Play" />

          </Link>
          {/* Add App Store link when ready */}
           <Link 
            href="https://apps.apple.com/us/app/sports-streak-basketball/id6480218661" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <StoreIcon src={appStore} alt="Download on the App Store" />
            </Link>
        </StoreLinks>
      </HeaderSection>
      <StyledContainer maxWidth={false}>
      
        <br />
        <StyledGrid container spacing={4} justifyContent="center">
          {screenshots.map((screenshot, index) => (
            <StyledGrid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ScreenshotImage
                src={screenshot}
                alt={`Sports Streak Screenshot ${index + 1}`}
                loading="lazy"
                delay={index * 250} // Stagger each animation by 750ms
              />
            </StyledGrid>
          ))}
        </StyledGrid>
                

      </StyledContainer>
    </StyledBox>
    </section>
  );
}

export default SportsStreak;
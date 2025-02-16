import React from 'react';
import { Box, Container as MuiContainer, Link, Grid as MuiGrid } from '@mui/material';
import { styled } from '@mui/material/styles';
import googlePlay from '../../assets/google_play.png';
import appStore from '../../assets/apple_appstore.svg';
import announcing from '../../assets/announcing2.webp';


const StyledBox = styled(Box)({
  backgroundColor: '#000000',
  padding: '1px 0 100px 0',
  marginBotton: '100px',
  width: '100%',
  overflow: 'visible',
});

const StyledContainer = styled(MuiContainer)({
  overflow: 'visible',
  padding: '40px'
});

const StyledGrid = styled(MuiGrid)({
  overflow: 'visible'
});


const glowAnimation = `@keyframes glow {
  0% {
    box-shadow: 0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0af,
      0 0 82px #0af;
  }
  50% {
    box-shadow: 0 0 14px #fff,
      0 0 20px #fff,
      0 0 42px #fff,
      0 0 84px #0af,
      0 0 164px #0af;
  }
  100% {
    box-shadow: 0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0af,
      0 0 82px #0af;
  }
}`;


const ScreenshotImage = styled('img')(({ theme }) => ({
  height: '300px',
  borderRadius: '12px',
  animation: 'glow 3s ease-in-out infinite',
  objectFit: 'contain',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.6)',
    animation: 'none',
    boxShadow: `
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0af,
      0 0 80px #0af,
      0 0 90px #0af,
      0 0 100px #0af,
      0 0 111px #0af
    `
  },
  '@keyframes glow': {
    '0%': {
      boxShadow: `
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0af,
        0 0 82px #0af
      `
    },
    '50%': {
      boxShadow: `
        0 0 14px #fff,
        0 0 20px #fff,
        0 0 42px #fff,
        0 0 84px #0af,
        0 0 164px #0af
      `
    },
    '100%': {
      boxShadow: `
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #0af,
        0 0 82px #0af
      `
    }
  }
}));

const HeaderSection = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '2rem',
  backgroundColor: '#000',
  position: 'relative' // Add this to allow absolute positioning of children
});

const StoreLinks = styled(Box)({
  display: 'flex',
  gap: '20px',
  position: 'absolute', // Position absolutely within HeaderSection
  bottom: '20px', // Distance from bottom
  right: '25%', // Distance from right
  zIndex: 2 // Ensure links appear above the image
});

const AnnouncementImage = styled('img')({
  width: '100%',  // Full width
  maxWidth: '1800px',  // Prevent it from getting too wide
  objectFit: 'contain',
  objectPosition: 'center',
  filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))'
});



const StoreIcon = styled('img')({
  height: '60px', // Increased from 40px
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)' // Add slight zoom on hover
  }
});

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
            <StyledGrid item xs={12} md={2} key={index}>
              <ScreenshotImage
                src={screenshot}
                alt={`Sports Streak Screenshot ${index + 1}`}
                loading="lazy"
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
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Button, IconButton, List, ListItem, ListItemText, Drawer } from '@mui/material';
import Container from '@mui/material/Container';
import './App.css';
import banner from './Assets/banner.jpg';
import carda from './Assets/card1.jpg';
import cardb from './Assets/card2.jpg';
import cardc from './Assets/card3.jpg';
import cardd from './Assets/card6.jpg';
import carde from './Assets/card7.jpg';
import cardf from './Assets/card8.jpg';
import cardg from './Assets/card9.jpg';
import nocolorblindness from './Assets/nocolorblindness.png';
import protanopia from './Assets/redblindprotanopia.png';

export default function App() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const card1 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="wheelchair user with chart"
        height="250"
        image={carda}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Web Accessibility
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          makes sure everyone has access to the content on a website or application. It can improve user experience overall, such as improvement of the color contrast of text can make a website easier for everyone to read.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="wheelchair user with webpage, an arrow is clicking on the website. Buttons are located at the top signifying deafness and blindless"
        height="250"
        image={cardb}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Web Content Accessibility Guidelines (WCAG)
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          were created by the Web Accessibility Initiative to make the web more accessible to everyone. In some countries, there are laws and regulations that require organizations to comply with accessbility standards.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="woman sitting with a laptop, multiple monitors with checkmarks, and a pie chart in the top left corner"
        height="250"
        image={cardc}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Examples
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          We will discuss some of the most important guidelines in order to make your users' experience as smooth as possible.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  const card4 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="example of how a website could look to someone without color blindness"
        image={nocolorblindness}
        style={{ objectFit: 'contain', maxHeight: '200px', maxWidth: '100%', margin: 'auto', marginTop: '20px' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Color Blindness
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          affects approximately 1 in 12 men and 1 in 200 women worldwide.
          <br />
          <br />
          WCAG provides guidelines for choosing colors that have sufficient contrast, and websites that follow these guidelines are likely to be more accessible to users with protanopia and other types of color blindness.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  const card5 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="example of how a website could look to someone with protanopia"
        image={protanopia}
        style={{ objectFit: 'contain', maxHeight: '200px', maxWidth: '100%', margin: 'auto', paddingTop: '20px' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Protanopia
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          Protanopia is a type of red-green color blindness, where the affected person is unable to perceive the color red.
          <br />
          <br />
          This type of color blindness can significantly affect a user's ability to navigate a website that relies on color cues. For example, if a website uses red and green colors to indicate different types of information or to highlight certain elements, a user with protanopia may not be able to differentiate between those colors and could miss important information.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );


  const card6 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="hands on a keyboard in front of a computer screen"
        image={cardd}
        style={{ objectFit: 'contain', maxHeight: '400px', maxWidth: '100%', margin: 'auto' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Blindness and Low Vision
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          Provide text descriptions for non-text content such as images, videos, and audio files. This allows screen reader users to understand the content and function of the non-text content.
          <br />
          <br />
          Use HTML tags such as headings, lists, and tables to organize and structure content in a logical and meaningful way. This makes it easier for screen reader users to navigate and understand the content.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  const card7 = (
    <React.Fragment>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <CardMedia
        component="img"
        alt="woman sitting on a computer screen, man sitting at a table looking at a laptop, and a man on the ground looking at his phone"
        image={carde}
        style={{ objectFit: 'contain', maxHeight: '400px', maxWidth: '100%', margin: 'auto' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Blindness and Low Vision continued
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          Use labels, captions, and other cues to provide context and guidance for form fields. This allows screen reader users to understand what information is required and how to provide it.
          <br />
          <br />
          Ensure that all functionality on the website can be accessed and operated using a keyboard alone. This is essential for users who cannot use a mouse or other pointing device.
          <br />
          <br />
          Ensure that text and other visual elements have sufficient contrast with the background. This makes it easier for users with low vision to read and understand the content.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  const card8 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="family gathered around a screen with youtube playing sound"
        image={cardf}
        style={{ objectFit: 'contain', maxHeight: '400px', maxWidth: '100%', margin: 'auto' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Deafness and Hard of Hearing
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          Videos should be captioned to provide text alternatives for audio content. Similarly, transcripts should be provided for any audio content that is not presented as a video.
          <br />
          <br />
          For video content that includes visual information that is not fully explained in the audio track, such as action or scenery, audio descriptions should be provided to ensure that people who are blind or have low vision can understand the content.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  const card9 = (
    <React.Fragment>
      <CardMedia
        component="img"
        alt="man using a magnifying glass on a website with two other users sitting nearby"
        image={cardg}
        style={{ objectFit: 'contain', maxHeight: '400px', maxWidth: '100%', margin: 'auto' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Deafness and Hard of Hearing continued
        </Typography>
        <br />
        <Typography variant="body2" sx={{ fontSize: 18 }}>
          Websites that include audio content should provide visual notifications, such as a flashing icon or subtitle, to alert users who are deaf or hard of hearing that there is sound.
          <br />
          <br />
          Audio should not play automatically when a web page loads, as this can be jarring for users who use assistive technology or who rely on captions.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box>
      <img src={banner} alt="banner" style={{ width: '100%', marginTop: '50px' }} />
      <AppBar position="fixed" className="appBar">
        <Container maxWidth="lg">
          <Toolbar>
            {isMobile ? (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            ) : (
              <div>
                <Button color="inherit" href="http://reneedoll.com/">
                  About Me
                </Button>
                <Button color="inherit" href="https://www.w3.org/WAI/standards-guidelines/wcag/">
                  WCAG Guidelines
                </Button>
                <Button color="inherit" href="https://www.whocanuse.com/">
                  WhoCanUse
                </Button>
                <Button color="inherit" href="https://www.accessibilitychecker.org/">
                  Accessibility Checker
                </Button>
                <Button color="inherit" href="https://www.w3.org/WAI/policies/">
                  Web Accessibility Laws & Policies
                </Button>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItemText disableTypography>
            <Typography variant="h6" onClick={toggleDrawer} style={{ fontWeight: 'bold', marginBottom: '8px', marginLeft: '4px' }}>
            <MenuIcon />    Resources
            </Typography>
          </ListItemText>
          <ListItem button component="a" href="http://reneedoll.com/">
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button component="a" href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            <ListItemText primary="WCAG Guidelines" />
          </ListItem>
          <ListItem button component="a" href="https://www.whocanuse.com/">
            <ListItemText primary="WhoCanUse" />
          </ListItem>
          <ListItem button component="a" href="https://www.accessibilitychecker.org/">
            <ListItemText primary="Accessibility Checker" />
          </ListItem>
          <ListItem button component="a" href="https://www.w3.org/WAI/policies/">
            <ListItemText primary="Web Accessibility Laws & Policies" />
          </ListItem>
        </List>
      </Drawer>
      <Typography sx={{ fontSize: 50, textAlign: 'center' }}>Accessibility in Web Development</Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: window.innerWidth <= 767 ? 'column' : 'row',
        justifyContent: 'center',
        gap: window.innerWidth <= 767 ? '0' : '20px',
        marginTop: '20px'
      }}>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card1}</Card>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card2}</Card>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card3}</Card>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: window.innerWidth <= 767 ? 'column' : 'row',
        justifyContent: 'center',
        gap: window.innerWidth <= 767 ? '0' : '50px',
        marginTop: '20px'
      }}>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card4}</Card>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card5}</Card>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: window.innerWidth <= 767 ? 'column' : 'row',
        justifyContent: 'center',
        gap: window.innerWidth <= 767 ? '0' : '50px',
        marginTop: '20px'
      }}>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card6}</Card>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card7}</Card>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: window.innerWidth <= 767 ? 'column' : 'row',
        justifyContent: 'center',
        gap: window.innerWidth <= 767 ? '0' : '50px',
        marginTop: '20px'
      }}>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card8}</Card>
        <Card variant="outlined" sx={{ flex: 1, borderLeft: 'none', borderTop: 'none', borderRight: 'none', borderBottom: '2px solid black' }}>{card9}</Card>
      </Box>

    </Box>
  );
}
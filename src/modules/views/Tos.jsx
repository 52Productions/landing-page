import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@mui/material';


const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: "100vw"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function Tos(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant='body1' component={"p"}>
        TERMS OF USE/TERMS OF SERVICE QUESTIONNAIRE


(1) Please describe the platform (such as website access to the game only, application access to the game etc.) and the activity that will be conducted on the platform. What’s important here is to describe how the game you’re launching will be interacted with by users (as it is not incredibly apparent to me from a non-user perspective or someone who has not had a feel for the game product you will launch). If you can provide me with a link to your platform or where users can access the game (whether that’s in launch state or pre-launch state), that will be helpful. 

(2) Who is the game’s user base, including will you target people under the age of 18, and/or outside of the US (I understand the population market will be the Philippines but will folks, such as countries in the EU, be able to access)? Will different users use the platform different ways (if such a distinction exists) If so, please describe these different uses and any differing functionalities. Said another way, if one user can interact in a different way than another set of users, please explain. 

(3) Will your platform direct your users/players to any other sites and, if so, for what? This can include advertisements, a portal for making payments, etc. 

(4) Will users be able to post on any public-facing portion of the game platform (or will you have user-submissions). While I understand folks can be unanimous (or choose to use Google ID via an API), will your users need to create an account to use any portions or functionalities of the platform and, if so, what portions of the platform? All information is helpful! 

(5) How will you make money off of your game (if any)? How will you collect this money? Help me understand whether folks need to pay to access the game and if so, how is this collected, if you will make money with advertiser, etc.


(6) As a follow up, will you have any third-party advertisements on the platform or throughout the game? If the game is accessible via a website and ads can run while a user is playing, please let me know. 

(7) Are there any paid tiers or access points to your game? If so, what are they? Do you have a cancellation/refund policy? 
(8) Please confirm how users will access the game (as mentioned, via a website and what’s the website link) or downloading the game?  

(9) What’s the name of the game? 
(10) Will you employ the use of any additional APIs (outside of Google)? 
(11) Anything else that you feel is relevant? Please err on the side of over-communication. 

PRIVACY POLICY QUESTIONNAIRE

The California Consumer Privacy Act of 2018 (CCPA) is a comprehensive consumer privacy bill that provides California residents with certain rights and protections regarding their personal information. Passed in June 2018 and amended in September 2018, the CCPA's privacy notice and consumer rights provisions became operative on January 1, 2020 with the CPRA (an add on/enhancement to the CCPA) being operative January 1, 2023. 
 
Among other rights and requirements, the CCPA allows California residents to prevent covered businesses from selling their personal identifiable information by opting-out. It also prevents the sale of a minor's personal information without express consent. To help consumers easily exercise their opt-out rights, a business must include a "Do Not Sell My Personal Information" link in a "clear and conspicuous" location if it is selling personal information. The CCPA also mandates specific privacy notice disclosures.

For purposes of the Act, “personally identifiable information” means individually identifiable information about a consumer that is collected online and includes the consumer’s name, address, e-mail address, telephone number, and Social Security number, as well as other identifiers that permit him or her to be contacted physically or online, and information collected and maintained in combination with the specified identifiers. 

A privacy policy is required to contain five things:

Information collected – The categories of personal information the game collects.
The categories of third-parties with whom the company shares the information.
How the consumer can review and request changes to their information collected by the company.
How the company notifies consumers of material changes to its privacy policy.
The effective date of the privacy policy.

Please answer the following questions:
(1) What are the categories of personal information you collect? I recommend the list err on the side of being over inclusive. From what I understand, it would seem that you do not collect personal information (outside of aggregated usage statistics), however, if you will collect or require a user to submit their name, a username, create an account, provide billing information, etc., please let me know. 
(2) What third-parties will the company shares the information with (if any)? 
(3) A section of the privacy policy must include how the customer can review and request changes to their information collected, we generally list an email address such as legal@”companyname”.com .  Do you have an email address in mind?
(4) How will your company notify consumers of material changes to its privacy policy? Common methods include an email to all registered users (if users are required to register to use the game) and/or a notice posted on the homepage of the platform (or a notification when a user visits the application or gaming system interface again). 
(5) If the game is available via a website, privacy policies must disclose how the website responds to web browser “do not track” signals or other mechanisms that provide consumers the ability to exercise choice regarding the collection of personally identifiable information about an individual's online activities over time and across online services. Will your website be blocking “do not track” signals?
(6) What security measures, if any, will the you employ when you’re storing any personal information? For example: regular malware scans, encryption, periodic password change requirements, etc.  
 
        </Typography>
      </Container>
    </section>
  );
}

Tos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tos);
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Anim
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  wiiStrike: require('../assets/wii_strike.jpg'),
  wiiMikeBg: require('../assets/wii_mike_bg.jpg'),
  wiiSetup: require('../assets/wii_setup.png'),
  wiiScore: require('../assets/wii_score.jpg'),
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  wikiIdealPath: require('../assets/wiki_ball_path.png'),
  bearPattern: require('../assets/bear_comments.png'),
  anatomy: require('../assets/ball_anatomy.jpg'),
  hyroad: require('../assets/hyroad.png'),
  lane: require('../assets/lane.jpg')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="#000" bgImage={images.wiiStrike} bgDarken={0.74}>
          <Heading size={1} fit caps lineHeight={1} textColor="quaternary">
            Bowling
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            A guide built just for you.
          </Text>
        </Slide>
        <Slide bgColor="secondary" align="flex-start flex-start" transition={['fade']}>
          <Heading size={4} textColor="tertiary" textAlign="left" style={{ marginTop: 144 }}>Scoring</Heading>
          <Text textAlign="left" style={{ marginTop: 72 }} textColor="primary">- Max score of 300 with 12 strikes</Text>
          <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- Max score of 191 with 10 spares</Text>
          <Image src={images.wiiScore} style={{ marginTop: 72 }} />
        </Slide>
        <Slide bgColor="secondary" align="flex-start flex-start" transition={['none']}>
          <Heading size={4} textColor="tertiary" textAlign="left" style={{ marginTop: 144 }}>Hitting more strikes</Heading>
          <Text textAlign="left" style={{ marginTop: 72 }} textColor="primary">- 6 degrees right of head pin</Text>
          <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- Ball drives into the 'pocket'</Text>
          <Image src={images.wikiIdealPath} style={{
            marginTop: -16,
            marginLeft: 360,
            transform: 'rotate(-90deg)'
          }}
          />
        </Slide>
        <Slide bgColor="secondary" align="flex-start flex-start" transitionDuration={0}>
          <Anim
            transitionDuration={500}
            fromStyle={{
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px) scale(1.0) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform: 'translate3d(220px, -650px, 0px) scale(1.6) rotate(90deg)'
              }
            ]}
            easing={'sinInOut'}
          >
            <div>
              <Heading size={4} textColor="tertiary" textAlign="left" style={{ marginTop: 144 }}>3 Factors</Heading>
              <Text textAlign="left" style={{ marginTop: 72 }} textColor="primary">- Bowling lane</Text>
              <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- Bowling ball</Text>
              <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- You</Text>
              <Image src={images.wikiIdealPath} style={{
                marginTop: -100,
                marginLeft: 360,
                transform: 'rotate(-90deg)'
              }}
              />
            </div>
          </Anim>
        </Slide>
        <Slide align="center flex-start" bgColor="secondary">
          <Heading size={4} textColor="tertiary" textAlign="left" style={{ marginTop: 144 }}>Bowling Lane</Heading>
          <Image src={images.bearPattern} style={{
            marginLeft: 340,
            marginTop: -144
          }}
          />
        </Slide>
        <Slide bgColor="secondary" align="flex-start flex-start" transition={['fade']} bgImage={images.wiiMikeBg} bgDarken={0.88}>
          <Heading size={4} textColor="tertiary" textAlign="left" style={{ marginTop: 144 }}>Bowling Balls</Heading>
          <Text textAlign="left" style={{ marginTop: 72 }} textColor="primary">- Pros overwhelmingly use 15 or 16 lb balls</Text>
          <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- Lighter balls tend to bounce off the pocket. Need to drive through multiple 3.5 lb pins</Text>
          <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- The outer material or cover of the bowling ball is plastic, urethane, or resin. Coverstock affects how easily a ball can hook on the lane. Most house shots will be plastic or urethane.</Text>
          <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- Much much more than we can cover: inserts, core, surface, hole pitch + layout</Text>
        </Slide>
        <Slide align="flex-start flex-start" bgColor="secondary">
          <Image src={images.hyroad} width={400} />
          <Image src={images.anatomy} />
        </Slide>
        <Slide bgColor="secondary" align="flex-start flex-start" transition={['fade']}>
          <Heading size={4} textColor="tertiary" textAlign="left" style={{ marginTop: 144 }}>
            You. As the bowler.
          </Heading>
          <Text textAlign="left" style={{ marginTop: 72 }} textColor="primary">- Usually the only controllable factor</Text>
          <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- Infinite varieties of bowling forms but consistency is the most important</Text>
          <Text textAlign="left" style={{ marginTop: 36 }} textColor="primary">- Aim using a reference point: dots, arrows, or pins on lane</Text>
        </Slide>
        <Slide bgColor="secondary" align="flex-start flex-start" transition={['fade']} bgImage={images.lane} bgDarken={0} />
        <Slide bgColor="secondary" align="flex-start flex-start" transition={['fade']}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4GKv77kCDpk?start=15?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{
            position: 'fixed',
            left: 0,
            top: 0
          }}
          />
        </Slide>
        <Slide bgColor="secondary" align="flex-start flex-start" transition={['fade']}>
          <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/cEI69YFm9uo?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{
            position: 'fixed',
            left: 0,
            top: 0
          }}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Playing against the house
          </Heading>
          <List>
            <ListItem>House balls tend to have very low hook potential. Force more revolutions with a 2 finger grip</ListItem>
            <ListItem style={{ marginTop: 36 }}>Varying ball speed. Slower balls (~13 mph) can hook easier and are more consistent. Use high speed for dry lanes or single-pin spares to eliminate oil from the equation.</ListItem>
            <ListItem style={{ marginTop: 36 }}>Varying ball speed. Slower balls (~13 mph) can hook easier and are more consistent. Use high speed for dry lanes or single-pin spares to eliminate oil from the equation.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>If you could see the insides of bowling ball holes, nobody would ever bowl again.</Quote>
            <Cite margin="10px 0 0 30px">Unknown</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}


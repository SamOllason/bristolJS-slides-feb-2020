// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    Notes,
    Quote,
    Slide,
    Text,
    Table,
    TableRow,
    TableBody,
    TableItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
    formidagon: require('./assets/formidable-logo.svg'),
    goodWork: require('./assets/good-work.gif'),
    bridge: require('./assets/bridge.png'),
    XcodeSShot: require('./assets/XcodeSShot.png'),
    WebStormSShot: require('./assets/WebStormSShot.png'),
    pino: require('./assets/pino.jpg'),
    InterfaceBuilderStyling1: require('./assets/InterfaceBuilderStyling1.png'),
    InterfaceBuilderStyling2: require('./assets/InterfaceBuilderStyling2.png'),
    FlexBoxStyling: require('./assets/FlexBoxStyling.png'),
    RNLogo: require('./assets/react-native-logo.png'),
    sponsor1: require('./assets/sponsor1.png'),
    sponsor2: require('./assets/sponsor2.png'),
    jsxExample: require('./assets/jsxExample.png'),


    firstSlide: require('./assets/firstSlide.png'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: 'whitesmoke',
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
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >

                <Slide
                    transition={['slide']}
                    bgImage={images.firstSlide}
                >
                    <Heading size={1} caps textColor="primary">
                        Sam Ollason
                    </Heading>
                    <br/>
                    <br/>

                    <Heading size={5} textColor="primary">
                        Green13 Solutions
                    </Heading>
                    <br/>

                    <Heading size={5} textColor="secondary">
                        My experiences with React Native
                    </Heading>
                    <br/>
                    <br/>

                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={1} textColor="secondary">
                        Me
                    </Heading>

                    <List>
                        <ListItem>Software Engineer at Green13 Solutions</ListItem>
                        <br/>
                        <ListItem>Manage development of user interfaces</ListItem>
                        <br/>
                        <ListItem>Research and development</ListItem>
                        <br/>
                        <ListItem>React, native iOS</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">

                    <Heading size={2} textColor="secondary" caps>
                        Overview
                    </Heading>

                    <br/>
                    <br/>

                    <Heading size={5} textColor="secondary">
                        Refresher on React Native:
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary">
                        What it is and how it works
                    </Text>
                    <br/>
                    <br/>

                    <Heading size={5} textColor="secondary">
                        My Experiences:
                    </Heading>

                    <Text margin="10px 0 0" textColor="tertiary" fit>
                        Native iOS v React Native v React for the web
                    </Text>

                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>React Native - an overview</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary">
                        React Native
                    </Heading>
                    <br/>

                    <Image src={images.RNLogo} width={200} />

                    <List>
                        <ListItem>React: JavaScript library for building UIs</ListItem>
                        <br/>
                        <ListItem>React Native: JavaScript library for building cross-platform mobile apps</ListItem>
                        <br/>
                        <ListItem>Write once, run anywhere (almost)</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        React Native
                    </Heading>
                    <br/>

                    <Heading size={6} textColor="secondary">
                        How it works - rendering elements
                    </Heading>
                    <br/>
                    <br/>

                    <List>
                        <ListItem>Same approach as React: UI components</ListItem>
                        <br/>
                        <ListItem bulletStyle="star"><b>Takeaway:</b> Same code (almost) as React for web projects</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        React Native
                    </Heading>
                    <br/>

                    <Heading size={6} textColor="secondary">
                        A real native app
                    </Heading>
                    <br/>

                    <List>
                        <ListItem>Generates actual native UI modules</ListItem>
                        <br/>
                        <ListItem bulletStyle="star"><b>Takeaway:</b> User doesn't know its not a hybrid app!</ListItem>
                    </List>
                    <Image src={images.pino} width={400} />
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Comparison areas
                    </Heading>

                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Language</ListItem>
                        {/*</Appear>*/}

                        {/*<Appear>*/}
                        {/*    <ListItem>Development Environment</ListItem>*/}
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Tooling and Infrastructure</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>UI Styling</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Connecting UI elements to logic</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Project Roadmap</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Publishing</ListItem>
                        {/*</Appear>*/}
                        {/*<Appear>*/}
                        <ListItem>Bugs and support</ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Language</Quote>
                        {/*<Cite margin="10px 0 0 30px">Author</Cite>*/}
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Language
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Writing in React ... for native apps</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>'Almost' identical, so shallow learning curve</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Some React Native pre-made components easier to work with than React</ListItem>
                        {/*</Appear>*/}
                    </List>


                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Language
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS App
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Swift (or Objective-C...)</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Type checking, type inference</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>Easy to learn to start with, but then some challenges</ListItem>
                        {/*</Appear>*/}
                        {/*<div>Optionals image?</div>*/}
                    </List>
                </Slide>


                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Language
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        {/*<Appear>*/}
                        <ListItem>Swift > React Native (JavaScript)</ListItem>
                        {/*</Appear>*/}
                        <br/>

                        {/*<Appear>*/}
                        <ListItem>Swift > React for web (JavaScript)</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem>React Native > React for web</ListItem>
                        {/*</Appear>*/}
                        <br/>
                        {/*<Appear>*/}
                        <ListItem bulletStyle="star"><b>Swift has a best developer experience</b></ListItem>
                        {/*</Appear>*/}
                    </List>
                </Slide>



                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Tooling and Infrastructure</Quote>
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Tooling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>IDE: Xcode, Emulators: Xcode</ListItem>
                        <br/>
                        <ListItem>Swift for iOS apps compiled</ListItem>
                        <br/>
                        <ListItem>Slow and frustrating for quick iterations</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Tooling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>IDE: WebStorm, Emulators: Xcode</ListItem>
                        <br/>
                        <ListItem>Hot reloading</ListItem>
                        <br/>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Tooling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Same emulator experience</ListItem>
                        <br/>

                        <ListItem>Hot reloading beats compilation</ListItem>
                        <br/>

                        <ListItem bulletStyle="star">React native > Native iOS</ListItem>
                        <ListItem bulletStyle="star">React native > Native iROS</ListItem>
                        <br/>

                        <ListItem bulletStyle="star">React native same as React for the web</ListItem>

                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>UI Styling</Quote>
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI Styling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Xcode Interface Builder</ListItem>
                        <br/>
                        <ListItem>Initially enjoyed the fine-grained control</ListItem>
                        <br/>
                        <ListItem>In the end found cluttered and frustrating</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.XcodeSShot}/>

                <Slide transition={['fade']} bgImage={images.InterfaceBuilderStyling2}/>

                <Slide>
                    <Image src={images.InterfaceBuilderStyling1} width={500} />
                    <Notes>Screenshot of Xcode Interface Builder controlling layout</Notes>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI Styling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Programmatically style w/ FlexBox + CSS</ListItem>
                        <br/>
                        <ListItem>Very similar to React</ListItem>
                        <br/>
                        <ListItem>Handles resizing automatically</ListItem>
                        <br/>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.FlexBoxStyling}/>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        UI Styling
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>React Native the same as React for the web</ListItem>
                        <br/>
                        <ListItem>React Native > Native iOS</ListItem>
                        <br/>

                        <ListItem bulletStyle="star">React native the easiest</ListItem>
                    </List>

                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>UI and logic</Quote>
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI and Logic
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>MVC paradigm</ListItem>
                        <br/>
                        <ListItem>View: storyboard area</ListItem>
                        <br/>
                        <ListItem>Controller: Swift source file</ListItem>
                        <br/>

                        <ListItem>Make sure appropriate files open/closed</ListItem>
                        <br/>
                        <ListItem>Make sure 'connections' deleted properly</ListItem>
                        <br/>

                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.XcodeSShot}/>


                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        UI and Logic
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Markup and logic all in one file</ListItem>
                        <br/>

                        <ListItem>Markup with JSX</ListItem>
                        <br/>

                        <ListItem>JSX: <i>"combining markup and JavaScript"</i></ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.jsxExample}/>


                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        UI and Logic
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem bulletStyle="star">React Native > native iOS</ListItem>
                        <br/>
                        <ListItem bulletStyle="star">React Native === React for the web</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Project Roadmap</Quote>
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Project Roadmap
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Two choices: Expo CLI vs 'React Native CLI'</ListItem>
                        <br/>
                        <ListItem>Not always clear at which to pick</ListItem>
                        <br/>
                        <ListItem>Lots of community approaches to projects</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Project Roadmap
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Clearly linear learning path</ListItem>
                        <br/>
                        <ListItem><i>The</i> Apple way of doing things</ListItem>
                        <br/>

                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Project Roadmap
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem bulletStyle="star">Preferred guided nature of native iOS</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Publishing</Quote>
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">

                    <br/>

                    <Heading size={4} textColor="secondary">
                        React Native: React Native CLI
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Open Xcode project - then its the same as a native release</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <br/>

                    <Heading size={4} textColor="secondary">
                        React Native: Expo CLI
                    </Heading>

                    <br/>
                    <br/>

                    <Heading size={6} textColor="secondary">
                        Initial release
                    </Heading>

                    <List>
                        <ListItem>Bundle, upload with Apple desktop tool</ListItem>
                        <br/>
                        <ListItem>App agnostic at and beyond this point</ListItem>

                    </List>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Updates
                    </Heading>

                    <List>
                        <ListItem>Over the air updates - bypass App Store</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Publishing
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>React Native CLI === Native iOS</ListItem>
                        <br/>
                        <ListItem>Expo CLI > Native iOS (from what I've read)</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Bugs and support</Quote>
                    </BlockQuote>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React Native
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Lots of moving parts</ListItem>
                        <br/>
                        <ListItem>Breaking changes between versions</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        React
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Easier than React Native to find solutions as bigger community</ListItem>
                        <br/>
                        <ListItem>Still lots of moving parts</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Native iOS
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem>Easy to find solution</ListItem>
                        <br/>
                        <ListItem>Often clear if it was best practice or or not</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={4} textColor="secondary" caps>
                        Bugs and Support
                    </Heading>

                    <br/>

                    <Heading size={6} textColor="secondary">
                        Conclusion
                    </Heading>

                    <br/>
                    <br/>

                    <List>
                        <ListItem bulletStyle="star">Native iOS > React for the web</ListItem>
                        <br/>
                        <ListItem bulletStyle="star">React for the web > React Native</ListItem>
                    </List>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={3} textColor="secondary" caps>
                        Overall
                    </Heading>

                    <br/>
                    <br/>


                    <Table>

                        <TableBody>
                            <TableRow>
                                <TableItem>Language:</TableItem>
                                <TableItem>Native iOS (Swift)</TableItem>
                            </TableRow>
                            <br/>

                            <TableRow>
                                <TableItem>Tooling and Infrastructure:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            <br/>

                            <TableRow>
                                <TableItem>UI Styling:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            <br/>

                            <TableRow>
                                <TableItem>UI connecting to Logic:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            <br/>

                            <TableRow>
                                <TableItem>Project Roadmap:</TableItem>
                                <TableItem>Native iOS</TableItem>
                            </TableRow>
                            <br/>

                            <TableRow>
                                <TableItem>Publishing:</TableItem>
                                <TableItem>React Native</TableItem>
                            </TableRow>
                            <br/>

                            <TableRow>
                                <TableItem>Support:</TableItem>
                                <TableItem>Native iOS</TableItem>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <br/>
                    <br/>


                </Slide>


                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={2} textColor="secondary" caps>
                        Resources
                    </Heading>

                    <br/>

                    <br/>
                    <br/>

                    <List>
                        <ListItem><a href="https://medium.com/@sam_ollason/react-native-vs-swift-ios-c144496f1519" target="_blank" rel="noopener noreferrer">Article</a> by Sam Ollason on Medium</ListItem>
                        <ListItem><a href="https://github.com/SamOllason" target="_blank" rel="noopener noreferrer">GitHub</a></ListItem>
                        <ListItem>Created with <a href="https://github.com/FormidableLabs/spectacle/blob/master/README.md" target="_blank" rel="noopener noreferrer">Spectacle</a> ... using React!!!</ListItem>
                        {/*<ListItem>Slides online</ListItem>*/}
                    </List>
                </Slide>

                <Slide transition={['fade']} bgImage={images.sponsor1}/>
                <Slide transition={['fade']} bgImage={images.sponsor2}/>
            </Deck>
        );
    }
}

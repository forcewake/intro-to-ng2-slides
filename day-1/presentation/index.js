// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


const images = {
    transpilers: require("../assets/transpilers.png"),
    typescript: require("../assets/typescript.png"),
    logo: require("../assets/js-logo.jpg")
};

preloader(images);

const theme = createTheme({
    primary: "#F7DA4D"
});

const tableStyle = {padding: '10px', width: '100%'};

const paneStyle = {"fontSize": '20px'};
const paneStyleSmall = {"fontSize": '18px'};

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgImage="primary">
                        <Heading fit caps lineHeight={1} textColor="black">
                            ES2015 and Typescript
                        </Heading>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>forcewake@gmail.com</Text>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Pavel Nasovich</Text>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="primary"
                           notes="You can even put notes on your slide. How awesome is that?">

                        <Text textSize="1.5em" margin="20px 0px 0px" bold>In 2015, JS became Agile!</Text>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>... and brought plenty of innovation. </Text>
                        <Appear><Text>We can't avoid this revolution, so we better embrace it! </Text></Appear>
                    </Slide>


                    <Slide>
                        <List>
                            <Appear><ListItem>A bit of history</ListItem></Appear>
                            <Appear><ListItem>ES2015 & ES2016</ListItem></Appear>
                            <Appear><ListItem>Typescript</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading fit caps lineHeight={1} textColor="black">What's going on in the js world</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> JS == ES </Text>
                        <List>
                            <ListItem>'97 ES1 - made in 10 days</ListItem>
                            <ListItem>'98 ES2 - standardized version </ListItem>
                            <ListItem>'99 ES3 - try/catch, strings, regexp ... </ListItem>
                            <Appear><ListItem>... ES4 - cancelled</ListItem></Appear>
                            <Appear><ListItem>'09 ES5 - reflection, JSON ... </ListItem></Appear>
                            <Appear><ListItem>'15 ES6 - what we will see!</ListItem></Appear>
                        </List>
                        <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold> ES6 has been renamed ES2015. </Text></Appear>
                        <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold> ES7 => ES2016. </Text></Appear>
                    </Slide>

                    <Slide>
                        <Heading fit caps lineHeight={1} textColor="black">Compatibility</Heading>
                        <Link href="https://kangax.github.io/compat-table/es6/" textSize="1.5em" margin="20px 0px 0px"
                              bold> Transpilers (Babel, ts, traceur) make it irrelevant</Link>
                        <Image height="600px" src={images.transpilers.replace("/", "")}></Image>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Classes</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/es-1.example") }
                            margin="20px auto"
                            style={paneStyle}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Default params</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/es-2.example") }
                            margin="20px auto"
                            style={paneStyle}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Rest operator</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/es-3.example") }
                            margin="20px auto"
                            style={paneStyle}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Spread operator</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/es-4.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Arrow functions</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/es-5.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                        <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold> You will have to learn this, bind and
                            scope in JS now... </Text></Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Import and Export</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/es-6.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <List>
                            <ListItem><Text textColor="primary">
                                - ES2015 is a confortable language. More than 70+ new features.
                            </Text></ListItem>
                            <ListItem><Appear><Text textColor="primary">
                                - ES2016 is just around the corner, with 14+ potential features (in the current yearly
                                sprint).
                            </Text></Appear></ListItem>
                            <ListItem><Appear><Text textColor="primary">
                                - Use all of those features today with Babel or typescript!
                            </Text></Appear></ListItem>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading fit caps lineHeight={1} textColor="black">What's going on in the js world</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> JS == ES </Text>
                        <List>
                            <ListItem>Web applications (SPA)</ListItem>
                            <ListItem>Server (Node.js) </ListItem>
                            <ListItem>Mobile (Cordova) </ListItem>
                            <ListItem>Desktop (Electron,UWP) </ListItem>
                            <Appear><ListItem>Dynamically typed</ListItem></Appear>
                            <Appear><ListItem>Poor autocomplete (IntelliSense) and navigation </ListItem></Appear>
                            <Appear><ListItem>Errors discovered at runtime</ListItem></Appear>
                            <Appear><ListItem>Refactoring is error prone</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary"
                           notes="You can even put notes on your slide. How awesome is that?">
                        <Heading fit textColor="black">TypeScript</Heading>
                    </Slide>

                    <Slide>
                        <Heading fit caps textColor="black">Superset of ES2015</Heading>
                        <Image height="600px" src={images.typescript.replace("/", "")}></Image>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <List>
                            <ListItem>Superset of JavaScript designed for large scale application development</ListItem>
                            <ListItem>Free, open source and fully production ready</ListItem>
                            <ListItem>Public since October 2012 (at version 0.8), after two years of internal
                                development at Microsoft</ListItem>
                            <ListItem>Work by Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo
                                Pascal</ListItem>
                            <ListItem>Developed by Microsoft, inspired by C# </ListItem>
                            <ListItem>... and adopted by Google for Angular
                                2 </ListItem>
                            <Appear><Text textSize="1.5em" margin="20px 0px 0px" bold>So clearly, there is future around this spin on JS.</Text></Appear>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading fit caps lineHeight={1} textColor="black">Variable Declarations</Heading>
                        <List>
                            <ListItem>var - function scope</ListItem>
                            <ListItem>let - block scope</ListItem>
                            <ListItem>const - block scope + value cannot be changed </ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Layout fit><CodePane
                            lang="javascript"
                            source={ require("raw!../presentation/variable-declarations.example") }
                            margin="10px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> What do you think will be written to the console?</Text>
                        <Layout fit><CodePane
                            lang="javascript"
                            source={ require("raw!../presentation/var-question.example") }
                            margin="10px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Typing</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/typescript-1.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Decorators</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/typescript-2.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>


                    <Slide bgColor="black">
                        <Heading fit caps textColor="primary">Typescript in a nutshell</Heading>
                        <List textColor="primary">
                            <ListItem>optional types</ListItem>
                            <ListItem>decorators</ListItem>
                            <ListItem>interfaces</ListItem>
                            <ListItem>jsx</ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading fit caps textColor="black">Thank you everyone!</Heading>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}

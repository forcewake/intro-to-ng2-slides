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
                            source={ require("raw!../presentation/code/es-1.example") }
                            margin="20px auto"
                            style={paneStyle}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Default params</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/code/es-2.example") }
                            margin="20px auto"
                            style={paneStyle}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Rest operator</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/code/es-3.example") }
                            margin="20px auto"
                            style={paneStyle}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Spread operator</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/code/es-4.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Arrow functions</Heading>
                        <Layout fit><CodePane
                            lang="js"
                            source={ require("raw!../presentation/code/es-5.example") }
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
                            source={ require("raw!../presentation/code/es-6.example") }
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
                            source={ require("raw!../presentation/code/variable-declarations.example") }
                            margin="10px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> What do you think will be written to the console?</Text>
                        <Layout fit><CodePane
                            lang="javascript"
                            source={ require("raw!../presentation/code/var-question.example") }
                            margin="10px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> Output:</Text>
                        <Layout fit><CodePane
                            lang="javascript"
                            source={ require("raw!../presentation/code/var-question-answer.example") }
                            margin="10px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> Using let fixes the issue:</Text>
                        <Layout fit><CodePane
                            lang="javascript"
                            source={ require("raw!../presentation/code/let-for.example") }
                            margin="10px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> Output:</Text>
                        <Layout fit><CodePane
                            lang="javascript"
                            source={ require("raw!../presentation/code/let-output.example") }
                            margin="10px auto"
                            style={paneStyleSmall}
                        /></Layout>
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
                        <Heading textColor="black">Basic types</Heading>
                        <List>
                            <ListItem>Boolean</ListItem>
                            <ListItem>Number</ListItem>
                            <ListItem>String</ListItem>
                            <ListItem>Array</ListItem>
                            <ListItem>Object</ListItem>
                            <ListItem>Undefined</ListItem>
                            <ListItem>Enum</ListItem>
                            <ListItem>Any</ListItem>
                            <ListItem>Void</ListItem>
                        </List>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Boolean</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/boolean-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Number</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold> As in JavaScript, all numbers in TypeScript are floating point values</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/number-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">String</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Both single ' and double " quotes can be used</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/string-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Template Strings</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>can span multiple lines</Text>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>can have embedded expressions</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/template-string-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Array</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/array-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Array destructuring</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/array-destructuring.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Object</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/object-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Enum</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/enum-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Enum flags</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/enum-flags-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Tuple</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/tuple-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Any</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Using default compiler settings, all variables without type anotations are treated as any</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/any-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Void</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value.</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/void-type.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Functions</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/functions.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide>
                        <Heading textColor="black">TypeScript in Depth</Heading>
                        <List>
                            <ListItem>Interfaces</ListItem>
                            <ListItem>Generics</ListItem>
                            <ListItem>Union & Intersection types</ListItem>
                            <ListItem>Classes</ListItem>
                            <ListItem>Modules</ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Interfaces</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>One of TypeScript’s core principles is that type-checking focuses on the shape that values have</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/interfaces.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Interfaces</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Optional Properties</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/interfaces-optional-properties.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Interfaces</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Optional Properties</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/interfaces-error.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Interfaces</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Function Types</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/interfaces-function-types.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Interfaces</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Indexable Types</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/interfaces-indexable-types.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Interfaces</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Class Constructors</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/interfaces-class-constructors.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Extending Interfaces</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/extending-interfaces.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Generics</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/generics.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Union Types</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>A union type describes a value that can be one of several types</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/union.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Intersection Types</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>An intersection type have all members of all specified types</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/intersection.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">String Literal Types</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>String literal types allow you to specify the exact value a string must have.</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/string-literal.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Discriminated</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Common string literal property is used as discriminant</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/discriminated-unions.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Type assertions</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/type-assertions.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Type Guards</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/type-guards.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide>
                        <Heading textColor="black">Class declarations</Heading>
                        <List>
                            <ListItem>abstract</ListItem>
                            <ListItem>extends / implements</ListItem>
                            <ListItem>Access modifiers
                                <List>
                                    <ListItem>public (default)</ListItem>
                                    <ListItem>protected</ListItem>
                                    <ListItem>private</ListItem>
                                </List>
                            </ListItem>
                            <ListItem>instance / static properties and methods</ListItem>
                            <ListItem>readonly properties</ListItem>
                        </List>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Class declarations</Heading>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/class-declarations.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black">Class declarations</Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Will compile to</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/class-declarations-compiled.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Heading textColor="black"></Heading>
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Class declarations</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/class-declarations-extend.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Polymorphic this types</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/polymorphic-this-types.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide>
                        <Heading textColor="black">Modules</Heading>
                        <List>
                            <ListItem>Starting with ES6, JavaScript has a concept of modules, TypeScript shares this concept</ListItem>
                            <ListItem>Modules are executed within their own scope</ListItem>
                            <ListItem>Modules are declarative, the relationships are specified as imports and exports at the file level</ListItem>
                            <ListItem>Modules import one another using a module loader</ListItem>
                            <ListItem>Any file containing a top-level import or export is considered a module</ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Any declaration (variable, function, class, type alias, or interface) can be exported by export keyword.</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/modules-export.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Modules import</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/modules-import.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Modules - Code Generation</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/modules-code-generation.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Modules - Code Generation</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/modules-code-generation-umd.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide bgColor="black">
                        <Heading fit caps textColor="primary">TypeScript Advanced Topics</Heading>
                        <List textColor="primary">
                            <ListItem>async / await</ListItem>
                            <ListItem>Decorators</ListItem>
                            <ListItem>JSX</ListItem>
                            <ListItem>Mixins</ListItem>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>async / await</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/async-await.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="primary">
                        <Text textSize="1.5em" margin="20px 0px 0px" bold>Decorators provide a way to add annotations and a meta-programming syntax for class declarations and members</Text>
                        <Layout fit><CodePane
                            lang="typescript"
                            source={ require("raw!../presentation/code/decorators.example") }
                            margin="20px auto"
                            style={paneStyleSmall}
                        /></Layout>
                    </Slide>

                    <Slide>
                        <Heading textColor="black">IDEs and Tooling</Heading>
                        <List>
                            <ListItem>Language Services - easy to integrate TypeScript in editors</ListItem>
                            <ListItem>Out of the box: Visual Studio Code, WebStorm</ListItem>
                            <ListItem>Plugins: Atom, Sublime Text, Visual Studio</ListItem>
                            <ListItem>Build systems: Gulp, Webpack, SystemJS</ListItem>
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

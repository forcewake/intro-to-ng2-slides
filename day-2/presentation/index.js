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

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";

import {css} from 'aphrodite'

import {styles} from './styles'

import CodeSlide from 'spectacle-code-slide'

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("prismjs");
require("prismjs/components/prism-typescript");

const theme = createTheme({
  primary: "#ffffff"
});

const images = {
  framework: require("../assets/images/framework-to-platform.svg"),
  angular: require("../assets/images/angular.svg"),
  performance: require("../assets/images/performance.svg"),
  languages: require("../assets/images/languages.svg"),
  angular_website: require("../assets/images/angular.io.png"),
  thoughtram: require("../assets/images/thoughtram-website.png"),
  gitter: require("../assets/images/gitter.png"),
  lego: require("../assets/images/lego.png"),
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]}
              transitionDuration={500}
              progress='bar'>

          <Slide>
            <Image
              src={ images.angular }
              width={ 500 }/>
          </Slide>

          <Slide>
            <div className={ css(styles.header) }>
              Angular 2?
            </div>
            <List>
              <Appear><ListItem>The next major version of the Angular framework</ListItem></Appear>
              <Appear><ListItem>Rather a development platform than just a framework</ListItem></Appear>
              <Appear><ListItem>Mobile First, future ready, powered by open source community</ListItem></Appear>
              <Appear><ListItem>Faster, better tooling, more flexible, ...</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <div>
              Framework to Platform
            </div>
            <Image width="100%" src={images.framework.replace("/", "")}/>
          </Slide>

          <Slide>
            <div>
              Performance
            </div>
            <Image width="100%" src={images.performance.replace("/", "")}/>
          </Slide>

          <Slide>
            <div>
              Languages
            </div>
            <Image width="100%" src={images.languages.replace("/", "")}/>
          </Slide>

          <Slide>
            <Heading fit caps lineHeight={1} textColor="black">
              Useful Resources
            </Heading>
          </Slide>

          <Slide>
            <Image width="100%" src={images.angular_website.replace("/", "")}/>
          </Slide>

          <Slide>
            <Image width="100%" src={images.thoughtram.replace("/", "")}/>
          </Slide>

          <Slide>
            <Image width="100%" src={images.gitter.replace("/", "")}/>
          </Slide>

          <Slide>
            <div className={ css(styles.header) }>
              Angular 2 vs AngularJS
            </div>
            <a href="http://blog.angular-university.io/introduction-to-angular2-the-main-goals/">http://blog.angular-university.io/introduction-to-angular2-the-main-goals/</a>
          </Slide>

          <Slide>
            <Heading textColor='black'>
              Building blocks
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Modules</ListItem>
                  <ListItem>Components</ListItem>
                  <ListItem>Templates</ListItem>
                  <ListItem>Data binding</ListItem>
                  <ListItem>Directives</ListItem>
                  <ListItem>Services</ListItem>
                  <ListItem>Routing</ListItem>
                  <ListItem>Dependency injection</ListItem>
                </List>
              </Fill>
              <Fill>
                <Image src={images.lego.replace("/", "")}
                       margin="40px auto 0px"
                       width="460px"/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <div className={ css(styles.header) }>
              Components
            </div>
          </Slide>

          <CodeSlide
            transition={['slide']}
            margin={ 0 }
            lang="typescript"
            code={ require('raw!../assets/code/component.ts') }
            ranges={[
              {loc: [0, 255], title: "The main component"},
              {loc: [0, 1], note: 'The component decorator indicates the class is a component.'},
              {loc: [1, 2], note: 'The selector is how you reference the component in a template.'},
              {loc: [2, 3], note: 'Any component specific styles can be required and scoped.'},
              {loc: [3, 4], note: 'The component template can be required or an inline template string.'},
              {loc: [4, 5], note: 'Any sub-components or directives are injected in the directives array.'},
              {loc: [5, 6], note: 'Any services or providers the component uses are injected in the providers array.'},
              {
                loc: [8, 11],
                note: 'In TypeScript a class can have properties. All objects accessed from the class must be declared.'
              },
              {
                loc: [12, 20],
                note: 'All injected providers must be constructor params. With access modifiers they are automatically assigned to this.'
              }
            ]}/>

          <Slide>
            <div className={ css(styles.header) }>
              Templates
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="markup"
            code={ require('raw!../assets/code/template.html') }
            ranges={[
              {loc: [0, 255], title: "Templates"},
              {
                loc: [0, 1],
                note: 'A one-way data bind for strings or objects that can be coerced to strings assigned to the controller.'
              },
              {loc: [2, 5], note: 'A class function can be bound to an action with parentheses.'},
              {loc: [6, 11], note: 'Use *ngFor to enumerate items of a collection.'},
              {loc: [12, 13], note: 'Use *ngIf to include an element on the DOM based on a boolean condition.'},
              {loc: [14, 15], note: 'Objects can be one-way bound to components using brackets.'},
              {loc: [16, 17], note: 'Use brackets and parentheses for two-way data binding.'}
            ]}/>

          <Slide>
            <div className={ css(styles.header) }>
              Observables & Subscribers
            </div>
          </Slide>

          <Slide>
            <div className={ css(styles.content) }>
              Observables are asynchronous data streams that an object can subscribe to for updates.
            </div>
          </Slide>

          <Slide>
            <div className={ css(styles.content) }>
              A stream is a sequence of data that can change over time. The data can be a string, object, number,
              boolean or array.
            </div>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={ require('raw!../assets/code/observable.ts') }
            ranges={[
              {loc: [0, 255], title: "Observable"},
              {loc: [0, 1], note: 'An observable can be created with the ‘of’ function.'},
              {loc: [0, 1], note: 'At this point the observable is cold since nothing has subscribed to it.'},
              {
                loc: [2, 6],
                note: 'A subscriber listens to changes on an observable and emits the new value in a callback.'
              },
              {loc: [2, 6], note: 'The observable now has a subscriber and is considered hot.'},
              {
                loc: [4, 5],
                note: 'When a subscriber is created it will emit the last value. The response object is ‘dog’.'
              },
              {
                loc: [7, 8],
                note: 'The next function can provide a new value to the observable. All subscribers will be notified.'
              },
              {loc: [4, 5], note: 'The subscriber callback is fired and the response object is cat.'},
              {loc: [9, 10], note: 'A subscriber can be decommissioned with the ‘unsubscribe’ function.'}
            ]}/>

          <Slide>
            <div className={ css(styles.content) }>
              Services, Http Requests and Observables
            </div>
          </Slide>

          <CodeSlide
            transition={['slide']}
            margin={ 0 }
            lang="typescript"
            code={ require('raw!../assets/code/service.ts') }
            ranges={[
              {loc: [0, 255], title: "Service"},
              {
                loc: [0, 1],
                note: 'A class with the ‘Injectable’ decorator becomes a service that can be provided or injected.'
              },
              {loc: [0, 1], note: 'A service can be run when the app is bootstrapped or injected into a component.'},
              {loc: [1, 7], note: 'A service is just a class that can have properties and functions.'},
              {
                loc: [5, 6],
                note: 'A service can have other services injected using the ‘@Inject()’ parameter decorator.'
              },
              {loc: [8, 9], note: 'A typical service function returns data downloaded from a service.'},
              {loc: [8, 9], note: 'Since a request can have many outcomes, the function returns ‘Observable<any>‘.'},
              {loc: [9, 11], note: 'A request function, like ‘.get()’, returns ‘Observable<Request>’ which is cold.'},
              {loc: [11, 12], note: 'The catch block is executed if the request failed. Return ‘Observable<Error>’.'},
              {loc: [12, 19], note: 'The map function handles the server response and returns ‘Observable<any>’.'},
              {loc: [12, 19], note: 'Assumptions are not made about your server or status codes.'},
              {loc: [12, 19], note: 'The ‘map’ function wraps the return value in a cold observable.'},
              {loc: [8, 9], note: 'This function doesn’t perform the server request until a subscriber is created.'}
            ]}/>

          <Slide>
            <div className={ css(styles.content) }>
              Consuming a Service in a Component
            </div>
          </Slide>

          <CodeSlide
            transition={['slide']}
            margin={ 0 }
            lang="typescript"
            code={ require('raw!../assets/code/component-service.ts') }
            ranges={[
              {loc: [0, 255], title: 'Component service'},
              {
                loc: [10, 12],
                note: 'Observables of data streamed from a service are class properties for the component.'
              },
              {loc: [14, 19], note: 'The observable is assigned to the service request function.'},
              {loc: [3, 8], note: 'The data streamed from the service can be used on the template.'},
              {loc: [5, 6], note: 'The ‘async’ pipe lets Angular know to subscribe to the observable.'},
              {loc: [5, 6], note: 'The elvis operator ‘?.’ allows for safe traversal of objects.'},
              {
                loc: [5, 6],
                note: 'Subscriptions created on templates are unsubscribed when the component is decomissioned.'
              },
              {loc: [20, 26], note: 'Subscribers can also be created to perform custom logic.'},
              {
                loc: [27, 30],
                note: 'To get the latest data from the server, assign the observable to the service request function again.'
              },
              {
                loc: [27, 30],
                note: 'Every subscription—including custom and template—are automatically updated when the new stream is emitted.'
              },
              {loc: [31, 34], note: 'Subscriptions must be unsubscribed when the component is decomissioned.'}
            ]}/>

          <Slide>
            <div className={ css(styles.header) }>
              Routing
            </div>
          </Slide>

          <CodeSlide
            transition={['slide']}
            margin={ 0 }
            lang="typescript"
            code={ require('raw!../assets/code/routes.ts') }
            ranges={[
              {loc: [0, 255], title: 'Routes'},
              {loc: [0, 1], note: 'Routes are a typed array that maps imported components to paths.'},
              {loc: [1, 5], note: 'Route configurations consist of a path and component.'},
              {loc: [5, 9], note: 'Routes can be protected with guards.'},
              {loc: [7, 8], note: 'A guard is a hook that determines if the router can transition to the route.'},
              {loc: [9, 15], note: 'A route can have child routes.'},
              {loc: [11, 12], note: 'Route parms are part of the path string and identified with a colon.'},
              {loc: [16, 20], note: 'Routes can be redirected to other path strings.'},
              {loc: [20, 24], note: 'Wildcard paths can be redirected to other paths.'},
              {loc: [24, 28], note: 'Wildcard paths can also be redirected to components.'}
            ]}/>
          <CodeSlide
            transition={['slide']}
            margin={ 0 }
            lang="typescript"
            code={ require('raw!../assets/code/route-params.ts') }
            ranges={[
              {loc: [0, 255], title: 'Route params'},
              {loc: [0, 3], note: 'Accessing a route parameter in a component.'},
              {loc: [4, 6], note: 'Route parameters are typed observables.'},
              {loc: [10, 11], note: '‘RouteParams’ are injected into the class constructor.'},
              {
                loc: [13, 15],
                note: 'The parameter is plucked from the ‘routeParams’ object and must be coerced to the destination type.'
              },
              {
                loc: [13, 15],
                note: 'Since route paramters are observables, the component is not rerendered when the paramter changes.'
              },
              {
                loc: [19, 25],
                note: 'The component is expected to be reactive to the new parameter stream emitted by the observable.'
              }
            ]}/>
          <CodeSlide
            transition={['slide']}
            margin={ 0 }
            lang="typescript"
            code={ require('raw!../assets/code/guard.ts') }
            ranges={[
              {loc: [0, 255], title: 'Guard'},
              {
                loc: [0, 2],
                note: 'A guard is a hook that evaluates if the router should traverse to a route candidate.'
              },
              {loc: [2, 7], note: 'Services can be injected into a guard, in addition to the router.'},
              {
                loc: [8, 11],
                note: 'The ‘protectRoute’ function is called by the router to determine if it should traverse to the route candidate.'
              },
              {loc: [10, 11], note: 'The ‘protectRoute’ function must return ‘Observable<Boolean>’.'},
              {loc: [12, 13], note: 'Route params can be destructured from the traversal candidate object.'},
              {
                loc: [14, 25],
                note: 'Using a series of observable operators, the function returns an observable of a boolean value.'
              },
              {
                loc: [21, 22],
                note: 'The guard can redirect the router to a different route if the traversal candidate should be rejected.'
              }
            ]}/>
          <CodeSlide
            transition={['slide']}
            margin={ 0 }
            lang="typescript"
            code={ require('raw!../assets/code/traversal.ts') }
            ranges={[
              {loc: [0, 255], title: 'Traversal'},
              {loc: [0, 0], note: 'A route can be traversed with links or a router function.'},
              {loc: [3, 6], note: 'A simple route uses a one-time bound ‘linkTo’ attribute with the path.'},
              {
                loc: [7, 10],
                note: 'A route using a class property uses a one-way bound ‘linkTo’ attribute with the path.'
              },
              {
                loc: [19, 22],
                note: 'The router has a ‘go’ function that takes the full route path of the traversal candidate.'
              },
              {
                loc: [23, 26],
                note: 'The router has a ‘replace’ function that traverses to the path and replaces the top item on the history stack.'
              },
              {loc: [27, 30], note: 'The router has a ‘back’ function that navigates back the history.'}
            ]}/>
          <Slide>
            <div className={ css(styles.header) }>
              Demo
            </div>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

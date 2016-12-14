import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";

import 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-handlebars'
import 'prismjs/themes/prism-tomorrow.css'

render(<Presentation/>, document.getElementById("root"));

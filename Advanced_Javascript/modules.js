// you create your js in a seperate files, and you can bring in differnet files into your html or other js files
import hello from "./helpers" // or whatever file you pulled from 
//exporting to other files 
export default hello // exports this as a default 
export function hello(){
    return "Hello World"
}
// and on the main index.html page 
<script type="module" src="modules.js"></script>

// modules in es6 makes your app work more functionally 
// this is what youll be doing in react apps and modern js 
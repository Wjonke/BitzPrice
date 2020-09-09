import Navbar from "../components/Navbar";
// layout.js is the index file essentially for app wide components like nav header footer etc.
const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
    {/* the prop.children brings in what ever page we are looking at from the pages folder, 
    so in this case, its very much like the app.js in react, we will model the return here. pages will handle the routing.
    this will be imported into the index page and wrap the entire return. "see index.js in pages"  */}
  </div>
);
export default Layout;

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Index from "./Components/Index/Index"
import Logout from "./Components/Logout/Logout"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Error from "./Components/Error/Error"
import Registerget from "./Components/Registerget/Registerget"
import Success from "./Components/Success/Success"
import Product_Low from "./Components/Product_Low/ProductLow"
import Product_Medium from "./Components/Product_Medium/ProductMedium"
import Product_High from "./Components/Product_high/ProductHigh"
import BLOG from "./Components/BLOG/Index/Index"
import PostPage from "./Components/BLOG/Postpage/Postpage"
import CreatePost from "./Components/BLOG/CreatePost/CreatePost"
import News from "./Components/BLOG/News/News"
import Search from "./Components/BLOG/SearchPage/SearchPage"


//ifUserisLoggedIn Routes

import ifUserIsLoggedIn from "./Components/Logout/IfUserIsLoggedIn/ifUserIsLoggedIn"
import ifUserIsAlreadyRegistered from "./Components/Register/ifAlreadyRegistered/ifAlreadyRegistered"
import SearchPage from "./Components/BLOG/SearchPage/SearchPage";


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/login" component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/registerget/:id" component={Registerget}/>
        <Route path="/success" component={Success}/>
        <Route path="/confirmlogout" component={ifUserIsLoggedIn}/>
        <Route path="/alreadyregister" component={ifUserIsAlreadyRegistered}/>
        <Route path='/product1/:name' component={Product_Low}/>
        <Route path="/product2/:name" component={Product_Medium}/>
        <Route path="/product3/:name" component={Product_High}/>
        <Route exact path='/blog' component={BLOG}/>
        <Route path='/posts/:postId' component={PostPage}/>
        <Route path='/createpost' component={CreatePost}/>
        <Route exact path='/category/:name' component={News}/>
        <Route path="/blog/search/posts=:search" component={SearchPage}/>
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

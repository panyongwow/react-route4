import React from 'react'
import { render } from 'react-dom'
import {HashRouter,BrowserRouter,Switch,Route} from 'react-router-dom'

class Home extends React.Component{
	render(){
		return(
            <p>我是Home</p> 
		)
	}
}
class List extends React.Component{
	render(){
		return(
            <p>我是List</p> 
		)
	}
}
class Unfound extends React.Component{
	render(){
		return(
			<p>404,网页没找到！</p>
		)
	}
}
class RouterMap extends React.Component{
	render(){
		return(
            <BrowserRouter>
                <Switch>
   		            <Route exact path='/' component={Home} />                 
   		            <Route path='/home' component={Home} /> 	                
	   		        <Route path='/list' component={List} /> 
	   		        <Route path='*' component={Unfound} />
   		        </Switch>    
            </BrowserRouter>
		)
	}
}
render(
	<RouterMap />,
	document.getElementById('root')
)


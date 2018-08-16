import React from 'react'
import { render } from 'react-dom'
import {Route,HashRouter} from 'react-router-dom'

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
class RouterMap extends React.Component{
	render(){
		return(
            <HashRouter>
                <div>
   		            <Route path='/home' component={Home}/> 	                
	   		        <Route path='/list' component={List}/> 
   		        </div>    
            </HashRouter>
		)
	}
}
render(
	<RouterMap />,
	document.getElementById('root')
)


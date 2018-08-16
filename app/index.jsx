import React from 'react'
import { render } from 'react-dom'
import {HashRouter,BrowserRouter,Switch,Route,Link,withRouter} from 'react-router-dom'

class Home extends React.Component{
	render(){
		return(
			<div>
	            <p>我是Home</p> 
	            <Link to='/List'>跳转到List</Link>
            </div>
		)
	}
}

// class List extends React.Component{
// 	render(){
// 	    const GoHomeWithRouter=withRouter(GoHome);		
// 		return(
// 			<div>
//                 <p>我是List</p>
//                 <Link to='/detail/1'>跳转到详情1</Link><br/>
//                 <Link to={{
//                 	pathname:'/detail/2',
//                     search:'?name=tony&age=18'
//                  }}>跳珠到详情2</Link>
//                  <GoHomeWithRouter />
//                  <br/>
//                 <Link to='/Home'>Link返回Home</Link>
//             </div> 
// 		)
// 	}
// }

// class List extends React.Component{
// 	render(){
// 	    const GoHomeWithRouter=withRouter(GoHome);	
// 	    const GoDetailWithRouter=withRouter(GoDetail);	
// 		return(
// 			<div>
//                 <p>我是List</p>
//                 <Link to='/detail/1'>跳转到详情1</Link><br/>
//                 <Link to='/detail/2'>跳转到详情2</Link><br/>
//                 <GoDetailWithRouter id={1} />
//                 <GoDetailWithRouter id={2} />
//                 <GoHomeWithRouter />
//             </div> 
// 		)
// 	}
// }

class List extends React.Component{
	render(){
	    const GoHomeWithRouter=withRouter(GoHome);	
	    const GoDetailWithRouter=withRouter(GoDetail);	
		return(
			<div>
                <p>我是List</p>
                {/*<Link to='/detail/1'>跳转到详情1</Link><br/>
                <Link to='/detail/2'>跳转到详情2</Link><br/>     
                 <Link to={{
                 	pathname:'/detail/2',
                     search:'?name=tony&age=18'
                  }}>跳珠到详情2</Link> */}                          
                <GoDetailWithRouter id={1} name={'Tony'} />
                <GoDetailWithRouter id={2} name={'Tom'} />
                <GoHomeWithRouter />
            </div> 
		)
	}
}
class GoDetail extends React.Component{
	render(){
		return(
			<div onClick={this.myclick.bind(this)}>跳转到详情{this.props.id}</div>
		)
	}
	myclick(){
		this.props.history.push("/detail/"+this.props.id+"?name=" + this.props.name);
	}	
}

class GoHome extends React.Component{
	render(){
		return(
			<div onClick={this.myclick.bind(this)}>返回Home</div>
		)
	}
	myclick(){
		this.props.history.push("/Home");
	}
}
class detail extends React.Component{
	render(){
		return(
			<div>
			    <p>我是detail</p>
			    <p>得到的id是:{this.props.match.params.id},
			    search:{this.props.location.search}</p>
			    <Link to='/List'>返回List</Link>
			</div>
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
	   		        <Route path='/detail/:id' component={detail} />
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


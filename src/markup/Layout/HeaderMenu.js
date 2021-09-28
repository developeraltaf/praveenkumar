import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component{
	render(){
		return(
			<>
				<ul className="nav navbar-nav">
					<li className="active"><Link to={'./'}><span className="ti-home"></span> </Link>
						
					</li>
					<li><Link to={'./about'}>About Us</Link></li>
					<li><Link to={'./project'}>How Project management</Link></li>

					<li><Link to={'./service'}>Our Service </Link></li>
					
					<li><Link to={'./portfolio'}>Our Portfolio </Link></li>
					
				</ul>
			</>
		)
	}
}
export default HeaderMenu;
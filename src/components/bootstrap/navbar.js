import React, {Component} from 'react';

class Navbar extends Component {
	render(props){
		return(
			<div id="top">
                        <ul className="nav">
                            <li className="nav-item mx-auto" >
                                <a href="/">Clicky Game</a>
                            </li>
             
                            <li className="nav-item mx-auto">Click an image to begin!
                            </li>
        
                            <li className="nav-item mx-auto">Score: 0 | Top Score: 0
                            </li>
                        </ul>
                    
            </div>
		)
	}
}

export default Navbar;
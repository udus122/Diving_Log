import React, {Component} from 'react';
import style from '../../Static/Style';
import PopUp from './PopUp';
import Link from 'next/link';



class Header extends Component{

    render(){
        return(<header>
            {style}
                <div className="header-left">
                    <h1>
                        {this.props.header}
                    </h1>
                </div> 
                <div className="header-right">
                    <ul>
                        <li>
                        <PopUp />
                        </li>
                        <li>
                            <button className = "header-buttom">Search</button>
                        </li>
                        <li>
                            <Link href ="/Add">
                            <button className = "header-buttom">Add</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr />           
            </header>
            )
        }
}

export default Header;
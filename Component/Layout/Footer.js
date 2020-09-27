import style from '../../Static/Style';
import React, {Component} from 'react';


class Footer extends Component {

    render(){
        return (<footer>
            {style}
            <div>{this.props.account}</div>
    <p>{this.props.footer}</p>
        </footer>
        )}
}

export default Footer;
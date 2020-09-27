import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import style from '../../Static/Style';


class Layout extends Component {

  render() {
    return (<div>
      {style}
      <Header header={this.props.header} />
      {this.props.children}
      <Footer footer="copyright タケシュ" account="twitter : @takeshshuhu"/>
    </div>);
  }
}
export default Layout;
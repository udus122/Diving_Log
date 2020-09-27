import { Component } from 'react';
import Modal from 'react-modal'; 

class PopUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen : false
        };

        this.opneModal = this.opneModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    opneModal(){
        this.setState({modalIsOpen:true});
    }

    closeModal(){
        this.setState({modalIsOpen:false});
    }

    render(){
        return(
            <div>
                <button onClick = {this.opneModal} 
                className = "header-buttom">Open</button>
                <Modal 
                          isOpen={this.state.modalIsOpen}
                          onAfterOpen={this.afterOpenModal}
                          onRequestClose={this.closeModal}
                          contentLabel="Example Modal">
                              <h1>作成中...........</h1>
                              <button onClick={this.closeModal}>CLOSE</button>
                          </Modal>
            </div>
        )
    }

};

export default PopUp;
import React, {Component} from 'react';
import firebase from '../../lib/firebaseInit';
import {storage} from "../../firebase";

class Add_Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            Prefectures:'',
            Place_Name:'',
            DAY:'',
            Shop_Name:'',
            Weather:'',
            SuitType:'',
            Marine_life:'',
            Memo:'',
            image:null,
            url:'',
            progress:0

        }

        this.onChangePrefectures = this.onChangePrefectures.bind(this);
        this.onChangePlace_Name = this.onChangePlace_Name.bind(this);
        this.onChangeDAY = this.onChangeDAY.bind(this);
        this.onChangeShop_Name = this.onChangeShop_Name.bind(this);
        this.onChangeWeather = this.onChangeWeather.bind(this);
        this.onChangeSuitType = this.onChangeSuitType.bind(this);
        this.onChangeMarine_life = this.onChangeMarine_life.bind(this);
        this.onChangeMemo = this.onChangeMemo.bind(this);
        this.exeAdd = this.exeAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange(e){
        if(e.target.files[0]){
            this.setState({image: e.target.files[0]})
        }
    }

    handleUpload(){
        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progressnew = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({progress:progressnew})
                this.setState({url:this.state.url})
            },
            error => {
                console.log(error);
            },
            () =>{
                storage
                .ref("images")
                .child(this.state.image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    this.setState({url:url});
                });
            }
        );
        console.log("image: ",this.state.image);
    } 

    onChangePrefectures(e){
        this.setState({Prefectures:e.target.value});
    }

    onChangePlace_Name(e){
        this.setState({Place_Name:e.target.value});
    }

    onChangeDAY(e){
        this.setState({DAY:e.target.value});
    }

    onChangeShop_Name(e){
        this.setState({Shop_Name:e.target.value});
    }

    onChangeWeather(e){
        this.setState({Weather:e.target.value});
    }

    onChangeSuitType(e){
        this.setState({SuitType:e.target.value});
    }

    onChangeMarine_life(e){
        this.setState({Marine_life:e.target.value});
    }

    onChangeMemo(e){
        this.setState({Memo:e.target.value});
    }

    //データ登録
    exeAdd(e){
        const answer = window.confirm("登録内容にお間違いはありませんか？？")
        if(answer){
        let data = {
            Prefectures:this.state.Prefectures,
            Place_Name:this.state.Place_Name,
            DAY:this.state.DAY,
            Shop_Name:this.state.Shop_Name,
            Weather:this.state.Weather,
            SuitType:this.state.SuitType,
            Marine_life:this.state.Marine_life,
            Memo:this.state.Memo
        }
        let db = firebase.database();
        let ref = db.ref('diving-point-map');
        console.log(ref);
        ref.set(data);
        this.setState({
            Prefectures:'',
            Place_Name:'',
            DAY:'',
            Shop_Name:'',
            Weather:'',
            SuitType:'',
            Marine_life:'',
            Memo:'※データを登録しました。ご協力ありがとうございます！！'

         })
        }
    }
  
    render(){
        return(<div>
                <table>
                    <tbody>
                        <tr>
                        <th>Prefectures:</th>
                    <td><input type="text" size="50" maxLength="7"
                        value={this.state.Prefectures}
                        onChange={this.onChangePrefectures} placeholder="都道府県"/></td>
                        </tr>
                        <tr>
                        <th>Place_Name:</th>
                        <td><input type="text" size="50" maxLength="15"
                            value={this.state.Place_Name}
                            onChange={this.onChangePlace_Name} placeholder="ポイント名（地名）" /></td>
                        </tr>
                        <tr>
                        <th>DAY:</th>
                        <td><input type="text" size="50" maxLength="10"
                            value={this.state.DAY}
                            onChange={this.onChangeDAY} placeholder="YYYY/MM/DD" /></td>
                        </tr>
                        <tr>
                        <th>Weather:</th>
                        <td><input type="text" size="50" maxLength="10"
                            value={this.state.Weather}
                            onChange={this.onChangeWeather} placeholder="快晴" /></td>
                        </tr>
                        <tr>
                        <th>Shop_Name:</th>
                        <td><input type="text" size="50" maxLength="20"
                            value={this.state.Shop_Name}
                            onChange={this.onChangeShop_Name} placeholder="○○ダイビングショップ" /></td>
                        </tr>
                        <tr>
                        <th>SuitType:</th>
                        <td><input type="text" size="50" maxLength="10"
                            value={this.state.SuitType}
                            onChange={this.onChangeSuitType} placeholder="ドライスーツ/ウェットスーツ" /></td>
                        </tr>
                        <tr>
                        <th>Marine life:</th>
                        <td><input type="text" size="50" maxLength="20"
                            value={this.state.Marine_life}
                            onChange={this.onChangeMarine_life} placeholder="その日一番の生き物はなんでしょうか????" /></td>
                        </tr>
                        <tr>
                        <th>Memo:</th>
                        <td><input type="textarea" size="50" maxLength="20"
                            value={this.state.Memo}
                            onChange={this.onChangeMemo} placeholder="透明度・透視度等、ご自由にお使いください" /></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <p>あなたのベストショットを共有しませんか????</p>
                <div className = "FileImage">
                 <progress value={this.state.progress} max="100" />
                 <br />
                 <br />
                 <input type = "file" onChange ={this.handleChange} />
                 <button onClick={this.handleUpload}>Upload</button>
                 <br />
                  {this.state.url}
                 <br />
                 <div className = "p-grid_list-images">
                    <img src ={this.state.url || "http://via.placeholder.com/300"} alt ="firebase-image" className="img"/>
                 </div>
                </div>
                    <button onClick={this.exeAdd}>
                            Add</button>
        </div>)
    };
};

export default Add_Form;
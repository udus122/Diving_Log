import css from 'styled-jsx/css';

export default <style>{`
  body {
    margin:10px;
    padding:5px;
    color:#669;
  }
  header {
    font-size:20pt;
    font-weight:bold;
    letter-spacing:-8px;
    color:#ddddff;
    margin:3px 5px;
  }
  .header-left{
    width:60%;
    display:inline-block;
  }
  .header-right{
    width:40%;
    display:inline-block;
    text-align:right;
    
  }
  ul{
      list-style:none;
      display:inline-block;
      
  }
  li{
      float:left;
      cursor:pointer;
      vertical-align:top
      
  }
  .header-buttom{
    font-size:18pt;
    padding: 0px 20px;
    letter-spacing:3px;
  }
  button{
    padding:3px 10px;
    font-size:14px;
  }
  footer {
    color:#99c;
    font-size:12pt;
    text-align:center;
    border-top:1px solid #99c;
    margin:50px 0px 10px 0px;
    position: relative;
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
  h1 {
    font-size:22pt;
    font-weight:bold;
    text-align:left;
    letter-spacing:0px;
    color:#77a;
  }
  p {
      margin:0px;
      color:#669;
      font-size:16pt;
  }
  hr {
    margin:25px 0px;
  }
  tr {
    margin:0px;
  }
  th {
    font-size:14pt;
    font-weight:plain;
    text-align:left;
    padding:0px 20px;
    margin:0px;
    border-bottom:1px solid gray;
  }
  td {
    font-size:14pt;
    font-weight:plain;
    text-align:right;
    padding:0px 20px;
    margin:0px;
    border-bottom:1px solid gray;
  }
  .img{
    width:300px;
  }
  .p-media_thumb{
    position:relative;
    overflow:hidden;
    width:100%
  }
  .p-media_thumb::before{
    content:";
    display:block;
    padding-top:100%;
  }
  .p-media_thumb > img {
    position:absolute;
    object-fit:cover;
    object-position:center;
    top:0;
    left:0;
    width:100%;
    height:auto;
  }

`}</style>;
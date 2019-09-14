import React from 'react';
import {Link} from 'react-router-dom';
export default class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      miniHeader: false //默认加载的时候还是高（不是mini）的头部
    };
  };

  switchHeader(){
    this.setState({
      miniHeader: !this.state.miniHeader
    });
  };

  render(){
    //定义样式
    const styleComponentHeader = {
      header:{
        backgroundColor: "#333333",
        color: '#ffffff',
        paddingTop: (this.state.miniHeader) ? "5px" : "15px",
        paddingBottom: "15px"
      }
    };

    return (
      <header style={styleComponentHeader.header} className="smallFontSize"
      onClick={this.switchHeader.bind(this)}>
          <h1>头部</h1>
      </header>
    )
  }
}

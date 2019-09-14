import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BodyChild from './bodyChild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';
import {Input} from 'antd';
const defaultProps = {
  username: '这是一个默认值'
}
export default class BodyIndex extends React.Component{
  constructor(){
    super();//调用基类的所有的初始化方法
    this.state = {
      username: 'ROY',
      age:20
    };
  };

  changeUserInfo(){
      this.setState({
        age:50
      });
      //操作DOM
      //第1种方式
      var mySubmitButton = document.getElementById('submitButton');
      console.log('mySubmitButton');
      ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';

      //第2种方式
      console.log(this.refs.submitButton);
      this.refs.submitButton.style.color = 'pink';

      MixinLog.log();
  };

  handleChildValueChange(event){
    this.setState({age:event.target.value})
  };

  render(){
    // setTimeout(()=>{
    //   //更改state的时候
    //   this.setState({username:"WANG"});
    // },4000);
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{this.state.username}</p>
        <p>接收到的父页面的属性:{this.props.userid}</p>
        <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this)} />
        <p>age: {this.state.age}</p>
        <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />
        <Input placeholder='Basic usage' />
      </div>
    )
  }
}

BodyIndex.propTypes = {
  userid: PropTypes.number.isRequired
}

BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.propTypes,MixinLog);

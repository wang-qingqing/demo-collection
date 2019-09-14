import React from 'react';
export default class BodyIndex extends React.Component{
  componentWillMount(){
    //将要加载时
    console.log("BodyIndex - componentWillMount");
  }

  componentDidMount(){
    //将要完成加载时
    console.log("BodyIndex - componentDidMount");
  }

  render(){
    var userName = 'Roy';
    var boolInput = true;
    var html = '带空格的&nbsp;&nbsp;要使用dangerouslySetInnerHTML';
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{userName == '' ? '用户还没有登录' : '用户名:' + userName}</p>
        <p>
          <input type='button' value={userName} disabled={boolInput} />
        </p>
          {/*HTML要显示，可以进行Unicode转码*/}
          {/*这种方法比较危险，有可能会有XSS攻击*/}
        <p dangerouslySetInnerHTML = {{__html:html}}></p>
      </div>
    )
  }
}

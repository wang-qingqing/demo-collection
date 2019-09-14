import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';
import BodyIndex1 from './components/bodyIndex1';

export default class Index extends React.Component{
  componentWillMount(){
    //将要加载时
    console.log("Index - componentWillMount");
  }

  componentDidMount(){
    //将要完成加载时
    console.log("Index - componentDidMount");
  }

  render(){
    var header = <ComponentHeader/>;
    return (
      <div>
        {header}
        <BodyIndex1 userid={123} />
        <ComponentFooter/>
      </div>
    )
  }
}

//ReactDOM.render(<Index/>,document.getElementById('example'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {
	Tabs,
	message,
	Form,
	Input,
	Button,
	Checkbox,
	Card,
	notification,
	Upload
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {Router, Route, Link, browserHistory} from 'react-router'
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
export default class PCUserCenter extends React.Component {
  constructor(){
    super();
    this.state = {
      usercollection: '',
      usercomments: '',
      previewImage: '',
      previewVisible: false
    }
  }

  componentDidMount(){
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercollection:json});
		});

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercomments:json});
		});
  }

  render(){
    const props = {
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      header: {
        "Access-Control-Allow-Origin":"*"
      },
      listType: 'picture-card',
      defaultDileList: [
        {
          uid: -1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        }
      ],
      onPreview: (file) => {
				this.setState({previewImage: file.url, previewVisible: true});
			}
    }

    const {usercollection,usercomments} = this.state;
    const uniquekeyArray = [];
    const usercollectionList = usercollection.length
    ? usercollection.map(function(uc,index){
      if(uniquekeyArray.indexOf(uc.uniquekey) == -1){
        uniquekeyArray.push(uc.uniquekey);
        return(
          <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
            <p>{uc.Title}</p>
          </Card>
        )
      }
    })
    :'您还没有收藏任何的新闻，快去收藏一些新闻吧';

    const usercommentsList = usercomments.length?
    usercomments.map((comment,index) => (
      <Card key={index} title={`于 ${comment.datetime} 评论了文章`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
					<p>{comment.Comments}</p>
				</Card>
    ))
    :'您还没有发表过任何评论'
    ;

    return(
      <div>
        <PCHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <div className="comment">
                  <Row>
                    <Col span={24}>
                      {usercollectionList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
                <div className="">
                  <Row>
                    <Col span={24}>
                      {usercommentsList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="头像设置" key="3">
                <div className="clearfix">
                  <Upload {...props}>
                    <Icon type="plus" />
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="预览" src={this.state.previewImage} />
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter />
      </div>
    )
  }
}

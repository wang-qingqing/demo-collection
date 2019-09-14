import React from 'react';
import {Row,Col} from 'antd';
import {BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import ReactPullToRefresh from 'react-pull-to-refresh';
  export default class MobileList extends React.Component{
    constructor(){
      super();
      this.state = {
        news: '',
        count: 5,
        hasMore: 0,
        initializing: 1,
        refreshedAt: Date.now()
      }
    }

    componentWillMount(){
      var myFetchOptions = {
        method: 'GET'
      }
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
      +this.props.type+"&count="+this.props.count,myFetchOptions)
      .then(response => response.json())
      .then(json => this.setState({news: json}))
      .catch(error => alert(error));
    }

    handleRefresh(resolve){
      var myFetchOptions = {
        method: 'GET'
      }
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=yule&count=20",myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({news: json});
        resolve();
      })
      .catch(error => alert(error));
    }

    render(){
      const {news} = this.state;
      const newsList = news.length
      ? news.map((newsItem,index) => (
          <section key={index} className="m_article list-item special_section clearfix">
            <Router>
              <Link to={`/details/${newsItem.uniquekey}`}>
                <div className="m_article_img">
                  <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                </div>
                <div className="m_article_info">
                  <div className="m_article_title">
                    <span>{newsItem.title}</span>
                  </div>
                  <div className="m_article_desc claerfix">
                    <div className="m_article_desc_l">
                      <span className="m_article_channel">
                        {newsItem.realtype}
                      </span>
                      <span className="m_article_time">
                        {newsItem.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Router>
          </section>
        ))
      :"没有加载到任何新闻"
      ;

      return(
        <div>
          <Row>
            <Col span={24}>
              <ReactPullToRefresh onRefresh={this.handleRefresh.bind(this)} style={{textAlign: 'center'}}>
                <span className="genericon genericon-next"></span>
                <div>{newsList}</div>
              </ReactPullToRefresh>
            </Col>
          </Row>
        </div>
      )
    }
  }

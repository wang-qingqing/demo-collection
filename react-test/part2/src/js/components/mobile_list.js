import React from 'react';
import {Row,Col} from 'antd';
import {BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import Tloader from 'react-touch-loader';

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

    loadMore(resolve){
      setTimeout(() => {
        var count = this.state.count;
        this.setState({
          count: count+5
        });

        var myFetchOptions = {
          method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
        +this.props.type+"&count="+this.state.count,myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({news: json}))
        .catch(error => alert(error));

        this.setState({
          hasMore: count>0 && count <50
        })
        resolve();
      },2e3)
    }

    componentDidMount(){
      setTimeout(() =>{
        this.setState({
          hasMore: 1,
          initializing: 2
        })
      })
    }

    render(){
      var {hasMore,initializing,refreshedAt} = this.state;
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
              <Tloader className="main" onLoadMore={this.loadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
                {newsList}
              </Tloader>
            </Col>
          </Row>
        </div>
      )
    }
  }

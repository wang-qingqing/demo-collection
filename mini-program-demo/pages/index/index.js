//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        logo:'/images/pro_01.jpg',
        title:'pro1',
        desc: '测试一下pro1'
      },
      {
        logo: '/images/pro_02.jpg',
        title: 'pro2',
        desc: '测试一下pro2'
      }, 
      {
        logo: '/images/pro_03.jpg',
        title: 'pro3',
        desc: '测试一下pro3'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   this.setData({
     test: '01'
   });
   //this.getProList();
  },
  toDetail: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log("index:",index);
    console.log("author:",app.globalData.author);

    var proList = this.data.proList;
    var title = proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail?title='+ title,
    })
  },
  copy: function(){
    if (wx.setClipboardData){//支持复制功能时
      wx.setClipboardData({
        data: '这是我要复制的内容',
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showModal({
                title: '复制成功',
                content: '内容已经复制成功啦',
              })
            }
          })
        }
      })
    }else{   
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低了，请升级',
      })  
    }
  }
  // ,getProList: function(){//这个是用来实现API请求的功能，暂无调用
  //   var self = this;
  //   wx.request({
  //     url: 'http://127.0.0.1:5000/',
  //     method: 'GET',
  //     success: function(res){
  //       console.log(res);wx.requesr
  //       self.setData({
  //         proList: res.data
  //       })
  //     }
  //    ,fail: function(){  
  //    } 
  //   })
  // }
})

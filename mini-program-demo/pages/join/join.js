Page({
  data: {
    blockList: [
      {
        title: '关于我们',
        desc: '这是一个关于信贷小程序的demo'
      },
      {
        title: '公司地址',
        desc: '互联网，无处不在'
      },
      {
        title: '联系方式',
        desc: '下面有个电话，可以拨打哦'
      }
    ]
  },
  tell: function(){
    wx.makePhoneCall({
      phoneNumber: '1234',//测试
    })
  }
})
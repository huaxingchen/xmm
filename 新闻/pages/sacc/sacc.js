// pages/sacc/sacc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      arr:[],
      no: 153600
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fn(this.data.no)
  },
  fn:function(num){
    var that = this;
    wx.request({
      url: 'https://moment.douban.com/api/column/26/posts?max_id='+num,
      success: function (res) {
        var scv = res.data.posts;
        var aa = that.data.arr.concat(scv);
        that.setData({
          arr: aa
        })
      }
    })
  },
  sv:function(v){
    wx.navigateTo({
      url: '../../pages/saccs/saccs?id=' + v.currentTarget.dataset.id + "&text=" + v.currentTarget.dataset.text
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
       var sc= this.data.no++;
       this.fn(sc);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
     
  }
})
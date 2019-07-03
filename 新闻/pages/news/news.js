// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    inow:1

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.fu(this.data.inow);

  },
  fu:function(num){
    var that = this;
    wx.request({
      url: 'https://www.apiopen.top/satinApi?type=2&page='+num,
      success(res) {
        var scv=res.data.data;
        var aa = that.data.list.concat(scv);
        that.setData({
          list: aa
        })
      }
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
  onReachBottom: function (num) {
      var sv=this.data.inow++;
      this.fu(sv);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
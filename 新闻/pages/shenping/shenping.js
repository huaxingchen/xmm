// pages/shenping/shenping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        arr:[],
        ins:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.fm(this.data.ins)
  },

  fm:function(num){
    var that=this;
    wx.request({
      url: 'https://www.apiopen.top/satinGodApi?type=2&page='+num,
      success(res){
        var scv = res.data.data;
        var aa = that.data.arr.concat(scv);
        that.setData({
          arr:aa
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
  onReachBottom: function () {
        var sv=this.data.ins++;
        this.fm(sv)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
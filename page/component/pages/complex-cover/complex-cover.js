// page/component/pages/complex-cover/complex-cover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topContent: '',
    bottomContent: '',
    page1: true,
    page2: false,
    page3: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => this.switchPage2(), 4000);
  },
  switchPage2: function () {
    this.setData({
      page1: false,
      page2: true,
      page3: false
    })
    setTimeout(() => this.switchPage3(), 8000);
  },
  switchPage3: function () {
    this.setData({
      page1: false,
      page2: false,
      page3: true
    })
  },
  options1 () {
    this.setData({
      topContent: 'options1 clicked'
    })
    console.log('options1 clicked')
  },
  options2 () {
    this.setData({
      bottomContent: 'options2 clicked'
    })
    console.log('options1 clicked')
    console.log('options2 clicked')
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

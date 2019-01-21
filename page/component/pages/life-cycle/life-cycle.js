var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    id: "1"
  },
  onLoad: function(options) {
    console.log('life-cycle onLoad options', options)
    if(options['id']) {
      this.setData({id: options['id']})
    }
  },
  onReady: function() {
    console.log('life-cycle onReady')
  },
  onShow: function() {
    console.log('life-cycle onShow')
  },
  onHide: function() {
    console.log('life-cycle onHide')
  },
  onUnload: function() {
    console.log('life-cycle onUnload')
  },
  onPullDownRefresh: function() {
  },
  onReachBottom: function() {
  },
  onShareAppMessage: function () {
  },
  onPageScroll: function() {
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  gotoNew1: function () {
    wx.navigateTo({
      url: '/page/component/pages/life-cycle/life-cycle?id=1'//实际路径要写全
    })
  },
  gotoNew2: function () {
    wx.navigateTo({
      url: '/page/component/pages/life-cycle/life-cycle?id=2'//实际路径要写全
    })
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  }
}

for (var i = 0; i < types.length; ++i) {
  (function(type) {
    pageObject[type] = function(e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)

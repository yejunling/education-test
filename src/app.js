import Taro from '@tarojs/taro'
import { Component } from "react";
import { Provider } from "react-redux";
// import Index from './pages/index'
import store from "./store";
import './app.styl'

class App extends Component {
  // config = {
  //   pages: [
  //     'pages/index/index',
  //     'pages/login/index',
  //     'pages/register/index',
  //   ],
  //   window: {
  //     backgroundTextStyle: 'light',
  //     navigationBarBackgroundColor: '#fff',
  //     navigationBarTitleText: 'WeChat',
  //     navigationBarTextStyle: 'black'
  //   }
  // }

  // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
  // 而不是频繁地调用此 API
  $instance = Taro.getCurrentInstance()
  // 可以使用所有的 React 生命周期方法
  componentDidMount() {
    // 获取路由参数
    console.log("获取路由参数")
    console.log(this.$instance.router.params) // 输出 { id: 2, type: 'test' }
  }

  onLaunch() {
    console.log('App launched.')
  }
  onError(error) {
    console.log(error)
  }

  onPageNotFound(res) {
    debugger
    Taro.redirectTo({
      url: 'pages/...',
    }) // 如果是 tabbar 页面，请使用 Taro.switchTab
  }

  // onLoad
  onLoad() { }

  // onReady
  onReady() { }

  // 对应 onShow
  componentDidShow() { }

  // 对应 onHide
  componentDidHide() { }

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

// Taro.render(<App />, document.getElementById('app'))
export default App
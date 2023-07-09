
import Taro, { useLaunch, usePageNotFound, useError } from '@tarojs/taro'
import './app.styl'

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  useError((error) => {
    console.log(error)
  })

  usePageNotFound((res) => {
    debugger
    Taro.redirectTo({
      url: 'pages/...',
    }) // 如果是 tabbar 页面，请使用 Taro.switchTab
  })

  // children 是将要会渲染的页面
  return children
}

export default App

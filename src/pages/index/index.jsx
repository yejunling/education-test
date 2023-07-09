import { View, Text , Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.styl'

definePageConfig({
  navigationBarTitleText: 'test首页',
})

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>入口界面</Text>
      <Swiper
        className='box'
        autoplay
        interval={1000}
        indicatorColor='#999'
        onClick={() => {}}
        onAnimationFinish={() => {}}
      >
        <SwiperItem>
          <View className='text'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='text'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='text'>3</View>
        </SwiperItem>
      </Swiper>
    </View>
  )
}

function Comp() {
  function clickHandler(e) {
    e.stopPropagation() // 阻止冒泡
  }

  function scrollHandler() {}

  // 只有小程序的 bindtap 对应 Taro 的 onClick
  // 其余小程序事件名把 bind 换成 on 即是 Taro 事件名（支付宝小程序除外，它的事件就是以 on 开头）
  return <ScrollView onClick={clickHandler} onScroll={scrollHandler} />
}

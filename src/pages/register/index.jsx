import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.styl'

export default function Register() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>register</Text>
    </View>
  )
}

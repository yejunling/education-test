import { View, Text } from '@tarojs/components'
// import { Component, useLoad } from '@tarojs/taro'
import { Component } from "react";
// import { ButtonItem, InputItem } from '@components'
import { CompTest } from '@components'
import './index.styl'

const LOGO = `https://yanxuan.nosdn.127.net/6dbf208804386f12aa9e662d82abe563.png`
const EMAIL_SUFFIX = [
  '163.com', '126.com', 'yeah.net', 'vip.163.com', 'vip.126.com'
]

export default class Login extends Component {
  // const { username, password, isShowSuggest, loading } = {
  //   username: '',
  //   password: '',
  //   isShowSuggest: false,
  //   loading: false
  // }
  // const isBtnDisabled = !username || !password

  // onLoad() {
  //   console.log('Page loaded.')
  // }

  render(){
    return (
      <View className='index'>
        <Text>login</Text>
        <CompTest text="hhh"/>
        {/* <View className='user-login-email__logo'>
          <Image src={LOGO} className='user-login-email__logo-img' />
        </View> */}
        {/* <View className='user-login-email__wrap'>
          <InputItem
            value={username}
            placeholder='邮箱账号'
            onInput={this.handleInput.bind(this, 'username')}
          />
          <InputItem
            password
            value={password}
            placeholder='密码'
            onInput={this.handleInput.bind(this, 'password')}
          />
          {isShowSuggest &&
            <View className='user-login-email__suggest'>
              {EMAIL_SUFFIX.map((suffix) => {
                const name = username.split('@')[0]
                const value = `${name}@${suffix}`
                return (
                  <View
                    key={suffix}
                    className='user-login-email__suggest-item'
                    onClick={this.handleSuggest.bind(this, value)}
                  >
                    <Text className='user-login-email__suggest-item-txt'>{value}</Text>
                  </View>
                )
              })}
            </View>
          }
        </View>
        <View className='user-login-email__btn'>
          <ButtonItem
            text='登录'
            disabled={isBtnDisabled}
            loading={loading}
            onClick={this.handleLogin}
            compStyle={{
              background: '#b59f7b',
              borderRadius: Taro.pxTransform(4)
            }}
            textStyle={{
              color: isBtnDisabled ? 'rgba(255, 255, 255, 0.4)' : '#ffffff'
            }}
          />
        </View> */}
      </View>
    )
  }

}

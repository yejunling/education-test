// import Taro, { Component } from '@tarojs/taro'
import { Component } from "react";
import { Button, Text } from '@tarojs/components'
// import { postcss } from '@utils/style'
// import classNames from 'classnames'

export default class CompTest extends Component {
  static defaultProps = {
    compStyle: '',
    textStyle: '',
    openType: '',
    plain: false,
    loading: false,
    disabled: false,
    onClick: () => { },
    onGetUserInfo: () => { }
  }

  // getCls = (base) => {
  //   const { type, plain, disabled } = this.props
  //   return classNames(
  //     base,
  //     type === 'primary' && `${base}--primary`,
  //     plain && `${base}--plain`,
  //     disabled && `${base}--disabled`
  //   )
  // }

  render() {
    const {
      compStyle, textStyle, openType, loading, disabled, text,
      onClick, onGetUserInfo
    } = this.props
    return (
      <Text
      // className={this.getCls('comp-button__txt')}
      // style={textStyle}
      >
        test：
        {text}
      </Text>
      // <Button
      // // className={this.getCls('comp-button')}
      // // style={postcss(compStyle)}
      // // loading={loading}
      // // disabled={disabled}
      // // openType={openType}
      // // onClick={onClick}
      // // onGetUserInfo={onGetUserInfo}
      // >
      //   <Text
      //   // className={this.getCls('comp-button__txt')}
      //   // style={textStyle}
      //   >
      //     test：
      //     {/* {text} */}
      //   </Text>
      // </Button>
    )
  }
}


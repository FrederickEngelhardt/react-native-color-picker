import React from 'react'
import { View, Text } from 'react-native'
import { ColorPicker, toHsv } from '../module/index' // Swap this to <react-native-color-picker> if you want to see it install normally

export class ExampleControlledVertical extends React.Component {

  constructor(...args) {
    super(...args)
    this.state = { color: toHsv('green') }
    this.onColorChange = this.onColorChange.bind(this)
  }

  onColorChange(color) {
    this.setState({ color })
  }

  render() {
    return (
      <View style={{flex: 1, padding: 15, backgroundColor: '#212021'}}>
        <Text style={{color: 'white'}}>React Native Color Picker - Controlled</Text>
        <ColorPicker
          oldColor='purple'
          color={this.state.color}
          onColorChange={this.onColorChange}
          onColorSelected={color => alert(`Color selected: ${color}`)}
          onOldColorSelected={color => alert(`Old color selected: ${color}`)}
          style={{flex: 1}}
        />
      </View>
    )
  }

}


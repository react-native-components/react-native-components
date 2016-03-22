'use strict';

var React = require('react-native');
var styles = React.StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 4,
    width: 91,
    flexDirection: 'row',
    overflow: 'hidden'
  },

  btn: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10
  },

  btnText: {
    color: 'white',
    fontSize: 16
  },

  num: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  numText: {
    textAlign:'center'
  }
});

var {
  View,
  Text,
  TouchableOpacity,
  PropTypes
} = React;

var Spinner = React.createClass({
  propTypes: {
    min: PropTypes.number,
    max: PropTypes.number,
    default: PropTypes.number,
    color: PropTypes.string,
    numColor: PropTypes.string,
    numBgColor: PropTypes.string,
    showBorder: PropTypes.bool,
    fontSize: PropTypes.number,
    buttonTextColor: PropTypes.string,
    disabled: PropTypes.bool
  },

  getDefaultProps () {
    return {
      min: 0,
      max: 99,
      default: 0,
      color: '#33c9d6',
      numColor: '#333',
      numBgColor: 'white',
      showBorder: true,
      fontSize: 14,
      buttonTextColor: 'white',
      disabled: false
    }
  },

  getInitialState () {
    return {
      min: this.props.min,
      max: this.props.max,
      num: this.props.default
    }
  },

  _onNumChange (num) {
    if (this.props.onNumChange) this.props.onNumChange(num);
  },

  _increase () {
    if (this.props.disabled) return;

    if (this.state.max > this.state.num) {
      var num = this.state.num;
      this.setState({
        num: ++num
      });

      this._onNumChange(num);
    }
 },

 _decrease () {
   if (this.props.disabled) return;

   if (this.state.min < this.state.num) {
     var num = this.state.num;
     this.setState({
       num: --num
     });

     this._onNumChange(num);
   }
 },

  render () {
    return (
      <View style={[styles.container, { borderColor: this.props.showBorder ? this.props.color : 'transparent' } ]}>
        <TouchableOpacity
          style={[styles.btn,
            { backgroundColor: this.props.color },
            { borderColor: this.props.showBorder ? this.props.color : 'transparent' }]}
          onPress={this._decrease}>
          <Text style={[styles.btnText,
              {
                color: this.props.buttonTextColor,
                fontSize: this.props.fontSize
              }]}>-</Text>
        </TouchableOpacity>
        <View style={[styles.num,
            {
              borderColor: this.props.showBorder ? this.props.color : 'transparent',
              backgroundColor: this.props.numBgColor
            }]}>
          <Text style={[styles.numText, {color:this.props.numColor, fontSize: this.props.fontSize}]}>{this.state.num}</Text>
        </View>
        <TouchableOpacity
          style={[styles.btn,
            { backgroundColor: this.props.color },
            { borderColor: this.props.showBorder ? this.props.color : 'transparent' }]}
          onPress={this._increase}>
          <Text style={[styles.btnText,
              {
                color: this.props.buttonTextColor,
                fontSize: this.props.fontSize
              }]}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = Spinner;
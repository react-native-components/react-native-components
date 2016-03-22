```js
<InputText style={[{marginLeft:10,marginRight:10},this.props.style]}
   keyboardType="numeric"
   maxLength={11}
   onChange={this.props.onChange}
   placeholder={this.props.placeholder}
   onFocus={this.props.onFocus}
   onBlur={this.props.onBlur}
   icon={this._getPhoneNumIcon()}/>
```
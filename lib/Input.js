import React,{StyleSheet,View,TextInput,Text } from 'react-native';

var s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 9,
        backgroundColor: '#fff'
    },
    input: {
        height: 43,
        marginLeft: 10,
        flex: 1
    }

});

export  default React.createClass({
    getInitialState() {
        return {borderColor: '#ccc'}
    },
    render() {
        return (
            <View style={[s.container,this.state,this.props.style]}>
                <TextInput style={[s.input|this.props.inputStyle]}
                           onChangeText={this.props.onChange}
                           placeholder={this.props.placeholder}
                           secureTextEntry={this.props.secureTextEntry}
                           onFocus={()=>{this._onFocus()}}
                           onBlur={() => {this._onBlur()}}
                           borderColor={this.props.borderColor}
                           focusBorderColor={this.props.focusColor}
                />
                {this.props.icon ? this.props.icon() : ''}
            </View>
        )
    },
    _onFocus(){
        let focusBorderColor = this.props.focusBorderColor ? this.props.focusBorderColor : '#0095d9';
        this.setState({borderColor: focusBorderColor});
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    },
    _onBlur(){
        //change borderColor on blur
        let borderColor = this.props.borderColor ? this.props.borderColor : '#0095d9';
        this.setState({borderColor: borderColor});
        if (this.props.onBlur) {
            this.props.onBlur();
        }
    }

});
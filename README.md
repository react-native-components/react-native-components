# react-native-components
A cross platform components repository for React Native

### Getting started

```sh
npm i rct-native-components --save
```

### Examples
```js
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var Compnents = require('rct-native-components');
var {ProgressBar, Button, Slider, TopBar, Spinner} = Compnents;

var rnsandbox = React.createClass({

  getInitialState() {
    return {
      progress: 0,
      value: 0.2
    };
  },

  increase() {
    this.setState({ progress: this.state.progress + (0.2 * Math.random())});
  },

  render() {
    return (
      <View style={styles.container}>
        <TopBar title="Demo" backFunc={()=>{}} actionName="Settings"/>
        <View style={styles.wrapper}>
          <Spinner max={10}
            min={1}
            default={5}
            color="#3F51B5"
            numColor="#3F51B5"
            onNumChange={(num)=>{console.log(num)}}/>

          <Button 
            rippleColor='rgba(255, 255, 255, 0.1)' 
            onClick = {() => {this.increase()}}
            style={{marginTop: 20, marginBottom: 10, padding: 15, backgroundColor: '#3F51B5'}}>
            <Text style={{color: '#FFF'}}>{'Touch Me'}</Text>
          </Button>

          <ProgressBar
            fillStyle={{}}
            backgroundStyle={{backgroundColor: '#cccccc', borderRadius: 2}}
            style={{marginTop: 10, width: 300}}
            progress={this.state.progress}
          />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnsandbox', () => rnsandbox);
```

### Screencasts
![ios](https://github.com/react-native-components/react-native-components/blob/master/screencasts/ios.demo.gif)
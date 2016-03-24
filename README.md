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
var {ProgressBar, Button, Slider, TopBar, Spinner, Switch, Drawer} = Compnents;

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
      <Drawer
        type='overlay'
        ref={(ref) => {this._drawer = ref}}
        content={<View/>}
        tapToClose={true}
        openDrawerOffset={0.5} // 20% gap on the right side of drawer
        panCloseMask={0.5}
        closedDrawerOffset={-3}
        styles={{
          drawer: {top: 30,backgroundColor: '#3F51B5'},
          main: {paddingLeft: 3}
        }}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        >
          <View style={styles.container}>
            <TopBar title="Demo" backFunc={()=>{}} actionName="Settings"/>
            <View style={styles.wrapper}>
              <View style={{marginTop: 20}}>
                <Switch
                    activeBackgroundColor='rgba(206, 182, 255, 0.74)'
                    inactiveBackgroundColor='rgba(252, 16, 148, 0.62)'
                    activeButtonColor='#6d3abf'
                    activeButtonPressedColor='#7943d1'
                    inactiveButtonColor='#ba2a8f'
                    inactiveButtonPressedColor='#cf39a2'/>
              </View>

              <View style={{marginTop: 20, marginBottom: 20}}>
                <Switch buttonRadius={8} switchHeight={20} switchWidth={40}/>
              </View>

              <Spinner max={10}
                min={1}
                default={5}
                color="#3F51B5"
                numColor="#3F51B5"
                onNumChange={(num)=>{console.log(num)}}/>

              <Button 
                rippleColor='rgba(255, 255, 255, 0.1)' 
                onClick = {() => {this.increase(), this._drawer.open()}}
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
      </Drawer>

      
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
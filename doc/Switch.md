### Usage example
```javascript
import {Switch} from 'rct-native-components';

var Application = React.createClass({
  render: function() {
    return (
      <View>
        <Switch onChangeState={(state)=>{alert(state)}}/>
      </View>
    );
  }
});
```

### Properties
* `active` (Boolean) - Initial switch state (default: false),
* `style` (Object) - Styles for outer container (margins, ...),
* `inactiveButtonColor` (String) - Button color  (default: '#2196F3'),
* `inactiveButtonPressedColor` (String) (default: '#42A5F5'),
* `activeButtonColor` (String) (default: '#FAFAFA'),
* `activeButtonPressedColor` (String) (default: '#F5F5F5'),
* `buttonShadow` (Object) - Shadow style for button (default: { shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 1, shadowOffset: { height: 1, width: 0 }},
* `activeBackgroundColor` (String) - (default: 'rgba(255,255,255,.5)'),
* `inactiveBackgroundColor` (String) - (default: 'rgba(0,0,0,.5)'),
* `buttonRadius` (Number) - (default: 15),
* `switchWidth` (Number) - (default: 40),
* `switchHeight` (Number) - (default: 20),
* `buttonContent` (React.Component) - Custom inline content for switch button (default: null),
* `enableSlide` (Boolean) - (default: true),
* `switchAnimationTime` (Number) - Switch animation duration (default: 200),

### Events
* `onActivate`: This function is called when the switch is activated.
* `onDeactivate`: This function is called when the switch is deactivated.
* `onChangeState`: Sends the current state of switch.
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Stacks from './src/stacks/Stacks';
import ManageBirthday from './src/Screens/Appscreen/IntroScreen/ManageBirthday';
import Bottomtabs from './src/stacks/Bottomtabs';
import Notifications from './src/Screens/Appscreen/Notifications';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Bottomtabs);

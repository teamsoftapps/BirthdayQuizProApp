/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Stacks from './src/Routes/Routes';
import Routes from './src/Routes/Routes';
import Home from './src/Screens/Appscreen/IntroScreen/Home';
import LeaderBoard from './src/Screens/Appscreen/IntroScreen/LeaderBoard';
// import ManageBirthday from './src/Screens/IntroScreen/ManageBirthday';
// import Bottomtabs from './src/stacks/Bottomtabs';
// import Notifications from './src/Screens/Appscreen/Notifications';
// import Streak from './src/Screens/Appscreen/Streak';
// import LearningScreen from './src/Screens/Appscreen/IntroScreen/LearningScreen';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Routes);
// AppRegistry.registerComponent(appName, () => LearningScreen);

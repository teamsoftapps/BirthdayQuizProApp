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

// import {MMKV} from 'react-native-mmkv';

// export const storage = new MMKV({
//   id: `user-storage`,
//   path: `${USER_DIRECTORY}/storage`,
//   encryptionKey: 'encryptionkey',
// });

AppRegistry.registerComponent(appName, () => Routes);
// AppRegistry.registerComponent(appName, () => LearningScreen);

import { createSwitchNavigator } from 'react-navigation';
import Loading from 'screens/loading';
import Main from 'screens/main';
import Second from 'screens/second';

const Root = createSwitchNavigator(
  {
    Loading,
    Main,
    Second,
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
    headerVisible: false,
  },
);

export default Root;

import{createAppContainer} from 'react-navigation';
import{ creatStackNavigatior} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';

const RootStack = creatStackNavigatior(
    {
        //The Routes
        Home: {screen: HomeActivity},
        Profile: {screen: ProfileActivity},
    },
    {
        //Default Routes
        initialRoutName: 'Home',
    }
);
// create  app container
const Container = createAppContainer(RootStack);
export default Container;
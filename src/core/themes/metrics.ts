import {Dimensions, Platform} from 'react-native';
import {IOS} from '../constants';

const {width, height} = Dimensions.get('window');

const metrics = {
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === IOS ? 64 : 54,
  size0: 0,
  size1 : 1,
  size14: 14,
  size15: 15,
  size20: 20,
  size25: 25,
  size40: 40,
  size50: 50,

};

export default metrics;

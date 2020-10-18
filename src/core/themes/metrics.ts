import {Dimensions, Platform} from 'react-native';
import {IOS} from '../constants';

const {width, height} = Dimensions.get('window');

const metrics = {
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === IOS ? 64 : 54,
  size0: 0,
  size2 : 2,
  size4: 4,
  size8: 8,
  size16: 16,
  size24: 24,
  size32: 32,
  size64: 64,

};

export default metrics;

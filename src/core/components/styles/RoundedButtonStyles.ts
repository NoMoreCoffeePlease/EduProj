import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes/';

export default StyleSheet.create({
  container: {
    height: metrics.size64,
    backgroundColor: colors.shuttleGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.size24,
    borderWidth: metrics.size2,
    width: '50%',
  },
  textStyle: {
    color: colors.white,
    fontSize: metrics.size16,
    fontWeight: 'bold',
  },
});

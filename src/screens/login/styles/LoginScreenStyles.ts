import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';
// import { theme } from '../../../../App';
import {BASE_DIMENSION, normalize} from '../../../core/themes/dimensions'

export const styles = (backgroundProp) =>  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 140,
  },
  marginTop: {
    marginTop: 20,
  },
  activityIndicator: {
    height: 50,
  },
});

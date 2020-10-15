import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes/';
// import { theme } from '../../../../App';

export const styles =  (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
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

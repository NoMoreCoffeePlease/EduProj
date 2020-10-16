import {StyleSheet} from 'react-native';
import {BASE_DIMENSION} from '../../../core/themes/dimensions'

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
    marginTop: BASE_DIMENSION * 2 ,
  },
  activityIndicator: {
    height: 50,
  },
});

import React from 'react';
import {Text} from 'react-native';

import I18n from '../../i18n/translations';

export class testScreen extends React.Component {
  render() {
    return <Text>{I18n.t('greeting')}</Text>;
  }
}


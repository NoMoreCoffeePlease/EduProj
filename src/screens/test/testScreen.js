import React, {Component} from 'react';
import {Text, View, FlatList, Modal, TouchableOpacity} from 'react-native';

import I18n from '../../i18n/translations';

import EmojiSelector, {Categories} from 'react-native-emoji-selector';

export class testScreen extends React.Component {
  state = {
    emojiList: [],
    modalVisible: false,
  };

  onSelect = (emoji, emojiName, data) => {
    const {emojiList} = this.state;
    const newList = [...emojiList];
    const objIndex = newList.findIndex((e) => e.name === emojiName);
    if (objIndex === -1) {
      newList.push({
        emoji,
        name: emojiName,
        data,
        index: 1,
      });
    } else {
      newList[objIndex].index += 1;
    }
    this.setState({emojiList: newList});
  };

  modalOn = () => {
    this.setState({modalVisible: true})
  }

  modalOff = () => {
    this.setState({modalVisible: false})
  }

  updateList = (emoji, name) => {
        const { emojiList } = this.state;
        const newList = [...emojiList];
        const objIndex = newList.findIndex(e => e.name === name);
        newList[objIndex].index += 1;
        this.setState({ emojiList: newList });
      }

  render() {
    const {emojiList} = this.state;
    return (
      <View style={{flex: 1, marginTop: 70, marginLeft: 70}}>
        <Text>{I18n.t('greeting')}</Text>
        <View style={{height: 20}}>
          <FlatList
            data={emojiList}
            renderItem={({item}) => <Text>{item.emoji}</Text>}
          />
       
        </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View
              style={{
                height: 200,
                width: 300,
                marginTop: 200,
                marginBottom: 70,
              }}>
              <EmojiSelector
                category={Categories.symbols}
                onEmojiSelected={this.onSelect}
              />
            </View>
            <TouchableOpacity onPress={this.modalOff} style={{marginTop: 10}}>
            <Text>Modal Off</Text>
          </TouchableOpacity>
          </Modal>
          <TouchableOpacity onPress={this.modalOn} style={{marginTop: 30}}>
            <Text>Modal On</Text>
          </TouchableOpacity>
         
      </View>
    );
  }
}

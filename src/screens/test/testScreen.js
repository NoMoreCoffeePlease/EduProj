import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';

export default testScreen = () => {
  const emojiData = require('../../../assets/data-by-group.json');
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [emoji, setEmoji] = useState(emojiData[Object.keys(emojiData)[0]]);

  const renderCategories = () => {
    const category = Object.keys(emojiData);
    return (
      <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => setEmoji(emojiData[item])}>
        <Text style={{fontSize: 15}}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmoji = () => {
    return (
      <FlatList
        numColumns={8}
        data={emoji}
        renderItem={renderEmojiItem}
        keyExtractor={(item) => item}
      />
    );
  };

  const renderEmojiItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => setText(item.emoji)}>
        <Text style={{fontSize: 25}}>{item.emoji}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View styke={{flex: 1}}>
      <Text>Text de apreciat</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Apasa</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
                  <View style={{ marginTop: 60, marginHorizontal: 10, flexDirection: 'row', backgroundColor: 'grey', height: 150, borderRadius: 5}}>

          {renderCategories()}
          {renderEmoji()}
          </View>
        </Modal>
    </View>
  );
};

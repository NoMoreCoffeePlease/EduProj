import React, {createRef, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  SectionList,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default testScreen = React.memo(function testScreen(props) {
  const emojiData = require('../../../assets/data-by-group.json');
  const searchedEmoji = require('../../../assets/data-by-emoji.json');
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const sectionList = createRef();
  const [selectedEmojis, setSelectedEmoji] = useState({});

  const renderSelectedEmojis = ()=>{
    return(<View style={{flexDirection:'row'}}>
      {Object.keys(selectedEmojis).map(key=>{
        return(
          <TouchableOpacity onPress={()=>{
            const tempEmojis = JSON.parse(JSON.stringify(selectedEmojis));
            tempEmojis[key]-=1;
            if(tempEmojis[key]===0)
              delete tempEmojis[key];
            setSelectedEmoji(tempEmojis);
          }} key={key} style={{height:30,width:50, backgroundColor:'white'}}>
            <Text>{key} {selectedEmojis[key]}</Text>
        
          </TouchableOpacity>
          
        )
      })}
      <TouchableOpacity onPress={()=>{setModalVisible(true)}} key={'add'} style={{height:30,width:50, backgroundColor:'white'}}>
            <Text>ADD +</Text>
          </TouchableOpacity>
    </View>)
  }

  const renderCategories = () => {
    const category = Object.keys(emojiData);
    return (
      <FlatList
        data={category}
        horizontal={true}
        initialNumToRender={7}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between',
          margin: 0,
        }}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          {
            sectionList.current.scrollToLocation({
              sectionIndex: index,
              itemIndex: 0,
            });
          }
        }>

        <Text style={{fontSize: 15, color: 'white'}}>
          {emojiData[item][0].emoji}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSearchEmojiItem = (item) => {
    return (
      <TouchableOpacity onPress={() => {
        const tempEmojis = JSON.parse(JSON.stringify(selectedEmojis));
        (item.item in tempEmojis)?tempEmojis[item.item]+=1:tempEmojis[item.item]=1;
        setSelectedEmoji(tempEmojis);
        setModalVisible(false)
      }}>
        <Text style={{fontSize: 25}}>{item.item}</Text>
      </TouchableOpacity>
    );
  };

  const renderSearchItems = () => {
    const data = [];
    Object.keys(searchedEmoji).map((item) =>
      searchedEmoji[item].name.includes(searchText.toLowerCase())
        ? data.push(item)
        : null,
    );
    return (
      <FlatList
        data={data}
        numColumns={6}
        scrollEnabled={true}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between',
          margin: 0,
        }}
        renderItem={renderSearchEmojiItem}
        keyExtractor={(item) => item}
      />
    );
  };

  const chunkArray = (myArray, chunk_size)=>{
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
  }
  let DATA = [];
  Object.keys(emojiData).map((item) => {
    DATA.push({
      title: item,
      data: chunkArray(emojiData[item],8),
    });
  });

  const Item = ({item}) =>{
    return(
    
    <View key={item[0].emoji} style={{flexDirection:'row'}}>
      {item.map(emoji=><TouchableOpacity key={emoji.emoji} onPress={()=>{
         const tempEmojis = JSON.parse(JSON.stringify(selectedEmojis));
         (emoji.emoji in tempEmojis)?tempEmojis[emoji.emoji]+=1:tempEmojis[emoji.emoji]=1;
         setSelectedEmoji(tempEmojis);
         setModalVisible(false)
      }}><Text style={{fontSize:15}}>{emoji.emoji}</Text></TouchableOpacity>)}
    </View>
  )};


  return (
    <View style={{flex: 1}}>
      <Text>Text de apreciat</Text>
    
      {renderSelectedEmojis()}
      <Modal
      style={{marginHorizontal: 30}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            marginTop: 60,
            marginHorizontal: 40,
            flexDirection: 'column',
            backgroundColor: 'grey',
            height: 500,
            borderRadius: 5,
            width: '50%'
          }}>
          <TextInput
            placeholder="search"
            onChangeText={(value) => setSearchText(value)}>
            SearchBar
          </TextInput>

          {searchText === '' && (
            <SectionList
              ref={sectionList}
              numColumns={9}
              sections={DATA}
              onScrollToIndexFailed={info => {
                const wait = new Promise(resolve => setTimeout(resolve, 500));
                wait.then(() => {
                  sectionList.current?.scrollToIndex({ index: info.index, animated: true });
                });
              }}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => <Item item={item} />}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
          )}
          {searchText === '' && renderCategories()}
          {searchText !== '' && renderSearchItems()}
        </View>
      </Modal>
    </View>
  );
              });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

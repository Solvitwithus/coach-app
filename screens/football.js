import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const football = () => {


    const navigation = useNavigation();

    const handleItemPress = (itemId) => {
      if (itemId === '0') {
        
        navigation.navigate('Alexander Fagason');
       
      }
      else if(itemId === '1')
      {
        navigation.navigate('Austine Monari');
      }
      else if(itemId === '2')
      {
        navigation.navigate('Baxtone Lore');
      }
      else if(itemId === '3')
      {
        navigation.navigate('Banice Lozo');
      }
      else if(itemId === '4')
      {
        navigation.navigate('Caltone Waihiga');
      }
      else if(itemId === '5')
      {
        navigation.navigate('Derrick Wafula');
      }
      else if(itemId === '6')
      {
        navigation.navigate('Edwin Naitore');
      }
      else if(itemId === '7')
      {
        navigation.navigate('Ethens Ignatius');
      }
      else if(itemId === '8')
      {
        navigation.navigate('Godwin Ngigi');
      }
      else if(itemId === '9')
      {
        navigation.navigate('Hashim Shaffi');
      }
      else if(itemId === '10')
      {
        navigation.navigate('Irene Jeroich');
      }
      else if(itemId === '11')
      {
        navigation.navigate('Joel Walon');
      }
      else if(itemId === '12')
      {
        navigation.navigate('Kerio Kerich');
      }
      else if(itemId === '13')
      {
        navigation.navigate('Zachariah Alex');
      }
      else if(itemId === '14')
      {
        navigation.navigate('Zandu Zalendo');
      }
      else
      {
        navigation.navigate('Zun Zan');
      }
    };

  const [coach, setcoach] = useState([
    {"id":"0","type":"Alexander Fagason" ,image:require('./Assets/alex.png')},
    {"id":"1","type":"Austine Monari",image:require('./Assets/kim.png')},
    {"id":"2","type":"baxtone Lore",image:require('./Assets/kima.png')},
    {"id":"3","type":"Banice Lozo",image:require('./Assets/kimaa.png')},
    {"id":"4","type":"Caltone Waihiga",image:require('./Assets/zip.png')},
    {"id":"5","type":"Derrick Wafula",image:require('./Assets/don.png')},
    {"id":"6","type":"Edwin Naitore",image:require('./Assets/wozaa.png')},
    {"id":"7","type":"Ethens Ignatius",image:require('./Assets/qi.png')},
    {"id":"8","type":"Godwin Ngigi",image:require('./Assets/wo.png')},
    {"id":"9","type":"Hashim Shaffi",image:require('./Assets/loz.png')},
    {"id":"10","type":"Irene Jeroich",image:require('./Assets/ire.png')},
    {"id":"11","type":"Joel Walon",image:require('./Assets/zin.png')},
    {"id":"12","type":"Kerio Kerich",image:require('./Assets/ops.png')},
    {"id":"13","type":"Zachariah Alex",image:require('./Assets/fag.png')},
    {"id":"14","type":"Zandu Zalendo",image:require('./Assets/zan.png')},
    {"id":"15","type":"Zun Zan",image:require('./Assets/cc.png')},
  ])

  const renderItem = ({ item }) => (
    <TouchableOpacity  onPress={() => handleItemPress(item.id)}>
      <View key={item.id} style={styles.item}>
        <Text style={styles.itname}>{item.type}</Text>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      

    </TouchableOpacity>
  );

  const renderVerticalItem = ({ item }) => (
    <View style={styles.verticalItem}>
      {item.map((coachItem) => (
        <View key={coachItem.id}>{renderItem({ item: coachItem })}</View>
      ))}
    </View>
  );

  const formatData = (data, numColumns) => {
    const rows = Math.ceil(data.length / numColumns);
    const formattedData = [];

    for (let i = 0; i < rows; i++) {
      const rowItems = data.slice(i * numColumns, i * numColumns + numColumns);
      formattedData.push(rowItems);
    }

    return formattedData;
  };

  const numColumns = 2;
  const formattedData = formatData(coach, numColumns);

  return (
    <View style={styles.container}>
    {/* ...other code... */}
    <FlatList
      data={formattedData}
      renderItem={renderVerticalItem}
      keyExtractor={(item) => item[0].id} 
      contentContainerStyle={styles.flatListContentContainer}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaaaaa',
    flex: 1,
  },
  item: {
    marginRight: 10,
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 9,
    height:200,
    width:180,
    margin:2
  },
  itname: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'black',
    fontSize:18
  },
  itemImage: {
    width: 170,
    height: 166,
    
    
  },
  verticalItem: {
    flexDirection: 'row',
  },
  flatListContentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default football;
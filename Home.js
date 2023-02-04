import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, StyleSheet} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 250,
    height: 150,
  },
  logo: {
    width: 166,
    height: 58,
  },
});

const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://dbtech5.github.io/api_test/api.txt');
      const json = await (await response.text()).split("&n");
      json.pop("")
      console.log(json)
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
          style={styles.tinyLogo}
          source={require('./images/logo.png')}
        />
    <View style={{
      backgroundColor: '#FFF',
      padding: 20,
      borderRadius: 15,
      flexDirection: 'row',
      flexWrap: 'wrap'
      }}>
      <Image source={require('./images/อ่างเก็บน้ำ.png')} style={{width: 50,height: 50, marginRight: 10}}/>
      <Image source={require('./images/น้ำท่า.png')} style={{width: 50,height: 50, marginRight: 10}}/>
      <Image source={require('./images/สถานีวัดน้ำฝน.png')} style={{width: 50,height: 50, marginRight: 10}}/>
      <Image source={require('./images/คุณภาพน้ำ.png')} style={{width: 50,height: 50, marginRight: 10}}/>
      <Image source={require('./images/สถานีสูบน้ำ.png')} style={{width: 50,height: 50, marginRight: 10}}/>
      <Image source={require('./images/โทรมาตร.png')} style={{width: 50,height: 50}}/>
    </View>  
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#FFFFFF', marginBottom: 10, borderRadius: 15}}>
              <Icon name='waves' style={{width: 80, height: 100, paddingTop: 30}}/>
              <View style={{alignContent: 'flex-start'}}>
                <Text style={{fontWeight: 'bold'}}>
                  อ่างเก็บน้ำ{item.split(',')[0]}
                </Text>
                <View
                  style={{
                    borderBottomColor: '#DDDDDD',
                    margin: 5,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <View style={{flexDirection: 'row',marginTop: 10}}>
                  <Text>
                    น้ำไหลเข้าอ่าง 
                  </Text>

                  <Text style={{width: 120,marginLeft: 40,textAlign: 'right'}}>
                    {item.split(',')[3]} ล้าน ลบ.ม.
                  </Text>
                </View>

                <View style={{flexDirection: 'row',marginTop: 10}}>
                  <Text>
                    น้ำระบาย
                  </Text>

                  <Text style={{width: 150,marginLeft: 40,textAlign: 'right'}}>
                    {item.split(',')[4]} ล้าน ลบ.ม.
                  </Text>
                </View>
              </View>
              
            </View>
            
          )}
        />
      )}
    </View>
    </View>
  );
};

export default HomeScreen;
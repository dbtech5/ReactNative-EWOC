import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Image, Text, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
function Data({ navigation }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [people, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dbtech5.github.io/api_test/reservoir_data.txt")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  } else if (!isLoaded) {
    return <Text>Loading...</Text>;
  } else {
    const data = [
      [
        "วันที่",
        "ปริมาตรน้ำ (ล้าน ลบ.ม.)",
        "น้ำไหลเข้าอ่าง (ล้าน ลบ.ม.)",
        "น้ำระบาย (ล้าน ลบ.ม.)"
      ],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
      ['1 ม.ค. 2565','107.57','0.02','0.23'],
    ];
    /*for (let i = 0; i < 3; i += 1) {
      const dataRow = [];
      for (let j = 0; j < 3; j += 1) {
        dataRow.push(`a`);
      }
      data.push(dataRow);
      
    }*/



    return (
      <View>
        <Text style={{ width: '90%', marginLeft: '5%', marginTop: '5%'}}>ข้อมูลอ่างเก็บน้ำบางพระ ปี 2565</Text>
        
        <LineChart
        style={{ width: '90%', marginLeft: '5%'}}
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get('window').width}
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#0B2B4C",
      backgroundGradientFrom: "#0B2B4C",
      backgroundGradientTo: "#000000",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 2
      },
      propsForDots: {
        r: "0",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 15,
      borderRadius: 0
    }}
  />

        <Table borderStyle={{ borderColor: '#C1C0B9' }} style={{ width: '90%', marginLeft: '5%'}}>
          {
            data.map((dataRow, index) => (
              <Row
                key={index}
                data={dataRow}
                style={[styles.row, index % 2 && { backgroundColor: '#ffffff' }, index == 0 && { backgroundColor: '#0B2B4C' },index == 0 && {color: 'red'}]}
                textStyle={styles.text}
              />
            ))
          }
        </Table>
      </View>

    );
  }
}

export default Data;
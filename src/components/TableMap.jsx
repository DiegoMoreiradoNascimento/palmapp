import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', text: '1' },
  { id: '2', text: '2' },
  { id: '3', text: '3' },
  { id: '4', text: '4' },
  { id: '5', text: '5' },
  { id: '6', text: '6' },
  { id: '7', text: '7' },
  { id: '8', text: '8' },
  { id: '9', text: '9' },
  { id: '10', text: '10' },
  { id: '11', text: '11' },
  { id: '12', text: '12' },
  { id: '13', text: '13' },
  { id: '14', text: '14' },
  { id: '15', text: '15' },
  { id: '16', text: '16' },
  { id: '17', text: '17' },
  { id: '18', text: '18' },
  { id: '19', text: '19' },
  { id: '20', text: '20' },
  { id: '21', text: '21' },
  { id: '22', text: '22' },
  { id: '23', text: '23' },
  { id: '24', text: '24' },
  { id: '25', text: '25' },
  { id: '26', text: '26' },
  { id: '27', text: '27' },
  { id: '28', text: '28' },
  { id: '29', text: '29' },
  { id: '30', text: '30' },
  { id: '31', text: '31' },
  { id: '32', text: '32' },
  { id: '33', text: '33' },
  { id: '34', text: '34' },
  { id: '35', text: '35' },
  { id: '36', text: '36' },
  { id: '37', text: '37' },
  { id: '38', text: '38' },
  { id: '39', text: '39' },
  { id: '40', text: '40' },
  { id: '41', text: '41' },
  { id: '42', text: '42' },
  { id: '43', text: '43' },
  { id: '44', text: '44' },
  { id: '45', text: '45' },
  { id: '46', text: '46' },
  { id: '47', text: '47' },
  { id: '48', text: '48' },
  { id: '49', text: '49' },
  { id: '50', text: '50' },
];


export const TableMap = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((table, index) => (
          <TouchableOpacity key={table.id} style={[styles.tableContainer,
          //align to the left if it is second
          (data.length === index + 1 && data.length % 3 === 2) && { marginRight: 'auto', marginLeft: 20 }
          ]}>
            <Text style={styles.tableText}>{table.text}</Text>
          </TouchableOpacity>))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tableContainer: {
    height: 60,
    width: (((Dimensions.get('screen').width - 40) / 3) - 20 / 1.5),
    marginBottom: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  tableText: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 17
  }
});

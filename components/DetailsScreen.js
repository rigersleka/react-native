import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('DetailsScreen')}
      />
      <Button 
       title='Go back'
       onPress={() => navigation.goBack()}
      />    
    </View>
  );
};

export default DetailsScreen;

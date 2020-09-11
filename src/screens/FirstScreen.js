import * as React from 'react';
import {View, Keyboard, StyleSheet, Alert, Text} from 'react-native';
import Button from '../component/Button';
import TextInputComponent from '../component/TextInputComponent';

export default FirstScreen = ({navigation, props}) => {
  const [listCount, updateListCount] = React.useState('');

  moveToNextScreen = () => {
    if (listCount <= 0) {
      Alert.alert('Please add valid count');
      return;
    }
    navigation.navigate('SecondScreen', {listCount: listCount});
  };

  return (
    <View style={styles.container}>
      <TextInputComponent
        onSubmitPress={moveToNextScreen}
        keyboardType={'numeric'}
        onChangeTextProp={(text) => updateListCount(text)}
      />

      <Button
        onPress={moveToNextScreen}
        buttonName={'Move to next screen'}
        containerStyling={{backgroundColor: 'skyblue'}}
        textStyle={{color: 'black'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginVertical: 20,
  },
});

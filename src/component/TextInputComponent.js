import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, StyleSheet} from 'react-native';

export default TextInputComponent = React.memo((props) => {
  return (
    <View style={styles.container}>
      <TextInput
        maxLength={40}
        placeholder={'Please enter the length of list..'}
        style={[styles.textInputStyling, {minWidth: 300}]}
        onChangeText={(text) => props.onChangeTextProp(text)}
        onSubmitEditing={props.onSubmitPress}
        keyboardType={props.keyboardType}
      />
    </View>
  );
});

TextInputComponent.propsType = {
  onChangeTextProp: PropTypes.func.isRequired,
  onSubmitPress: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
};

TextInputComponent.defaultProps = {
  onChangeTextProp: () => {},
  onSubmitPress: () => {},
  keyboardType: 'default',
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexDirection: 'row',
    margin: 7,
    backgroundColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyling: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
    marginHorizontal: 5,
    fontSize: 16,
    color: 'black',
  },
});

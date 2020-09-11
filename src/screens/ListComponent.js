import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
let item = [];
export default ListComponent = React.memo((props) => {
  item = [];
  for (let i in props.obj) {
    item.push(
      <View
        style={[
          styles.oneContainer,
          {backgroundColor: props.obj[i] == 0 ? 'green' : 'red'},
        ]}>
        <Text children={props.obj[i]} />
      </View>,
    );
  }

  return <View style={styles.mainContainer}>{item}</View>;
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  oneContainer: {
    textAlign: 'center',
    padding: 10,
  },
});

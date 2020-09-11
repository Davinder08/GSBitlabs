import * as React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ListComponent from './ListComponent';

export default SecondScreen = ({route, navigation, props}) => {
  const [arr, updateArr] = React.useState([]);

  createBinaryObj = (count) => {
    let binaryString = '';
    for (let i = 0; i <= count; i++) {
      if (count == 0) {
        binaryString = '0';
        break;
      }
      if (i == count) {
        binaryString = binaryString + '1';
        break;
      }
      binaryString = binaryString + '0';
    }
    return binaryString;
  };

  updateListArray = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
      array.push(createBinaryObj(i));
    }
    updateArr(array);
  };

  React.useEffect(() => {
    updateListArray(route.params.listCount);
  }, []);

  _renderItems = (data) => {
    return <ListComponent obj={data.item} />;
  };

  _renderDivider = () => {
    return <View style={styles.dividerContainer} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={arr}
        extraData={arr}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItems}
        ItemSeparatorComponent={_renderDivider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    color: 'olive',
  },

  dividerContainer: {
    height: 1,
    backgroundColor: 'black',
  },
});

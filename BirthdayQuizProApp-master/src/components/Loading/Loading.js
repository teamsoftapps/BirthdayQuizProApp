import {ScrollView, View, Text, StyleSheet} from 'react-native';
const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loader</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"red"
    }
});

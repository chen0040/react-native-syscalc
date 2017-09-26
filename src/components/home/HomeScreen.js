import React, {PropTypes} from 'react';
import { StyleSheet, View } from 'react-native';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});

export default HomeScreen;
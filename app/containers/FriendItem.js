import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';

export default class FriendItem extends Component {

    render(){
        return(
            <Swipeout right={swipeoutBtns} backgroundColor='white'>
                <View style={styles.main}>
                    <View style={styles.box1}>
                        <Avatar 
                            small 
                            rounded 
                            source={{uri:this.props.picture}}
                        />
                    </View>
                    <View style={styles.box2}>
                            <Text style={styles.name}>{this.props.name}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
}

var swipeoutBtns = [
    {
        text:'Delete',
        backgroundColor:'red'
    }
]

const styles = StyleSheet.create({
    main: {
      flexDirection:'row',
      width:100+'%',
    },
    box1: {
      width:60,
      height:60,
      justifyContent:'center',
      alignItems:'center'
    },
    box2: {
      flex:1,
      height:60,
      justifyContent:'center',
      //alignItems:'center'
    },
    name: {
      paddingLeft:5,
    }
  });
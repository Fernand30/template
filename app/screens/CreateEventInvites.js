import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

import InviteFriendList from '../containers/InviteFriendList';

export default class CreateEventInvites extends Component {

    constructor(){
        super();
        this.state = {
            recipients: [],
        }
    }

    addUser = (user) => {
        userList= this.state.recipients
        if (userList.indexOf(user) == -1) {
            userList.push(user);
        } else {
            userList.splice(userList.indexOf(user), 1);
        }
        this.setState({recipients: userList})
    }

    createList(userArray) {
        userList=''
        for (var i=0; i<userArray.length; i++) {
            if (i==0) {
                userList= userList + userArray[i]
            } else {
                userList= userList + ', ' + userArray[i]
            }
        }
        return userList;
    }

    showBanner() {
        banner=false
        if (this.state.recipients.length > 0) {
            banner=true
        }
        return banner;
    }

    render() {
        return (
            <View style={styles.main}>
                <InviteFriendList onSelectUser={this.addUser}/>
                {this.showBanner() && <View style={styles.banner}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                        <Text style={styles.sendText}>{this.createList(this.state.recipients)}</Text>
                    </ScrollView>
                    <Button 
                        onPress={()=> this.props.navigation.navigate('Events')} 
                        title='Send'
                        color='white' 
                        />
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        width:100+'%',
        height:100+'%',
        backgroundColor:'white'
    },
    button: {
        backgroundColor: 'rgb(28,135,206)',
        bottom:20,
        right:20,
        position:'absolute',
    },
    banner: {
        flexDirection:'row',
        height:35,
        width:100+'%',
        bottom:0,
        position:'absolute',
        backgroundColor:'rgba(28,135,206,.9)',
    },
    scroll: {
        flexGrow:1,
        alignItems:'center',
    },
    sendText: {
        color:'white',
        paddingLeft:10
    }
});
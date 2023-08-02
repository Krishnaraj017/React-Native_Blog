import { Text, StyleSheet, View, ScrollView,Image } from "react-native";
import React, { Component } from "react";

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: "Krishnaraj",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 2,
      name: "krishnaraj",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 3,
      name: "krishnaraj",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 4,
      name: "Krishnaraj",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
            <Text>{}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
    paddingVertical:2



  },
  container: {
  
    flex:1,
    width:330,
    height:'auto',
    flexDirection:'column',
    marginHorizontal:16,
    marginVertical:12,
    borderRadius:8,
    

  },
  userCard:{
    flex:1,
    flexDirection:'row',
   // alignItems:'center',
    marginBottom:3,
    backgroundColor:'#8D3DAF',
    padding:8,
    borderRadius:12,


  },
  userImage:{
    width:60,
    height:60,
    borderRadius:60/2,
    marginRight:14,
  },
  userName:{
    fontSize:16,
    fontSWeight:'600',
    color:'#ffff'


  },
  userStatus:{
    fontSize:16,
    
  },

});

import { Text, StyleSheet, View, ScrollView,Image } from "react-native";
import React, { Component } from "react";

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: "Sanketh Singh",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 2,
      name: "Sanketh Singh",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 3,
      name: "Sanketh Singh",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 4,
      name: "Sanketh Singh",
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
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            <Text>{}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard:{},
  userImage:{
    width:60,
    height:60,
    borderRadius:60/2
  },
  userName:{},
  userStatus:{},

});

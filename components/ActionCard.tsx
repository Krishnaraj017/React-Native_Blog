import {
  Text,
  View,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedcard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 21 - ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://images.unsplash.com/photo-1516116412344-6663387e8590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Some words about javascript and its importance and new ES6.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://blog.learncodeonline.in/whats-new-in-javascript-21-es12"
              )
            }
          >
            <Text style={styles.socialContainer}> Read more1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://blog.learncodeonline.in/whats-new-in-javascript-21-es12"
              )
            }
          >
            <Text style={styles.socialContainer}> Read more2</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
  },
  card: {
    width:330,
    height:350,
    borderRadius:6,
    marginHorizontal:16,
    marginVertical:12,
  },

  elevatedcard: {
    backgroundColor:'#E07C24',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4,

  },
  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  headerText: {
    color:'#000000',
    fontSize:16,
    fontWeight:'600',

  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding:10,
  },
  footerContainer: {
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  socialContainer:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#ffffff',
    paddingHorizontal:20,
    paddingVertical:6,
  },
  
});

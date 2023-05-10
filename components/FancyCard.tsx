import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending places</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "https://images.pexels.com/photos/158398/niagara-falls-waterfall-horseshoe-158398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Waterfall</Text>
            <Text style={styles.cardLabel}>India</Text>
            <Text style={styles.cardDescription}>
              Waterfalls Near Gray Paved Road Surrounded by Green Leaf Trees
              during Daytime
            </Text>
            <Text style={styles.cardFooter}>12min awway</Text>
          </View>
          
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 330,
    height: 360,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: { color: "#000000", fontSize: 14, marginBottom: 6},
  cardDescription: { color: "#242B2E", fontSize: 12 ,marginBottom:12,marginTop:6, flexShrink:1,},
  cardFooter: { color: "#000000" },
});

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HobbyPage() {
	return (
		<View style={styles.container}>
      <ScrollView>
			<Text style={styles.title}>THIS IS MY HOBBY PAGE</Text>
			<Link style={styles.pageLink} push href= '/ContactPage'>Go to Contact Page!</Link>
            <Link style={styles.pageLink} push href= '/ProjectsPage'>Go to Projects Page!</Link>
            <Link  style={styles.pageLink}push href="/" >
          <ThemedText style={styles.pageLink} type="link">Go to home screen!</ThemedText>
      </Link>
      <Text style={styles.text}> I have created this page to highlight some of my hobbies! One thing that I am skillful 
        at is snowboarding. I have been snowboarding since I was about 14 years old. I try my best to
        go every year if possible, but lately it's been getting more and more expensive. 
      </Text>
      <Image source={snowboard} style={styles.image}></Image>
      <Image source={snowboardTwo} style={styles.image}></Image>
      <Text style={styles.text}>
        Another one of my hobbies is watching movies. My favorite film is A Brighter Summer Day
        by Edward Yang. I think my favorite genre's have to be Noir and Horror. One of my favorite horror films
        has to be Tetsuo the Iron Man by Shinya Tsukamoto and my favorite Noir film is The Big Heat.  Recently I haven't
        had too much time to watch movies, but I still try to watch as many as I can when I have the chance.
      </Text>
      <Image source = {require("./brighter-summer-day.jpg")} style={styles.image}></Image>
      <Image source = {require("./tetsuo.jpg")} style={styles.image}></Image>
      <Image source = {require("./the-big-heat.jpg")} style={styles.image}></Image>
      </ScrollView>

		</View>
	);
}
const snowboard = require("./snowboard.jpg");
const snowboardTwo =require("./snowboarding2.jpg");



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'top',
    padding: 20,
    backgroundColor:'#CBF3FF',
    marginHorizontal: "auto"

  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: 'Libre Baskerville',
    },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    },
  pageLink: {
    fontSize: 25,
    color: "#38434D",
    },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    },
  text:{
    fontFamily:'Libre Baskerville',
    fontSize: 25,
    marginHorizontal: 25,
    paddingVertical: 15
    },
    image:{
      paddingHorizontal:0,
      width:300, 
      marginBottom:20,
      marginLeft: 20,
      alignContent:'center',
      height:300,
    },

});
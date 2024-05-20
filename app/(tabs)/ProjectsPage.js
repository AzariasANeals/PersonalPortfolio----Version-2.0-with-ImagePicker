import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProjectsPage() {
	return (
		<View style={styles.container}>
      <ScrollView>
			<Text style={styles.title}>THIS IS THE PROJECTS PAGE</Text>
			<Link style={styles.pageLink} push href= '/HobbyPage'>Go to Hobby Page!</Link>
            <Link style={styles.pageLink} push href= '/ContactPage'>Go to Contact Page!</Link>
            <Link style={styles.pageLink} push href="./">
          <ThemedText style={styles.pageLink} type="link">Go to home screen!</ThemedText>
        </Link>
      <Text style={styles.text}>Here are a series of screenshots from my previous Expo Projects!</Text>
      <Image source = {require("./Project (1).jpg")} style={styles.image}></Image>
      <Image source = {require("./Project (2).jpg")} style={styles.image}></Image>
      <Image source = {require("./Project (3).jpg")} style={styles.image}></Image>
      <Image source = {require("./Project (4).jpg")} style={styles.image}></Image>
      <Image source = {require("./Project (5).jpg")} style={styles.image}></Image>
      <Image source = {require("./Project (6).jpg")} style={styles.image}></Image>
      <Text style={styles.pageLinkTwo}>Click on the link below if you want to see my Github projects!</Text>
      <Link href={{ pathname: '/Projects/[id]', params: { id: '1'}}} style={styles.pageLink}>Go to Project Links</Link>
      </ScrollView>
		</View>
	);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'top',
    padding: 20,
    backgroundColor: '#CBD1FF',
    marginHorizontal: "auto"

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
  title: {
    fontSize: 64,
    fontWeight: "bold",
    },
  pageLinkTwo: {
    fontSize: 25,
    color: "#38434D",
    },
    pageLink: {
      fontSize: 25,
      color: "#FF5733",
      fontWeight:"500"
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
      }
});
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ImageBackground } from 'react-native-web';

export default function ContactPage() {
	return (
		<View style={styles.container}>
        <ScrollView>
			<Text style={styles.title}>THIS IS MY CONTACT PAGE</Text>
			<Link style={styles.pageLink} push href= '/HobbyPage'>Go to Hobby Page!</Link>
            <Link style={styles.pageLink} push href= '/ProjectsPage'>Go to Projects Page!</Link>
            <Link style={styles.pageLink} push href="/">
          <ThemedText style={styles.pageLink} type="link">Go to home screen!</ThemedText>
        </Link>
        
        <Image source={profilePic} style={styles.image} resizeMode='auto'></Image>
          <Text style={styles.text}>Here is my Contact information</Text>
          <Text style={styles.text}>Email: Azarias.P.Aneals@seattlecolleges.edu</Text>
          <Text style={styles.text}>Phone-Number: (206)-353-160</Text>
          <Text style={styles.text}>Github:<Link style={styles.github} replace href= 'https://github.com/AzariasANeals'>https://github.com/AzariasANeals</Link></Text>
        </ScrollView>
		</View>
	);
}
const profilePic = require("./profile-pic.jpg");
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'left',
      justifyContent: 'bottom',
      padding: 20,
      backgroundColor:'#FFF7CB',
      marginHorizontal: "auto"
    },
    containerTwo: {
      flex: 1,
      alignItems: 'right',
      justifyContent: 'top',
      padding: 20,
      backgroundColor:'#FFF7CB'
    },
    image:{
      width:300, 
      height:300,
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
      fontFamily: 'Libre Baskerville',
      },
    pageLink: {
      fontSize: 25,
      color: "#38434D",
      },
    github: {
      fontSize: 25,
      color: "black",
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
    }
  });
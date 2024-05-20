import { StyleSheet, Text, View } from "react-native";
import { Link, router, Redirect } from 'expo-router';
import React from 'react'


function ExercisePage() {
	return (
		<View>
			<Link style={styles.pageLink} push href = './ContactPage'>- Contact Page </Link>
			<Link style={styles.pageLink} push href= './HobbyPage'>- Hobby Page</Link>
			<Link style={styles.pageLink} push href= './ProjectsPage'>- Projects Page</Link>
			<Link style={styles.pageLink} push href = './ImagePickerPage'>Image Picker Page</Link>
		</View>
	);
}


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.azariasTitle}>Azarias'</Text>
        <Text style={styles.title}>Personal Portfolio</Text>
        <Text style={styles.subtitle}>Welcome to my personal portfolio.</Text>
        <ExercisePage />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: '#CBFFF4'
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  azariasTitle: {
    fontFamily: 'Libre Baskerville',
    fontSize: 64,
    fontWeight: "bold",
  },
  title: {
    fontFamily: 'Libre Baskerville',
    fontSize: 64,
    fontWeight: "bold",
  },
  pageLink: {
    fontSize: 25,
    color: "#38434D",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
import { Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';


export default function Route() {
  const local = useLocalSearchParams();
  return (
    <View>
      <Text style={styles.title}>Project ID: {local.projects}</Text>
      <Link style={styles.pageLink} push href= '/HobbyPage'>Go to Hobby Page!</Link>
            <Link style={styles.pageLink} push href= '/ContactPage'>Go to Contact Page!</Link>
            <Link style={styles.pageLink} push href="/ProjectsPage">Go back to Project Page!</Link>
      <Text style={styles.subtitle}>Project: 1</Text>
      <Link style={styles.text} replace href='https://github.com/AzariasANeals/AzariasProfileProject'>'https://github.com/AzariasANeals/AzariasProfileProject'</Link>
      <Text style={styles.subtitle}>Project: 2</Text>
      <Link style={styles.text}replace href='https://github.com/AzariasANeals/InteractiveRecipeGallery-master'>'https://github.com/AzariasANeals/InteractiveRecipeGallery-master'</Link>
      <Text style={styles.subtitle}>Project: 3</Text>
      <Link style={styles.text}replace href='https://github.com/AzariasANeals/TaskManager-master'>https://github.com/AzariasANeals/TaskManager-master</Link>
      <Text style={styles.subtitle}>Project: 4</Text>
      <Link style={styles.text}replace href='https://github.com/AzariasANeals/RouterTest-master'>'https://github.com/AzariasANeals/RouterTest-master'</Link>
      
    </View>
  );
}
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
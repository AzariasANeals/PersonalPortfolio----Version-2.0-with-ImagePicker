import { View, Text, StyleSheet, Image, ScrollView, FlatList, Button } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ImageBackground } from 'react-native-web';
import * as ImagePicker from 'expo-image-picker';

function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [8, 2],
      quality: 1,
    });
    
    console.log(result);
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImageList([... imageList, result.assets[0].uri]);
    }
    console.log(imageList);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

export default function ImagePickerPage() {

	return (
		<View style={styles.container}>
        <ScrollView>
			<Text style={styles.title}>THIS IS MY IMAGE PICKER PAGE</Text>
			<Link style={styles.pageLink} push href= '/HobbyPage'>Go to Hobby Page!</Link>
            <Link style={styles.pageLink} push href= '/ProjectsPage'>Go to Projects Page!</Link>
            <Link style={styles.pageLink} push href="/">
          <ThemedText style={styles.pageLink} type="link">Go to home screen!</ThemedText>
        </Link>
        <ImagePickerExample />
        </ScrollView>
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
      width:500, 
      height:500,
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
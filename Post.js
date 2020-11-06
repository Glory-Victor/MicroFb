import React from 'react';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button, Dimensions
} from 'react-native';

const Post = ({ route, navigation }) => {
  const { image, title, description, time  } = route.params;
  return (
    <View style={styles.card}>
      <ImageZoom cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={200}
              imageHeight={200}>
        <Image style={styles.cardImage} source={{uri:image}} />
      </ImageZoom>    
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.title}>{JSON.stringify(title)}</Text>
          <Text style={styles.description}>{JSON.stringify(description)}</Text>
          <View style={styles.timeContainer}>
            <Image style={styles.iconData} source={{uri: 'https://img.icons8.com/color/96/3498db/calendar.png'}}/>
            <Text style={styles.time}>{JSON.stringify(time)}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Post;

const styles = StyleSheet.create({
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  }
});  
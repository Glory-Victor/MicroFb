import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Avatar } from "react-native-elements";

const Profile = ({ navigation }) => {
    const [edit, setEdit] = useState(false);
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Avatar style={styles.avatar}
            size="medium"
            title="GV"
            activeOpacity={0.7}
          />
          <TouchableOpacity style={styles.edit} onPress={() => setEdit(true)}>
            <Text style={{color:"white"}} >edit</Text> 
          </TouchableOpacity>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              {edit && <TextInput style={[styles.name, {backgroundColor: '#C0C0C0'}]} placeholder={'Glory Victor'} editable={edit} />}
              {!edit && <Text style={styles.info}>Glory Victor</Text>}

              {edit && <TextInput style={[styles.name, { backgroundColor:'#C0C0C0' }]} placeholder={'Full stack developer'} editable={edit} />}
              {!edit && <Text style={styles.info}>Full stack developer</Text>}

              {edit && <TextInput style={[styles.description, {backgroundColor: '#C0C0C0'}]} placeholder={'Lorem ipsum dolor sit amet, saepe sapientem eu nam.'} editable={edit} />}
              {!edit && <Text style={styles.info}>Lorem ipsum dolor sit amet, saepe sapientem eu nam.</Text>}
            </View>
          </View>
              <View style={styles.button}>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Settings</Text>  
                </TouchableOpacity>              
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Help</Text> 
                </TouchableOpacity>
              </View>
              {edit &&
                <View style={styles.button}>
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => setEdit(false)}>
                    <Text style={styles.buttonText}>Submit</Text>  
                  </TouchableOpacity>           
                  <TouchableOpacity style={styles.buttonContainer} onPress={() => setEdit(false)}>
                    <Text style={styles.buttonText}>Cancel</Text> 
                  </TouchableOpacity>
                </View>
              }
      </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#000",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    backgroundColor: "#696969"
  },
  edit: {
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:50,
    borderRadius:30,
    backgroundColor: "#000",
  },
  name:{
    fontSize:22,
    color:"#FFF",
    fontWeight:'600',
    textAlign: 'center'
  },
  info:{
    fontSize:16,
    color: "#000",
    marginTop:10,
    textAlign: 'center',
  },
  description:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10,
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    height:45,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
    backgroundColor: "#000",
  },
  buttonText: {
    color: 'white'
  }
});

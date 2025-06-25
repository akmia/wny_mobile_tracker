import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';


const PersonalInfoForm = () => {
  const [program, setProgram] = React.useState('Bachelor in Science in Information Technology');
  const [status, setStatus] = React.useState('Employed');
  const router = useRouter();

  const handleLogin = () => {
    router.push('/trackerform');
  };

  const handleBackPress = () => {
  Alert.alert(
    "Logout Confirmation",
    "Are you sure you want to logout?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => router.replace("/"), // or router.push("/") depending on your routing logic
      },
    ],
    { cancelable: true }
  );
};

  return (
    <ImageBackground
      source={require('../assets/images/ctu_bg.jpg')}
      style={styles.background}
      blurRadius={3}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>FORMS</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.title}>PERSONAL INFORMATION</Text>

          <Text style={styles.label}>First Name</Text>
          <Text style={styles.readOnlyField}>Angel Khyla Marie</Text>

          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.readOnlyField}>Aboloc</Text>

          <Text style={styles.label}>Program</Text>
          <View style={styles.pickerWrapper}>
            <Picker selectedValue={program} enabled={false}>
              <Picker.Item label="Bachelor in Science in Information Technology" value="bsit" />
              <Picker.Item label="Bachelor in Science in Information System" value="bsis" />
              <Picker.Item label="Bachelor in Industrial Technology major in Computer Technology" value="bitct" />
            </Picker>
          </View>

          <Text style={styles.label}>Status</Text>
          <View style={styles.pickerWrapper}>
            <Picker selectedValue={status} enabled={false}>
              <Picker.Item label="Employed" value="Employed" />
              <Picker.Item label="Unemployed" value="Unemployed" />
              <Picker.Item label="Untracked" value="Untracked" />
            </Picker>
          </View>

          <Text style={styles.label}>Company Name / Type of Business</Text>
          <Text style={styles.readOnlyField}>ABC Corporation</Text>

          <TouchableOpacity style={styles.editButton} onPress={() => router.push('/edit_persInfo')}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 25,
    color: '#1C4E80',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
    color: '#1C4E80',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  pickerWrapper: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 10,
  },
  editButton: {
    marginTop: 25,
    backgroundColor: '#1C4E80',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginLeft: 210,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C4E80',
  },
  readOnlyField: {
  backgroundColor: '#e0e0e0',
  borderRadius: 10,
  padding: 12,
  fontSize: 16,
  marginBottom: 10,
  color: '#333',
},
});

export default PersonalInfoForm;
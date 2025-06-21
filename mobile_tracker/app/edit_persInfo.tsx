import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function EditPersonalInfo() {
  const [program, setProgram] = React.useState('Bachelor in Science in Information Technology');
  const [status, setStatus] = React.useState('Employed');
  const router = useRouter();

  const handleSave = () => {
    // TODO: Save logic
    console.log("Saved");
    router.back(); // navigate back
  };

  const handleCancel = () => {
    router.back(); // navigate back
  };

  return (
    <ImageBackground
      source={require('../assets/images/ctu_bg.jpg')}
      style={styles.background}
      blurRadius={3}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleCancel}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.title}>PERSONAL INFORMATION</Text>

          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} placeholder="First Name" />

          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} placeholder="Last Name" />

          <Text style={styles.label}>Program</Text>
          <View style={styles.pickerWrapper}>
            <Picker selectedValue={program} onValueChange={setProgram}>
              <Picker.Item label="Bachelor in Science in Information Technology" value="bsit" />
              <Picker.Item label="Bachelor in Science in Information System" value="bsis" />
              <Picker.Item
                label="Bachelor in Industrial Technology major in Computer Technology"
                value="bitct"
              />
            </Picker>
          </View>

          <Text style={styles.label}>Status</Text>
          <View style={styles.pickerWrapper}>
            <Picker selectedValue={status} onValueChange={setStatus}>
              <Picker.Item label="Employed" value="Employed" />
              <Picker.Item label="Unemployed" value="Unemployed" />
              <Picker.Item label="Untracked" value="Untracked" />
            </Picker>
          </View>

          <Text style={styles.label}>Company Name / Type of Business</Text>
          <TextInput style={styles.input} placeholder="Company/Business" />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#1C4E80',
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1C4E80',
    marginLeft: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#1C4E80',
    fontWeight: 'bold',
  },
});

import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router"; // ✅ Import router

const LoginScreen = () => {
  const router = useRouter(); // ✅ Initialize router

  const handleLogin = () => {
    // Here you can validate input before navigating
    router.push("/trackerform"); // ✅ Navigate to home.tsx
  };

  return (
    <ImageBackground
      source={require("../assets/images/ctu_bg.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Technologist</Text>
        <Text style={styles.tagline}>Connect & Collaborate</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ctu id</Text>
          <TextInput style={styles.input} placeholder="" placeholderTextColor="#ddd" />

          <Text style={styles.label}>Birthdate</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ddd"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 45, 98, 0.5)", 
  },
  container: {
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  tagline: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  signupText: {
    color: "#fff",
    fontSize: 12,
  },
  signupLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
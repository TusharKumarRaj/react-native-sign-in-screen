import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/*for top image*/}
      <View>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{
            height: 100,
            width: 100,
          }}
        />
      </View>

      {/*for Sign In text*/}
      <View style={{ alignItems: "center", margin: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Sign In</Text>
        <Text style={{ color: "#686767" }}>
          {" "}
          Let's experience the joy of telecare AI.
        </Text>
      </View>

      {/*Sign-in form */}
      <View style={{ width: "90%", marginVertical: 10 }}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope-o" size={14} color="black" />
          <TextInput placeholder="Enter your email..." style={styles.input} />
        </View>
      </View>

      <View style={{ width: "90%", marginVertical: 10 }}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={14} color="black" />
          <TextInput
            placeholder="Enter your password..."
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>

      <View style={{ width: "90%", marginVertical: 15 }}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
          <AntDesign name="arrow-right" size={11} color="white" />
        </Pressable>
      </View>

      {/*SSO Login icons */}
      <View style={styles.ssoContainer}>
        <Pressable style={styles.ssoButton}>
          <FontAwesome name="facebook" size={24} color="#000000" />
        </Pressable>
        <Pressable style={styles.ssoButton}>
          <FontAwesome name="google" size={24} color="#000000" />
        </Pressable>
        <Pressable style={styles.ssoButton}>
          <FontAwesome name="instagram" size={24} color="#000000" />
        </Pressable>
      </View>

      {/* footer*/}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.footerLink}>Sign Up</Text>
        </Text>
        <Text style={[styles.footerLink, { textDecorationLine: "underline" }]}>
          Forgot your password?
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000",
  },

  inputContainer: {
    margin: 0,
    width: "100%",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    borderColor: "transparent",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 14,
  },

  button: {
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#85cc17",
    borderColor: "transparent",
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },

  ssoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginVertical: 20,
  },

  ssoButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  footer: {
    alignItems: "center",
    marginTop: 15,
    gap: 8,
  },

  footerText: {
    color: "#686767",
    fontSize: 14,
  },

  footerLink: {
    color: "#85cc17",
    fontWeight: "600",
    fontSize: 14,
  },
});

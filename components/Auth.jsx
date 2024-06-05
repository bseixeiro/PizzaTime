import React, { useState } from "react";
import { Alert, StyleSheet, View, AppState, Text } from "react-native";
import { supabase } from "../lib/supabase";
import { Button, Input } from "@rneui/themed";
import styles from "../assets/style/style";

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  

  async function signInWithEmail() {
    // setLoading(true);
    // const { error } = await supabase.auth.signInWithPassword({
    //   email: email,
    //   password: password,
    // });

    // if (error) Alert.alert(error.message);
    // setLoading(false);
    const response = await supabase.auth.signInWithPassword({email: "benji.seixeiro@gmail.com" , password: "testeur"})
    // const session = await supabase.auth.getSession()
    console.log('response: ', response)
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.input}>
          <View>
            <Input label="Email" leftIcon={{ type: "font-awesome", name: "envelope" }} onChangeText={(text) => setEmail(text)} value={email} placeholder="email@address.com" autoCapitalize={"none"} />
          </View>
          <View>
            <Input label="Password" leftIcon={{ type: "font-awesome", name: "lock" }} onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} placeholder="Password" autoCapitalize={"none"} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
          </View>
          <View style={styles.button}>
            <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
          </View>
        </View>
      </View>
    </View>
  );
};
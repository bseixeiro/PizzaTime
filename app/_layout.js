import { Stack } from "expo-router";
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // charger les couleurs
  // charger les fonts
  // Afficher un splashScreen mentionnant Hello Isitech et le logo et
  // l'enlever lorsque vos assets (fonts, ...etc) sont correctement chargés
  // Utilisez le hook useEffect (et useState)

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)) 
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    async function hideSplach(){
      await SplashScreen.hideAsync()
    }

    prepare();
    hideSplach()
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <Stack>
      {/* <Stack.Screen name="auth" options={{ headerShown : true}}/> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

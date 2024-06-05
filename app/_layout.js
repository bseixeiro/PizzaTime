import { Stack } from "expo-router";
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Auth from '../components/Auth'
import { supabase } from "../lib/supabase";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
        });
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
    <>
      {
      session && session.user ? (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      ) : (<Auth />)}
    </>
  );
}

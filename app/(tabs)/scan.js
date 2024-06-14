import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Camera from '../../components/Camera';
import CreatePizza from '../../components/createPizza';

export default function ScanScreen() {
  const [onScan, setOnScan] = useState(false);
  const [priceScan, setPriceScan] = useState("");
  const [pizzaNameScan, setPizzaNameScan] = useState("");
  const [compoScan, setCompoScan] = useState("");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function scanned(code){
    const { name, price, compo } = JSON.parse(code.data)
    setPizzaNameScan(name)
    setPriceScan(price)
    setCompoScan(compo)
    setOnScan(false)
  }

  return (
      onScan ? 
      <Camera scanned={(code) => scanned(code)} backScan={() => setOnScan(false)}/>
      :
      <CreatePizza goScan={() => setOnScan(true)} price={priceScan} name={pizzaNameScan} compo={compoScan}/>
  );
}

const styles = StyleSheet.create({

});

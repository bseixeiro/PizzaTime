import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Camera({ scanned, backScan }) {
    const [facing, setFacing] = useState('back');
    const [flash, setFlash] = useState("flash");
    const [isActiveFlash, setActiveFlash] = useState(false);

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
      }
    
      function toggleEnableFlash() {
        isActiveFlash ? setFlash("flash") : setFlash("flash-off")
        setActiveFlash(!isActiveFlash);
      }


    return (
        <View style={styles.container}>
          <CameraView style={styles.camera} facing={facing} enableTorch={isActiveFlash} barcodeScannerSettings={["qr", "ena"]} onBarcodeScanned={(code) => scanned(code)}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => backScan()}>
                <Ionicons name="return-down-back-outline" size={35} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Ionicons name="camera-reverse-outline" size={35} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleEnableFlash}>
                <Ionicons name={flash} size={35} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={styles.codeBarPlaceholder}>
              <Ionicons name="scan-outline" size={375} color={'white'} />
            </View>
          </CameraView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      borderColor: "red",
      borderWidth: 3,
    },
    buttonContainer: {
      marginTop: 20,
      flexDirection: 'column',
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: 'transparent',
    },
    button: {
      margin: 10,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    codeBarPlaceholder: {
      flex: 3,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 100,
    }
  });
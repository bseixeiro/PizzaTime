import { Text, TextInput, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useState } from "react";

export default function DonScreen() {
  const [don, setDon] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Faites nous un don !</Text>
      <Text style={styles.paragraph}>
      Nous sommes de retour. Pour vous jouer un mauvais tour. Afin de préserver le monde de la dévastation. 
      Afin de rallier tous les peuples à notre nation. Afin d'écraser l'Amour et la Vérité. Afin d'étendre notre pouvoir jusqu'à la Voie Lactée. 
      Jessie, James. La Team Rocket, plus rapide que la lumière. Rendez-vous tous ou ce sera la guerre.
      </Text>
      <View style={styles.div}>
        <TextInput
          style={styles.input}
          value={don}
          placeholder="Entrez la valeur du don"
          keyboardType="numeric"
          onChangeText={setDon}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  div: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: (Dimensions.get("screen").height * 0.2)
  },
 
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
 
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10,
    width: "80vw",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 13,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
    margin: 15,
    textAlign: "center",
  },
})
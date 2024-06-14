import { ScrollView, Text, View, Image, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";

export default function CreatePizza({goScan, name, price, compo}) {
  const [namePizza, setNamePizza] = useState(name);
  const [pricePizza, setPricePizza] = useState(price);
  const [compoPizza, setCompoPizza] = useState(compo);

  async function createPizza() {
    const { data, error } = await supabase.from("pizzas").upsert({ name: namePizza, price: pricePizza, compo: compoPizza });

    if (error) {
      console.error("Error creating pizza:", error);
      alert("Erreur lors de la création de la pizza, veuillez réessayer ultérieurement.");
      return;
    }
    alert("Pizza créée avec succès");
  }

  return (
      <View style={styles.content}>
        <Text style={styles.title}>Créer une Pizza</Text>
        <View style={styles.pizzaContainer}>
          <TextInput style={styles.input} placeholder="Nom de la pizza" value={namePizza} onChangeText={setNamePizza} />
          <TextInput style={styles.input} placeholder="Prix" value={pricePizza} keyboardType="numeric" onChangeText={setPricePizza} />
          <TextInput style={styles.input} placeholder="Composition" value={compoPizza} onChangeText={setCompoPizza} />
        </View>
        <TouchableOpacity style={styles.button} onPress={createPizza}>
          <Text style={styles.buttonText}>Créer la pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => goScan()}>
          <Text style={styles.buttonText}>Scanner une pizza</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pizzaContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10,
    width: "80vw",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

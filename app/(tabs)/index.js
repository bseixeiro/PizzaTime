import { ScrollView, Text, TextInput, View, TouchableOpacity, StyleSheet, Dimensions, Image, Button } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import pep from '../../assets/peperroni.png';
import { supabase } from "../../lib/supabase"

export default function SettingsScreen() {
  const [pizzas, setPizzas] = useState([])

  useEffect( () => {
    fetchPizzas()
    console.log(pizzas[0].quantity)
  }, [])

  async function fetchPizzas() {
    const { data: fetchPizzas, error } = await supabase.from('pizzas').select('*').order('price', { ascending: true })
    if (error) {
      console.error(error)
      return
    }
    const pizzs = fetchPizzas.map(p => {return {
      ...p, img:pep, quantity: 0
    }})
    setPizzas(pizzs)
  }

  const addToCommand = (index) => {
    const pizzs = pizzas.map( (pizza, i) => {
      if (i === index){
        pizza.quantity += 1
      }
      return pizza
    })
    setPizzas(pizzs)
  }
  const suppToCommand = (index) => {
    const pizzs = pizzas.map( (pizza, i) => {
      if (i === index && pizza.quantity > 0){
        pizza.quantity -= 1
      }
      return pizza
    })
    setPizzas(pizzs)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
     {pizzas.map((pizza, index) => {
        return (
          <View style={styles.pizzaContainer} key={index}>
              <TouchableOpacity style={styles.test} onPress={() => addToCommand(index)}>
              <Image 
                style={styles.pizzaImg}
                source={pizza.img}
              />
              <View style={styles.pizzaDesc}>
                <View style={styles.pizzaTitle}>
                  <Text style={styles.pizzaName}>{pizza.name}</Text>
                  <Text style={styles.pizzaPrice}>{pizza.price}€</Text>
                </View>
                
                <Text style={styles.pizzaContent}>{pizza.compo}</Text>
              </View>
          </TouchableOpacity>
              <View style={styles.pizzaQuantityContainer}>
                {pizza.quantity > 0 ?<TouchableOpacity onPress={() => suppToCommand(index)}><Ionicons name="remove" size={20} color={"black"} /></TouchableOpacity>: null}
                <Text style={styles.pizzaQuantity}>{pizza.quantity}</Text>
              </View>
            </View>
        );
      })}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  test : {
    flex: 1,
    width: Dimensions.get("screen").height * 0.42,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: 'white',
    borderRadius: 10,
  },
  pizzaName : {
    fontSize: 18
  },
  pizzaContent : {
    fontSize: 10,
    fontStyle: 'italic'
  },
  pizzaDesc: {
    minWidth: Dimensions.get("screen").width * 0.7,
    maxWidth: Dimensions.get("screen").width * 0.7,
    marginLeft: 5
  },
  pizzaPrice: {
    fontSize: 12,
  },
  pizzaQuantity: {
    fontSize: 18,
    marginLeft: 5,
    marginRight: 5,
  },
  pizzaQuantityContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  pizzaContainer : {
    flex: 1,
    width: Dimensions.get("screen").height * 0.42,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: -20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 5,
    paddingRight: 15
  },
  pizzaImg : {
    width: Dimensions.get("screen").height * 0.07,
    height: Dimensions.get("screen").height * 0.07,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  container: {
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    width: (Dimensions.get("screen").width * 0.7),
  },
  form: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    backgroundColor: "ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  li: {
    width: (Dimensions.get("screen").width * 0.9),
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: -20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 5,
    marginLeft: 15,
  },
  div: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: (Dimensions.get("screen").width * 0.5)
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
    margin: 10,
    width: (Dimensions.get("screen").width * 0.9),
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
  buttonBis: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10,
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
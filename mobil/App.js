/*
* Copyright: 2024, Szekers Miklós
* Date: 2024-03-13
* Github: https://github.com/hiimmikescott/orszagok
*/
import React, { useState } from 'react';
import { ScrollView, Pressable, StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  const host = "http://localhost:3000/";
  const endpoint = "orszagok";
  const url = `${host}${endpoint}`;

  const [countries, setCountries] = useState([]);

  function getCountries() {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setCountries(result);
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Orszagok</Text>
      <Image 
        source={require('./assets/wp1936868.webp')} 
        style={{width: 900, height: 600 }}    
      />

      <Pressable onPress={getCountries} style={styles.button}>
        <Text style={styles.buttonText}>Lekeres</Text>
      </Pressable>

      {countries.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.nev}</Text>
          <Text style={styles.cardText}>Terulet: {item.terulet}</Text>
          <Text style={styles.cardText}>Nepesseg: {item.nepesseg}</Text>
          <Text style={styles.cardText}>Fovaros: {item.fovaros}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'coral',
    backgroundColor:'black'
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    width: '200px',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '75%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
});
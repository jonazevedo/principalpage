import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const navigateToAddBike = () => {
    console.log('Navegar para a página de adicionar bicicleta roubada');
  };

  return (
    
    <View style={styles.container}>
      <Text top={-60} left={-110} style={styles.botaologin}>Login </Text>
      <Text top={-110} right={-110} style={styles.botaologin}> Cadastro </Text>
      <Image
        source={{uri: 'https://github.com/jonazevedo.png'}}
        style={{
          width: '60%',
          height: 300,
          borderRadius: 200,
          top: -10
        }}

      />
      <Text style={styles.title}>BIKE ROUBADA</Text>
      <Text style={styles.subtitle}>Encontre ou ajude a localizar bicicletas roubadas</Text>
      <TouchableOpacity style={styles.addButton} onPress={navigateToAddBike}>
        <Text style={styles.addButtonText}>Clique aqui para conferir a lista</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaologin:{
    color: 'white',
    backgroundColor:'#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    fontWeight: 'bold',
  }
});

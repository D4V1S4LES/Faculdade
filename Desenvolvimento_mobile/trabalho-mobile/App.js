import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Home } from './scr/paginas/home/Home';

//Componentes e propriedades

//componente: Função que retorna tags react native, depois de criada ou exportada podemos usar igual uma tag html
//Propriedades: Quando eu replico um componete porém podendo alterar seu valor em varíos lugares do código
//Estado: Por padrão nenhum compente pode alterar seu valor diretamente, 

// function Textbutton(props) {
//   return (
//   <Text>{props.title}</Text>
//   )
// }


export default function App() {
  return (
    <>
      <Home></Home>
      <StatusBar style="white" />
    </>
  );
}

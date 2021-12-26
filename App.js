import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

import molde from './components/molde';


export default function App() {
  return ( 
    
     <View style={molde.planodefundo}>
      <Text style= {molde.tit}>
       Top 4 comidas estranhas do mundo
      </Text>
      
    <FlatList
    
    data = {bichos}
    keyExtractor = {(item) => item.comida.toString()}
    renderItem = {({item}) => 
    <View>
      <Text style = {molde.legenda}> {item.comida}</Text>

      <Image style = {molde.item} source = {item.source}/>
      <Text style ={molde.linha}> _______________________________________________________</Text>
    </View>
    }/>

    <Text> Desenvolvido por Dev Júnior: </Text> <Text> Vitoria Neris Mendes da Silva 3ºDS</Text>
    </View>
  
  );
}
const bichos = [
{comida: 'Pernas de Rã - França', source: require ('./assets/comida1.jpg')},
{comida: 'Vinho de cobra - Vietnã', source: require ('./assets/comida2.jpg')},
{comida: 'Hambúrguer de Camelo - Marrocos', source: require ('./assets/comida3.jpg')},
{comida: 'Ratos - Índia', source: require ('./assets/comida4.jpg')},
];





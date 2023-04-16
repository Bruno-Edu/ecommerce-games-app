import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,TextInput,Image } from 'react-native';
import Logo from '../../../assets/LogoVertical.png';
import Menu from '../../../assets/menu.svg';
import Carrinho from '../../../assets/carrinho.svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Menu}/>
        <Image style={{ width: '100%', height: 400, resizeMode: 'contain' }} source={Logo}/>
        <Image source={Carrinho}/>
      </View>
      
      <View>
        <TextInput />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ /*Objeto para ser estilizado */ 
    flex: 1,
    backgroundColor:'red', /*Não usa hífen do CSS, usa letra miniscula e maiuscula sem espaço. */
  
  },
})
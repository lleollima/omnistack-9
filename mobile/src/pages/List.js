import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AsyncStorage,SafeAreaView, ScrollView, View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

import SpotList from '../conponents/SpotList'

import logo from '../assets/logo.png'


export default  function List() {

    const [techs,setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, [])

    

    return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logo} />

        <ScrollView>
            {techs.map(tech => <SpotList  key={tech} tech={tech} />)}
        </ScrollView>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo : {
        height: 32,
        resizeMode : "contain",
        alignSelf: "center",
        marginTop: 50,
    },
})
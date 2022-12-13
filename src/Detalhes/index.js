import React from "react";
import{ View,Text,StyleSheet, TouchableOpacity } from 'react-native';


export default function Detahles(props){
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                    <Text style={{color: '#fff', fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>{props.filmes.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filmes.sinopse}</Text>

            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    modalContainer: {
        width: '100%',
        height: '50%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    btnVoltar:{
        backgroundColor: '#e52246',
        padding: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6

    },
titulo:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
},
sinopse:{
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10

},
descricao:{
    color: '#fff',
    marginLeft: 10,
    marginRight: 10

}



})
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props)=> {

    return(

        <View style= {style.item}>
            <View style= {style.itemleft}>
                <TouchableOpacity style={style.squares}></TouchableOpacity>
                <Text style= {style.itemText}>{props.text}</Text>
            </View>
            <View style= {style.circular}></View>
            
        </View>
    )

}

const style= StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: "wrap",
    },
    itemText: {
        flexDirection: 'row',
        alignItems: "center",
        textAlign: 'center',
        color:'black',
        
    },
    circular: {
        height: 5,
        width: 5,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 40,
        marginRight: 10,
        paddingBottom: 25,
    },
    itemText: {
        fontSize: 16,
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
    },
    squares: {
        height: '100%',
        width: 10,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        paddingBottom: 30,
    },


})

export default Task;
import React, {useState}from "react";
import {StyleSheet, TextInput, Text, View, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import Task from "./components/task.js";


function Main() : React.JSX.Element {

    return <>
        {/* Tasks To Do List*/}
        <SafeAreaView style = {styles.viewContainer}>
            <View style = {styles.tasksContainer}>
                <Text style = {styles.title}>Today's Tasks</Text>

                <View style = {styles.items}>
                    <Task Text="Go to SAIT"/>
                    <Task Text="Finish Mobile Development To Do List"/>
                    <Task Text="Work at 4:00 p.m."/>
                </View>
                    
            </View>
        </SafeAreaView>

    </>;
}

export default Main;

const styles = StyleSheet.create({ 

    addView: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
        elevation: 5,
    },

    addText: {
        fontSize: 30,
    },

    input: {
        textAlign: "center",
        color: "black",
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
        elevation: 5,
    },

    writeTask: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    viewContainer: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },

    tasksContainer: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
    items: {
        marginTop: 30,
    },

});
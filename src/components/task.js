import React from "react";

import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.leftItems}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.taskText}>{props.Text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
        
    );
}

const styles = StyleSheet.create({ 

    leftItems: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        backgroundColor: '#55BCF666',
        padding: 15,
        borderRadius: 10,
        marginRight: 15,
    },

    taskText: {
        textAlign: 'left',
        color: '#000000',
        maxWidth: '80%',
    },

    item: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
        elevation: 5,
    },

    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    }
});

export default Task;
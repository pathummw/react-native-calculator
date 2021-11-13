import React from 'react'
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

export default function Display() {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text >Hi tet</Text>
            </View>
            <View style={styles.controls}>
                <View style={styles.rowOne}>
                    <View style={styles.row1_1}></View>
                    <View style={styles.row1_2}></View>
                    <View style={styles.row1_3}></View>
                    <View style={styles.row1_4}></View>
                </View>
                <View style={styles.rowTwo}>
                    <View style={styles.row1_1}></View>
                    <View style={styles.row1_2}></View>
                    <View style={styles.row1_4}></View>
                    <View style={styles.row1_3}></View>

                </View>
                <View style={styles.rowThree}></View>
                <View style={styles.rowFour}></View>
                <View style={styles.rowFive}></View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: 'green',
    },
    text: {
        backgroundColor: 'red',
        flex: 1,
    },
    controls: {
        backgroundColor: 'yellow',
        flex: 3,
    },
    rowOne: {
        backgroundColor: '#4a56e8',
        flex: 1,
        flexDirection: 'row'
    },
    rowTwo: {
        backgroundColor: '#f05c40',
        flex: 1,
        flexDirection: 'row'
    },
    rowThree: {
        backgroundColor: '#ffc80c',
        flex: 1
    },
    rowFour: {
        backgroundColor: 'green',
        flex: 1
    },
    rowFive: {
        backgroundColor: 'black',
        flex: 1
    },
    row1_1: {
        backgroundColor: 'purple',
        flex: 1
    },
    row1_2: {
        backgroundColor: 'rose',
        flex: 1
    },
    row1_3: {
        backgroundColor: 'yellow',
        flex: 1
    },
    row1_4: {
        backgroundColor: 'tomato',
        flex: 1
    },


})

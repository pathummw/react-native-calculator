import React from 'react'
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'

export default function Display() {
    return (

        <View style={styles.container}>
            <View style={styles.text}>
                <Text >Hi tet</Text>
            </View>
            <View style={styles.controls}>
                <View style={styles.rowOne}>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>c</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>/</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>x</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}> -x </Text></View>
                </View>
                <View style={styles.rowTwo}>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>7</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>8</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>9</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>-</Text></View>

                </View>
                <View style={styles.rowThree}>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>4</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>5</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>6</Text></View>
                    <View style={styles.row1_1}><Text style={styles.textStyle}>+</Text></View>
                </View>
                <View style={styles.rowFour}>
                    <View style={styles.row4_1}>
                        <View style={styles.row1_1_1}>
                            <Text style={styles.textStyle}>1</Text>
                        </View>
                        <View style={styles.row1_1_1}>
                            <Text style={styles.textStyle}>/</Text>
                        </View>
                    </View>
                    <View style={styles.row4_1}>
                        <View style={styles.row1_1_1}>
                            <Text style={styles.textStyle}>2</Text>
                        </View>
                        <View style={styles.row1_1_1}>
                            <Text style={styles.textStyle}>0</Text>
                        </View>
                    </View>
                    <View style={styles.row4_1}>
                        <View style={styles.row1_1_1}>
                            <Text style={styles.textStyle}>3</Text>
                        </View>
                        <View style={styles.row1_1_1}>
                            <Text style={styles.textStyle}>.</Text>
                        </View>
                    </View>
                    <View style={styles.row4_1}>
                        <Text style={styles.textStyle}>=</Text>
                    </View>

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: '#4a56e8',
    },
    text: {
        /* backgroundColor: 'red', */
        flex: 1,
    },
    controls: {
        /* backgroundColor: 'yellow', */
        flex: 3,
    },
    rowOne: {
        /* backgroundColor: '#4a56e8', */
        flex: 1,
        flexDirection: 'row',
    },
    rowTwo: {
        /* backgroundColor: '#f05c40', */
        flex: 1,
        flexDirection: 'row'
    },
    rowThree: {
        /* backgroundColor: '#ffc80c', */
        flex: 1,
        flexDirection: 'row'
    },
    rowFour: {
        backgroundColor: '#4a56e8',
        flex: 2,
        flexDirection: 'row',
    },
    row1_1: {
        backgroundColor: '#434554',
        flex: 1,
        margin: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row4_1: {
        backgroundColor: '#4a56e8',
        flex: 1,
        margin: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        color: 'white',
        fontSize: 32
    },
    equal: {
        flex: 3,
        flexDirection: 'column'
    },
    row1_1_1: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 2,
        width: '100%',
        backgroundColor: '#434554'
    }



})

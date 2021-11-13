import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, ScrollView, Button } from 'react-native'

export default function Display() {

    const [number, setNumber] = useState(0);
    return (

        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.displayText}>{number}</Text>
            </View>
            <View style={styles.operatorsTopRow}>
                <TouchableOpacity style={styles.btnTopOperator}>
                    <Text> C </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTopOperator}>
                    <Text> % </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTopOperator}>
                    <Text> X </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTopOperator}>
                    <Text> x </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.belowTopOperators}>
                <View style={styles.numberPanel}>
                    <View style={styles.numberRowOne}>
                        <TouchableBtn title={'C'} />
                        <TouchableBtn title={'/'} />
                        <TouchableBtn title={'X'} />
                    </View>
                    <View style={styles.numberRowOne}>
                        <TouchableBtn title={'7'} />
                        <TouchableBtn title={'8'} />
                        <TouchableBtn title={'9'} />
                    </View>
                    <View style={styles.numberRowOne}>
                        <TouchableBtn title={'4'} />
                        <TouchableBtn title={'5'} />
                        <TouchableBtn title={'6'} />
                    </View>
                    <View style={styles.numberRowOne}>
                        <TouchableBtn title={'1'} />
                        <TouchableBtn title={'2'} />
                        <TouchableBtn title={'3'} />
                    </View>
                    <View style={styles.numberRowOne}>
                        <TouchableBtn title={'%'} />
                        <TouchableBtn title={'0'} />
                        <TouchableBtn title={'.'} />
                    </View>
                </View>
                <View style={styles.sideOperators}>
                    <View style={styles.minus}>
                        <TouchableOpacity style={styles.btnSideOperator}>
                            <Text> - </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.plus}>
                        <TouchableOpacity style={styles.btnSideOperator}>
                            <Text> + </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.equal}>
                        <TouchableOpacity style={styles.btnSideOperator}>
                            <Text> = </Text>
                        </TouchableOpacity>
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
    result: {
        flex: 2,
        /* backgroundColor: 'red' */
    },
    operatorsTopRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    belowTopOperators: {
        flex: 4,
        /* backgroundColor: 'green', */
        flexDirection: 'row'
    },
    numberPanel: {
        flex: 3,
        /* backgroundColor: 'yellow', */
    },
    sideOperators: {
        flex: 1,
        /* backgroundColor: 'blue', */
    },
    btnTopOperator: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        margin: 1,
        backgroundColor: '#434554',
    },
    numberRowOne: {
        flex: 1,
        flexDirection: 'row',
    },
    minus: {
        flex: 1,
        backgroundColor: '#434554',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 1
    },
    plus: {
        flex: 1,
        backgroundColor: '#434554',
        alignItems: 'center',
        justifyContent: 'center'
    },
    equal: {
        flex: 2,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc80c'
    },
    btnSideOperator: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 1,
        /* backgroundColor: '#434554', */
        height: '100%'
    },
    btnNumbers: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '32%',
        margin: 1,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Roboto'
    },
    displayText: {
        color: 'white',
        fontSize: 72,
        fontFamily: 'Roboto',
        padding: 5,
    }

})


const TouchableBtn = ({ title }) => {
    return (
        <TouchableOpacity style={styles.btnNumbers}>
            <Text style={styles.text}> {title} </ Text>
        </TouchableOpacity>
    )
}
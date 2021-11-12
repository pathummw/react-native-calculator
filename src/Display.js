import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default function Display() {
    return (
        <View>
            <TextInput
                style={styles.input}
            >

            </TextInput>

        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1
    }
})

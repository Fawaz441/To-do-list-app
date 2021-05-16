import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet, Button, Alert } from 'react-native'

function addTodo({ createToDo }) {

    const [toDo, settoDo] = useState('')

    const addAToDo = () => {
        if (toDo.length > 0) {
            createToDo(toDo)
            settoDo('')
        }
        else {
            // title,message,Buttons
            Alert.alert(
                'OOPS',
                'No text yet - at least 1 character!',
                [
                    { text: 'Understood',onPress:() => console.log('understood') }
                ]
            )
        }
    }

    return (
        <View>
            <TextInput
                placeholder="Enter a New Task"
                onChangeText={value => settoDo(value)}
                style={styles.input}
                value={toDo}

            />
            <Button title='Create' color='coral' onPress={addAToDo} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

export default addTodo


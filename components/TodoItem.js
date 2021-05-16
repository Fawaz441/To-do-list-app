import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity, Touchable} from 'react-native'

function TodoItem({item,removeTask}){

   
    return(
        <TouchableOpacity onPress={() => removeTask(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})

export default TodoItem
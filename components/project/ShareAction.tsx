import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function ShareAction({ id }) {
    return (
        <View className='bg-blue-500 p-2 align-middle justify-center'>
            <Pressable
                key={id}
            // onPress={() => editTodo?.(id)}
            >
                {({ pressed }) => (
                    <FontAwesome
                        name="share"
                        size={25}
                        color="white"
                        style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                )}
            </Pressable>
        </View>
    )
}
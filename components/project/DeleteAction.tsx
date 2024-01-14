import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function DeleteAction({ id }) {
    return (
        <View className='bg-red-500 p-2 align-middle justify-center'>
            <Pressable
                key={id}
            // onPress={() => deleteProject?.(id)}
            >
                {({ pressed }) => (
                    <FontAwesome
                        name="trash"
                        size={25}
                        // color={Colors[colorScheme ?? 'dark'].text}
                        color="white"
                        style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                )}
            </Pressable>
        </View>
    )
}
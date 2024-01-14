import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function EditAction({ id }) {
    return (
        <View className='bg-yellow-500 p-2 align-middle justify-center'>
            <Pressable>
                {({ pressed }) => (
                    <FontAwesome
                        name="edit"
                        size={25}
                        // color={Colors[colorScheme ?? 'light'].text}
                        color="white"
                        style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                )}
            </Pressable>
        </View>
    )
}
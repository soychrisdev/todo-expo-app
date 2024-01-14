import { View, Text } from 'react-native'
import React from 'react'

export default function ProjectItem({ id, title, description, percentajeCompleted }) {
    return (
        <View key={id} className="bg-white  mt-2  mb-2  shadow-lg  overflow-hidden">
            <View className="p-4">
                <View className='flex flex-row justify-between'>
                    <Text className="text-xl font-semibold">{title}</Text>
                    <View className="bg-blue-500  px-2 py-2 rounded-full text-xs">
                        <Text className='text-white'>
                            {percentajeCompleted}%
                        </Text>
                    </View>
                </View>
                <Text className="text-gray-500">{description}</Text>
            </View>
        </View>
    )
}
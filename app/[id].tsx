import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useGetTask } from '../hooks/useGetTask'
import Checkbox from 'expo-checkbox'
import { useUpdateTask } from '../hooks/usePatchTask'
export default function TodoId() {
    const local = useLocalSearchParams()
    const { data, isLoading } = useGetTask(local?.id)
    const [checked, setChecked] = useState(false);
    const { mutate } = useUpdateTask()
    const handleChangeStatus = (id: number, status: boolean) => {
        console.log("start mutation")
        mutate({
            id: id,
            status: !status
        })
    }

    return (
        <View className="flex-1 bg-gray-100">
            <View className="p-4">
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    <View>
                        {data?.tasks?.map(({ description, id, projectId, status, title }) => (
                            <Pressable key={id} onPress={() => handleChangeStatus(id, status)}>
                                <View key={id} className="flex-row bg-white rounded-lg shadow-md p-4 mb-4">
                                    <View className="flex-1">
                                        <Text className="text-lg font-bold mb-2">{title}</Text>
                                        <Text>{description}</Text>
                                    </View>
                                    <View>

                                        <Checkbox style={{ borderRadius: 50 }} value={status} />
                                    </View>
                                </View>
                            </Pressable>
                        ))}
                    </View>
                )}
            </View>

        </View>
    )
}
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'
import EditAction from './EditAction'
import ShareAction from './ShareAction'
import DeleteAction from './DeleteAction'
import { router } from 'expo-router'
import ProjectItem from './ProjectItem'

interface ProjectProps {
    description: string;
    id: number;
    percentajeCompleted: number;
    status: boolean;
    title: string;
    userId: number;
}

const Project = ({ description, id, percentajeCompleted, status, title, userId }: ProjectProps) => {
    const handleOnPress = (id: number) => {
        console.log('press', id)
        router.replace(id.toString())

    }
    return (
        <GestureHandlerRootView
            key={id}
        >
            <Swipeable
                key={id}
                friction={2}
                leftThreshold={20}
                renderRightActions={() => (
                    <View className="bg-slate-300 mt-2  mb-2 shadow-lg overflow-hidden align-middle justify-center">
                        <View className="flex flex-row h-full">
                            <EditAction id={id} />
                            <ShareAction id={id} />
                            <DeleteAction id={id} />
                        </View>
                    </View>
                )}
                renderLeftActions={() => null}
            >
                <Pressable
                    key={id}
                    onPress={() => handleOnPress(id)}
                    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                >
                    <ProjectItem description={description} id={id} percentajeCompleted={percentajeCompleted} title={title} />
                </Pressable>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

export default Project
import {
    View, Text, ScrollView, useColorScheme
} from 'react-native'
import React from 'react'
import { useGetProjects } from '../../hooks/useGetProject';
import { useDeleteProject } from '../../hooks/useDeleteProject';
import Project from '../../components/project/Project';

export default function Home() {
    const { data, isLoading, refetch, isRefetching } = useGetProjects()
    const { mutate: deleteProject } = useDeleteProject()
    const colorScheme = useColorScheme();

    if (isLoading) return <Text>Loading...</Text>
    return (
        <View className="h-full">

            <ScrollView>
                {data?.projects?.map(({ description, id, percentajeCompleted, status, title, userId }) => (
                    <Project key={id}
                        id={id}
                        title={title}
                        description={description}
                        percentajeCompleted={percentajeCompleted}
                        status={status}
                        userId={userId}
                    />
                ))
                }
            </ScrollView >
        </View >

    )
}





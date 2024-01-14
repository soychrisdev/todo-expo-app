import { View, Button, ScrollView } from "react-native"
import { useQuery } from "react-query"
import { TodoItem } from "./TodoItem"
import { Text } from "../Themed"


export const TodoList = () => {
    const { data, isLoading, refetch, isRefetching } = useQuery<ITodo[] | undefined>(['todos'], () => fetchTodos())
    return (
        <View>
            <Button title="Refetch" onPress={() => refetch()} />
            <ScrollView>
                {data?.map(({ completed, id, title, userId }) => (
                    <TodoItem key={id} title={title} userId={userId} completed={completed} />
                ))}
            </ScrollView>

        </View>
    )
}
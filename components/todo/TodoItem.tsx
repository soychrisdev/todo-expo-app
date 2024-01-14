import { View, Text } from "../Themed"

type TodoItemProps = {
    title: string
    userId: number
    completed: boolean
}
export const TodoItem = ({ title, userId, completed }: TodoItemProps) => {
    return (
        <View>
            <Text> {title}</Text>
        </View>
    )
}

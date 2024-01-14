import { useMutation, useQueryClient } from "react-query"
import { API_URL } from "../config"
const deleteTodo = async (value) => {
    console.log("values:", value)
    const req = await fetch(`${API_URL}/api/project/${value}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const res = await req.json()
    return res
}
export const useDeleteProject = () => {
    const queryClient = useQueryClient()
    const { mutate } = useMutation((value) => deleteTodo(value), {
        onSuccess: () => {
            queryClient.invalidateQueries('projects')
            console.log('success')
        }
    })
    return { mutate }
}
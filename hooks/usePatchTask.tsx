import { useMutation, useQuery, useQueryClient } from "react-query"
import { API_URL } from "../config"
export interface ITask {
    tasks: ITaskItems[]
}
export interface ITaskItems {
    description: string
    status: boolean
    id: number
    title: string
    projectId: number
}

const updateTask = async (value: { id: number, status: boolean }) => {
    console.log("value", value)
    const { id, status } = value
    const req = await fetch(`${API_URL}/api/task/${id}`, {
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: status
        }),

    })
    const res = await req.json()
    return res
}


export const useUpdateTask = () => {
    const queryClient = useQueryClient()
    const { data, isLoading, mutate } = useMutation<ITask | undefined>((value) => updateTask(value), {
        onSuccess: () => {
            queryClient.invalidateQueries('task');
            console.log('success')
        },
        onError: () => {
            console.log('error')
        }

    })
    return { data, isLoading, mutate }
}
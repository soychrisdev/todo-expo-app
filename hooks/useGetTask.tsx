import { useQuery } from "react-query"
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

const fetchTodos = async (id: string) => {
    const req = await fetch(`${API_URL}/api/task/${id}`)
    const res = await req.json()
    return res
}


export const useGetTask = (id: string) => {
    const { data, isLoading, refetch, isRefetching } = useQuery<ITask | undefined>(['task'], () => fetchTodos(id))
    return { data, isLoading, refetch, isRefetching }
}
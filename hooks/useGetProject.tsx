import axios from "axios"
import { useQuery } from "react-query"
import { API_URL } from "../config"
export interface IProject {
    projects: IProjectItems[]
}
export interface IProjectItems {
    status: boolean
    description: string
    percentajeCompleted: number
    id: number
    title: string
    userId: number
}

const fetchTodos = async () => {
    const req = await axios(`${API_URL}/api/project`)
    const res = await req.data
    return res
}

export const useGetProjects = () => {
    const { data, isLoading, refetch, isRefetching } = useQuery<IProject | undefined>(['projects'], () => fetchTodos())
    return { data, isLoading, refetch, isRefetching }
}
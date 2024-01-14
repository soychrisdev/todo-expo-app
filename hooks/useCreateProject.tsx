import Toast from "react-native-root-toast";
import { useMutation, useQueryClient } from "react-query";
import { API_URL } from "../config";
const postProject = async (value: any) => {
    console.log("values", value)
    const req = await fetch(`${API_URL}/api/project`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: value.title,
            description: value.description,
            userId: 1,
        }),
    });
    const res = await req.json();
    return res;
};
export const useCreateProject = (value) => {
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(postProject, {
        onSuccess: () => {
            queryClient.invalidateQueries('projects');
            Toast.show('Project created successfully', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });

            console.log('success')
        },
        onError: () => {
            console.log('error')
        }
    })

    return {
        mutateAsync,
        isLoading
    }
}

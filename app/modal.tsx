import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import { useCreateProject } from '../hooks/useCreateProject';
import { useNavigation } from 'expo-router';


export default function ModalScreen() {
  const [form, setForm] = useState<{ title?: string, description?: string }>({
    title: '',
    description: ''
  })

  const { mutateAsync, isLoading } = useCreateProject(form)
  const { navigate } = useNavigation()

  const onPressCreateProjectHandler = async () => {
    const mutate = await mutateAsync(form)
    console.log('mutate:', mutate)
    navigate('index')

  }
  return (
    <View style={styles.container}>
      <Text>Create a project: </Text>
      <Text>

        {JSON.stringify(form)}
      </Text>
      {isLoading && <Text>Loading...</Text>}
      <TextInput onChangeText={text => setForm(prev => { return { ...prev, title: text } })} className="border border-gray-300 rounded-md p-2 w-full" placeholder="Name of project" />
      <TextInput onChangeText={text => setForm(prev => { return { ...prev, description: text } })} className="border border-gray-300 rounded-md p-2 w-full" placeholder='Description' />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <Button onPress={onPressCreateProjectHandler} title='Crear project' />
      {Platform.OS === "web" && <button onClick={onPressCreateProjectHandler}>Crear</button>}

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

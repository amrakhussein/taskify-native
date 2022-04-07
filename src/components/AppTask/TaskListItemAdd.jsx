import { StyleSheet, TouchableOpacity, View } from 'react-native'


export default function TaskListItemAdd({ addTask }) {
  return (
    <TouchableOpacity onPress={addTask}>
      <View styles=''>
        <Button title='+' color='' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

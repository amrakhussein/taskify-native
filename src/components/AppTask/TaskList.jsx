import { ScrollView, StyleSheet, View } from 'react-native'

export default function TaskList() {
  return (
    <View style={styles.taskList}>
      <ScrollView>
        {todos.map((item, idx) => (
          <TaskListItem key={idx} task={item} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  appBarItems: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'lightblue',
  },
})

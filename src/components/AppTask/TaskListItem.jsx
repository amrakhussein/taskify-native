import { StyleSheet, Text, View } from 'react-native'


export default function TaskListItem({task}) {
  console.log('task: ', task);
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.listItem}>
        {/* <Touch */}
        <Text numberOfLines={3}>
          {task.content}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
  },
  listItem: {
    marginVertical: 10,
    backgroundColor: 'cyan',
    paddingHorizontal: 5,
    paddingVertical:4,
    borderRadius:5

  },


})

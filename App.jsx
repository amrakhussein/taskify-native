import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
// import { SafeAreaView } from 'react-native-web'
import TaskListItem from './components/AppTask/TaskListItem'

export default function App() {
  return (
    <View style={styles.container}>
      {/* taskify header */}
      <View style={styles.appBar}>
        <View style={styles.appBarItems}>

        <Text style={styles.appBarBrand}>Taskify</Text>
        {/* <Text>you have 3 tasks to finish</Text> */}
        </View>
      </View>

      <View style={styles.taskList}>
        <TaskListItem />
      </View>

      <StatusBar style='auto' />
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: 40 

  },
  appBarBrand:{

    fontSize: 25,
    fontWeight: 'bold',
  },

  appBar: {
    backgroundColor:'lightblue',
    height: 70,
  },
  taskList: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  appBarItems: {
    flex:1,
    justifyContent:'space-around',
    alignContent:'center',
  }
})

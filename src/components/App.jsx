import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-web'
import TaskListItem from './AppTask/TaskListItem'
// import { SafeAreaView } from 'react-native-web'
// import colors from './styles/colors'
import tasks from '../tasksData'
console.log('tasks: ', tasks);


export default function App() {

  //  Alert.alert("message", 'message', [{text: "yes", onPress: () => }, {text:'no'}])
  // Alert.promt("title", "mss", text => console.log(text))
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* taskify header */}
      <View style={styles.appBar}>
        <View style={styles.appBarItems}>

        <Text style={styles.appBarBrand}>Taskify</Text>
        {/* <Text>you have 3 tasks to finish</Text> */}
        </View>
      </View>

      <View style={styles.taskList}>
        {
          tasks.map((item, idx) => (
            
            <TaskListItem key={idx} task={item} />
          ))
        }
      </View>


<Button title='' color=''></Button>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

  },
  appBarBrand:{

    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    fontStyle:'italic',
  },

  appBar: {
    backgroundColor:'lightblue',
    height: 70,
    // elevation: 50,
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
    backgroundColor:'lightblue'
  }
})

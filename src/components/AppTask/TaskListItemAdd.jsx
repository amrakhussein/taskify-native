import { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../styles/colors'
console.log('colors: ', colors)

export default function TaskListItemAdd({
  task,
  addTask,
  modalVisible,
  setModalVisible,
}) {
  const [count, setCount] = useState(0)
  const onPress = () => setCount((prevCount) => prevCount + 1)
  console.log('redered:::', count)
  return (
    <>
      {/* <KeyboardAvoidingView>
    <TextInput style={styles.input} placeholder={'add a task...'} value={task} onChangeText={addTask} />


    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonView} underlayColor="blue">
      <View  style={styles.buttonContainer}>
        <View onPress={() => console.log('hellof world')} style={styles.button} title='' color=''>
          <Text style={styles.button}>+</Text>
          </View>
      </View>
    </TouchableOpacity>
    </KeyboardAvoidingView> */}

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('action dismissed...')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.taskModalView}>
            <Text style={styles.taskLabel}>Add your task here</Text>
            <TextInput
              style={styles.taskInput}
              placeholder={'add a task...'}
              value=''
              onChangeText={addTask}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  taskInput: {
    width: '100%',
  },
  taskModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskLabel: {},
})

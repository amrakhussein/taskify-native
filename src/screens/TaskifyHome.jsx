import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import TaskListItemAdd from '../components/AppTask/TaskListItemAdd'
import TaskAddIcon from '../components/micros/TaskAddIcon'
import TaskCloseIcon from '../components/micros/TaskCloseIcon'
import colors from '../styles/colors'

export default function TaskifyHome() {
  const [modalVisible, setModalVisible] = useState(false)
  console.log('modalVisible: ', modalVisible)
  return (
    <View style={styles.taskHomeContainer}>
      <View style={styles.appTaskAddIcon}>
        <TaskListItemAdd
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        {modalVisible ? (
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <TaskCloseIcon color={colors.primary} size={120} />
          </Pressable>
        ) : (
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <TaskAddIcon color={colors.primary} size={120} />
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskHomeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  taskHomeButton: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  appTaskAddIcon: {
    alignSelf: 'flex-end',
    padding: 20,
    elevation: 10,
  },
})

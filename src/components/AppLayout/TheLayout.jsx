import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import colors from '../../styles/colors'
import AppTaskBar from './AppTaskBar'

export default function TheLayout({ children, count }) {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <AppTaskBar count={count} />
        {children}
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.gray,
  },
})

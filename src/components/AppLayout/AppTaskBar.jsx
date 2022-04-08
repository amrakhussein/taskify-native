import { StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/colors'

export default function AppTaskBar({ count }) {
  return (
    <>
      {/* taskify header */}
      <View style={styles.appBar}>
        <View style={styles.appBarContainer}>
          <Text style={styles.appBarBrand}>Taskify</Text>
          <Text style={styles.appBarMessage}>
            you have <Text style={styles.appBarMessageFocus}>{count}</Text>{' '}
            tasks to finish..
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appBarContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appBarBrand: {
    color: colors.white,
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 10,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },

  appBar: {
    backgroundColor: colors.primary,

    height: 70,
    elevation: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  appBarMessage: {
    color: colors.white,
    alignSelf: 'flex-end',
    fontSize: 15,
    fontStyle: 'italic',
  },
  appBarMessageFocus: {
    color: colors.secondary,
    fontSize: 20,
  },
})

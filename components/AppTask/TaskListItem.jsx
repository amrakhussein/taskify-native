import { StyleSheet, Text, View } from 'react-native'


export default function TaskListItem() {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.listItem}>
        {/* <Touch */}
        <Text numberOfLines={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          animi omnis quasi saepe voluptas facere, eius maiores veniam deserunt
          sapiente placeat quidem incidunt illo voluptates laudantium fugiat ad.
          Ducimus, maxime.fsfsfsfsf
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
  },
  listItem: {
  },


})

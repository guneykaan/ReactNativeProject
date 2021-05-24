import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {

    const goOrder = () => {
        navigation.push('Order')
    }

    const goProduct = () => {
        navigation.push('Product')
    }

    const goCategory = () => {
        navigation.push('Category')
    }

    return (
        <View style={styles.topView}>
            <View style = {styles.itemView}>
                <Button onPress={() => goCategory()} title='Go to Category!'></Button>
            </View>

            <View style = {styles.itemView}>
                <Button onPress={() => goProduct()} title='Go to Product!'></Button>
            </View>

            <View style = {styles.itemView}>
                <Button onPress={() => goOrder()} title='Go to Order!'></Button>
            </View>



        </View>
    )


}

const styles = StyleSheet.create({
    topView: {
        flex: 5
    },
    itemView:{
        flex: 1,
        justifyContent: ' space-around',
        justifyContent: 'center'
    }
});
import React, { useState } from 'react';
import { View, Button } from 'react-native'
import baseManager from '../BaseService';
import { Input } from 'react-native-elements';

export default function UpdateCategoryScreen({ route, navigation: { goBack } }) {

    const [categoryName, setCategoryName] = useState(route.params.categoryName);
    const [categoryDescription, setCategoryDescription] = useState(route.params.categoryDescription);

    const send = () => {
        baseManager.put(`api/categories/${categoryId}`, { name: categoryName, description: categoryDescription })
            .then((res) => {
                alert('Success!!');
                goBack();
                goBack();
            })
    }

    let { categoryId } = route.params

    return (
        <View>
            <Input
                placeholder={categoryName}
                onChangeText={value => setCategoryName(value)}
            />

            <Input
                placeholder={categoryDescription}
                onChangeText={value => setCategoryDescription(value)}
            />

            <Button onPress={() => send()} title='Send'></Button>
        </View>
    )
}
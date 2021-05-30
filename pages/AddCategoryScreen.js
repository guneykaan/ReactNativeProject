import React, { useState } from 'react';
import { View, Button } from 'react-native'
import baseManager from '../BaseService';
import { Input } from 'react-native-elements';

export default function AddCategoryScreen({ navigation: { goBack } }) {

    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const send = () => {
        baseManager.post('api/categories', { name: categoryName, description: description })
            .then((res) => {
                alert('Success!!');
                goBack();
            })
    }

    return (
        <View>
            <Input
                placeholder='Category name'
                onChangeText={value => setCategoryName(value)}
            />

            <Input
                placeholder='Description'
                onChangeText={value => setDescription(value)}
            />

            <Button onPress={() => send()} title='Send'></Button>
        </View>
    )
}
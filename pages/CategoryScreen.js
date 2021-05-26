import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import baseManager from '../BaseService';
import { ListItem, Icon } from 'react-native-elements';

export default function CategoryScreen() {

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        baseManager.get('api/categories')
            .then((data) => {
                setcategories(data);
            })
    }

    const deleteCategory = (id) => {
        baseManager.delete('api/categories', id)
            .then((data) => {
                fillData();
            })
    }

    const updateCategory = (id) =>{
        console.log("update category cliclked!");
    }

    return (
        <View>
        {
            categories.map((category, index) => {
                return (
                    <ListItem key={index}>
                        <ListItem.Content>
                            <ListItem.Title>{category.name}</ListItem.Title>
                            <ListItem.Subtitle>{category.description}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Icon style={{ justifyContent: 'flex-end' }}
                            name='delete' onPress={() => deleteCategory(category.id)} />
                        <Icon style={{ justifyContent: 'flex-end' }}
                            name='update' onPress={() => updateCategory(category.id)} />
                    </ListItem>
                )
            })
        }
    </View>
    )
}
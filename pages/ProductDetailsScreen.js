import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import baseManager from '../BaseService';

export default function ProductDetailsScreen({ route }) {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        baseManager.get(`api/products/${productId}`)
            .then((data) => {
                setproduct(data);
            })
    }

    let { productId } = route.params

    return (
        <View>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{product.name}</ListItem.Title>
                    <ListItem.Subtitle>{product.quantityPerUnit}</ListItem.Subtitle>
                    <ListItem.Subtitle>{product.unitPrice}</ListItem.Subtitle>
                    <ListItem.Subtitle>{product.discontinued ? "Discontinued" : "Available"}</ListItem.Subtitle>
                    <ListItem.Subtitle>{product.categoryId}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}
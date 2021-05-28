import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import baseManager from '../BaseService';
import { ListItem, Icon } from 'react-native-elements';

export default function ProductScreen({ navigation }) {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        baseManager.get('api/products')
            .then((data) => {
                setproducts(data);
            })
    }

    const deleteProduct = (id) => {
        baseManager.delete('api/products', id)
            .then((data) => {
                fillData();
            })
    }

    const gotoDetailPage = (id) => {
        navigation.navigate('ProductDetails', { productId: id })
    }

    return (
        <View>
            {
                products.map((product, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItem.Content>
                                <ListItem.Title>{product.name}</ListItem.Title>
                                <ListItem.Subtitle>{product.quantityPerUnit}</ListItem.Subtitle>
                                <ListItem.Subtitle>{product.unitPrice}</ListItem.Subtitle>
                            </ListItem.Content>
                            <Icon style={{ justifyContent: 'flex-end' }}
                                name='delete' onPress={() => deleteProduct(product.id)} />
                            <Icon
                                name='rowing' onPress={() => gotoDetailPage(product.id)} />
                        </ListItem>
                    )
                })
            }
        </View>


    )
}

const styles = StyleSheet.create({
    iconStyle: {
        justifyContent: 'flex-end'
    },
});
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import baseManager from '../BaseService';
import { ListItem, Icon } from 'react-native-elements';

export default function OrderScreen() {
    const [orders, setorders] = useState([]);

    useEffect(() => {
        fillData();
    }, []);

    const fillData = () => {
        baseManager.get('api/orders')
            .then((data) => {
                setorders(data);
            })
    }

    const deleteOrder = (id) => {
        baseManager.delete('api/orders', id)
            .then((data) => {
                fillData();
            })
    }

    return (
        <View>
            {
                orders.map((order, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItem.Content>
                                <ListItem.Title>{order.shipName}</ListItem.Title>
                                <ListItem.Subtitle>{order.shipAddress.country}</ListItem.Subtitle>
                                <ListItem.Subtitle>{order.shipAddress.city}</ListItem.Subtitle>
                                <ListItem.Subtitle>{order.orderDate}</ListItem.Subtitle>
                            </ListItem.Content>
                            <Icon style={{justifyContent: 'flex-end'}}
                                name='delete' onPress={() => deleteOrder(order.id)} />
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
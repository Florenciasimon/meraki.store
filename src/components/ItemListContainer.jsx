import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { ItemList } from './ItemList';
import { useParams } from "react-router-dom";

import data from "../data/products.json";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        })

        get.then((data) => {
            if(!id){
                setItems(data);
            } else {
                const filtered = data.filter(item => item.category === id);
                setItems(filtered);
            }                 
        });
    }, [id]);            

    return <Container id='container'>
        <ItemList items={items}/>
    </Container>
};
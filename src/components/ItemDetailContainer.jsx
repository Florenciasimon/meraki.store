import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";

import data from "../data/products.json";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([null]);

    const { id } = useParams();

    useEffect(() => {
        const get = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            const filter = data.find(item => item.id === Number(id));
            setItem(filter);
        })
    }, [id]);

    if(!item) return <div>Cargando...</div>;

    return <Container>
        <img src={item.pictureUrl} style={{ width: '60vh'}}/>
        <h1 style={{ color: 'whitesmoke', fontSize: '24px'}}>{item.title}</h1>
        <h2 style={{ color: 'whitesmoke', fontSize: '20px'}}>{item.description}</h2>
        <h3 style={{ color: 'whitesmoke', fontSize: '20px'}}>{item.price}</h3>
    </Container>
};
import Container from 'react-bootstrap/Container';

export const ItemListContainer = ({greeting}) => (
    <Container id='container'>
        <h1>{greeting}</h1>
    </Container>
);
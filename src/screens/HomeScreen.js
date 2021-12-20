import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

import product from '../products';

function HomeScreen() {
    return (
        <div>
            <h1>Latest Product</h1>
            <Row>
                {product.map(product =>  (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
        );
}

export default HomeScreen

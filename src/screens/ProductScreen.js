import React from 'react' ;
import { Link, useParams } from 'react-router-dom' ;
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap' ;

import Rating from '../components/Rating';
import products from '../products' ;



function ProductScreen() {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);
    return (
      <div>
        <Link to='/' className='btn btn-light my-3' >Go Back</Link>

        <Row>
            <Col sm={12} md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={3}>
                <ListGroup.Item variant="flush">
                    <h4>{product.name}</h4>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f83825'} />
                </ListGroup.Item>

                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>

                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </Col>

            <Col>
                <Card>
                    <ListGroupItem variant="flush">
                        <ListGroup.Item>
                            <Row class>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row class>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className="btn-block" disabled={product.countInStock === 0} type="button"> Add To Cart

                            </Button>
                        </ListGroup.Item>

                    </ListGroupItem>
                </Card>
            </Col>
        </Row>
      </div>
    );
  }
export default ProductScreen

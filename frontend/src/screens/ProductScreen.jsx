import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../components/rating'

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/products/${product.id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
        <Card.Body>
          <a href={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductScreen

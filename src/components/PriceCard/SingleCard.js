import React from 'react';
import { Button, Col } from 'react-bootstrap';

const SingleCard = (props) => {
    const {price, feature, list, list1, list2, list3, list4, list5, list6, list7} = props.price;
    return (
        <Col className="text-center" xs={12} sm={6} md={4}>
            <div className="bt">
                <h1>{price}</h1>
                <p>{feature}</p>
                <ul className="list-unstyled">
                    <li>{list}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                    <li>{list4}</li>
                    <li>{list5}</li>
                    <li>{list6}</li>
                    <li>{list7}</li>
                </ul>
                <Button className="order-btn" variant="primary">Order Now</Button>
            </div>
        </Col>
    );
};

export default SingleCard;
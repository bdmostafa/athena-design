import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleCard from './SingleCard';
import './PriceCard.css'

const priceCard = [
    {
        id:1,
        price: '$199',
        feature: 'For Basic',
        list: 'Homepage',
        list2: 'No Inner Page',
        list3: 'Asset file',
        list4: 'Source file',
        list5: 'Free Stock Photos ',
        list6: '10 Days Free Support',
        list7: '24/7 Support',
    },
    {
        id:2,
        price: '$399',
        feature: 'For Preferred',
        list: 'Homepage',
        list2: '4 Inner Page',
        list3: 'Asset file',
        list4: 'Source file',
        list5: 'Free Stock Photos ',
        list6: '20 Days Free Support',
        list7: '24/7 Support',
    },
    {
        id:3,
        price: '$599',
        feature: 'For Elite',
        list: 'Homepage',
        list2: '8 Inner Page',
        list3: 'Asset file',
        list4: 'Source file',
        list5: 'Free Stock Photos ',
        list6: '30 Days Free Support',
        list7: '24/7 Support',
    }
]

const PriceCard = () => {
    return (
        <section className="price-wrapper">
            <Container>
                <h2 className="text-center pt-5">CHOOSE YOUR DEDICATED TEAM</h2>
                <Row className="price_head">
                    {
                        priceCard.map(price => <SingleCard key={price.id} price={price}></SingleCard>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default PriceCard;
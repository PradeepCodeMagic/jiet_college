'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

const page = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/deals-v2',
            params: {
                country: 'US',
                min_product_star_rating: 'ALL',
                price_range: 'ALL',
                discount_range: 'ALL'
            },
            headers: {
                'x-rapidapi-key': 'd5882756eamsh8db23da389d74eep10062bjsne79dc42e2d31',
                'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.data.deals);
            setProducts(response.data.data.deals);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => { fetchProducts() }, []);
    return (
        <div>
            <div className='grid grid-cols-[repeat(4,1fr)] gap-2'>
                {
                    products.map((product) => (
                        <div className='bg-white'>
                            <div>
                                <Link href={`products/${product.deal_id}`}>
                                    <img className='w-full' src={product.deal_photo}></img>
                                </Link>
                            </div>
                            <div className='bg-white text-[12px]'>
                                <h1 className='text-black'>{product.deal_title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page

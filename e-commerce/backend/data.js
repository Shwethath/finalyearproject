import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Shwetha',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Vinu',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Top',
      slug: 'nike-top',
      category: 'Tops',
      image: '/images/productspic/cloth1.jpg',
      price: 300,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 15,
      description: 'High Quality Top',
    },
    {
      //_id: '2',
      name: 'Nike Fit Top',
      slug: 'nike-fit-top',
      category: 'Tops',
      image: '/images/productspic/cloth2.jpeg',
      price: 350,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 15,
      description: 'High Quality Top',
    },
    {
      //_id: '3',
      name: 'Adidas Top',
      slug: 'adidas-top',
      category: 'Tops',
      image: '/images/productspic/cloth3.jpg',
      price: 250,
      countInStock: 10,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 15,
      description: 'High Quality Top',
    },
    {
      //_id: '4',
      name: 'Adidas fit Top',
      slug: 'adidas-fit-top',
      category: 'Tops',
      image: '/images/productspic/cloth6.jpg',
      price: 400,
      countInStock: 10,
      brand: 'Adidas',
      rating: 5.0,
      numReviews: 15,
      description: 'High Quality Top',
    },
    {
      //_id: '5',
      name: 'Nike slim Top',
      slug: 'nike-slim-top',
      category: 'Tops',
      image: '/images/productspic/cloth4.jpg',
      price: 350,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 15,
      description: 'High Quality Top',
    },
    {
      //_id: '6',
      name: 'Adidas slim Top',
      slug: 'adidas-slim-top',
      category: 'Tops',
      image: '/images/productspic/cloth7.jpg',
      price: 300,
      countInStock: 10,
      brand: 'Adidas',
      rating: 5.0,
      numReviews: 15,
      description: 'High Quality Top',
    },
  ],
};

export default data;

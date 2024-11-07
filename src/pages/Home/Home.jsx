import React from 'react';
import { Link } from 'react-router-dom';
import milangaPNG from '../../images/milanga.jpg';
import milangaOutStockPNG from '../../images/Proximamente.png';
import './Home.css';

const products = [
  { id: 'clasica', name: 'Milanesa Clásica', image: milangaPNG, available: true },
  { id: 'integral', name: 'Milanesa Integral', image: milangaOutStockPNG },
  { id: 'rellena', name: 'Milanesa Rellena', image: milangaOutStockPNG },
  { id: 'vegetariana', name: 'Milanesa Vegetariana', image: milangaOutStockPNG },
  // Agrega más productos aquí si es necesario
];

const Home = () => {
  return (
    <div className="container">
      <h1>Nuestras Milanesas - Gonzalo A.</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
             {/* Si el producto está disponible, mostramos el link; si no, mostramos una card no interactiva */}
             {product.available ? (
              <Link to={`/product/${product.id}`} className="card-link">
                <img src={product.image} alt={product.name} className="image" />
                <h2>{product.name}</h2>
                <div className="link">Ver y Ordenar Pedido</div>
              </Link>
            ) : (
              <div className="card-unavailable">
                <img src={product.image} alt={product.name} className="image" />
                <h2>{product.name}</h2>
                <div className="unavailable-text">Próximamente</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

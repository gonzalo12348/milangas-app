import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import milangaPNG from '../../images/milanga.jpg';

const productDetails = {
  clasica: { 
    name: 'Milanesa Clásica', 
    description: 'Milanesa clásica hecha con amor.', 
    image: milangaPNG,
    macros: { calorias: 200, proteinas: 18, carbohidratos: 15, grasas: 10 },
    ingredients: ["Suprema de Pollo", 'Huevo', 'Ajo', 'Perejil', 'Pan rallado blanco', 'Pizca de sal marina']
  },
  integral: { 
    name: 'Milanesa Integral', 
    description: 'Deliciosa milanesa integral.', 
    image: '/images/integral.jpg',
    macros: { calorias: 180, proteinas: 15, carbohidratos: 20, grasas: 8 },
    ingredients: ['Huevo', 'Ajo', 'Perejil', 'Pan rallado integral', 'Ajo con poca sal']
  },
  // Agrega más productos si es necesario
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Usamos el hook useNavigate para navegar hacia atrás
  const product = productDetails[id];

  const handleOrder = () => {
    const weight = document.getElementById("weight").value;
    const phone = "5492615777945"; // Reemplaza con tu número de WhatsApp
    const message = `¡Hola! Quisiera ordenar ${weight} kg de ${product.name}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  const handleGoBack = () => {
    navigate(-1);  // Esto lleva al usuario a la página anterior
  };

  return (
    <>
          <button onClick={handleGoBack} className="back-button">← Volver</button> {/* Botón para ir hacia atrás */}

    <div className="product-detail">      
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="details-container">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        
        <div className="nutrition">
          <h2>Macros Nutricionales (por cada 100g)</h2>
          <ul className="nutrition-list">
            <li>Calorías: {product.macros.calorias} kcal</li>
            <li>Proteínas: {product.macros.proteinas} g</li>
            <li>Carbohidratos: {product.macros.carbohidratos} g</li>
            <li>Grasas: {product.macros.grasas} g</li>
          </ul>
        </div>

        <div className="ingredients">
          <h2>Ingredientes</h2>
          <ul className="ingredients-list">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="order-section">
          <label htmlFor="weight">Kilogramos a ordenar: </label>
          <input type="number" id="weight" defaultValue="1" min="0.5" step="0.5" className="input" />
          <button onClick={handleOrder} className="button">Ordenar por WhatsApp</button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ProductDetail;

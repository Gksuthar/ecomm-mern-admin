import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/product/${id}`);
        setProduct(res.data.product ?? res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          {Array.isArray(product.images) && product.images.length > 0 && (
            <img src={product.images[0]} alt={product.name} className="w-full h-auto max-w-md object-cover" />
          )}
        </div>
        <div>
          <p className="mb-2"><strong>Category:</strong> {product.catName}</p>
          <p className="mb-2"><strong>Sub Category:</strong> {product.subCat}</p>
          <p className="mb-2"><strong>Third Category:</strong> {product.thirdSubCat}</p>
          <p className="mb-2"><strong>Brand:</strong> {product.brand}</p>
          <p className="mb-2"><strong>Price:</strong> {product.price}</p>
          <p className="mb-2"><strong>Description:</strong> {product.description}</p>
          <div className="mt-4">
            <button onClick={() => navigate(`/products/${id}/edit`)} className="btn-blue px-4 py-2">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

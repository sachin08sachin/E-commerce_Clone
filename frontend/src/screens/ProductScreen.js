import { useParams } from 'react-router-dom';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
     
      <h1>{slug}</h1>
      <p>Your item</p>
    </div>
  );
}
export default ProductScreen;

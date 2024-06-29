function Pizza({ pizza, key }) {
  return (
    <div className='col-lg-4' key={key}>
      <img src={pizza.image_url} alt='' />
      <h2>{pizza.product_name}</h2>
      <p>Brand: {pizza.brands}</p>
    </div>
  );
}

export default Pizza;

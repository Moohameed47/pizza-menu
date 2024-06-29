import { useState, useEffect } from "react";
import Pizza from "../Pizza/Pizza";

function Menu() {
  const [menu, setMenu] = useState({ products: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const response = await fetch("https://world.openfoodfacts.org/category/pizzas.json");
        const data = await response.json();
        setMenu(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchPizzaData();
  }, []);

  if (loading) return <p className='text-body text-center'>Loading...</p>;
  if (error) return <p className='text-danger'>Error loading data: {error.message}</p>;

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Pizza Menu</h1>
        <div className='row justify-content-start'>{menu.products.length > 0 ? menu.products.map((pizza, index) => <Pizza pizza={pizza} key={index} />) : <p>No pizzas available</p>}</div>
      </header>
    </div>
  );
}

export default Menu;

import image from '../../assets/ckbiryani.jpg';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Items</h2>
      
      <img src={image} />
      <p>
        Choose your favorite meal from our broad selection of available biryany items
        and enjoy a delicious lunch or dinner at home.
      </p>
      
    </section>
    
    
  );
};

export default MealsSummary;
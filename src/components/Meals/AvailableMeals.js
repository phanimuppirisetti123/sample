import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicke Biryani',
      description: 'Finest chicken and veggies',
      price: 360,
    },
    {
      id: 'm2',
      name: 'Mutton Biryani',
      description: 'Hyderabad special !',
      price: 600,
    },
    {
      id: 'm3',
      name: 'Mutton Rogan Josh',
      description: 'Delicious, raw, meaty',
      price: 800,
    },
    {
      id: 'm4',
      name: 'Chicken 65',
      description: 'Healthy...and fresh...',
      price: 100,
    },
  ];

const AvailableMeals = () =>{
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
                 key={meal.id}
                 id = {meal.id} 
                 name={meal.name}
                price={meal.price}
          description={meal.description}/>
    
    )
    );

return <section className={classes.meals}>
    <Card>
    <ul>{mealsList}</ul>
    </Card>
</section>
};

export default AvailableMeals;
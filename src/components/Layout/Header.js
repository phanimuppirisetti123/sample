import { Fragment } from 'react';
import classes from './Header.module.css';
import image from '../../assets/biryani.jpg';
import HeaderCartButton from './HeaderCartButton';
import SearchIcon from '../Cart/SearchIcon';

const Header=(props)=>{
    return <Fragment>
           <header className={classes.header}>
           <h1>Swiggy Meals</h1>
           <div className={classes.search}>
            <SearchIcon />
            <p>Search</p>
            </div>
            
            <p className={classes.pointer}>Delivery Time</p>
           <p className={classes.pointer}>Rating</p>
                

           <HeaderCartButton onClick={props.onShowCart}/>
           </header>

           <div className={classes['main-image']}>
           <img src={image} alt="A table full of delicious food" />
           </div>
           </Fragment>
};

export default Header;

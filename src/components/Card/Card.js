import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { getCard, toggleCardFavorite } from '../../Redux/store';

const Card = props => {

  const card = useSelector(state => getCard(state.cards, props.id));
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleCardFavorite(card.id))
  }

  
  return(
   
    <li className={styles.card}>{props.title} 
      <button className={styles.card__button} onClick={toggle}>
        <i className={clsx('fa', 'fa-star-o', styles.btn, card.isFavorite && styles.liked)} />
      </button>
    </li>
  );
}

export default Card;
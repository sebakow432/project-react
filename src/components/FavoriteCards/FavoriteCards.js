import styles from './FavoriteCards.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { favoriteCards } from '../../Redux/cardsRedux';

const FavoriteCards = () => {
    const cards = useSelector( state => favoriteCards(state.cards));
    console.log(cards.length);

    let noFavorite;
    if(cards.length === 0 ){
        noFavorite = ' Brak polubionych elementów :)';
    }

    return (
        <article className={styles.column}>
            <h1 className={styles.noFavorite}>{noFavorite}</h1>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} title={card.title}/>)}
            </ul>
        </article>
    );
}

export default FavoriteCards;
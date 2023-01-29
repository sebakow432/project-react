import Container from "../Container/Container";
import FavoriteCards from "../FavoriteCards/FavoriteCards";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";

const Favorite = () => {
  return (
    <section className={styles.favoriteContainer}>
      <Container>
        <PageTitle> Favorite </PageTitle>
        <FavoriteCards/>
      </Container>   
    </section>
  )
}

export default Favorite;
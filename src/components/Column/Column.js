import styles from './Column.module.scss'

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                {props.title}
                <span className={styles.icon + ' fa fa-' + props.icon}>
                
                </span>
            </h2>
        </article>
    );
};

export default Column;
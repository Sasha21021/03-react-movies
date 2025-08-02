import styles from "./MovieGrid.module.css";

export default function MovieGrid() {
  return (
    <ul className={styles.grid}>
      {/* Набір елементів списку з фільмами */}
      <li>
        <div className={styles.card}>
          <img
            className={styles.image}
            src="https://image.tmdb.org/t/p/w500/poster-path"
            alt="movie title"
            loading="lazy"
          />
          <h2 className={styles.title}>Movie title</h2>
        </div>
      </li>
    </ul>
  );
}

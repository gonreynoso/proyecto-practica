import React from 'react';
import styles from './Card.module.css'; // Importa el archivo CSS como un objeto de estilos

const Card = () => {
  return (
    <div className={styles.card}> {/* Usa la clase desde el objeto de estilos */}
      <div className={styles['card-header']}>
        <h2>Titulo de la Tarjeta</h2>
      </div>
      <div className={styles['card-body']}>
        <p>Contenido de la tarjeta</p>
      </div>
      <div className={styles['card-footer']}>
        <p>Pie de la tarjeta</p>
      </div>
    </div>
  );
};

export default Card;

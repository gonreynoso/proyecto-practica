import React from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS como un objeto de estilos

const Footer = () => {
  return (
    <footer className={styles.footer}> {/* Usa la clase desde el objeto de estilos */}
      <p>Todos los derechos reservados &copy; 2023</p>
    </footer>
  );
};

export default Footer;

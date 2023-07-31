import React from "react";
import styles from "./Header.module.css"; // Importa el archivo CSS como un objeto de estilos

const Header = () => {
return (
 <header className={styles.header}> {/* Usa la clase desde el objeto de estilos ,*/}
   <h1>Header</h1>
   
</header>)
}


export default Header;
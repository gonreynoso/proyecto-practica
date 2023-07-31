import React from "react";
import Card from "../../components/Card/Card";
import styles from './Home.module.css'


function Home() {

 return (
  <>

   <div className={styles.home}>
    <Card />
    <Card />
    <Card />
    <Card />
   </div>

  </>
 )
}

export default Home;
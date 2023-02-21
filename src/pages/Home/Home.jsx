import styles from './Home.module.css'

const Home = () => {
  return ( 
    <>
      <div className={styles.container}>
        <div>
          <h1>October 1, 2023 | Medina, TN</h1>
        </div>
        <div>
          <h2>WEDDING DAY</h2>
          <p>October 1, 2023</p>
          <p>3:30pm</p>
          <p>White Oak Farms</p>
          <p>284 Spring Creek Highway, Medina, TN 38355</p>
        </div>
        <div>
          <h2>3:30pm | Ceremony</h2>
          <h2>4:00pm | Reception</h2>
        </div>

      </div>
    </>
  );
}

export default Home;
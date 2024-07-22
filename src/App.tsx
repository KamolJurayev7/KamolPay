import { Billing, Contract, Footer, Home, Navbar, Statistics } from "./components";
import { styles } from "./utils/style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">

      {/* Navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home section */}
      <div className={`${styles.flexStart} bg-primary`} >
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/*  */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract/>
          <Billing/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;

import Layout from "../routes/Layout";

function HomePage() {
  return (
    <Layout>
      {/* <p>Children de Layout HomePage</p> */}
      <div className="landing-container">
        <div className="banner-container">
          <div className="banner-text-container">
            <h2 className="banner-text banner-text1">EL SABOR DE ITALIA</h2>
            <h2 className="banner-text banner-text2">EN CADA PORCIÓN</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;

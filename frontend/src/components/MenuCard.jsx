function MenuCard() {
  return (
    <>
      <div className="product-card-menu-container">
        <div className="product-card-title-description">
          <div className="product-card-title">Titulo</div>
          <div className="product-card-description">
            Hacer una descripcion que corte en cuanto llegue al...
          </div>
          <div className="product-card-price">$300</div>
        </div>

        <div className="img-container">
          <img
            className="img-menu"
            src="https://res.cloudinary.com/do5fnhctm/image/upload/v1687397530/jamonymorron_1_r1jvxs.png"
            alt="product-photo"
          />
        </div>
      </div>
    </>
  );
}

export default MenuCard;

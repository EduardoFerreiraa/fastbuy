import '../styles/skeleton.css';

function SkeletonProduct() {
  return (
    <section className="skeleton-container">
      <div className="skeleton-content-produto">
        <div className="skeleton-breadcrumb"></div>

        <div className="skeleton-info-product">
          <div className="skeleton-detalhes-product">
            <div className="skeleton-card-product"></div>
            <div className="skeleton-card-product"></div>
            <div className="skeleton-card-product"></div>
            <div className="skeleton-card-product"></div>
            <div className="skeleton-card-product"></div>
          </div>

          <div className="skeleton-image-product"></div>
        </div>
      </div>

      <div className="skeleton-descricao-product">
        <div className="skeleton-tags">
          <div className="skeleton-tag"></div>
          <div className="skeleton-tag small"></div>
        </div>

        <div className="skeleton-title"></div>

        <div className="skeleton-avaliacoes"></div>

        <div className="skeleton-text"></div>
        <div className="skeleton-text medium"></div>
        <div className="skeleton-text small"></div>

        <div className="skeleton-colors">
          <div className="skeleton-color"></div>
          <div className="skeleton-color"></div>
          <div className="skeleton-color"></div>
          <div className="skeleton-color"></div>
          <div className="skeleton-color"></div>
        </div>

        <div className="skeleton-features">
          <div className="skeleton-feature"></div>
          <div className="skeleton-feature"></div>
          <div className="skeleton-feature"></div>
          <div className="skeleton-feature"></div>
        </div>
      </div>

      <div className="skeleton-payment">
        <div className="skeleton-stock"></div>
        <div className="skeleton-price"></div>
        <div className="skeleton-installments"></div>

        <div className="skeleton-payment-card"></div>

        <div className="skeleton-button"></div>
        <div className="skeleton-button"></div>

        <div className="skeleton-frete"></div>
      </div>
    </section>
  );
}

export default SkeletonProduct;

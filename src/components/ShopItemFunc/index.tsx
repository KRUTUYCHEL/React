import * as React from "react";

interface ItemProps {
  brand: string;
  title: string;
  description: string;
  descriptionFull: string;
  price: number;
  currency: string;
}

const ShopItemFunc = ({brand, description, descriptionFull, price, title, currency}:ItemProps) => {
  return (
    <>
      <div className="main-content">
        <h2>Tiger of Sweden</h2>
        <h1>Leonard coat</h1>
        <h3>Minimalistic coat in cotton-blend</h3>
        <div className="description">
          {description}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{currency}{price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </>
  )
}

export default ShopItemFunc;
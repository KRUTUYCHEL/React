import React, { Component } from "react";

interface ItemProps {
  brand: string;
  title: string;
  description: string;
  descriptionFull: string;
  price: number;
  currency: string;
}

class  ShopItemFunc extends Component<ItemProps> {
  public render() {
    const { brand, title, descriptionFull, description, currency, price } = this.props;
    return (
      <>
        <div className="main-content">
          <h2>{brand}</h2>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <div className="description">
            {descriptionFull}
          </div>
          <div className="highlight-window mobile">
            <div className="highlight-overlay" />
          </div>
          <div className="divider"/>
          <div className="purchase-info">
            <div className="price">{currency}{price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </>
    )
  }
}

export default ShopItemFunc;
import React, { useState } from 'react';

import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';
type Goods = {
  id: number;
  name: string;
  color: string;
};
export const App: React.FC = () => {
  const [items, setItems] = useState<Goods[]>([]);

  const handleAllGoods = () => {
    getAll().then(goods => setItems(goods));
  };

  const handleFirst5Goods = () => {
    get5First().then(goods => setItems(goods));
  };

  const handleRedGoods = () => {
    getRedGoods().then(goods => setItems(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={items} />
    </div>
  );
};

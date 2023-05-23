import React, { useState, useCallback } from 'react';
import './App.scss';
import { Oval } from 'react-loader-spinner';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  const loadedGoods = useCallback(async (loadedFunction) => {
    setIsLoaded(false);
    try {
      const initialGoods = await loadedFunction();

      setGoodsList(initialGoods);
      setIsLoaded(true);
    } catch {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <div className="App">
        <h1>Dynamic list of Goods</h1>

        <button
          type="button"
          data-cy="all-button"
          onClick={() => loadedGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadedGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => loadedGoods(getRedGoods)}
        >
          Load red goods
        </button>

        {
          !isLoaded
            ? (
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              <GoodsList goods={goodsList} />
            )
        }
      </div>
    </>
  );
};

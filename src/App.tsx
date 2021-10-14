import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectData } from "./features/dataFetch/dataFetchSlice";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./App.scss";

import { CardList } from "./components/CardList";
import axios from "axios";

function App() {
  // App fetches data on page reload
  useEffect(() => {
    axiosFetchData();
  }, []);

  const data = useSelector(selectData);
  const dispatch = useDispatch();

  // "Normalizing" data by adding a missing isLiked property
  const axiosFetchData = () => {
    axios
      .get("https://finalspaceapi.com/api/v0/character")
      .then((response: any) => {
        let normalizedData = response.data.map((character: any) => {
          character.isLiked = false;
          return character;
        });
        dispatch(fetchData(normalizedData));
      });
  };

  return (
    <Provider store={store}>
      <div className="App">
        {data ? <CardList data={data} /> : "Loading. Please, wait..."}
      </div>
    </Provider>
  );
}

export default App;

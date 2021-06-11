import { useState, useEffect } from "react";

function usePersistedState(key, initialState) {
  const [state,setState] = useState(initialState);
  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    if ( storageValue) {
      setState(JSON.parse(storageValue));
    }
  }, [setState]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state]);


  return [state,setState]
}

export default usePersistedState;
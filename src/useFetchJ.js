import axios from 'axios';
import { useEffect, useReducer } from 'react';

const URL = 'https://www.themuse.com/api/public/jobs';

const ACTIONS = {
  MAKE_REQ: 'make-req',
  GET_DATA: 'get-data',
  ERROR: 'error',
  HAS_NXT_PAGE: 'hasNxtPage',
};
const initState = {
  jobs: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQ:
      return { jobs: [], loading: true };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    case ACTIONS.HAS_NXT_PAGE:
      return {
        ...state,
        isItNxt: true,
      };

    default:
      return state;
  }
};
function useFetchJ(data, page) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQ });

    axios
      .get(URL, {
        cancelToken: cancelToken.token,
        params: { page: page, ...data },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { jobs: res.data.results },
        });
        // console.log(res);
        if (res.data.page < res.data.page_count) {
          dispatch({
            type: ACTIONS.HAS_NXT_PAGE,
          });
        }
      })
      .catch((e) => {
        if (cancelToken.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
    return () => {
      cancelToken.cancel();
    };
  }, [data, page]);
  return state;
}

export default useFetchJ;

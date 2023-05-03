export const SET_TECHNOLOGY = '@@technologies/SET_TECHNOLOGY';
export const SET_LOADING = '@@technologies/SET_LOADING';
export const SET_ERROR = '@@technologies/SET_LOADING';

const setTechnology = (technology) => ({
  type: SET_TECHNOLOGY,
  payload: technology,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getTech =
  (id) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.searchByClick(id))
      .then(({ data }) =>
        dispatch(
          setTechnology({
            name: data?.full_name,
            description: data?.description,
            stars: data?.stargazers_count,
            avatar: data?.organization,
          }),
        ),
      )
      .catch((error) => dispatch(setError(error)));
  };

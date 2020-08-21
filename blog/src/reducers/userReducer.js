export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      state[action.payload.id] = action.payload;
      return [...state];
    default:
      return state;
  }
}

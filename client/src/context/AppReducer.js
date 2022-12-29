export default function appReducer(state, action) {
  console.log('AppReducer', state, action);
  switch (action.type) {
    case 'EDIT_TITLE':
      return editTitle(state, action);
    // return [...state, action.payload];
    case 'EDIT_ICON':
      return editIcon(state, action);
    default:
      break;
  }
}

function editTitle(state, action) {
  return {
    ...state,
    title: action.payload,
  };
}

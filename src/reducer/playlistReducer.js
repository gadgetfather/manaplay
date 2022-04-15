function updateArr(playlistArr, response) {
  Object.assign(
    playlistArr.find((item) => item._id === response.data.playlist._id),
    response.data.playlist
  );
  return playlistArr;
}

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYLISTS":
      return { ...state, playlistsArr: action.payload };
    case "SHOW_MODAL":
      return { ...state, showModal: true };
    case "HIDE_MODAL":
      return { ...state, showModal: false };
    case "UPDATE_PLAYLIST":
      return {
        ...state,
        playlistsArr: updateArr(state.playlistsArr, action.payload),
      };
    case "SET_SINGLE_PLAYLIST":
      return { ...state, singlePlaylist: action.payload };
    case "RESET":
      return {
        playlistsArr: [],
        singlePlaylist: {},
        showModal: false,
      };
    default:
      break;
  }
};

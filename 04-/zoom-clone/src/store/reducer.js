import Actions from "./actions";

const initState = {
  identity: "",
  isRoomHost: false,
  connectOnlyWithAudio: false,
  roomId: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IDENTITY: // if this action gets dispatched here
      return {
        ...state,
        identity: action.identity, // get previous 'state', add 'identity'
      };

    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost, //! 'action' instead of 'actions' ?!?
      };

    case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio,
      };

    case Actions.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    default:
      return state;
  }
};

export default reducer;

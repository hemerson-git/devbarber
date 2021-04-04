export const initialState = {
  avatar: '',
  favorites: [],
  appointments: []
};

interface PayloadParams {
  avatar: string;
}

interface ActionParams {
  type: string
  payload: PayloadParams
}

export const UserReducer = (state:object, action: ActionParams) => {
  switch(action.type) {
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };
    default:
      return state;
  }
}

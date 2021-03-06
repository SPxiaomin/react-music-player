/* global $ */
import {
  TOGGLE_PLAY,
  PLAY_ONE,
  PLAY_PREV,
  PLAY_NEXT,
} from '../utils/actionTypes';

const initState = {
  musicList: [
    {
      name: 'Everything in the World',
      file: 'http://7xkinp.com1.z0.glb.clouddn.com/%E6%9B%B2%E5%A9%89%E5%A9%B7%20-%20Everything%20In%20The%20World.mp3',
    },
    {
      name: 'Mockingbird',
      file: 'http://7xkinp.com1.z0.glb.clouddn.com/Mockingbird.mp3',
    },
  ],
  currentMusicId: 0,
  playState: false,
  playMusic(music) {
    $('#player')
      .jPlayer('setMedia', {
        mp3: music.file
      })
      .jPlayer('play');
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        playState: !state.playState,
      };
    case PLAY_ONE:
      return {
        ...state,
        currentMusicId: action.id,
        playState: true,
      };
    case PLAY_PREV:
      let len = state.musicList.length;

      return {
        ...state,
        currentMusicId: (--state.currentMusicId + len) % len,
        playState: true,
      };
    case PLAY_NEXT:
      return {
        ...state,
        currentMusicId: (++state.currentMusicId) % state.musicList.length,
        playState: true,
      };
    default:
      return state;
  }
};

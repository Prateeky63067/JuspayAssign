import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [{ id: "sprite0", angle: 0 }],
  active: "sprite0",
  thisSprite: false,
};

const spriteSlice = createSlice({
  name: "sprite",
  initialState,
  reducers: {
    setActiveCharacter: (state, action) => {
      state.active = action.payload;
    },

    updateAngle: (state, action) => {
      state.characters.find((obj) => obj.id === state.active).angle =
        action.payload;
    },
  },
});

export const {
  addCharacter,
  setActiveCharacter,
  toggleThisSprite,
  updateAngle,
} = spriteSlice.actions;
export default spriteSlice.reducer;

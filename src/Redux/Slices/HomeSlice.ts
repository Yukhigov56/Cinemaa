import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Moana from "../../shared/assets/HomeImage/Moana 2.jpeg";
import Wicked from "../../shared/assets/HomeImage/wicked.jpg";
import RedOne from '../../shared/assets/HomeImage/RedOne.jpg'
import Heretic from "../../shared/assets/HomeImage/Heretic.jpg";

export interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CarouselState {
  items: Item[];
  activeSlide: number;
}

const initialState: CarouselState = {
  items: [
    {
      id: 1,
      title: "Moana",
      description:
        "An adventurous story of Moana's journey to save her people.",
      image: Moana,
    },
    {
      id: 2,
      title: "Wicked",
      description: "The untold story of the witches of Oz.",
      image: Wicked,
    },
    {
      id: 3,
      title: "Gladiator 2",
      description:
        "A betrayed gladiator seeks revenge against the corrupt emperor.",
      image: RedOne,
    },
    {
      id: 4,
      title: "Heretic",
      description: "A tale of faith and power in the medieval world.",
      image: Heretic,
    },
  ],
  activeSlide: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setActiveSlide: (state, action: PayloadAction<number>) => {
      state.activeSlide = action.payload;
    },
  },
});

export const { setActiveSlide } = carouselSlice.actions;
export const carouselReducer = carouselSlice.reducer;

import { createStore } from "react-hookstore"

export const favStore = createStore(
    "fav",
    {
        episodes: [],
    },
    (state, action) => {
        switch (action.type) {
            case "add":
                if (state.episodes.includes(action.payload)) {
                    return state;
                }

                return {
                    ...state,
                    episodes: [...state.episodes, action.payload],
                };

            case "remove":
                return {
                    ...state,
                    episodes: [...state.episodes.filter((id) => id !== action.payload)],
                };
            default:
                return state;
        }

    }
);

import { create } from 'zustand'

// create store
export const useCounterStore = create((set) => ({
  // state
  newCounter: 0,
  newCounter1: 100,

  // user state
  user: { name: "mrudhula", email: "mrudhuladubbaka@gmail.com", age: 19 },

  // function to change email
  changeEmail: () =>
    set((state) => ({
      user: { ...state.user, email: "test@email.com" }
    })),

  // function to change name and age
  changeNameandAge: () =>
    set((state) => ({
      user: { ...state.user, name: "mrudhula reddy", age: 20 }
    })),

  // functions to modify the counters
  incrementCounter: () =>
    set((state) => ({ newCounter: state.newCounter + 1 })),

  incrementCounter1: () =>
    set((state) => ({ newCounter1: state.newCounter1 + 1 })),

  decrementCounter: () =>
    set((state) => ({ newCounter: state.newCounter - 1 })),

  // reset counter
  reset: () => set({ newCounter: 0 }),

  // example: set newCounter to 500
  setCounterTo500: () => set({ newCounter: 500 }),

  // example: decrement newCounter1 by 20
  decrementCounter1By20: () =>
    set((state) => ({ newCounter1: state.newCounter1 - 20 }))
}))
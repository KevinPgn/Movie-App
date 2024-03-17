import {create} from 'zustand';

interface MenuBurgerState {
  menuBurger: boolean;
  setMenuBurger: (burger: boolean) => void;
}

export const useMenuBurgerStore = create<MenuBurgerState>((set) => ({
  menuBurger: false,
  setMenuBurger: (burger: boolean) => set(() => ({menuBurger: burger})),
}));
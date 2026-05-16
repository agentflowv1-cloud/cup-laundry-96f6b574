import { createStore } from 'zustand';

interface Order {
  id: number;
  status: string;
}

interface OrderStore {
  order: Order;
  setOrder: (order: Order) => void;
}

const useOrderStore = createStore<OrderStore>((set) => ({
  order: { id: 1, status: '' },
  setOrder: (order: Order) => set({ order }),
}));

export { useOrderStore };
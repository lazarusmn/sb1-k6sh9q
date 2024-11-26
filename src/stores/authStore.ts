import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { name: string; email: string; plan: string };
  login: (email: string, password: string) => void;
  logout: () => void;
  setUser: (user: { name: string; email: string; plan: string }) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email: string, password: string) => {
    // In a real app, you would make an API call here
    set({ isAuthenticated: true });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
  setUser: (user) => set({ user }),
}));
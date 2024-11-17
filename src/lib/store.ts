import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    username: string;
    email: string;
    name: string;
  } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {
    if (username === 'test' && password === 'test') {
      set({
        isAuthenticated: true,
        user: {
          username: 'test',
          email: 'test@example.com',
          name: 'Test User'
        }
      });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  }
}));
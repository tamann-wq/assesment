export const url = 'https://dummyjson.com';


export const login = async (username, password) => {
  try {
    const response = await fetch(`${url}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};


export const register = async (userData) => {
  try {
    const response = await fetch(`${url}/users/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};


export const storeAuthData = (data) => {
  localStorage.setItem('authData', JSON.stringify(data));
};

export const getAuthData = () => {
  const data = localStorage.getItem('authData');
  return data ? JSON.parse(data) : null;
};

export const removeAuthData = () => {
  localStorage.removeItem('authData');
};

export const isAuthenticated = () => {
  return !!getAuthData()?.token;
};


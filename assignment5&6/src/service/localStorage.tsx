export type User = {
  id: number;
  userName: string;
  mobileNumber: string;
  emailId: string;
  address: string;
  DOB: string;
  gender: 'Male' | 'Female' | 'Prefer Not To Say';
  password: string;
  confirmPassword: string;
};

export const updateUserToStorage = (p: User[]) => {
  localStorage.setItem('UserList', JSON.stringify(p));
};

export const getUserFromStorage = (): User[] => {
  let user = localStorage.getItem('UserList');
  return user ? JSON.parse(user) : [];
};

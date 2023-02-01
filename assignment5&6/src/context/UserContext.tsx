import {
  ChangeEvent,
  createContext,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getUserFromStorage,
  User,
  updateUserToStorage,
} from '../service/localStorage';

let initUser: User = {
  id: Date.now(),
  userName: '',
  mobileNumber: '',
  emailId: '',
  address: '',
  DOB: '',
  gender: 'Prefer Not To Say',
  password: '',
  confirmPassword: '',
};

type UserContextProps = {
  children: JSX.Element;
};

type uContext = {
  userList: User[];
  newUser: User;
  changeInput?(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void;
  saveUser(event: FormEvent): void;
  updateUser(event: FormEvent): void;
  removeUser(index: number): void;
  setEditData(id: number): void;
};

const UserContext = createContext<uContext>({
  userList: [],
  newUser: { ...initUser },
  saveUser: () => {},
  updateUser: () => {},
  removeUser: () => {},
  setEditData: () => {},
});

export const UserContextProvider = ({ children }: UserContextProps) => {
  let [newUser, saveNewUser] = useState<User>({ ...initUser });
  let [userList, setUserList] = useState<User[]>(getUserFromStorage());

  useEffect(() => {
    updateUserToStorage(userList);
  }, [userList]);

  let changeInput = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    let { name, value } = event.target;
    saveNewUser({ ...newUser, [name]: value });
  };
  let saveUser = (event: FormEvent) => {
    event.preventDefault();
    newUser.id = Date.now();
    setUserList([...userList, { ...newUser }]);
    saveNewUser({ ...initUser });
    alert('User Added Successfully');
  };

  let removeUser = (index: number) => {
    let wantToDel = window.confirm('Are your sure to remove ?');
    if (wantToDel) {
      let _userList = [...userList];
      _userList.splice(index, 1);
      setUserList([..._userList]);
    }
  };

  let updateUser = (event: FormEvent) => {
    event.preventDefault();
    const index = userList.findIndex((user) => user.id === newUser.id);
    userList[index] = { ...newUser };
    setUserList([...userList]);
    saveNewUser({ ...userList[index] });
    alert('User Updated Successfully');
  };

  let setEditData = (id: number): void => {
    let result = userList.find((user) => id === user.id);
    if (result === undefined) {
      //   navigate("/");
      window.location.replace('/');
    } else {
      saveNewUser({ ...result });
    }
  };
  let values: uContext = {
    userList,
    changeInput,
    saveUser,
    newUser,
    removeUser,
    updateUser,
    setEditData,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};

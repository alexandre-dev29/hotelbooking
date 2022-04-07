export const loginUser = (data: any) => {
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('currentUser', data.user.firstName);
};
export const logoutUser = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('currentUser');
};

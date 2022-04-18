export const loginUser = (data: any) => {
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('currentUser', JSON.stringify(data.user));
};
export const logoutUser = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('currentUser');
};

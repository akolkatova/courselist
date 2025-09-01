export const viewCourse = (id: string) => {
  console.log('view', id);
};

export const purchaseCourse = (id: string) => {
  console.log('buy', id);
};

export const isValidEmail = (email: string): boolean => {
  const condition = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i;
  return condition.test(email.trim());
};
export const isValidPassword = (pwd: string): boolean => {
  const condition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;
  return condition.test(pwd);
};

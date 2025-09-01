export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ICourse {
  courseId: string;
  title: string;
  description: string;
  videoUrl: string;
  price: string;
}

export interface AppState {
  courses: ICourse[];
  purchased: ICourse[];
  current: string | null;
  user: IUser | null;
}

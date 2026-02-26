type UserID = { id: string };

export type User = {
  id: string;
  nickname: string;
  image: string;
  Followers: UserID[];
  _count: {
    Followers: number;
    Followings: number;
  };
};

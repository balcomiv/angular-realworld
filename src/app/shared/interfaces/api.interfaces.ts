import { UserService } from '../services';

export interface ProfileDto {
  username: string;
  bio: string;
  image: string;
  following: boolean;
  loading: boolean;
}

export interface ArticleDto {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: ProfileDto;
}

export interface UserDto {
  email: string;
  token: string;
  username: string;
  bio: string | null;
  image: string | null;
}

export interface UserResponseDto {
  user: UserDto;
}

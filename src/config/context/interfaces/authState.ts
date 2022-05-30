import * as AUTH from '../constants/index';
import { User } from '../../../infrastructure/modules/Login/domain/models/User';

export interface AuthState {
  status: string;
  token: string;
  errorMessage: string;
  user: User;
}

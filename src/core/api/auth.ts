import { fakeSleep } from '../../common/helpers/fakes';
import axios, { AxiosResponse } from 'axios';
import * as model from '../../core/models/auth';

export async function auth(email: string, password: string): Promise<model.SuccessResponse> {
  await fakeSleep ();
  try {
    const resp: AxiosResponse<model.SuccessResponse> = await axios ({
      url: '/api/auth/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    return resp.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : 'Something went wrong!';
    throw new Error (errorMessage);
  }
}

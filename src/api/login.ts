import { Request, Response } from 'express';
import * as JD from 'decoders';
import { Api } from 'contract/response';
import { LoginParam, LoginResponse, loginError } from 'contract/api';

type ErrorKeys = keyof typeof loginError;

export default function handler(req: Request, res: Response<Api<LoginResponse, ErrorKeys>>) {
  const paramResult = decoder.decode(req.params);
  if (paramResult.ok == false) {
    // TODO: error code and error message
    // TODO: extract out this 
    res.json({ kind: 'Error', code: 'INVALID_PARAM', message: loginError.INVALID_PARAM });
    return;
  }
  const { email } = paramResult.value;

  // TODO: extract out this 
  res.json({ kind: 'Ok', data: { id: 1, name: 'Tester', email } });
}

const decoder: JD.Decoder<LoginParam> = JD.object({
  email: JD.string,
  password: JD.string,
});

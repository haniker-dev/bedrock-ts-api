import * as JD from 'decoders';

export type User = {
  id: number;
  name: string;
  email: string;
};

export const userDecoder: JD.Decoder<User> = JD.object({
  id: JD.number,
  name: JD.string,
  email: JD.string,
});

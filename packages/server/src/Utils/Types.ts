import { Profile } from 'passport-discord';

export type Done = (err: Error, user: unknown) => void;

export type User = Profile;

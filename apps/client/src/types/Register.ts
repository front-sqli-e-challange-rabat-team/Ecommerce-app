export enum Gender {
  male,
  female,
}

export interface Register {
  step: number;
  data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    gender?: Gender;
    emailVerified?: boolean;
  };
  done: boolean;
}

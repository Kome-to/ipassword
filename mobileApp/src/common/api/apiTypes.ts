export interface UserRegisterParams {
  email: string;
  masterPasswordHash: string;
  protectedSymmetricKey: string;
  protectedRsaPrivateKey: string;
  publicRsaKey: string;
}

export interface CreatePasswordParams {
  displayName: string;
  username: string;
  password: string;
  url: string;
  serviceName: string;
}

export interface CreateNoteParams {
  display: string;
  content: string;
}

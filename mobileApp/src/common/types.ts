export interface NavigationProps {
  navigate: any;
  reset: any;
  goBack: any;
  setParams: any;
  dispatch: any;
  setOptions: any;
  isFocused: any;
  addListener: any;
  emit: any;
}

export interface RouteNavigationProps {
  key: string;
  name: string;
  params: any;
}

export interface UserDTO {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  masterPasswordHash: string;
  protectedSymmetricKey: string;
  protectedRsaPrivateKey: string;
  publicRsaKey: string;
  premiumStatus: string;
  createdAt?: Date;
  updatedAt?: Date;
}

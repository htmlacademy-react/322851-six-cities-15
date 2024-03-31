import { AuthorizationStatus, NameSpace } from '../../consts';
import { State } from '../../types/state';


const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.USER].authorizationStatus;
const checkAuthentication = (state: State): boolean => state[NameSpace.USER].authorizationStatus === AuthorizationStatus.Auth;

export { getAuthorizationStatus, checkAuthentication };

import { IMenu } from '../common/interfaces';
import { METHODS } from './constants';

export interface IFetchParams {
  method: METHODS;
  id?: string;
  body?: IMenu;
}

export interface IFetchResponse {
  record?: IMenu;
  error?: string;
  message?: string;
}

export interface IFetchCreateResponse extends IFetchResponse {
  metadata: {
    id: string;
    createdAt: Date;
    private: boolean;
  };
}

export interface IFetchReadResponse extends IFetchResponse {
  metadata: {
    id: string;
    private: boolean;
  };
}

export interface IFetchUpdateResponse extends IFetchResponse {
  metadata: {
    parentId: string;
    private: boolean;
  };
}

export interface IFetchDeleteResponse extends IFetchResponse {
  metadata: {
    id: string;
    versionsDeleted: number;
  };
}

export type IFetchReturn =
  | IFetchCreateResponse
  | IFetchReadResponse
  | IFetchUpdateResponse
  | IFetchDeleteResponse;

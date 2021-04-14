import { IMenu } from '../screens/Menu/types';
import {
  IFetchCreateResponse,
  IFetchParams,
  IFetchReturn,
  IFetchReadResponse,
} from './type';
import { METHODS, APIURL } from './constants';

async function fetchAPI({
  method,
  body,
  id = '',
}: IFetchParams): Promise<IFetchReturn | undefined> {
  const headers = {
    'X-Master-Key':
      '$2b$10$wAAIDpTXEyMvkh9/8BUMueRegBYWO4tdopT38hxoX9q00zhNEsAb6' /* env */,
    'Content-Type': 'application/json',
    'X-Collection-Id': '6074e126ee971419c4d7cb59' /* env */,
    'X-Bin-Name': Date.now().toString(),
  };
  const URL = `${APIURL}/${id}`;
  const response = await fetch(URL, {
    headers,
    method,
    body: JSON.stringify(body),
  });
  const Data = await response.json();
  if (Data) {
    return Data;
  }
  return undefined;
}

export const getMenu = (id: string): Promise<IFetchReadResponse> =>
  fetchAPI({ method: METHODS.GET, id }).then(
    value => value as IFetchReadResponse,
  );

export const createMenu = (Menu: IMenu): Promise<IFetchCreateResponse> =>
  fetchAPI({ method: METHODS.POST, body: Menu }).then(
    value => value as IFetchCreateResponse,
  );

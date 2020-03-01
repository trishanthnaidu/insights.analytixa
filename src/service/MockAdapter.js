import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
      ENDPOINT_MAPPINGS,
      ENDPOINT_MOCK_DATA_MAPPINGS
} from './Mappings';

export const initiateMockAdapter = () => {
      const adapter = new MockAdapter(Axios);

      // get Network and Genre Data
      adapter
            .onGet(ENDPOINT_MAPPINGS.getData)
            .reply(
                  200,
                  ENDPOINT_MOCK_DATA_MAPPINGS.getData
            )

}
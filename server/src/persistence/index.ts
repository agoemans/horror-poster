require('dotenv').config();

import { MySqlClient  } from './my-sql';
import { InMemory } from './in-memory';

export const createRepo = () => {
    // return new MySqlClient();

    return new InMemory();
};

export const repository = createRepo();
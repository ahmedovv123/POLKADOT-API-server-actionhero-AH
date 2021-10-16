import { URL } from 'url';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config()

export const DEFAULT = {
    sequelize: (config) => {
        let dialect = 'postgres';
        let host = process.env.DB_HOST || 'node1.blackseachain.com';
        let port = process.env.DB_PORT || '8080';
        let database = 'polkadot_explorer';
        let username = process.env.DB_USER || 'postgres';
        let password = process.env.DB_PASS || 'root';

        if (dialect === "postgresql") dialect = "postgres";

        return {
            autoMigrate: false,
            logging: false,
            dialect: dialect,
            port: parseInt(port),
            database: database,
            host: host,
            username: username,
            password: password,
        };
    }

    
}


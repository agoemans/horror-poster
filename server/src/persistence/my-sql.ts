import { MovieModel } from '../models';
import {Repository} from "./repository";

const mysql = require('mysql');

export class MySqlClient implements Repository {
    connector = mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.DBUSER,
        password : process.env.DBPASSWORD
    });

    constructor() {
        this.connector.connect((err: any) => {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    query = ( sql: string, args?: any ): Promise<unknown> => {
        return new Promise( ( resolve: any, reject: any ) => {
            this.connector.query( sql, args, ( err: any, rows: any ) => {
                if ( err ) {
                    reject( err );
                }
                resolve( rows );
            } );
        } );
    };

    getMovies = async () => {
       // todo implement
        const query = null;

        try {
            const moviesResult: any = await this.query(query);

            return [];

        } catch(err: any) {
            throw new Error('Could not get all movie Items: ' + err );
        }
    };

    getMovie = async () => {
        // todo implement
        const query = null;

        try {
            const movieResult: any = await this.query(query);

            return {
                title: '',
                description: '',
                directorCredit: '',
                extraDescription: [],
                actors: [],
                directedBy: '',
                producedBy: ''
            };

        } catch(err: any) {
            throw new Error('Could not get all movie Items: ' + err );
        }
    };

}
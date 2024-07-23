export interface Connection {
    
    user_id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    alternate_string: string | null
 
}

export interface user_connections{
    connections_key_id: number,
    user_id: number,
    friends:[
        user_id: number,
        // request_date: string,
        connection_date: string,
        deleted_date: string,
        close_friend: boolean,
    ],
    following:[
        user_id: number,
        connection_date: string,
        deleted_date: string,
    ]
}
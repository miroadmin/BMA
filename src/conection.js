export async function ConnectionMaria() {
    const mariadb = require ('mariadb');
    const pool=mariadb.createPool({   
    user:'root',
    password:'mt507cn',
    host:'localhost',
    port:3306,
    database:'bma',
    connectionLimit:5,
    connectTimeout:1500
});
    
    let conn;
    conn= pool.getConnection()
        .then(conn => {  
        conn.query("SELECT 1 as val")
            .then((rows) => {
            console.log("connected ! connection id is " + rows);
            return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
            })
            .then((res) => {
            console.log("vysledok !  " + res);
            conn.end();
            })
            .catch(err => {
            console.log("error: " + err);
            conn.end();
            })
            
        }).catch(err => {
            console.log("not connected due to error: " + err);
        });
}


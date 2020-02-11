import sqlite from 'sqlite';

const NewsDatabase = async()=>{
   const db = await sqlite.open('./CreamyCeartiondb.sqlite');
    
    const getNews = async orderBy => {
        let stmt = "select * from News";
     
        try {
          const rows = await db.all(stmt);
          if (rows.length == 0) {
            throw new Error("News are empty!");
          }
          return rows;
        } catch (err) {
          throw new Error("Could not retrieve list of News ");
        }
      };
    
      const getNewsByID = async id => {
        try {
          const rows = await db.all(
            `select * from News where Id = ${id}`
          );
          if (rows.length == 0) {
            throw new Error(`News with id ${id} is not found`);
          }
          return rows;
        } catch (err) {
          throw new Error("Could not retrieve News");
        }
      };
     
      const createNews = async props => {
        const {description,date} = props;
        console.log(description,date)
        if (!props  || !description||!date) {
          throw new Error(`You must provide a  description and date`);
        }
        try {
          const result = await db.run(
              `Insert INTO News (description,date) VALUES ('${description}',${date})`
          );
          return result.stmt.lastID;
        } catch (err) {
          throw new Error("This combination doesnt work");
        }
      };
    
      const deleteNews = async id => {
        try {
          const result = await db.run(
            `DELETE from News WHERE id = ${id}`
          );
          if (result.stmt.changes == 0) {
            throw new Error(`Product with id ${id} doesnt exist`);
          }
          return true;
        } catch (err) {
          throw new Error(`Could not delete product with id ${id}` + err);
        }
      };
    
      const updateNews = async (id, props) => {
        const { name,description,date } = props;
        if (!props && !(props.description && props.date)) {
          throw new Error(`You must provide a name or an description`);
        }
    
        let stmt = "";
        if ( description && date) {
          stmt = `UPDATE News set description= '${description}' , date =${date} where id = ${id}`;
          console.log(stmt);
        } else if (description && !date) {
          stmt =`UPDATE News set description= '${description}'  where id = ${id}`;
        } else {
          stmt = `UPDATE News set date =${date} where id = ${id}`;
        }
        try {
          const result = await db.run(stmt);
          console.log(result);
          if (result.stmt.changes == 0) {
            throw new Error(`Product with id ${id} doesnt exist`);
          }
          return true;
        } catch (err) {
          throw new Error(`Could not update Products with id ${id}` + err);
        }
      };
    
      const controller = {
        getNews,
        getNewsByID,
        createNews,
        deleteNews,
        updateNews
        
      };
    
      return controller;
    };
    
export default  NewsDatabase ;

    

import sqlite from 'sqlite';

const Eventsdatabase = async()=>{
   const db = await sqlite.open('./CreamyCeartiondb.sqlite');
    
    const getEvents = async orderBy => {
        let stmt = "select * from Events";
     
        try {
          const rows = await db.all(stmt);
          if (rows.length == 0) {
            throw new Error("Events are empty!");
          }
          return rows;
        } catch (err) {
          throw new Error("Could not retrieve list of Events ");
        }
      };
    
      const getEventsByID = async id => {
        try {
          const rows = await db.all(
            `select * from Events where Id = ${id}`
          );
          if (rows.length == 0) {
            throw new Error(`Events with id ${id} is not found`);
          }
          return rows;
        } catch (err) {
          throw new Error("Could not retrieve Events");
        }
      };
     
      const createEvents  = async props => {
        const { id, description, location, date} = props;
        if (!id || !description || !location || !date) {
          throw new Error(`You must provide a  id `);
        }
        try {
          const result = await db.run(
              `insert INTO Events (description, location, date) VALUES ('${description}', '${location}', ${date})`
          );
          return result.stmt.lastID;
        } catch (err) {
          throw new Error("This combination doesnt work");
        }
      };
    
      const deleteEvents= async id => {
        try {
          const result = await db.run(
            `DELETE from Events WHERE id = ${id}`
          );
          if (result.stmt.changes == 0) {
            throw new Error(`Events with id ${id} doesnt exist`);
          }
          return true;
        } catch (err) {
          throw new Error(`Could not delete Events with id ${id}` + err);
        }
      };
    
      const updateEvents = async (id, props) => {
        const { description,location,date } = props;
        if (!props && !(props.id && props.date)) {
          throw new Error(`You must provide a id`);
        }
    
     
       let stmt = `UPDATE Events set description= '${description}' ,location='${location}', date =${date} where id = ${id}`;
        console.log(stmt);
       
        try {
          const result = await db.run(stmt);
          console.log(result);
          if (result.stmt.changes == 0) {
            throw new Error(`Events with id ${id} doesnt exist`);
          }
          return true;
        } catch (err) {
          throw new Error(`Could not update Events with id ${id}` + err);
        }
      };
    
      const controller = {
        getEvents,
        getEventsByID,
        createEvents ,
        deleteEvents,
        updateEvents 
      };
    
      return controller;
    };
    
export default  Eventsdatabase ;
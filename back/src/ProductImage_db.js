import sqlite from 'sqlite';

const  getProductImageDatabase= async()=>{
   const db = await sqlite.open('./CreamyCeartiondb.sqlite');

    const getProductImages = async orderBy => {
        let stmt = "SELECT  * FROM ProductImages";
     
        try { 
          const rows = await db.all(stmt);
          if (rows.length == 0) {
            throw new Error("ProductImages are empty!");
          }
          return rows;
        } catch (err) {
          throw new Error("Could not retrieve list of productImages");
        }
      };
    
      const getProductImagesByID = async id => {
        try {
          const rows = await db.all(` SELECT * FROM ProductImages where id=${id}`
          );
          if (rows.length == 0) {
            throw new Error(`productImages with id ${id} is not found`);
          }
          return rows;
        } catch (err) {
          throw new Error("Could not retrieve productImages");
        }
      };
     
      const createProductImages = async props => {
        const { path,Product_id } = props;
        if (!props || !path ||!Product_id) {
          throw new Error(`You must provide a id `);
        }
        try {
          const result = await db.run(
             `Insert into ProductImages (path,Products_id ) values ( '${path}',${Products_id})`
          );
          return result.stmt.lastID;
        } catch (err) {
          throw new Error("This combination doesnt work");
        }
      };
    
      const deleteProductImages = async id => {
        try {
          const result = await db.run(
            `Delete from ProductImages where id = ${id}`
          );
          if (result.stmt.changes == 0) {
            throw new Error(`ProductImages with id ${id} doesnt exist`);
          }
          return true;
        } catch (err) {
          throw new Error(`Could not delete productImages with id ${id}` + err);
        }
      };
    
      const updateProductImages = async (id, props) => {
        const { path,Product_id } = props;
        if (!props && !( props.path && props.Product_id )) {
          throw new Error(`You must provide a id or an path`);
        }
    
        let stmt = "";
        if (id && path && Product_id) {
          stmt = `update ProductImages set  path = '${path}' ,Products_id= '${Product_id}' where id = ${id} `;
          console.log(stmt);
        } else if (id&& !path) {
          stmt = `update ProductImages set id = '${id}' where id = ${id} `;
        } else {
          stmt = `update ProductImages set  path = '${path}' where id = ${id} `;
        }
        try {
          const result = await db.run(stmt);
          console.log(result);
          if (result.stmt.changes == 0) {
            throw new Error(`ProductImages with id ${id} doesnt exist`);
          }
          return true;
        } catch (err) {
          throw new Error(`Could not update ProductImages with id ${id}` + err);
        }
        
      };


    
      const controller = {
        getProductImages,
        
        createProductImages,
        deleteProductImages,
        updateProductImages,
        getProductImagesByID
      
      };
    
      return controller;
    };
    
export default  getProductImageDatabase ;
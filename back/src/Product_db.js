import sqlite from 'sqlite';

const initializeDatabase = async () => {
  const db = await sqlite.open('./CreamyCeartiondb.sqlite');

  const getProducts = async orderBy => {
    let stmt = "SELECT  * FROM Products";

    try {
      const rows = await db.all(stmt);
      if (rows.length == 0) {
        throw new Error("Products are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of products");
    }
  };

  const getProductsByID = async id => {
    try {
      const rows = await db.all(` SELECT id,name,description,price FROM Products where id=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`product with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve product");
    }
  };
  const getProductsByCategory = async id => {
    try {
      const rows = await db.all(` SELECT id,name,description,price,proImg FROM Products where Categories_ID=${id}`
      );
      if (rows.length == 0) {
        throw new Error(`product with category id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error(err);
    }
  };

  const createProducts = async props => {
    const { name, description, price } = props;
    if (!props || !name || !description || !price) {
      throw new Error(`You must provide a name and description and price`);
    }
    try {
      const result = await db.run(
        `Insert into Products (name,description,price,Categories_ID ) values ('${name}', '${description}',${price},${Categories_ID})`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteProducts = async id => {
    try {
      const result = await db.run(
        `DELETE FROM Products where id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`Product with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete product with id ${id}` + err);
    }
  };

  const updateProducts = async (id, props) => {
    const { name, description, price, Categories_ID } = props;
    if (!props && !(props.name && props.description && props.price && props.Categories_ID)) {
      throw new Error(`You must provide a name or an description`);
    }

    let stmt = "";
    if (name && description && price) {
      stmt = `update Products set name = '${name}', description = '${description}' ,price = '${price}' where id = ${id} `;
      console.log(stmt);
    } else if (name && !description) {
      stmt = `update Products set name = '${name}' where id = ${id} `;
    } else {
      stmt = `update Products set  description = '${description}' where id = ${id} `;
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
    getProducts,
    getProductsByCategory,
    createProducts,
    deleteProducts,
    updateProducts,
    getProductsByID
  };

  return controller;
};

export default initializeDatabase;



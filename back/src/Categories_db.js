import sqlite from 'sqlite';

const CategoriesDatabase = async () => {
  const db = await sqlite.open('./CreamyCeartiondb.sqlite');

  const getCategories = async orderBy => {
    let stmt = "select * from Categories";

    try {
      const rows = await db.all(stmt);
      if (rows.length == 0) {
        throw new Error("Categories are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of Categories ");
    }
  };

  const getgetCategoriesByID = async id => {
    try {
      const rows = await db.all(
        `select * from Categories where Id = ${id}`
      );
      if (rows.length == 0) {
        throw new Error(`Categories with id ${id} is not found`);
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve Categories");
    }
  };

  const createCategories = async props => {
    const { name } = props;
    if (!name) {
      throw new Error(`You must provide a  name `);
    }
    try {
      const result = await db.run(
        `insert INTO Categories (name) VALUES ('${name}')`
      );
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteCategories = async id => {
    try {
      const result = await db.run(
        `DELETE from Categories WHERE id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`Categories with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete Categories with id ${id}` + err);
    }
  };

  const updateCategories = async (id, props) => {
    const { name } = props;
    if (!props && !(props.description && props.date)) {
      throw new Error(`You must provide a name`);
    }


    let stmt = `UPDATE Categories  set name= '${name}'  where id = ${id}`;
    console.log(stmt);

    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`Categories with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update Categories with id ${id}` + err);
    }
  };

  const controller = {
    getCategories,
    getgetCategoriesByID,
    createCategories,
    deleteCategories,
    updateCategories
  };

  return controller;
};

export default CategoriesDatabase;



import sqlite from 'sqlite';

//to make connection with database . async is for to keep database open .await is to start this funcation first 
const OrdersDatabase = async () => {
  const db = await sqlite.open('./CreamyCeartiondb.sqlite');


  //To give me the Orders table
  const getOrders = async () => {
    let statment = "select * from Orders";

    try {
      const rows = await db.all(statment);
      if (rows.length == 0) {
        throw new Error("News are empty!");
      }
      else return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of News ");
    }
  };


  const getOrdersByID = async id => {
    try {
      const rows = await db.all(
        `select * from Orders where Id = ${id}`
      );
      if (rows.length == 0) {
        throw new Error(`News with id ${id} is not found`);
      }
      else return rows;
    } catch (err) {
      throw new Error("Could not retrieve product");
    }
  };

  const createOrders = async props => {
    const { date, username, userPhone, Products_ID } = props;
    if (!date || !username || !userPhone || !Products_ID) {
      throw new Error(`You must provide a date  and username and userPhone and Product_ID`);
    }
    try {
      const result = await db.run(
        `Insert into Orders (date,username,userPhone,Products_ID ) values (${date},'${username}',${userPhone},${Products_ID})`
      );

      //to return the last Id added
      return result.stmt.lastID;
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const deleteOrders = async id => {
    try {
      const result = await db.run(
        `DELETE from Orders WHERE id = ${id}`
      );
      if (result.stmt.changes == 0) {
        throw new Error(`Product with id ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not delete product with id ${id}` + err);
    }
  };


  const updateOrders = async (id, props) => {
    const { date, username, userPhone } = props;
    console.log(props)
    if (!date || !username || !userPhone) {
      throw new Error(`You must change one ITEM `);
    }

    let stmt = "";
    if (date && username && userPhone) {
      stmt = `UPDATE Orders set  date= ${date} , username ='${username}',userPhone= ${userPhone} where id = ${id}`

      console.log(stmt);

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
    getOrders,
    getOrdersByID,
    createOrders,
    deleteOrders,
    updateOrders
  };

  return controller;

};

export default OrdersDatabase;











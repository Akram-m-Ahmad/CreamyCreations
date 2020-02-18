import sqlite from 'sqlite';

const CatIDPro = async () => {
    const db = await sqlite.open('./CreamyCeartiondb.sqlite');

    const getCatIDPro = async orderBy => {
        let stmt = "select Categories.name from Products , Categories   WHERE Products.Categories_ID = Categories.ID";

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




    const controller = {
        getCatIDPro
    };

    return controller;
};

export default CatIDPro;



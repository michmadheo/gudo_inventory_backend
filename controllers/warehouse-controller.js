const pool = require("../database/db");

const getAllWarehouseList = async(req,res,next)=>{
    pool.query("SELECT title, description FROM Warehouse", (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json({
                data: result.rows
            });
        }
    })
};

const getWarehouseList = async(req,res,next)=>{
    const {username} = await req.body;
    pool.query(`select w.title, w.description from users u join warehouse w on u.userid = w.userid where u.username = '${username}'`, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json({
                status: 'SUCCESS',
                data: result.rows
            });
        }
    })
};

exports.getWarehouseList = getWarehouseList;
exports.getAllWarehouseList = getAllWarehouseList;
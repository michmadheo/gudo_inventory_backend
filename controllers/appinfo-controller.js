const appInitial = async(req,res,next)=>{
    res.json("This is the info endpoint for Gudo app");
};

const appDescription = async(req,res,next)=>{
    res.json({
        message: "Gudo Inventory App"
    });
};

exports.appInitial = appInitial;
exports.appDescription = appDescription;
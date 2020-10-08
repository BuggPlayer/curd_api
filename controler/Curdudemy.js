const Curdmodel = require("../model/CURDudemyModel");

// @desc   all_data
// @routes  GET  /
// @acess  public
exports.getAllData = async (req, res, next) => {
  try {
    const getalldata = await Curdmodel.find();
    res.status(200).json({ success: true, data: getalldata });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

//@desc    single data
//@route   GET  /singledata
//@access  public
exports.getSingleData = async (req, res, next) => {
  try {
    const getsingledata = await Curdmodel.findById(req.params.id);

    if (!getsingledata) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: getsingledata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc  CREATE prodcuts
//@route  POST /
//access private
exports.CreateData = async (req, res, next) => {
  console.log("body ", req.body);
  try {
    
    const createdata = await Curdmodel.create(req.body);
  
    res.status(200).json({ success: true, data: createdata });
    console.log("create data", createdata);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc  UPDATE products
//@route  PUT /update
//@access private
exports.Updatedata = async (req, res, next) => {
  try {
    const updatedata = await Curdmodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (!updatedata) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: updatedata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc  DELETE products
//@route DELETE /delete
//@access private
exports.DeleteData = async (req, res, next) => {
  try {
    const deletedata = await Curdmodel.findByIdAndDelete(req.params.id);
    if (!deletedata) {
      return res.status(400).json({ success: false });
    }
    deletedata.remove();
    res.status(200).json({ success: true, data: deletedata });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};


//@desc  upload photo for udamy
//@route PUT /:id/photo
//@access private
exports.photoupload = async (req, res, next) => {
  
  try {
    const photoupload = await Curdmodel.findByIdAndDelete(req.params.id);
    if (!photoupload) {
      return res.status(400).json({ success: false });
    }
   // console.log("files", req.files);
  if(!req.files){
    return res.status(400).json({success:false , data:"please uplaod a file "})
  }
  console.log(req.file);
  console.log("heelo");



  } catch (error) {
    res.status(400).json({ success: false });
  }
};

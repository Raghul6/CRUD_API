import knex from "../services/db.services.js";

// Knex package to use database connection
//  I have atteched Output for CRUD API image in src folder 

// Create API 
// http://localhost:4000/api/create_api Url for API Calling
// Pass value in request body 
// use Insert query to create on new city in cities table
// And Send response status 200 ,message:"City Created Sucessfully"
export const CreateAPI = async (req, res) => {
  try {
    const { name, password } = req.body;

    const CreateUser = await knex("cities").insert({name, password});

    return res.status(200).json({
      message: "City Created Sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// Read API 
// http://localhost:4000/api/read_api Url for API Calling
// Pass value in request body 
// use Select query to select a values from cities table
// use where query to select specific id for condition check
// And Send response status 200 ,data
export const ReadAPI = async (req, res) => {
  try {
    const { id } = req.body;

    const GetUser = await knex("cities").select("*").where({ id: id });

    return res.status(200).json({ data: GetUser });
  } catch (error) {
    console.log(error);
  }
};

// Update API 
// http://localhost:4000/api/update_api Url for API Calling
// Pass value in request body 
// use Update query to update The values from cities table
// use where query to Update specific id for condition check
// And Send response status 200 , message: "City Updated Sucessfully"
export const UpdateAPI = async (req, res) => {
  try {
    const { id, name } = req.body;

    const UpdateUser = await knex("cities").update({ name: name }).where({ id: id });

    return res.status(200).json({
      message: "City Updated Sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete API 
// http://localhost:4000/api/delete_api Url for API Calling
// Pass value in request body 
// use delete query to delete The values from cities table
// use where query to delete specific id for condition check
// And Send response status 200 , message: "City Deleted Sucessfully"
export const DeleteAPI = async (req, res) => {
  try {
    const { id } = req.body;

    const UpdateUser = await knex("cities").delete().where({ id: id });

    return res.status(200).json({
      message: "City Deleted Sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};


// in case any error occure in api calling pass the error in catch

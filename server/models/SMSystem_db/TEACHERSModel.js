import TEACHERSModelGenerated from "./generated/TEACHERSModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TEACHERSModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TEACHERSModelGenerated,
  ...customModel
};

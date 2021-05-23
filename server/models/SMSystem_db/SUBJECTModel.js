import SUBJECTModelGenerated from "./generated/SUBJECTModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await SUBJECTModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SUBJECTModelGenerated,
  ...customModel
};

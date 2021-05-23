import DESIGNATIONModelGenerated from "./generated/DESIGNATIONModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await DESIGNATIONModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DESIGNATIONModelGenerated,
  ...customModel
};

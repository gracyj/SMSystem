import STUDENTSModelGenerated from "./generated/STUDENTSModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await STUDENTSModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...STUDENTSModelGenerated,
  ...customModel
};

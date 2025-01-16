export class InventoryDescriptionMapper {
  // ModelToDto(results) {
  //   const mappedData = results.map((result) => {
  //     const mapped = {
  //       Id: result.guid,
  //       Description: result.description ? result.description : null,
  //       ShortName: result.shortname ? result.shortname : null,
  //       ManufacturerName: result.manufacturername
  //         ? result.manufacturername
  //         : null,
  //       Stock: result.stock ? result.stock : 0,
  //       OnHold: result.holdquantity ? result.holdquantity : 0,
  //       AvailableQty: result.availablequantity ? result.availablequantity : 0,
  //       CategoryId: result.categoryid ? result.categoryid : null,
  //       CategoryName: result.categoryname ? result.categoryname : null,
  //       ModelName: result.modelname ? result.modelname : null,
  //       PartNumber: result.partnumber ? result.partnumber : null,
  //       CompanyId: result.companyid ? result.companyid : null,
  //       CompanyName: result.companyname ? result.companyname : null,
  //       BranchId: result.branchid ? result.branchid : null,
  //       BranchName: result.branchname ? result.branchname : null,
  //     };
  //     return mapped;
  //   });
  //   return mappedData;
  // }

  ModelToDto(results: any[]) {
    return results.map((result) => {
      return {
        Id: result.guid ? result.guid : null,
        Description: result.description ? result.description : null,
        ShortName: result.shortname ? result.shortname : null,
        ModelName: result.modelname ? result.modelname : null,
        Created: result.created ? result.created :null,
        Modified: result.modified ? result.modified: null
      };
    });
  }

  DtoToModel(result: any) {
    const mappedInventory = {
      Id: result.guid ? result.guid : null,
      Description: result.description ? result.description : null,
      ModelNumber: result.modelnumber ? result.modelnumber : null,
      ShortName: result.shortname ? result.shortname : null,
      ManufacturerId: result.manufacturerid ? result.manufacturerid : null,
      ManufacturerName: result.manufacturername ? result.manufacturername: null,
      ModelName: result.modelname ? result.modelname : null,
      PartNumber: result.partnumber ? result.partnumber : null,
      Created: result.created ? result.created : null,
      Modified: result.modified ? result.modified : null,
    };
    return mappedInventory;
  }

  DTOModel(results: any, userId: string) {
    const mapped = {
      guid: results.Id ? results.Id : null,
      description: results.Description ? results.Description : null,
      shortname: results.ShortName ? results.ShortName : null,
      modelname: results.ModelName ? results.ModelName : null,
      userid: userId,
    };
    return mapped;
  }
}

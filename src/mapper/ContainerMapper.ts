export class ContainerMapper {
    // ModelToDto(data: any[]) {
    //     const mappedData = data.map((container) => {
    //         const mappedContainer = {
    //             Id: container.guid,
    //             Type: container.type ? container.type : null,
    //             PackSize: container.packsizes ?container.packsizes:null,
                
    //         };
    //         return mappedContainer;
    //     });
    //     return mappedData;
    // }

    ModelToDto(data: any[]) {
        const mappedData = data.map((container) => {
            const mappedContainer = {
                Id: container.guid,
                Type: container.type ? container.type : null,
                NumberOfUnits: container.numberofunits,
                Size: container.size ? container.size : null,
                SmallUnit: container.smallunit ? container.smallunit : null,
                Created: container.created ? container.created : null,
                Modified: container.modified ? container.modified : null,
            };
            return mappedContainer;
        });
        return mappedData;
    }
    

    DtoToModel(container: any,req:any) {
        const mappedContainer = {
            guid: container.Id ? container.Id : null,
            type: container.Type ? container.Type : null,
            numberofunits: container.NumberOfUnits ? container.NumberOfUnits : null,
            packsizes: container.PackSizes ? container.PackSizes : null,
            size: container.Size ? container.Size : null,
            smallunit:container.SmallUnit?container.SmallUnit:null,
            userid:req.userId,
            categoryguid: container.CategoryId  ? container.CategoryId : null,
        };
        return mappedContainer;
    }
}

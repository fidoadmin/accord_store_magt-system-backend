export class CategoryMapper {
    ModelToDto(data: any[]) {
        const mappedData = data.map((category) => {
            const mappedCategory = {
                Id: category.guid,
                Name: category.name ? category.name : null,
                Created: category.created ? category.created : null,
                Modified: category.modified ? category.modified : null,
            };
            return mappedCategory;
        });
        return mappedData;
    }

    DtoToModel(req:any,category: any) {
        const mappedCategory = {
            guid: category.Id ? category.Id : null,
            name: category.Name ? category.Name : null,
            userid: req.userId
    
        };
        return mappedCategory;
    }
}

class Product {
    projectName: string | undefined;
    productId: number | undefined;
    projectGroupId: number | undefined;
    productName: string | undefined; 
    public constructor(    projectName: string | undefined,
        productId: number | undefined,
        projectGroupId: number | undefined,
        productName: string | undefined){
            this.projectName = projectName;
            this.productId = productId;
            this.projectGroupId = projectGroupId;
            this.productName = productName;
        }
}
interface Product {
    readonly projectName: string | undefined;
    readonly productId: number | undefined;
    readonly projectGroupId: number | undefined;
    readonly productName: string | undefined; 
}

// public constructor(    projectName: string | undefined,
//     productId: number | undefined,
//     projectGroupId: number | undefined,
//     productName: string | undefined){
//         this.projectName = projectName;
//         this.productId = productId;
//         this.projectGroupId = projectGroupId;
//         this.productName = productName;
//     }
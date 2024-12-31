interface  Project {
    readonly projectGroupId: number | undefined | null;
    readonly metroAreaId: number | undefined | null;
    readonly fullName: string | undefined | null;
    readonly status: string | undefined | null; //only show first character
}
// public constructor(    projectGroupId: number | undefined,
//     metroAreaId: number | undefined,
//     fullName: string | undefined,
//     status: string | undefined) {
//  this.projectGroupId = projectGroupId;
//  this.metroAreaId = metroAreaId;
//  this.fullName = fullName;
//  this.status = status;
//     }
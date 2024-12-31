class Project {
    projectGroupId: number | undefined;
    metroAreaId: number | undefined;
    fullName: string | undefined;
    status: string | undefined; //only show first character
    public constructor(    projectGroupId: number | undefined,
        metroAreaId: number | undefined,
        fullName: string | undefined,
        status: string | undefined) {
     this.projectGroupId = projectGroupId;
     this.metroAreaId = metroAreaId;
     this.fullName = fullName;
     this.status = status;
    }
}
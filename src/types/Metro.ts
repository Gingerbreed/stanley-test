class Metro {
    metroAreaId: number | undefined;
    metroAreaTitle: string | undefined;
    metroAreaStateAbr: string | undefined;
    metroAreaStateName: string | undefined;
    public constructor(metroAreaId: number | undefined,
        metroAreaTitle: string | undefined,
        metroAreaStateAbr: string | undefined,
        metroAreaStateName: string | undefined) {
            this.metroAreaId = metroAreaId;
            this.metroAreaTitle = metroAreaTitle;
            this.metroAreaStateAbr = metroAreaStateAbr;
            this.metroAreaStateName = metroAreaStateName;

        }

}
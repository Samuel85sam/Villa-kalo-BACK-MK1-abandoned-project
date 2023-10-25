class reservationDto {

    id;
    dateIn;
    dateOut;
    client;


    constructor(data) {
        this.id = data.id;
        this.dateIn = data.dateIn;
        this.dateOut = data.dateOut;
        this.client = data.client;
    }
}

class reservationDetailDto {

    id;
    dateIn;
    dateOut;
    client;
    occupanQty;
    avis;


    constructor(data) {
        this.id = data.id;
        this.dateIn = data.dateIn;
        this.dateOut = data.dateOut;
        this.client = data.client;
        this.occupantQty = data.occupantQty;
        this.avis = data.client;
    }
}

module.exports = {reservationDto,reservationDetailDto};
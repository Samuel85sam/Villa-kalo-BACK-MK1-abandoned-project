class avisDto {

    id;
    client;
    note;

    constructor(data) {
        this.id = data.id;
        this.client = data.client;
        this.note = data.note;
    }
}

class avisDetailDto {

    id;
    client;
    note;
    comment;
    date;

    constructor(data) {
        this.id = data.id;
        this.client = data.client;
        this.note = data.note;
        this.comment = data.comment;
        this.date = data.date;
    }
}

module.exports = {avisDto,avisDetailDto};
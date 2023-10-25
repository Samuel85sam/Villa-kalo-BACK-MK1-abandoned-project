class clientDTO {

    id;
    nom;
    prenom;
    mail;
    tel;

    constructor(data) {
        this.id = data.id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.mail = data.mail;
        this.tel = data.tel;
    }
}

class clientDetailDTO {

    id;
    nom;
    prenom;
    tel;
    mail;
    reservations;
    bankAcount;

    constructor(data) {
        this.id = data.id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.tel = data.tel;
        this.mail = data.mail;
        this.reservations = data.reservations;
        this.bankAcount = data.bankAcount;
    }
}

module.exports = {clientDTO,clientDetailDTO};
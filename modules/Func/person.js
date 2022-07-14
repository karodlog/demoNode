module.exports = function (prenom, nom) {
    this.nom = nom;
    this.prenom = prenom
    this.presentation = function () {
        return `Bonjour ${this.prenom} ${this.nom}`
    }
}
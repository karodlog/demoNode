let compteur = {
    noel: function (choixAnnee = 2022) {
        const dateDay = new Date().getTime();
        const dateNoel = new Date(`Dec 25, ${choixAnnee}, 00:00:00`).getTime();

        const intervalle = dateNoel - dateDay;

        const days = Math.floor(intervalle / (1000 * 60 * 60 * 24));
        const hours = Math.floor((intervalle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((intervalle % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.round((intervalle % (1000 * 60)) / 1000)

        const noel = (`${days} jours ${hours} heures ${minutes} minutes ${secondes} secondes`)
        console.log(`Ils vous restent ${noel} pour fêter Noël avec vos proches.`);
    },
    anniversaire: function (choixAnnee = 2022) {
        const dateDay = new Date().getTime();
        const dateAnniversaire = new Date(`Nov 9, ${choixAnnee}, 16:00:00`).getTime();

        const intervalle = dateAnniversaire - dateDay;
        const days = Math.floor(intervalle / (1000 * 60 * 60 * 24));
        const hours = Math.floor((intervalle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((intervalle % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.round((intervalle % (1000 * 60)) / 1000)

        const myBirthday = (`${days} jours ${hours} heures ${minutes} minutes ${secondes} secondes`)
        console.log(`Ils vous restent ${myBirthday} pour réfléchir aux nombreux cadeaux que vous aller m'offrir à l'occasion de mon anniversaire (le 9 novembre).`)
    },
    longWeekEnd: function () {
        const dateDay = new Date().getTime();
        const dateLongWeek = new Date('Jul 20, 2022, 16:00:00').getTime();

        const intervalle = dateLongWeek - dateDay;
        const days = Math.floor(intervalle / (1000 * 60 * 60 * 24));
        const hours = Math.floor((intervalle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((intervalle % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.round((intervalle % (1000 * 60)) / 1000)

        const longWE = (`${days} jours ${hours} heures ${minutes} minutes ${secondes} secondes`)
        console.log(`Courage ! Nos "grandes" vacances approchent. Plus que ${longWE} pour enfin se reposer.`)
    },
    solsticeEte: function () {
        const dateDay = new Date().getTime();
        const dateSolsticeEte = new Date('Jun 21, 2023, 16:57:00').getTime();

        const intervalle = dateSolsticeEte - dateDay;
        const days = Math.floor(intervalle / (1000 * 60 * 60 * 24));
        const hours = Math.floor((intervalle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((intervalle % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.round((intervalle % (1000 * 60)) / 1000)

        console.log(`Prochain solstice d'été (2023) : ${days} jours ${hours} heures ${minutes} minutes ${secondes} secondes`)
    },
    solsticeHiver: function () {
        const dateDay = new Date().getTime();
        const dateSolsticeHiver = new Date('Dec 21, 2022, 22:48:10').getTime();

        const intervalle = dateSolsticeHiver - dateDay;
        const days = Math.floor(intervalle / (1000 * 60 * 60 * 24));
        const hours = Math.floor((intervalle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((intervalle % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.round((intervalle % (1000 * 60)) / 1000)

        console.log(`Prochain solstice d'hiver (2022) : ${days} jours ${hours} heures ${minutes} minutes ${secondes} secondes`)
    },

}
module.exports = compteur;
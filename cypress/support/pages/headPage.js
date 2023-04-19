export class HeadPage{

    constructor(){

        this.h2UserPushingit= '//h2[starts-with(@id, "user_pushingit")]';
    }

checkUserPushingit(){

    cy.xpath(this.h2UserPushingit)
}
}
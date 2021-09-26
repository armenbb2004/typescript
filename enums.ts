enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipreverse = Membership[2]
console.log(membership)
console.log(membershipreverse)

enum SocialMedia {
    VK = 'VK',
    FB = 'FB',
    INSTA = 'INSTA'
}

const social = SocialMedia.INSTA
const social1 = SocialMedia['INSTA']
console.log(social)
console.log(social1)
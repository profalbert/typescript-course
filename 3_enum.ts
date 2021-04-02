// енумы - это вспомогательная сущность, которая позволяет 
// лучше структурировать код, если присутствуют 
// какие-то однотипные элементы
enum Membership {
  Simple,
  Standart,
  Premium
}
const membership = Membership.Standart // = 1
const membershipReverse = Membership[2] // = Premium

enum SocialMedia {
  Vk = 'Vk',
  FaceBook = 'FaceBook',
  Instagram = 'Instagram'
}
const social = SocialMedia.Instagram // = Instagram





export const propertyNames = [
  'house',
  'apartment',
  'villa',
  'condominium',
  'office building',
  'warehouse',
  'hotel',
  'restaurant',
  'hospital',
  'school',
  'shopping mall',
  'bank',
  'park',
  'library',
  'gym',
  'cinema',
  'museum',
  'airport',
  'train station',
  'bus terminal',
  'gas station',
  'supermarket',
  'pharmacy',
  'coffee shop',
  'bakery',
  'barbershop',
  'salon',
  'spa',
  'farm',
  'factory',
  'studio',
  'garage',
  'car wash',
  'car dealership',
  'playground',
  'church',
  'mosque',
  'temple',
  'synagogue',
  'stadium',
  'parking lot',
  'skyscraper',
  'plaza',
  'resort',
  'campground',
  'university',
  'college',
  'library',
  'theater',
  'zoo',
  'aquarium',
  'beach house',
  'mountain cabin',
  'log cabin',
  'ranch',
  'vineyard',
  'orchard',
  'cottage',
  'guesthouse',
  'hostel',
  'bed and breakfast',
  'lighthouse',
  'castle',
  'mansion',
  'bungalow',
  'townhouse',
  'duplex',
  'penthouse',
  'loft',
  'mobile home',
  'farmhouse',
  'hut',
  'tent',
  'treehouse',
  'motel',
  'inn',
  'lodge',
  'chalet',
  'palace',
  'warehouse',
  'factory',
  'storage unit',
  'office space',
  'meeting room',
  'conference center',
  'data center',
  'server room',
  'laboratory',
  'clinic',
  'nursing home',
  'rehabilitation center',
  'veterinary clinic',
  'pharmacy',
  'emergency room',
  'operating room',
  'ICU',
  'pediatric ward',
  'maternity ward',
  'radiology department',
  'laboratory',
  'corporate office',
  'branch office',
  'call center',
  'startup',
  'co-working space',
  'boardroom',
  'training room',
  'break room',
  'reception area'
];
const numberOfNodes = 30; // Change this to the desired number of nodes
const numberOfLinks = 40; // Change this to the desired number of links

// Generate nodes
const nodes = [];
for (let i = 1; i <= numberOfNodes; i++) {
  const randomClass = ['fas fa-home', 'fas fa-user', 'fas fa-envelope text-white'][Math.floor(Math.random() 
    * 3)];
  const randomProperty = propertyNames[Math.floor(Math.random()*100)]
  nodes.push({ id: `node${i}`, icon: randomClass, class: randomClass,propertyName:randomProperty });
}

// Generate links
const links = [];
for (let i = 1; i <= numberOfLinks; i++) {
  const source = `node${Math.floor(Math.random() * numberOfNodes) + 1}`;
  const target = `node${Math.floor(Math.random() * numberOfNodes) + 1}`;
  links.push({ source, target });
}

export const sourceData = { nodes, links };

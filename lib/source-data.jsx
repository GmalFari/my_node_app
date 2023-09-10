const numberOfNodes = 150; // Change this to the desired number of nodes
const numberOfLinks = 200; // Change this to the desired number of links

// Generate nodes
const nodes = [];
for (let i = 1; i <= numberOfNodes; i++) {
  const randomClass = ['fas fa-home', 'fas fa-user', 'fas fa-envelope text-white'][Math.floor(Math.random() * 3)];
  nodes.push({ id: `node${i}`, icon: randomClass, class: randomClass });
}

// Generate links
const links = [];
for (let i = 1; i <= numberOfLinks; i++) {
  const source = `node${Math.floor(Math.random() * numberOfNodes) + 1}`;
  const target = `node${Math.floor(Math.random() * numberOfNodes) + 1}`;
  links.push({ source, target });
}

export const sourceData = { nodes, links };

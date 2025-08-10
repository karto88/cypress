

function generateRandomEmail() {
  const name = `paul${Math.floor(Math.random() * 1000)}`;
  return `${name}@gmail.com`;
}

module.exports = { generateRandomEmail };

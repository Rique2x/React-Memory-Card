function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/wanted-images/', false, /\.(webp)$/));
  
const charArr = images.map((path) => {
  return {
    name: path.split(/[., /]/)[4],
    image: path,
  };
});

export default charArr;
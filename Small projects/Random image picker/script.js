const imagelist = [
  "0x1900-000000-80-0-0.jpg",
  "3a69f49f8f204ef480e8d44cea9bca2eH3000W3000_464_464.jpg",
  "cf2922d592ffc7678f1354d8cbfec783.500x500x1.jpg",
  "faceless1_7.jpg",
];

function randomer() {
  const randomimg = Math.floor(Math.random() * imagelist.length);
  document.getElementById("imgra").src = imagelist[randomimg];
}

randomer();

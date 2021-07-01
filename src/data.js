import {v4 as uuidv4} from "uuid";

function chillHop(){
  return [
    {
      name: "travelbag",
      artist: "Sleepy Fish, mommy",
      color: ["#5C8CCE", "#9bc7e4"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=19058",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
      active: true,
    },
    {
      name: "Higher",
      artist: "Misha, Jussi Halme",
      color: ["#BC7873", "#A89FB2"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15088",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
      active: false,
    },
    {
      name: "Roses n Flames",
      artist: "C Y G N",
      color: ["#DE8FDC", "#7192CF"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14985",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      active: false,
    },
    {
      name: "Cascade",
      artist: "Knowmadic",
      color: ["#FD9554", "#7ACCA3"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13092",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
      active: false,
    },
    {
      name: "Flashback",
      artist: "Blue Wednesday, Shopan",
      color: ["#6F5275", "#B2A8DC"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      active: false,
    },
  ];
}
export default chillHop;
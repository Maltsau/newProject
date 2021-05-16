import two from "../assets/two.mp3";
import three from "../assets/three.mp3";
import four from "../assets/four.mp3";

function wait(ms: number) {
  return new Promise<void>(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const NUMBER_MAP = {
  "2": two,
  "3": three,
  "4": four,
} as Record<string, string>;

export default async function (number: string) {
  const numbers = [...number];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const mp3 = NUMBER_MAP[number];
    if (mp3) {
      var audio = new Audio(mp3);
      audio.play();
      await wait(1000);
    }
  }
}

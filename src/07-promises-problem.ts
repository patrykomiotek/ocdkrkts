// TODO: fix types

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  try {
    const response = await fetch("https://swapi.dev/api/people/1"); // Promise
    const data = await response.json();

    // const response = await fetch("https://swapi.dev/api/people/1"); // Promise
    // const data = await response.json();

    // const response = await fetch("https://swapi.dev/api/people/1"); // Promise
    // const data = await response.json();

    // await Promise.all[]
    // await Promise.race[]

    return data;
  } catch {
    throw new Error("fail");
  }
};

//

export const fetchLukeSkywalkerStandardWay = (): Promise<LukeSkywalker> => {
  return fetch("https://swapi.dev/api/people/1") // Promise (pending, rejected, fulfilled/resolved)
    .then((res) => {
      if (res.ok) {
        return res.json(); // Promise (pending, rejected, fulfilled/resolved)
      }
    })
    .then((data: LukeSkywalker) => {
      // parse(data) -> LukeSkywalker

      console.log(data);
      return data;
    });

  // return data;
};

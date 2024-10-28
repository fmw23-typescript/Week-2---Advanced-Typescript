type User = {
  id: string;
  name: string;
  likes: string[];
  age: number;
};

type Pizza = {
  id: "49ujkafs";
  name: "Calzone";
  toppings: string[];
};

const userLight: Pick<User, "id" | "name"> = {
  id: "1",
  name: "Johan",
};

const userLightish: Omit<User, "age"> = {
  id: "123123",
  name: "Johan",
  likes: [],
};

type Item = Pizza | Salad | Drink;

const item: Pizza = {};

const user: User = {
  id: "70812308asoijfliuasdlka",
  name: "Johan Kivi",
  age: 43,
  likes: ["kod", "foundue", "vindsurfa"],
};

function multiply(a: number = 0, b: number = 0): number {
  return (a * b) as number;
}

const Multiply = (a: number = 0, b: number = 0): number => (a * b) as number;

const prod = multiply(10, 10);

async function getData(): Promise<{ message: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "Wohooo!" });
    }, 2000);
  });
}

(async () => {
  const prom = await getData();
  console.log(prom);
})();

getData().then((data) => console.log(data));

async function listUsers(url: string): Promise<User[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data as User[];
}

async function ListUsers<T>(url: string): Promise<T[] | Error> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Whooopsie, something went wrong!", {
        cause: "NotFoundError",
      });
    }

    const data = await response.json();

    return data as T[];
  } catch (error: unknown) {
    return error as Error;
  }
}

type Obj = { items: string[]; meta: Record<string, any> };

const obj: Obj = {
  items: [],
};

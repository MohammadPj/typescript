type Employee = {
  readonly id: number;
  name: string;
  isVIP?: boolean;
  retire: (date: Date) => void;
}

let employee: Employee = {
  id: 1,
  name: "Mohammad",
  retire: (date: Date) => {
    console.log("date", date);
  },
};

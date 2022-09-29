let employee: { readonly id: number; name: string; isVIP?: boolean, retire: (date: Date) => void } = {
  id: 1,
  name: "Mohammad",
  retire: (date: Date) => {
    console.log("date", date)
  }
};

employee.id = 0

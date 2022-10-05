interface Result<T> {
  data: T | null;
  error: string | null;
}
interface User {
  username: string;
}
interface Product {
  title: string;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

let userResult = fetch<User>("user url");
let productResult = fetch<Product>("product url");

console.log(userResult.data?.username);
console.log(productResult.data?.title);

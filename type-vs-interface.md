# Type Alias Vs Interface: 



TypeScript-এ ডেটার গঠন নির্ধারণ করার জন্য `type` alias এবং `interface` বহুল ব্যবহৃত দুটি পদ্ধতি। দুটিই অবজেক্টের data type নির্ধারণ করতে পারে। তবে এদের কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। সঠিক পরিস্থিতিতে সঠিকটি ব্যবহার করলে কোড আরও পরিষ্কার, সহজে  এবং রক্ষণাবেক্ষণযোগ্য হয়।

## Type Alias এবং Interface-এর মূল পার্থক্য

`interface` মূলত অবজেক্টের structure নির্ধারণের জন্য ব্যবহৃত হয়। `extends` ব্যবহার করে একটি interface থেকে অন্য interface তৈরি করা যায়। একই scope-এ একই নামে একাধিক interface ঘোষণা করলে TypeScript সেগুলোকে একত্র করে। এই সুবিধাকে **Declaration Merging** বলা হয়।

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

// Declaration Merging
interface User {
  email: string;
}
```

অন্যদিকে, `type` alias শুধু অবজেক্টের structure নয়; Union, Intersection, Tuple, Primitive এবং Function type-ও তৈরি করতে পারে।

```ts
type Status = "pending" | "success" | "failed";

type UserWithRole = User & {
  role: "admin" | "member";
};

type Coordinates = [number, number];
```

দুটিই Generic support করে। তবে `interface` সরাসরি Union type এবং Tuple প্রকাশ করতে পারে না এবং `type` alias-কে Declaration Merging-এর মাধ্যমে extend করা যায় না।

## কখন কোনটি ব্যবহার করবেন?

API response, class structure অথবা  extend প্রয়োজন হতে পারে—এমন অবজেক্টে `interface` ব্যবহার করা ভালো। Union, Intersection, Tuple এর ক্ষেত্রে `type` বেশি উপযোগী। সাধারণ object এর জন্য দুটিই ব্যবহার করা যায়।



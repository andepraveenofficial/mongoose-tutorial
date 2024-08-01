# Data Model

### Steps to Create Model

1. import mongoose
2. Create Schema
3. Create Model

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

export const User = mongoose.model("User", userSchema);
```

### Schema

```js
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  isActive: Boolean,
});
```

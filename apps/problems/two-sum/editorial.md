# Add Sum

## Problem Statement
Find the sum of two given non-negative integers.

## Solution (C Code)

```cpp
int sum(int num1, int num2) {
    return num1 + num2;
}
```

## Explanation
This function takes two integers, `num1` and `num2`, as inputs. It adds the two numbers together and returns the result as an integer. The function leverages the simple arithmetic operation of addition, making it straightforward and efficient.

### Example Use Cases
- `sum(1, 2)` returns `3`
- `sum(1, 100)` returns `101`

### Why This Solution Works:
This solution works under the assumption that both input numbers are non-negative. The problem guarantees this condition, meaning there's no need to handle overflow or negative numbers. The simplicity of the problem allows for a direct approach without extra edge case considerations.
``` 

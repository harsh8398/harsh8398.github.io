---
title: Better Coding Practices / Python / Part-1
description: "A developer's guide to reduce code review comments, improve code quality and maintainability with examples"
date: "2022-07-02"
previewImage: "better-coding-practices.png"
---

# Introduction
Code review is an integral part of a developer's day-to-day life. Getting mega pint of code review comments has lots of problems but most importantly it hurts developer-ego! I hope you'll find this article helpful.

> **Disclaimer**: This blog does not claim to be one-and-only solution for all coding problems. Apart from some adopted community guidelines everything is subjective to the coder or reviewer. This is merely my opinions and compiled list of bad coding practices I've found through my experience. All the code examples are made to demonstrate a single problem at a time.

## 1. Variable Names

### Bad
```python
temp = {"banana": "yellow", "apple": "red", "grape": "green"}
list1 = []
list2 = []

for k, v in temp.items():
    list1.append(k)
    list2.append(v)

print(f"fruits: {list1}")
print(f"colors: {list2}")
```
### Good
```python
fruit_colors = {"banana": "yellow", "apple": "red", "grape": "green"}
fruits = []
colors = []

for fruit, color in fruit_colors.items():
    fruits.append(fruit)
    colors.append(color)

print(f"fruits: {fruits}")
print(f"colors: {colors}")
```

### Pros
- Code readability
- Less-prone to bugs

## 2. Exeption Handling
### Bad
```python
try:
    fruit_colors = {"banana": "yellow", "apple": "red", "grape": "green"}
    color = fruit_colors["watermelon"]
except Exception:
    print("Failed to get color of watermelon :(")
```
### Good
```python
fruit_colors = {"banana": "yellow", "apple": "red", "grape": "green"}
try:
    color = fruit_colors["watermelon"]
except KeyError:
    print("Failed to get color of watermelon :(")
```

### Pros
- Code readability
- Easy troubleshooting

## 3. Utilizing Standard Library
### Bad
```python
fruits = ["apple", "banana", "grape"]

i = 0
for fruit in fruits:
    print(f"{i}: {fruit}")
    i += 1
```
### Good
```python
fruits = ["apple", "banana", "grape"]

for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

### Pros
- Compact

## 4. Error Logging
### Bad
```python
try:
    res = requests.get("https://www.google.com")
    res.raise_for_status()
    logging.info("Success!")
except Exception as e:
    logging.error(f"Unexpected error occured: {e}")
```
### Good
```python
try:
    res = requests.get("https://www.google.com")
    res.raise_for_status()
    logging.info("Success!")
except HTTPError as err:
    logging.error(
        f"Request failed with status code: {err.response.status_code}"
    )
except Exception:
    # logging.exception logs traceback information
    logging.exception("Unexpected error occured:")
```

### Pros
- Code readability
- Easy troubleshooting

## 5. Block Comments
### Bad
```python
username = username.lower()
username = username.strip()
username = re.sub(r"\s+", "", username)
if not re.match(r"^[a-zA-Z0-9_]{5,20}$", username):
    print("Invalid username")
    exit(1)
```
### Good
```python
# Perform string transforms on the username
username = username.lower()
username = username.strip()
username = re.sub(r"\s+", "", username)

# Check if username is valid
if not re.match(r"^[a-zA-Z0-9_]{5,20}$", username):
    print("Invalid username")
    exit(1)
```

### Pros
- Code readability


# Conclusion

This blog is a part of a series and each of these points can be extended with some advanced scenarios. Unfortunately, I can't mention all the scenarios in a single blog so I will try to cover other cases in future parts. Feel free to reach out if you have any questions, suggestions for improvments or any good coding practice you've found.
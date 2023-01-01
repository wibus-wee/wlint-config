# wlint-config
wlint config repository

## Usage

You should install [wlint](https://github.com/wibus-wee/wlint) first. wlint is a wonderful linter config Manager

```bash
npm i -g wlint
```

Then add this repository to your wlint origin config

```bash
wlint origin add wibus-wee/wlint-config
# or
wlint config set origin wibus-wee/wlint-config
```

To remove this repository from your wlint origin config

```bash
wlint origin remove wibus-wee/wlint-config
# or
wlint config remove origin wibus-wee/wlint-config
```
## Auto Match Supports

This repository supports some auto match rules. This feature is provided by [wlint](https://github.com/wibus-wee/wlint#automatic-matching-category).

Now, this repository supports these packages:

- nest - [nest](http://nestjs.com/)
- next - [next](https://nextjs.org/)
- react - [react](https://reactjs.org/)
- default - recommended to use in a library project.


## Author

wlint-config © Wibus. Created on Jan 1, 2023

> [Personal Website](http://iucky.cn/) · [Blog](https://blog.iucky.cn/) · GitHub [@wibus-wee](https://github.com/wibus-wee/) · Telegram [@wibus✪](https://t.me/wibus_wee)

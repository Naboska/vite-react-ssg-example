# VITE-REACT-SSG-EXAMPLE


### Usage


```shell
git clone https://github.com/Naboska/vite-react-ssg-example.git
```


### About


A minimally configured application for SSG (Static Site Generation) applications using React and the Vite bundler.


```
pages/
├── index.tsx
├── about.tsx
└── other/
    ├── index.tsx
    └── subpage.tsx
```


After building, you will have the following pages:



```
dist/
└── static/
    ├── index.html
    ├── about/
    │   └── index.html
    └── other/
        ├── index.html
        └── subpage/
            └── index.html
```
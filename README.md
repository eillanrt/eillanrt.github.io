# About
Read about this blog [here](https://eillanrt.github.io/posts/what-is-this).

# Open Source
- Source Code is licensed under the MIT License. 
- Original content in this blog (e.g., text, images, and audio) located in the [content/posts](https://github.com/eillanrt/eillanrt.github.io/tree/main/content/posts) and [static](https://github.com/eillanrt/eillanrt.github.io/tree/main/static) directories is **All Rights Reserved**, unless otherwise stated.

# Common Hugo commands
Hugo commands I use most of the time.
## Run the Hugo server
```bash
hugo server
```

## Serve posts marked as draft
```bash
hugo server -D
```

## Clean the destination directory before building
To ensure no unused files from previous builds are interfering with the site.
```bash
hugo server --cleanDestinationDir
```

## Dealing with cache
Removes unused cache files after the build
```bash
hugo server --gc --cleanDestinationDir
```

## Create new post
```bash
hugo new content content/posts/<title-slug>.md 
```

Read more on [PaperMod](https://github.com/adityatelange/hugo-PaperMod) and [Hugo](https://gohugo.io) documentation.

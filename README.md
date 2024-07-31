# MAC2 website
This is a rough draft for another version of [the participation page for MAC2's website](https://mac2research.sunycreate.cloud/participate-in-a-study/)

# What I learned
## css
```css
/* box sizing includes margin and padding as part of the size */
*,
*:before,
*:after {
    box-sizing: border-box;
    font-size: large;
}

/* adjusts properties based on screen size */
@media (max-width: 600px) {
    body {
        padding-top: 100px;
        color: red;
    }
}
```
## Git branches
```bash
# creates a new branch and switches to it
$ git checkout -b new-feature 

# if you have changes already staged, the same command will still be ready to be committed to the new branch
$ git checkout -b new-feature 

# git add and commit as usual
$ git add . && git commit -m "working on new-feature"

# push new-feature branch to the origin remote 
# -u flag sets up the branch to track the remote branch
# which makes future push/pull easier, by just using git push/pull without specifying branch
$ git push -u origin new-feature
```
# About Robusthera

Robusthera is a simple fork of [Daisuke Tsuji's](https://yet.unresolved.xyz/) [Robust](http://themes.gohugo.io/robust/) theme.

# Features from Robust

* Google Analytics
* Disqus
* Share Buttons(fb, twitter, google+, pocket)
* Eye-catching Image
* MicroData
* Readable text(Customized Vertical Rhythm).

# Features of Robusthera

* Dark theme
* Removed sidebars
* New footer design
* Custom color animation for links.

# Installation

[hugoThemes#Installing Themes](https://github.com/spf13/hugoThemes#installing-themes).

# Configuration

**config.yaml**

``` toml
baseurl = "http://hugo.spf13.com/"
title = "Hugo Themes"
author = "Steve Francia"
copyright = "Copyright (c) 2008 - 2014, Steve Francia; all rights reserved."
canonifyurls = true
paginate = 3

[params]
  disqusShortname = "your disqus id." # optional
  twitter = "your twitter profile"
  github = "your github adress"
  youtube = "your youtube page"
  email = "your email adress"
```

**example post**

``` toml
+++
title = "Getting Started with Hugo"
description = ""
tags = [
    "go",
    "golang",
    "hugo",
    "development",
]
date = "2014-04-02"
categories = [
    "Development",
    "golang",
]

image = "image.jpg" # optional
toc = false # optional, When set to FALSE this parameter, table of contents not appears in only this article.
+++

Contents here
```

---
layout: post
title: "Enabling CEF to Screen Share using getUserMedia() API"
modified: 2015-10-20 00:00:00 -0700
tags: [CEF,getUserMedia,webrtc,c++,chromium,screen share]
image:
  feature: cplusplus.jpg
comments: 
share: 
---

This post/tutorial is intended for being able to teach you how to enable using native screen sharing API of chrome in a CEF
client.This is based on [buglloc](https://github.com/buglloc)'s work. His [patch](https://github.com/buglloc/cef-builds/blob/master/patches/allow_screen_sharing.patch)
is what allowed me to implement screen sharing on my CEF client.

#### Requirements
[Chromium Repository](https://bitbucket.org/chromiumembedded/cef/wiki/Home)
[CEF Patch](https://github.com/buglloc/cef-builds/blob/master/patches/allow_screen_sharing.patch)

Screen sharing is already possible through getUserMedia but it got removed and moved to chrome extension API for some reason.
The difference file changes the *browser_host_impl.cc* file which gets processed when we call getUserMedia.

#### Applying the patch

Go to *chromium\src\cef\patch\patch.cfg* and add 
{% highlight ruby pygments %}

{
 'name': 'allow_screen_sharing',
 'path': '../cef/libcef/browser'
}

{% endhighlight %}

Copy the [patch](https://github.com/buglloc/cef-builds/blob/master/patches/allow_screen_sharing.patch) file
*patches* folder. Note that you need to change
{% highlight ruby pygments %}

diff --git a/libcef/browser/browser_host_impl.cc b/libcef/browser/browser_host_impl.cc

{% endhighlight %}

to

{% highlight ruby pygments %}

diff --git browser_host_impl.cc browser_host_impl.cc

{% endhighlight %}

After the patch configuration is done go to **cef\tools** and run patch.bat. You should see the allow_screen_patching applied at the end of the output.
After the patching complete run **translator.bat --root-dir** where root dir is the CEF dir which is **src\cef**.
All done,you need to compile the cefclient.Go to chromium source directory and run 

{% highlight ruby pygments %}

ninja -C out/Debug

{% endhighlight %}



---
layout: post
title: "Executable vs Dynamic Library Memory Allocation"
modified: 2015-11-20 00:26:18 +0200
tags: [c++,CEF,pointers,memory allocation,const&]
image:
  feature: 
  credit: 
  creditlink: 
comments: 
share: 
---

So,I've just spent(lost) multiple hours due to one simple thing.Seems like everyone was aware but me.So you can't free memory  which was allocated on DLL heap in the application.
That should be pretty obvious in the first place but if somebody asked me about this I'd for sure tell the correct answer.It just didnt hit me until I realized it in my code.
It's similar to how CRT works. If you compile your DLL with /MTd, your application/other DLLs should be /MTd too or it can cause problems. 

As stated here,from MSDN

**Caution Do not mix static and dynamic versions of the run-time libraries. Having more than one copy of the run-time libraries in a process can cause problems, because static data in one copy is not shared with the other copy. The linker prevents you from linking with both static and dynamic versions within one .exe file, but you can still end up with two (or more) copies of the run-time libraries. For example, a dynamic-link library linked with the static (non-DLL) versions of the run-time libraries can cause problems when used with an .exe file that was linked with the dynamic (DLL) version of the run-time libraries. (You should also avoid mixing the debug and non-debug versions of the libraries in one process.)**


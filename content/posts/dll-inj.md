---
title: "DLL injector"
date: 2023-09-15
tags: ["in development", "challenge"]
series: "0x13hrafnulf's Challenges"
categories: ["cybersecurity"]
---

Who is [0x13hrafnulf](https://0x13hrafnulf.github.io/)? 

# Simple DLL injector with GUI (dll-inj)
*in development* **[repository](https://github.com/0x5bjorn/dll-inj)**

Simple DLL injector with GUI written in C++ for educational purposes only
## Demo
![demo](images/dll-inj/demo.gif)
## Code organization
- **GUI** - GUI management using [**Dear ImGui**](https://github.com/ocornut/imgui)
- **Injection** - DLL injection implemention using Windows API
- **OpenDialogBox** - file selection dialog box using Windows API
- **Proc** - process and process modules querying handler
- **Application** - application and app window management
## Description
*Coming soon...*
#### Intro
*Coming soon...*
#### DLL Injection
*Coming soon...*
#### Dynamic data updates
*Coming soon...*

## Future plans
- Implement thread pool for thread reuse (currently a simple thread creation and deletion mechanism is utilized)
## References
- Windows process and its modules(dll) listing - https://learn.microsoft.com/en-us/windows/win32/toolhelp/taking-a-snapshot-and-viewing-processes
- Native Windows File Selection prompt - https://learn.microsoft.com/en-us/windows/win32/learnwin32/example--the-open-dialog-box
- Process injection - 
	- https://www.ired.team/offensive-security/code-injection-process-injection/dll-injection
	- https://ctfcracker.gitbook.io/process-injection/process-injection-part-2
	- https://tbhaxor.com/createremotethread-process-injection/
- ImGUI - https://github.com/ocornut/imgui
---
id: screen-tutorial
title: Screen Tutorial
sidebar_position: 11
description: Screen Tutorial
---

# Screen Tutorial

When performing a long interactive operation such as a complex test or build over a remote connection (such as [SSH](./ssh.md)), any network interruption such as a temporary break in WiFi connectivity or relocating from one pace to another will interrupt the operation and force you to start over.

[GNU screen](https://www.gnu.org/software/screen/) is a utility which addresses this problem by enabling you to disconnect from a terminal session and reconnect from the same or a different location later. It also has a number of advanced features such as multiple sessions over a single connection and session sharing between multiple users. This tutorial covers the most basic and useful use-case.

1. Connect to a system, either by logging in locally or logging in remotely via [SSH](./ssh.md).
2. Start screen: `screen -RaD`
    - The `-RaD` options tell screen to start a session if none exists, or take over an existing session is one does exist, and to detach any existing remote connections to that session.
3. Perform whatever operations you desire.
4. Disconnect by pressing **Ctrl-A** then **D**.
5. You can now disconnect/close your local login or ssh connection.
6. To resume from the same or other location, issue the command from step 2.

For additional details, see the manpage for screen.

**Alternatives**

An alternative to screen is [tmux](https://tmux.github.io/).

For a similar disconnect/reconnect capability for graphical applications, see [VNC](https://en.wikipedia.org/wiki/Virtual_Network_Computing).

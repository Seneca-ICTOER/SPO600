---
id: remote-x
title: Remote X
sidebar_position: 13
description: Remote X
---

# Remote X

The X Window System is a client-server graphics system:

- the **server** manages the display hardware, each typically including one or more video cards and monitors, one or more keyboards, and one or more mice or other pointing devices.
- the **client** software connects to the server through one of several network transports to draw on the display, get status information, and receive input from the keyboard and mouse.

In a typical Linux system, the server and clients run on the same computer, although one or more clients may also be remotely connected.

## Displayspecs

X servers are identified by a display specification or _displayspec_: `[server]:display[.screen]`

Where:

- _server_ is the hostname of the server: blank for local connections via the fastest avilable means; `localhost` for local connections via TCP/IP; or a hostname for remote connections via TCP/IP.
- _display_ is the display number. These are numbered starting at zero. The port number used for TCP/IP connections is (6000+display).
- _screen_ is the screen number if the display supports multiple screens (this is mostly obsolete; most multi-screen X servers now merge them into a single display, using the Xinerama protocol extension).

Therefore:

- the default local display number is `:0`
- display 0 on the host `red.example.com` is `red.example.com:0`

Displayspecs are communicated to client programs through the DISPLAY environment variable (or, less often, through command-line arguments).

## Remote Access to an X Server with SSH

To run a client in a remote location from the server, you can run the raw X protocol over tcp/ip or other network transports. However, this is very insecure and is not recommended. Instead, current best practice is to use an ssh session to tunnel the X traffic.

Most standard ssh clients can set up the tunnel, X authentication, and other details necessary by simply including the -X or -Y command line parameters.

In these examples:

- _red_ is the local computer, running an X server
- _blue_ is the remote computer on which the client program will be run
- _user_ is the name of the user on _blue_

To connect to _blue_ and start a shell, from which any program may be run:

```assembly
ssh -XC user@blue
```

The `-X` argument sets up the X tunnel, while the `-C` argument turns on data compression for improved performance.

To connect to _blue_ and start the program _gnome-calculator_:

```assembly
ssh -XC user@blue gnome-calculator
```

**Not for Benchmarking:** This is not a good solution for benchmarking because the performance will vary with network conditions.

## Using VNC

VNC is a remote display software that originated at Olivetti Research Labs in Cambridge UK. It is cross-platform and very lightweight. The underlying protocol is called _rfb_ (for _remote frame buffer_). There are many different software packages that support various aspects of the vnc/rfb system.

When used with the X Window System, it is necessary to have a dual server that functions as both an X server and a VNC server. The easiest way to do this is to run the `vncserver` script from the `tigervnc-server` package, which configures and then start the `Xvnc` server. To connect X client, set and export the `DISPLAY` environment variable; to connect a VNC client, use this command: `vncviewer -via blue localhost:display`

## Using Xvfb

`Xvfb` is a dummy X server that does not display output on any device. This is useful where a program needs to connect to an X server, perhaps for testing purposes, but the actual image drawn does not have to be viewed anywhere. Xvnb would typically be invoked with a command such as:

```assembly
Xvfb :0 -ac
```

Where `:0` is the display number and `-ac` disables access control to allow any local client to connect. You can then connect a client by setting and exporting the `DISPLAY` variable and starting the client:

```assembly
export DISPLAY=:0
gnome-calculator
```

## Resources

- **X Power Tools**, a book by Chris Tyler published by O'Reilly Media and available through the Seneca Libraries on-line services.

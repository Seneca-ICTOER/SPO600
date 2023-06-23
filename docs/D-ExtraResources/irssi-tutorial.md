---
id: irssi-tutorial
title: Irssi Tutorial
sidebar_position: 22
description: Irssi Tutorial
---

# Irssi Tutorial

[irssi](http://www.irssi.org/) is a command-line [IRC](http://en.wikipedia.org/wiki/Internet_Relay_Chat) client popular with many developers. By using irssi in conjunction with the [GNU Screen](http://en.wikipedia.org/wiki/GNU_Screen) program you can create one or more shells that will exist even when you logout. This is useful when you move between computers, but want to reconnect to irssi where you last left-off.

## Advantages

- People can leave you messages.
- You can catch-up on conversations that happened while you were away (often called "scrollback").

## Instructions

- Obtain an account on zenit, or install irssi on another computer that isn't rebooted (NOTE: many Seneca servers are rebooted frequently).
- Use ssh to connect to zenit. On Windows try a client such as [PuTTY](http://cdot.senecac.on.ca/software/putty/). If you use Linux or any Unix based operating system you will already have ssh installed.
- Once you've connected to zenit, launch **irssi** within a [screen](http://en.wikipedia.org/wiki/GNU_Screen) session. You can do this by typing:

```bash
$ screen
screen will flash and go back to the default prompt.  You are now inside screen
$ irssi
```

- Type "irssi" in the new bash prompt in order to launch _IRSSI_, the irc application. As a side note, if you want to exit a _screen_ session just type "exit" in the bash prompt to return to the main prompt where you originally launched _screen_ from.
- In the IRSSI prompt, connect to a server:

```bash
/connect irc.mozilla.org
```

or

```bash
/connect irc.freenode.net
```

- Once you're connected type

```bash
/join #seneca
```

- You can join multiple servers and channels by repeating the /connect and /join commands, above
- The screen software lets you disconnect from and reconnect to the Irssi software.
  - If you would like to return back to the bash prompt without exiting _IRSSI_ hit "ctrl+a" then "ctrl+d"
  - If you would like to return to _IRSSI_ type "screen -raAd" in the bash prompt.
  - If you would like to see a list of _screens_ that are currently running type "screen -ls" in the bash prompt.
 
## Frequently Asked Questions

1. **How do i change the default nick name?**
    - In irssi, type **/set nick <nicknamehere\>** or /nick<nicknamehere\>, which ever way work for you.
2. **How do i switch between the different 'windows' so that i can view my opened channels, private messages or the server window?**
    - Use the **alt** key followed by a number to switch to that 'window'. I.e. Pressing **alt 1** will switch to the server window.
    - If that doesn't work, then try the escape key instead of alt. That should always work.
3. **How do i list all the users in the current channel?**
    - You can either type **/names** or **/who** followed by **alt 1** to switch to the server window.
4. **On the Irssi screen, what does 'Act: 3' mean?**
    - In your irssi, you will see \[2:\#seneca\] \[Act:3,4\]. What do those number mean? That means 2 is the current chat screen that you are in. 3 and 4 are the other chat that is open.
    - If 3 is in **blue**, which mean someone login, logoff, changing status.
    - If 3 is **white**, that's mean conversation is going on in that chat.
    - If 3 is **pink**, meaning you got messenger specificly sent to you plus other reason that might need your attention.
    - If you want to switch from one chat to another, press **alt+ screen#**.
5. **How do i close an open window?**
    - Navigate to the window you want to close, type **/window close** (or **/wc**) and press **enter**.
6. **How do I log back onto the account on the second time on?**
    - Type the following command `screen -r` on the terminal.
7. **I have multiple screens but I want to see the screens I currently have. How do I do this?**
    - Type the following command `screen -x` on the terminal.
8. **How do i scroll up or down?**
    - Page Up & Page Down.
9. **How to have a private chat with someone on irc?**
    - To create a private chat, you need to know that person's nickname, which you can type '/names'to identify the person on the list and then type '/query nickname' or /q nickname.
    - To close the private chat, type '/q'.
10. **If I want to leave the irssi that I logged in from one computer to another but keeping the connection and messages running, what should I do?**
    - I should do Ctrl+A and then press D right after.
    - Close the SSH in this computer, moved to another computer, log into zenit again, then type 'screen -arAd'.
    - **Notice: You don't even have to connect again.**

## Other approaches

See the **Staying Connected** topic on the [Irc](./irc.md) page for some other approaches to this problem.

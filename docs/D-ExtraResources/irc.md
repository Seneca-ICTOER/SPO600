---
id: irc
title: IRC
sidebar_position: 21
description: IRC
---

# IRC

## Introduction

IRC stands for _Internet Relay Chat_ and is one of the primary means of synchronous communication between people working on an open source project. It's a text-based chat system where clients connect to one or more servers, and the servers relay messages between themselves (hence the name). Communication is done in _channels_ which individual users join, and users are identified by _nicks_ (nicknames). In addition to human users, various _services_ and _bots_ (robots -- programs) are present in many channels.

There are several IRC networks used by the Open Source communities in which Seneca participates:

- The Freenode network is used by Fedora, X.org, OpenOffice.org, and many other open source projects. For information about the Freenode IRC network, see http://freenode.net/. Freenode's IRC servers are accessible at irc://irc.freenode.net
- Moznet is Mozilla's IRC network. For information about Moznet, see http://irc.mozilla.org. Mozilla's IRC server is irc://irc.mozilla.org
- The Open and Free Technology Community is a network used by the gcc, django, debian, libvirt, and other communities. For information about OFTC, see http://www.oftc.net/. OFTC's IRC servers are accessible at irc://irc.oftc.net

## Basic Usage

### IRC Client Software

There are many IRC client programs available. Wikipedia maintains a [comparison list of IRC clients](http://en.wikipedia.org/wiki/Comparison_of_Internet_Relay_Chat_clients). Three good choices include:

- [Chatzilla](https://addons.mozilla.org/en-US/firefox/addon/16) - a Firefox extension
- [XChat](http://en.wikipedia.org/wiki/XChat) - a cross-platform (Linux/Mac OSX/Windows) graphical client. XChat is available in Fedora. Note: Two pre-compiled versions of XChat are available for Windows from two different groups - a [no-cost](http://www.silverex.org/news/) version and a [$19.99 shareware](http://xchat.org/windows/).
- [Irssi](http://irssi.org/) - a text-mode client. When used with the screen program on a Linux or Mac OSX host, it can be left running constantly and you can disconnect/reconnect to it from multiple locations. Irssi is available in Fedora.

### Menus vs. Commands

Most IRC clients let you perform operations using menus/hotkeys or by typing commands. Commands start with a slash ("/") to distinguish them from text that you are typing into the chat session. Since the commands are the same in all IRC clients, it's worthwhile becoming familiar with them.

### Choosing a nickname

Probably you want to use something short and in lowercase. Most people use their name or some portion thereof, but you can choose anything -- though it's worth putting some thought into this.

- Make it easy for people to recognize that your various on-line identities refer to the same person. Pick a consistent identity across IRC, wiki, and mailing lists.
- Choose a professional identity that you'll be glad to be associated with for a long time. IRC logs are sometimes posted on the web, and "live forever".
- Select a nickname that will be valid for years, regardless of how your location, role, or interests will change.

Most IRC clients will choose a default nickname for you, and you can change it using menu options or by entering the command:

```bash
/nick newname
```

It's strongly recommended that you [register](https://freenode.net/kb/answer/registration) your nick so that you won't lose it to someone else and so that no one else can impersonate you (in fact, some channels may require that you register your nick).

### Connecting to an IRC Network

To use IRC, you must first connect to a network through one of its servers. Each graphical client has a way of selecting a network from a list, or you can type **/server hostname** to connect to a specific IRC host (e.g., **/server irc.mozilla.org** to connect to Moznet or **/server irc.freenode.net** to connect to Freenode).

### Channels, joining and leaving

Channels (similar to the concept of a "chat room") usually start with the # symbol, for example **#seneca**. To join a channel select it from your client's channel menu or type:

```bash
/join #seneca
```

Popular Freenode channels include:

- [#seneca](irc://irc.freenode.net/seneca) - Seneca's home on Freenode (best place to start)
- [#fedora](irc://irc.freenode.net/fedora) - Fedora users
- [#pidora](irc://irc.freenode.net/pidora) - Pidora users
- [#fedora-arm](irc://irc.freenode.net/fedora-arm) - Fedora-ARM packagers and SIG
- [#fedora-devel](irc://irc.freenode.net/fedora-devel) - Fedora developers
- [#fedora-admin](irc://irc.freenode.net/fedora-admin) - Fedora infrastructure team (server and network administrators)
- [#openoffice.org](irc://irc.freenode.net/openoffice.org) - OpenOffice.org users
- [#dev.openoffice.org](irc://irc.freenode.net/dev.openoffice.org) - OpenOffice.org developers
- [#education.openoffice.org](irc://irc.freenode.net/education.openoffice.org) - OpenOffice.org Education Project
- [#xorg](irc://irc.freenode.net/xorg) - X.org users
- [#xorg-devel](irc://irc.freenode.net/xorg-devel) - X.org developers

Popular Mozilla channels include:

- [#webmaker](irc://irc.mozilla.org/webmaker) - For discussions of general Webmaker projects and dev
- [#makedrive](irc://irc.mozilla.org/makedrive) - For discussions of Filer, MakeDrive
- [#appmaker](irc://irc.mozilla.org/appmaker) - For discussions of Appmaker and Mobile Webmaker
- [#firefox](irc://irc.mozilla.org/firefox) - For user and some developer help with Firefox or Thunderbird
- [#extdev](irc://irc.mozilla.org/extdev) - For extension developers
- [#calendar](irc://irc.mozilla.org/calendar) - Developers working on Mozilla's Calendar apps Lightening and Sunbird
- [#js](irc://irc.mozilla.org/js) - For developers with Javascript questions
- [#xul](irc://irc.mozilla.org/xul) - For developers with XUL questions
- [#camino](irc://irc.mozilla.org/camino) - For Camino developers
- [#accessibility](irc://irc.mozilla.org/accessibility) - For developers working on Accessibility related features/bugs

OFTC channels include:

- [#gcc](irc://irc.oftc.net/gcc) - GCC (Gnu Compiler Collection) project
- [#virt](irc://irc.oftc.net/virt) - libvirt project

You can also start your own channel by joining a new channel name. This can be useful for times when you want to chat with a few specific people at once. It's recommended that you use your nickname for temporary channels -- for example:

```bash
/join mynick
```

Channels exist as long as there is someone in them. They disappear when everyone leaves (NOTE: there are ways to change this behaviour, but this is the default).

**NOTE**: Due to IRC spam and spambots, many channels require that you are a registered user (i.e., that your nick has been registered) before you can join and/or speak. You can find instructions for registering your nick [here](http://freenode.net/faq.shtml#registering).

### Entering text

Anything that doesn't begin with a / is regular text that will be broadcast to everyone in the channel, including you.

The reverse is also true: anything beginning with a / is interpreted as an IRC command. You'll learn many of these as you go.

## Channel Culture
It is normal to join a channel and say nothing. In fact, it is expected. Don't join a channel and say "hi" or leave and say "bye" -- you may be interrupting a conversation already underway.

It is normal for someone new to join a public channel (i.e., one you can see via /list or IRC > Join Channel) uninvited. Feel free to join as many channels as you like, once you're comfortable with IRC.

It is normal to join a channel and sit there idle for a long time. You might never say anything. This is a good way for you to learn about who is in the channel, what they are talking about, etc. Listening is often more important than talking, because you learn more.

If you have a question you should just ask it rather than saying, "Can I ask a question about ..." or "Does anyone know about ..."

You don't need to direct general questions to a specific person. Rather, you should ask in the channel in general. Someone will usually answer you:

```bash
<don>	How do I ask a question?
<funny_guy> don: you just did!
```

If there are several conversations taking place at the same time, it's customary to put the nick of the user you are directing your comment to at the start of the line (as shown in the second line above). Most IRC clients will auto-complete the nick when you press the <tab\> key, so you could type "fun<tab\>" to fill in the nick "funny\_guy".

Channels generally have a purpose, and people are often joined to many different channels at once. You'll see many of the same people in different channels. However, what might be appropriate in one channel often isn't in another. When you enter a channel, take a look at its Topic (displayed at the top, or with the /topic command) for clues.

Generally you should avoid small-talk unless you are sure that it is appropriate. Even if you see others in the channel doing it, don't take that to mean that you should (i.e., channel veterans can get away with things newcomers can't!). At the same time, be ready for a playful and (at times) very sarcastic environment.

Also be aware that you never know who you are talking to based on their nicks (you will learn who people are later, as you get to know people's nicks). Don't make assumptions about people (for example, many of the people in #seneca are students, and an equal number are external open source developers working on Fedora, Mozilla, OpenOffice.org, etc.).

## The people in channels

Channels have operators, or ops. These are people who have special administrative powers to kick people out or otherwise run IRC server commands. You can often spot them in your client (for example, in ChatZilla and XChat they will appear with a Green Circle, and in irssi they will have an @ symbol before their nick).

You can find-out more about a particular person by using the /whois command, for example:

```bash
/whois don
```

In ChatZilla, try right-clicking a user, then User Commands > Who is; in XChat, right-click on a user and then hover over their nick.

Many people will appear to be in the channel, but not all of them will actually be watching IRC at that moment. It is normal for people to leave their IRC clients connected forever and never leave. This way they can catch-up on conversations they missed while they were away.

Because of this, people will often check to see if someone is really there before talking to them. By convention, people will use the person's nick and _ping_ or _ping_? instead of saying, "are you there?":

```bash
<don> funny_guy: ping
<funny_guy> don: pong
...
<don>	rob: ping?
<rob>	hey don
...
<don>	jim: ping
<jim>	pong
```

The person will often respond with _pong_. People preface text like ping/pong with a person's nick so that their client will alert them to it (often with a beep or pop-up message). This is helpful when there are a lot of people talking at once in a channel. (NOTE: ChatZilla automatically remembers all text that was directed to your nick so you can scan it later. You can see it in the **moznet** tab).

It is normal to join conversations in the middle without being invited (within reason and assuming you know the people talking ).

Often you'll want to say something to a particular person and not the whole channel. This is known alternatively as 'msg' (short for message or messaging), private message or private chat, query, etc. There are a number of ways to do this, the simplest being to use the /query or /msg command:

```bash
/query don
<opens a private chat/channel with user don>
...
/msg don ping
```

Most graphical clients also let you open a private chat by right-clicking on a user name. The difference between /query and /msg is that /msg works across channels. For example, if you want to speak with someone who is not in the current channel, but is connected to the same server. The /query command works only for users in the current channel.

## Tools for collaboration

### Using a Pastebin

It is important that you do **not** paste long sections of text into a channel. For any text longer than a few lines (3-9 being the maximum depending on the channel's rules) such as build output, source code, error messages, configuration text files, etc., you should use an on-line "pastebin". These are websites that allow users to temporarily host large quantities of text, and assign them unique URLs. There are a number of pastebins available with similar features (they really differ only in syntax highlighting and retention time):

- The original pastebins: http://pastebin.org http://pastebin.com
- Canadian pastebin: http://pastebin.ca
- Mozilla pastebin: http://mozilla.pastebin.org
- Fedora pastebin: http://fpaste.com

You simply paste your text into the textbox, and optionally select any syntax highlighting you desire. Finally, you can optionally add your Name and then click the Send button. You'll be taken to a new page with your text entered. Copy the URL from the address bar, which will look something like this:

```text
http://pastebin.mozilla.org/4248
```

Now, you can easily share this URL in IRC without actually copying your text directly into the channel. The length of time that the pastebin data will be stored varies between the pastebin sites. **Note**: pastebin data is not in any way secure or private! -- don't pastebin confidential information.

**Fedora Users: fpaste**

There is a utility provided in Fedora that simplifies sending text to a pastebin. This utility is called `fpaste` and may be used in a pipeline: `ls -l /var/run|fpaste` -- the fpaste command will print the pastebin URL to the screen. If you are using the GUI and include the `-o` option, then fpaste will place the URL in the clipboard and primary selection as well, so you can easily paste it in your IRC program.

### Using private channels with small groups

To hold a private discussion with more than one person, you could ask two or three people to join you in a channel name of your choosing (it's recommended that you use your nick for temporary channels):

```bash
/join #mynick
...invite others to come and see by sending them a /msg or:
/invite somenick
...have the private discussion...
/leave
```

### Sharing long complicated URLs

Many of the URLs that users share with one another on IRC are long or complicated. Because some users work with command-line clients, it can be difficult to copy-and-paste these URLs into the browser. A better solution is to use a URL shortener such as [TinyURL.com](http://tinyurl.com/) or [bit.ly](http://bit.ly/), which allows users to paste and submit long URLs in order to generate a much shorter URL. A typical TinyURL, for example the location of Seneca on Google Maps, looks like this:

```text
http://maps.google.com/maps?f=q&hl=en&q=seneca+college&sll=37.0625,-95.677068&sspn=57.424512,108.28125&ie=UTF8&z=12&ll=43.814463,-79.381027&spn=0.103554,0.211487&om=1&iwloc=B
```

becomes...

```text
http://tinyurl.com/32pcyt
```

TinyURL now includes the ability for you to specify the last part of the URL, so you can make easy-to-remember short URLs:

```text
http://tinyurl.com/seneca-at-york
```

The short URLs never expire, so passing them around in emails, newsgroup postings, etc. won't cause problems.

## Staying Connected

There are several ways to stay connected to IRC all the time even as you move from location to location (these are somewhat advanced techniques -- don't worry about this when you're first getting started!):

- Use the [Irssi](http://irssi.org/) client (which is character-mode) in conjunction with [GNU Screen](http://www.gnu.org/software/screen/) on a machine that is constantly running. You can then connect using ssh from any computer, disconnect, and then reconnect from another computer. See the [Irssi Tutorial](./irssi-tutorial.md) for basic instructions.
- Use a graphical client with on a machine which is constantly running, and use a remote-GUI program such as VNC to connect to that machine from wherever you travel.
- Use a graphical client such as [XChat](http://en.wikipedia.org/wiki/XChat) on a Linux machine which is constantly running. You can then connect to that system from another Linux computer (or a Windows or Mac system with an X server running) using ssh with the "-XC" options, stop Xchat (`killall xchat`), and then restart it. The display will be exported to the remote system, and the scrollback will be intact, so you can read messages that were sent previously.

## Hiding or Cloaking your IP Address

One of the ways is to simply send an email to support@freenode.net with a request to hide your IP Address. Make sure to provide your registered nickname on the freenode IRC server. Your will get a reply in couple of days, so be patient. Another way, is to join #freenode chat and try to contact a chat moderator there.

## Resources

- [Discussion](http://benjamin.smedbergs.us/blog/2008-08-26/irc-communication/) of some common DOs and Don'ts with respect to Mozilla's IRC culture (also useful for other projects).
- [Dictionary of common IRC abbreviations](http://www.jonhs.com/acronym_dictionary.htm)
- [IRC Tutorial](http://www.clubmoz.ca/node/2#note1)

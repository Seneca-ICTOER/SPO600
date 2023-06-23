---
id: ssh
title: SSH
sidebar_position: 10
description: SSH
---

# SSH

SSH is the _Secure Shell_, a powerful encrypted communication tool. This page contains some basic information about the use of SSH.

## SSH Software

SSH client and server programs are included with almost all Linux distributions and Mac OS/X. You can obtain SSH client and server software for most other platforms, including Windows and Android.

On Windows, the [PuTTy](http://cdot.senecac.on.ca/software/putty/) open-source ssh client is recommended.

Here are some SSH clients (there are many others available):

| Platform	| Software	| Comments |
| --------- | --------- | -------- |
| Linux |	OpenSSH |	Included in almost all Linux distributions |
| OSX |	OpenSSH |	Included with OSX |
| ChromeOS (Chromebook) |	crosh |	The CROme SHell (crosh) included with ChromeOS has SSH support - use Ctrl-Alt-T inside Chrome to open a crosh tab. (May not be present in newer non-developer versions of Chrome on ChromeOS -- search the Chrome app store for an SSH app). |
| Android |	JuiceSSH |	Free and premium versions available in the Google Play store. |
| Windows |	Putty |	Free and open source SSH client. |

## Using SSH for a Text-Based Connection

The most basic use of SSH is for a text-based connection used to enter commands and view command output, or execute a text-based application such a menu-driven system.

Some SSH clients have a graphical interface. For those used from the command line, the most basic form of invocation is:

```bash
ssh [OPTIONS] [user@]host command
```

Note that the ssh command name may vary, depending on the software used.

Where:

- _user_ is the name of the user account on the remote computer (optional, if the user account name is the same on both systems)
- _host_ is the name or IP address of the remote computer
- _command_ is the command to be executed on the remote computer (optional - the default is to open whatever shell or application is the default for the specified user)

Useful options include:

| Option	| Description	| Example |
| ------- | ----------- | ------- |
| -C |	Enable compression (gzip) to enhance performance |	ssh -C _user_@_host_ |
| -X or -Y |	Turn on X11 forwarding (it is recommended that -C also be used) - See X11 Tunnelling, below |	ssh -X -C _user_@_host_ |
| -L or -R |	Turns on tunnelling |	(See Tunnelling section) |
| -i identityfile |	Specifies the private key file to be used (default: all private keys in ~/.ssh) |	ssh -i ~/.ssh/id_dsa _user_@_host_ |
| -p portnumber |	Connect to the TCP/IP port portnumber rather than the default SSH port 22. |	ssh -p 2200 _user_@_host_ |

### Examples

- Connect to a shell for account 'kim' on the computer 'winter': `ssh kim@winter`
- Like above, with compression: `ssh -C kim@winter`
- Run `df -h` on the remote system, and display the graphics on the local computer: `ssh -XC kim@winter firefox`

## Using SSH for a Graphical Application (X11 Tunnelling)

SSH is capable of carrying graphical traffic using the X Window System (X11) protocol. This means that if your client system is running the X Window System (most Unix/Linux systems, and any Mac or Windows system on which an X Server has been started), you can run remote graphical programs and display the output (windows) locally.

To enable this, add the `-X` or `-Y` options to your command line. The difference between -X and -Y is that (ideally) the -X option will prevent certain advanced types of access which are not required by most graphical programs and which may present a security vulnerability, such as taking a screenshot of your desktop.

### Example

- Run Firefox on the remote system, and display the graphics on the local computer: `ssh -XC kim@winter firefox`

## Using SSH with Tunnelling

In addition to X11 tunnelling, SSH permits you to set up your own tunnels to carry arbitrary network traffic either from the client system to the server, or from the server to your client. This allows you to encrypt the traffic for security/privacy, and to circumvent firewalls.

For local, forward (client to server) tunnels, the syntax is:

```bash
ssh -L listenport:destinationhost:destinationport [OPTIONS] [user@]host [command]
```

Where:

- _listenport_ is the port on the client machine which will accept connections
- _destinationhost_ is the remote computer hostname or IP address to which connections will be directed. This is usually `localhost`, which denotes the SSH server, but it can also be the name of a system which the server can directly reach. Note that communication between the server and the _destinationhost_ is **not** encrypted.
- _destinationport_ is the port on the _destinationhost_ to which the connection will be directed

For reverse (server to client) tunnels, the syntax is:

```bash
ssh -R listenport:destinationhost:destinationport [OPTIONS] [user@]host [command]
```

The arguments have the same meaning, but are executed one the opposite hosts, so the tunnel listens on the server and communicates to the destination through the client system.

### Examples

- To connect port 8080 on the local computer to port 80 on the server winter, using the account sam: `ssh -L 8080:localhost:80 sam@winter`
  - After the tunnel above was put in place, you could access http://localhost:8080/ and be connected to the webserver (port 80) on the host _winter_
- To connect port 2000 on the local computer to port 1234 on the host spring, which is on the same LAN as the SSH server winter: `ssh -R 2000:spring:1234 sam@winter`
- To connect port 3000 on the server winter to port 5900 on the local computer: `ssh -L 3000:localhost:5900 sam@winter`

## Using SSH for File Transfer

SSH provides two mechanisms for file transfer: _scp_ and _sftp_.

### scp - Secure Copy

The scp command functions like the normal Unix/Linux copy (cp) command, but accepts a hostname (and optional user ID) prepended to a filename for copying to/from remote systems:

```bash
scp [user@]host:sourcefilename [user@]host:destinationfilename
```

The options are the same as for the ssh command, except that to specify a port number, use `-P</code (capital) instead of <code>-p` (lowercase).

**Examples**

- Copy the file `/etc/hosts` from this computer to the `/tmp` directory on the computer _ireland_: `scp /etc/hosts ireland:/tmp`
- Copy the file `test.tar` from the home directory of the user _chris_ on the computer _ireland_ to the current directory: `scp chris@ireland:~/test.tar .`

### sftp - Secure FTP

sftp provides an encrypted version of FTP. The command usage is:

```bash
sftp [user@]host
```

At which point you can use any standard FTP command.

**Example**

- Open a secure FTP connection to the account _john.doe_ on the server _matrix.senecac.on.ca_: `sftp john.doe@matrix.senecac.on.ca`

## Graphical File Management over SSH

Many Linux graphical file managers, such as the GNOME _Nautilus_ and KDE _Konqueror_ programs, know how to manage files remotely using the ssh/scp/sftp protocols. For example, on GNOME, you can select the menu option Places\>Connect to Server, enter the connection details, and view a file management window on a remote server. You can then rename, copy, move, and delete files using drag-and-drop operations (for example, you can copy a file by dragging it from your desktop to the remote window). You can also create bookmarks for rapid access to remote filesystems at a later date.

### Background: Public Key Cryptography

See [Public Key Cryptography](./public-key-cryptography.md) for an overview of how this technology works.

## Using Public Keys with SSH

### Creating a Public/Private Key Pair

**OpenSSH Assumed:** These instructions assume a Linux or Mac OS/X system running OpenSSH. Other SSH clients will have different procedures, and you'll need to check that the key produced is in OpenSSH format (you can convert key types using the `ssh-keygen` command on a Linux system such as Matrix if needed).

1. Enter this command: `ssh-keygen -ted25519`
    - Answer the questions asked by ssh-keygen. Use default values for most questions. The use of a passphrase is **strongly** recommended. Avoid changing the filename from the default (unless there is a really good reason), because the location, name, and permission of keys is critical.
      - ssh-keygen will produce two files:
      - `~/.ssh/id_ed25519` - your private key
      - `~/.ssh/id_ed25519.pub` - your public key
     
**Key Type and Length**

ssh-keygen can generate multiple types of keys, including rsa, dsa, ecdsa, and ed25519. Any of these types serves the same purpose, and rsa/dsa can be generated with varying key lengths. The longer the key, the more difficult it is to break the key by guessing it (trying successive values until the right key is found) - each bit added to the key doubles the number of possible key values. Key lengths of 1024-4096 bits are considered reasonably secure; as computers become faster, key lengths should be increased. Better yet, use the ed25519 eliptic curve option, which is considered the most secure format supported by the current OpenSSH implementation (8.4 as of the time of writing).

### Sending the Public Key to a Remote System Administrator

1. Upload or email (or otherwise send) the `~/.ssh/id_rsa.pub` file to the remote system administrator. **Do NOT send your private key!**

### Setting up Public Key Authentication on Two Machines

Automatically (preferred approach):

1. Run the command: `ssh-copy-id user@host`

Manually:

1. Copy the public key to the remote system you wish to access.
2. Create the `~/.ssh` directory if it does not exist.
    - Set the permission on `~/.ssh` to 0700
3. Append the public key to the file `~/authorized_keys`
    - Set the permission on `~/authorized_keys` to 0600

## Disconnecting from and Reconnecting to a Login Session

The [GNU screen](./screen-tutorial.md) utility permits you to start a session, disconnect from it (accidentally or intentionally), and then reconnect from the same or another network connection. This is useful when you're using an unstable WiFi connection (e.g., in a coffee shop or mobile link) or want to start a long operation (such as a build or a test suite run) on campus, commute home while it's running, and then check on its status.

Note that this approach does not work with graphical applications (ssh -X).

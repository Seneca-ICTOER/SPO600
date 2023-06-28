---
id: servers
title: Servers
sidebar_position: 9
description: Servers
---

# Servers

## Preparatory Steps

In order to gain access to these computers, you must send an [SSH](./ssh.md) key to your professor.

An account will be created within a few work days of sending the key.

**Check Your Key!:** Your professor uses an automated script to create accounts, so the key must be valid, in the OpenSSH format, and correctly named in order to work successfully.

## Available Servers

The names of servers within CDOT are based on the names of countries. There is no significance to the country names.

### AArch64: israel.cdot.systems

A main AArch64 system is available, known as _israel_. This machine has a lot of mid-range cores. You can access this system at the hostname israel.cdot.systems; if you're using a command-line ssh system, you can access aarchie with a command such as this:

```bash
ssh username@israel.cdot.systems
```

### x86_64: portugal.cdot.systems

The x86\_64 server system is known as _portugal_. If you're using a command-line ssh system, you can access xerxes with a command such as this:

```bash
ssh username@portugal.cdot.systems
```

## Simplified SSH Access

If you're using OpenSSH (the ssh client used on most Linux systems and other platforms), you can simplify ssh command lines by placing host connection details in the file `~/.ssh/config`:

```bash
Host "portugal"
        hostname "portugal.cdot.systems"
        user "YourUserID"

Host "israel"
        hostname "israel.cdot.systems"
        user "YourUserID"
```

Once you have added these lines (inserting your user ID where appropriate) and set the permission on that file (`chmod 0600 ~/.ssh/config`) you can use these commands to access the servers:

```bash
ssh israel

ssh portugal
```

You can similarly configure simplified access in most other SSH client programs.

## Multiuser Access

Remember that these machines are multi-user systems. Use the `w` or `who` commands to see who else is using them; you can also try using the `write` command to communicate with another user if required.

## Passwords

Your password on each of these systems has been set to a random string (different on each host). You can find out the original random password by viewing the file `~/password.txt` and you can change the password with the `passwd` command. Your password is used for sudo access (see the next section).

## Sudo Access

To perform operations which require _privilege_, such as installing software, use the `sudo` command to execute the desired instruction as the `root` user.

For example, to install the software packaged `ncurses-devel`, execute: `sudo dnf install ncurses-devel` on xerxes or `sudo yum install ncurses-devel` on betty. The commands are different because Xerxes is running Fedora, which has transitioned from the older yum system to dnf, while Betty is running LEAP (based on CentOS), which still uses the older system.

**Danger! Use Superuser privilege at your Own Risk.**

Note that the use of the superuser account via `sudo` removes almost all restrictions on what you can do. It is easily possible for you to completely destroy the operating system! Take your time, double-check your commands, and if in doubt, ask. Be aware that your actions may affect other users and vice-versa.

**DO NOT Build or Install Software as Root except via RPM (dnf/yum) or DEB (apt)**

Do not build or install software as the root user (using `sudo`), except in RPM or DEB form using the `dnf`/`yum` or `apt` commands (as appropriate to the system). Building or installing software as root may overwrite system files and be very difficult to track down.

It is OK to install software into your own directories (e.g., `~/bin` or `~/local`), which can be done without root privilege.

In order to use `sudo`, you will need to know your password. An initial random password is provided in the file `~/password.txt` (note that your password will be different on each server). Feel free to change this with the `passwd` command -- not by editing the file, which is provided only for your information!

## SSH Access from Other Client Systems

If you wish to access the servers from additional computers, you can append the SSH public keys from those computers to the `~/.ssh/authorized_keys` file. Alternately, you can copy the private key from one client system to another (e.g., your laptop to your desktop).

## OS Versions

The current servers are both running Fedora 35 and will be updated from time to time. The machines may not be updated at the same time, so the versions of software may vary slightly. The kernel versions may also vary between the systems because of kernel hardware support.

## Backup Your Accounts

These accounts are _never_ backed up, and the machines may fail, lose data, or be reinstalled without warning at any time. Please back up your work frequently by copying it to another system or storage device.

## Common SSH Problems

With the OpenSSH client:

1. Your ssh private key must be in your `~/.ssh` directory (which must have 0700 permission) and the private key file must have 0600 permissions -- no more and no less.
2. If your SSH public key is not named `~/.ssh/id_rsa`, your SSH client may not automatically find it. You can specify the identity (private key) file using the `-i` argument to the SSH command.}}

### Debugging SSH Connection Problems

**Situation 1: The SSH client asks you for a passphrase**

The passphrase is the one you provided when you created your SSH keys. You must remember this passphrase in order to successfully unlock your private key. If you do not remember your passphrase, you will need to create a new pair of keys and re-send the public key to your professor:

1. Create the keys with `ssh-keygen -t ed25591`
2. Copy the public key (which by default will be named `~/.ssh/id_ed25519.pub`) to a file named `UserId.pub` where **UserId** is your Seneca User ID.
3. Attach that file to an e-mail message and send it to your professor.

**Situation 2: The SSH client asks you for a password**

The password is for the remote system, but the SSH client will only ask you for a password if it is unable to authenticate using your keys. If that is the case, then one of your keys is corrupted, missing, has the wrong permission, or can't be found by the SSH client.

1. If you're using OpenSSH, try using the `-i` argument to tell the client which private key identity file to use: `ssh -i /path/to/ssh/PrivateKey ...`
2. Check the permissions on the private key and the directory holding the private key.
3. If necessary, generate a new key and send it to your professor (see the previous section).

**Getting Verbose Output**

To see what the OpenSSH client program is doing, you can use the `-v` (verbose) argument, up to three times: `ssh -vvv ...`

By reading through the output carefully, you can see what the OpenSSH client program is doing, and address any problems that arise (such as permission or file naming issues).

## Disconnect/Reconnect Ability

The [screen](./screen-tutorial.md) utility provides disconnect/reconnect capability, which is very useful for unstable network connections, long interactive operations, and changing your work location.

Other programs such as tmux provide similar capability.

For graphical disconnect/reconnect capability, consider using VNC.

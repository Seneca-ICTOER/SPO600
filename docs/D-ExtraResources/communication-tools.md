---
id: communication-tools
title: Communication Tools
sidebar_position: 6
description: Communication Tools
---

# Communication Tools

[SPO600](../landing-page.md) students use a number of communication tools that have been built and heavily adopted by Open Source communities. This page contains set-up instructions for some of these communication tools.

## Summary: What you Need to Do

To participate in the SPO600 course, you need to:

1. Create a blog (if you don't already have one) or create a tag/category for SPO600 if you're going to use an existing blog. Collect these pieces of information:
  
    - **The URL of your main public blog page**
    - **The URL of your blog feed - this is the link that will provide an RSS or ATOM feed of your blog content. (If you're using a tag/category, make sure that your feed includes only posts with that tag/category).**

2. Create an SSH key pair.
3. Fill in [this form](https://forms.office.com/r/Mxe4wcBJ41) to send this information to your professor.

Instructions on how to do these things is detailed below.

## Blog

A _blog_ (short for _weblog_) is a (usually personal) website where dated articles are posted over a period of time. In the open source community, blogs are used to announce new projects, project releases, and general information, to comment on current happenings, to record personal reflections, and to comment on other people's blog postings. Many Open Source communities aggregate posts from their community members into a [Planet](https://en.wikipedia.org/wiki/Planet_(software)) so that it is possible to view posts from the entire community on one web page.

There are many free or inexpensive blog hosting services available (including Blogger.com and Wordpress.com). Alternatively, you can host your own blog using blog software (caution! - it's a lot more work to host your own blog!).

Once you have your blog set up, find these two URLs:

1. The main public URL for your blog. This will be different from the URL that you use to create posts on your blog.
2. The _feed_ URL for your blog. This is the URL that provides a machine-readable feed of your posts in RSS or ATOM format which can be processed by other software.

See the Open Source@Seneca [Blog Guidelines](./blog-guidelines.md) for information about setting up your blog and including your postings in Telescope.

**Submitting Coursework:** In this course, most coursework is submitted by blogging. Therefore, it is important to write blog posts frequently (at least 2x per week), with good content, writing, and links.

**Read the Planet:** It's a good idea to read Telescope several times a week. Finding out what your colleagues are doing can give you useful ideas and accelerate your own project work.

## SSH

[SSH](./ssh.md) is a tool that provides remote access to a computer system. This can include command-line access, but also file transfers, graphical user interface (GUI) access, and _secure tunnels_ to remote services.

### Creating a Public/Private Key Pair

**OpenSSH Assumed:** These instructions assume a Linux, Windows 10, or Mac OS/X system running OpenSSH. Other SSH clients will have different procedures, and you'll need to check that the key produced is in OpenSSH format (you can convert key types using the `ssh-keygen` command on a Linux system such as Matrix if needed).

1. Enter this command:

```bash
ssh-keygen -t ed25519
```

   - Answer the questions asked by ssh-keygen. Use default values for most questions. The use of a passphrase is **strongly** recommended. Avoid changing the filename from the default (unless there is a really good reason), because the location, name, and permission of keys is critical. **DO NOT FORGET YOUR PASSPHRASE**!
   - ssh-keygen will produce two files; the name will be the same but the location will vary according to the operating system in use:
     + `~/.ssh/id_ed25519` - your private key - do not let anyone else have this file
     + `~/.ssh/id_ed25519.pub` - your public key - this file can be freely shared with anyone
   - The permissions on these files matter! Take this in to account if you move these files or copy them between systems:
     + `~/.ssh` directory must have permission 0700 (rwx------)
     + `~/.ssh/id_ed25519` must have permission 0600 (rw-------)
     + `~/.ssh/id_ed25519.pub` should have permission 0644 (rw-r--r--)

**Key Type and Length**

ssh-keygen can generate multiple types of keys, including rsa, dsa, ecdsa, and ed25519. Any of these types serves the same purpose, and rsa/dsa can be generated with varying key lengths. The longer the key, the more difficult it is to break the key by guessing it (trying successive values until the right key is found) - each bit added to the key doubles the number of possible key values. Key lengths of 1024-4096 bits are considered reasonably secure; as computers become faster, key lengths should be increased. Better yet, use the ed25519 eliptic curve option, which is considered the most secure format supported by the current OpenSSH implementation (8.4 as of the time of writing).

## Submitting your Blog URLs and SSH Public Keys

Once you have the blog feed and public key ready, enter them on the [Blog and SSH Information Form](https://forms.office.com/r/Mxe4wcBJ41).

## Updating your SSH Key

If you need to update your SSH key, you can do so by logging in to your SPO600 account(s).

If you do not have access to your account, please send an email to your professor, with the subject line "SPO600 SSH Key". Attach a **copy** of your updated SSH **public** key named `yourUserId.pub`

Warning: Sending a new SSH public key to your professor will invalidate your previous key.

## Other Communication Tools

### Email

When communicating with your professor by email, please use your Seneca-provided e-mail address as the "From:" address (`yourname@myseneca.ca`). Because your professor receives a **huge** amount of email, it's critical to include your course code in the subject line of each of your messages.

### Slack

Slack is an online discussion system. Sign up to use the [Seneca Open Source Slack](https://seneca-open-source.slack.com/) workspace (sign-up with your @myseneca.ca email; this same Slack workspace is used in the [OSD600](https://wiki.cdot.senecacollege.ca/wiki/OSD600)/[DPS909](https://wiki.cdot.senecacollege.ca/wiki/DPS909) course, so you may already have an account if you're also taking that course).

### Community Communication Resources

Each open source community uses some combination of email, [IRC](./irc.md), blogs, wiki, and bug-tracking systems to facilitate communication. Learn the tools used by the communities you are interacting with, and communicate with their preferred tools.

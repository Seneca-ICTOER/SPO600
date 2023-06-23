---
id: public-key-cryptography
title: Public Key Cryptography
sidebar_position: 14
description: Public Key Cryptography
---

# Public Key Cryptography

## Overview

Public-key cryptography underlies virtually all e-commerce, online banking, and telecommunications systems.

In a nutshell, public key cryptography works like this:

1. A large random number is generated.
2. That number is used to derive two mathematically-related but different keys. Each key is also a large number.
3. Data can be encrypted by processing one of the keys and the data to be encrypted using an encryption algorithm. Once encrypted, the data appears to be a meaningless stream of numbers.
4. The encrypted data cannot be decrypted using the original key, yielding the original data. However, it can be decrypted using the other key, and vice-versa.

To use public key cryptography:

1. One key is designated as the "public key" and one is designated as the "private key".
    - The public key is distributed to all of the parties with whom you will be communicating. In fact, it can be communicated to anyone in the world.
    - The private key is _never_ shared with anyone.
2. Messages encrypted with your private key can only be decrypted with your public key, proving that the message came from you (authentication)
3. Messages encrypted with your public key can only be decrypted with your private key, ensuring that only you can read them (privacy).
4. To provide both privacy and authentication on messages between you and another party, encrypt the message twice: once with your private key and once with their public key.

## Practical Considerations

- The algorithms used in public-key cryptography are very slow. Therefore, it's common to use public key cryptography to exchange a key for a faster, symmetrical cipher, and then use that cipher for the actual data stream.
- _Signing_ a message means authenticating it by taking a checksum (hash) of the message and encrypting that. This is faster than encrypting the entire message.
- Public key cryptography is very susceptible to the manipulation of public keys by an attacker interposed between the two parties at the time that the public keys are shared (e.g., when someone is downloading your public key from your website). This is called a _Man in the Middle_ (MIM) attack. To protect against this, keys can be signed by a mutually-trusted third party (called a Certification Authority, or CA) -- this is how your browser communicates securely with your bank.
- Public key cryptography is susceptible to theft of the private key (e.g., hacking your system, or stealing your laptop). The private key is therefore often protected with a passphrase.
- Cryptographic systems can be broken by guessing the key. The easiest way to do this is to sequentially try all possible key values. As computers become faster, more keys can be tested in a reasonable length of time, so keys must be made longer. Each bit added to the length of the key doubles the number of possible key values, doubling the average length of time that it will take to guess the key.

## Uses for Public Key Cryptography

- [SSH](./ssh.md)
- TLS (used by protocols such as https and imaps)
- GPG/PGP

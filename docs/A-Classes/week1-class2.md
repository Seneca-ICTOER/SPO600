---
id: week1-class2
title: Week 1 - Class 2
sidebar_position: 2
description: Week 1 - Class 2
---

# Week 1 - Class II

## Binary Representation of Data

## Video

- [SPO600 - Binary Representation of Data](https://web.microsoftstream.com/video/0bc04f34-5438-4a15-b089-ef35b0a65cd3)

## Binary Representation of Data

- Binary
  - Binary is a system which uses "bits" (_binary digits_) to represent values.
  - Each bit has one of two values, signified by the symbols 0 and 1. These correspond to:
    - Electrically: typically off/on, or low/high voltage, or low/high current. Many other electrical representations are possible.
    - Logically: false or true.
  - Binary numbers are resistant to errors, especially when compared to other systems such as analog voltages.
    - To represent the numbers 0-10 as an analog electrical value, we could use a voltage from 0 - 10 volts. However, if we use a long cable, there will be signal loss and the voltage will drop: we could apply 10 volts on one end of the cable, but only observe (say) 9.1 volts on the other end of the cable. Alternately, electromagnetic interference from nearby devices could slightly increase the signal.
    - If we instead use the same voltages and cable length to carry a binary signal, where 0 volts == off == "0" and 10 volts == on == "1", a signal that had degraded from 10 volts to 9.1 volts would still be counted as a "1" and a 0 volt signal with some stray electromagnetic interference presenting as (say) 0.4 volts would still be counted as "0". However, we will need to use multiple bits to carry larger numbers -- either in parallel (multiple wires side-by-side), or sequentially (multiple bits presented over the same wire in sequence).

- Integers
  - Integers are the basic building block of binary numbering schemes.
  - In an unsigned integer, the bits are numbered from right to left starting at 0, and the value of each bit is `2^bit`. The value represented is the sum of each bit multiplied by its corresponding bit value. The range of an unsigned integer is `0:2^bits-1` where bits is the number of bits in the unsigned integer -- for example, an 8-bit unsigned integer has a range of 0 through ${2^{8}}$-1 = 255.
Signed integers are generally stored in twos-complement format, where the highest bit is used as a sign bit. If that bit is set, the value represented is `-(!value)-1` where ! is the NOT operation (each bit gets flipped from 0→1 and 1→0)

- Fixed-point
  - A fixed-point value is encoded the same as an integer, except that some of the bits are fractional -- they're considered to be to the right of the "binary point" (binary version of "decimal point" - or more generically, the _radix point_). For example, binary 000001.00 is decimal 1.0, and 000001.11 is decimal 1.75.
  - An alternative to fixed-point fractional values is integer values in a smaller unit of measurement. For example, some accounting software may use integer values representing cents. For input and display purposes, dollar and cent values are converted to/from cent values. Similarly, a program that stores measurements could use milimetres instead of fractional meters.

- Floating-point
  - The most commonly-used floating point formats are defined in the [IEEE 754](/E-ComputerArchitecture/ieee-754.md) standard.
  - IEEE754 floating point numbers have three parts: a sign bit (0 for positive, 1 for negative), a _mantissa_ or _significand_, and an _exponent_. The significand has an implied 1 and radix point preceeding the stored value. The exponent is stored as an unsigned integer to which a _bias_ value has been added; the bias value is ${2^{(number of exponent bits - 1)} - 1}$. The floating point value is interpreted in normal cases as `sign mantissa * 2^(exponent - bias)`. Exponent values which are all-zeros or all-ones encode four categories of special cases: zero, infinity, Not a Number (NaN), and subnormal numbers (numbers which are close to zero, where the significand does not have an implied 1 to the left of the radix point); in these special cases, the sign bit and significand values may have special meanings.
  - There are some new floating-point formats appearing, such as _Brain Float 16_, a 16-bit format with the same dynamic range as 32-bit IEEE 754 floating point but with less accuracy, intended for use in machine learning applications.

- Characters
  - Characters are encoded as integers, where each integer corresponds to one _code point_ in a character table (e.g., code 65 in ASCII corresponds to the character "A").
  - Historically, many different coding schemes have been used, but the two most common ones were the American Standard Code for Information Interchange (ASCII), and Extended Binary Coded Decimal Interchange Code (EBCDIC - primarily used on IBM midrange and mainframe systems).
  - ASCII characters occupied seven bits (code points 0-127), and contains only characters used in North American English. ASCII characters are usually encoded in bytes, so many vendors of ASCII-based systems used the remaining codes 128-255 for special characters such as graphics, line symbols (horizontal, vertical, connector, and corner line symbols for drawing tables), and accented characters; these were called "extended ASCII".
  - Several ISO standards exist in an attempt to standardize the "extended ascii" characters, such as ISO8859, which was intended to enable the encoding of European languages by adding currency symbols and accented characters. However, the original version of ISO8859 (called ISO8859-1) does not include all accented characters and was created before the Euro symbol was standardized, so there are multiple versions of ISO8859, ranging from ISO8859-1 through ISO8859-15.
  - The Unicode and ISO10646 initiatives were initiated to create a single character code set that would encode all symbols used in human writing, both for current and obsolete languages. These initiatives were merged, and the Unicode and ISO10646 standards define a common character set with ${2^{32}}$ potential code points. However, Unicode also describes transformation formats for data interchange, rendering and composition/decomposition recommendations, and font symbol recommendations.
  - The first 127 code points in Unicode correspond to ASCII code points, and the first 255 code points correspond to ISO8869-1 code points. The first 65536 code points form the Basic Multilingual Pane (BMP), which contains most of the characters required to write in all contemporary languages. Therefore, for many applications, it is inefficient to store Unicode as full 32-bit values. To solve this issue, several Unicode Transformation Formats (also known -- technically incorrectly -- as Unicode Transfer Formats) have been defined, including UTF-8, UTF-16, and UTF-32 (32-bit). UTF-8 represents ASCII and some ISO-8859 characters as a single byte, the remainder of the BMP as 2-3 bytes per character, and the remaining characters using 3-4 bytes per character. UTF-16 is similar, encoding much of the BMP in a single 16-bit value, and most other characters as two 16-bit values.
 
- Sound
  - Sound waves are air pressure vibrations.
  - Sound is most often represented in raw digital form as a series of time-based measurements of air pressure, called Pulse Coded Modulation (PCM).
  - PCM takes a lot of storage, so sound is often compressed in either a lossless (perfectly recoverable) or lossy format (higher compression, but the decompressed data doesn't perfectly match the original data). To permit high compression ratios with minimal impact on quality, psychoacoustic compression is used - sound variations that most people can't perceive are removed.
 
- Graphics
  - The human eye perceives luminance (brightness) as well as hue (colour). Our main hue receptors ("cones") are generally sensitive to three wavelengths: red, green, and blue (RGB). We can stimulate the eye to perceive most colours by presenting a combination of light at these three wavelengths utilizing [metamerism](https://en.wikipedia.org/wiki/Metamerism_(color)).
  - Digital displays emit RGB colours, which are mixed together and perceived by the viewer. This is called _additive_ colour.
  - For printing, cyan (C)/yellow (Y)/magenta (M) pigmented inks are used, plus black (K) to reduce the amount of colour ink required to represent dark tones; this is known as CYMK colour. These pigments absorb light at specific frequencies, subtracting energy from white or near-white sunlight or artificial light. This is called _subtractive_ colour.
  - Images are broken into picture elements (_pixels_) and each pixel is usually represented by a group of values for RGB or CYMK channels, where each channel is represented by an integer or floating-point value. For example, using an 8-bit-per-channel integer scheme (also known as 24-bit colour), the brightest blue could be represented as R=0,G=0,B=255; the brightest yellow would be R=255,G=255,B=0; black would be R=0,G=0,B=0; and white would be R=255,G=255,B=255. With this 8-bit-per-channel (24 bit total) scheme, the number of unique colours available is 256^3 ~= 16 million.
  - As with sound, the raw storage of sampled data requires a lot of storage space, so various lossy and lossless compression schemes are used. Highest compression is achieved with psychovisual compression (e.g., JPEG).
  - Moving pictures (video, animations) are stored as sequential images, often compressed by encoding only the differences between frames to save storage space. Motion compensation can further compress the data stream by describing how portions of the previous frame should be moved and positioned in the current frame.
 
- Compression techniques
  - Huffman encoding / Adaptive arithmetic encoding
    - Instead of fixed-length numbers, variable-length numbers are used, with the most common values encoded in the smallest number of bits. This is an effective strategy if the distribution of values in the data set is uneven.
  - Repeated sequence encoding (1D, 2D, 3D)
    - Run length encoding is an encoding scheme that records the number of repeated values. For example, fax messages are encoded as a series of numbers representing the number of white pixels, then the number of black pixels, then white pixels, then black pixels, alternating to the end of each line. These numbers are then represented with adaptive arithmetic encoding.
    - Text data can be compressed by building a dictionary of common sequences, which may represent words or complete phrases, where each entry in the dictionary is numbered. The compressed data contains the dictionary plus a sequence of numbers which represent the occurrence of the sequences in the original text. On standard text, this typically enables 10:1 compression.
  - Decomposition
    - Compound audio waveforms can be decomposed into individual signals, which can then be modelled as repeated sequences. For example, a waveform consisting of two notes being played at different frequencies can be decomposed into those separate notes; since each note consists of a number of repetitions of a particular wave pattern, they can individually be represented in a more compact format by describing the frequency, waveform shape, and amplitude characteristics.
  - Palletization
    - Images often contain repeated colours, and rarely use all of the available colours in the original encoding scheme. For example, a 1920x1080 "full HD" image contains about 2 million pixels, so if every pixel was a different colour, there would be a maximum of 2 million colours. But it's likely that many of the pixels in the image are the same colour, so there might only be (perhaps) 4000 colours in the image. If each pixel is encoded as a 24-bit value, there are potentially 16 million colours available, and there is no possibility that they are all used. Instead, a palette can be provided which specifies each of the 4000 colours used in the picture, and then each pixel can be encoded as a 12-bit number which selects one of the colours from the palette. The total storage requirement for the original 24-bit scheme is 1920\*1080\*3 bytes per pixel = 5.9 MB. Using a 12-bit pallette, the storage requirement is 3 \* 4096 bytes for the palette plus 1920\*1080\*1.5 bytes for the image, for a total of 3 MB -- a reduction of almost 50%
  - Psychoacoustic and psychovisual compression
    - Much of the data in sound and images cannot be perceived by humans. Psychoacoustic and psychovisual compression remove artifacts which are least likely to be perceived. As a simple example, if two pixels on opposite sides of a large image are almost but not exactly the same, most people won't be able to tell the difference, so these can be encoded as the same colour if that saves space (for example, by reducing the size of the colour palette).
